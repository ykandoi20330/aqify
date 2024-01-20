import {
    LocalVideoTrack,
    RemoteUser,
    useJoin,
    useLocalCameraTrack,
    useLocalMicrophoneTrack,
    usePublish,
    useRTCClient,
    useRemoteUsers,
    useClientEvent,
    LocalUser
} from "agora-rtc-react";

import React, { createContext, useContext, useState, useEffect } from "react";
import { IMicrophoneAudioTrack, ICameraVideoTrack } from "agora-rtc-sdk-ng";
import { useNavigate } from "react-router-dom";

// Create the Agora context
const AgoraContext = createContext(null);

// AgoraProvider component to provide the Agora context to its children
export const AgoraProvider = ({ children, localCameraTrack, localMicrophoneTrack }) => (
    <AgoraContext.Provider value={{ localCameraTrack, localMicrophoneTrack, children }}>
        {children}
    </AgoraContext.Provider>
);

// Custom hook to access the Agora context
export const useAgoraContext = () => {
    const context = useContext(AgoraContext);
    if (!context) throw new Error("useAgoraContext must be used within an AgoraProvider");
    return context;
};

// AgoraManager component responsible for handling Agora-related logic and rendering UI
export const AgoraManager = ({ config, children }) => {


    // Retrieve local camera and microphone tracks and remote users
    const agoraEngine = useRTCClient();
    const { isLoadingCam, localCameraTrack } = useLocalCameraTrack();
    const { isLoadingMic, localMicrophoneTrack } = useLocalMicrophoneTrack();
    const navigate = useNavigate();
    const remoteUsers = useRemoteUsers();
    console.log(remoteUsers)

    const [cameraOn, setCameraOn] = useState(true);
    const [micOn, setMicOn] = useState(true);
    const [playVideo, setPlayVideo] = useState(true);

    // Join the Agora channel with the specified configuration
    usePublish([localCameraTrack, localMicrophoneTrack]);

    useJoin({
        appid: config.appId,
        channel: config.channelName,
        token: null,
        uid: null,
    });

    console.log(localCameraTrack)

    useClientEvent(agoraEngine, "user-joined", (user) => {
        console.log("The user", user.uid, " has joined the channel");
    });

    useClientEvent(agoraEngine, "user-left", (user) => {
        user.videoTrack?.stop();
        user.audioTrack?.stop();
        console.log("The user", user.uid, " has left the channel");
    });

    useClientEvent(agoraEngine, "user-published", (user, mediaType) => {
        console.log("The user", user.uid, " has published media in the channel");
    });


    useEffect(() => {
        return () => {
            localCameraTrack?.close();
            localMicrophoneTrack?.close();
        };
    }, []);



    // Check if devices are still loading
    const deviceLoading = isLoadingMic || isLoadingCam;
    if (deviceLoading) return <div>Loading devices...</div>;

    const toggleAudio = () => {
        localMicrophoneTrack?.setEnabled(!micOn);
        setMicOn(!micOn);
    };

    const toggleVideo = () => {
        localCameraTrack?.setEnabled(!cameraOn);
        setCameraOn(!cameraOn);
    };


    // Render the AgoraProvider and associated UI components
    return (
        <div style={{
            height:'100vh'
        }}>
        <AgoraProvider localCameraTrack={localCameraTrack} localMicrophoneTrack={localMicrophoneTrack}>
            {children}
            <div className="videoCall" id="videos" style={{
                width: "100vw",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
                gap: 20,
                background: '#000',
            }}>
                {/* Render remote users' video and audio tracks */}
                {remoteUsers.map((remoteUser) => (
                    <div className="vid" style={{
                        height: '65%',
                        width: '48%',
                        borderRadius: 20
                    }} key={remoteUser.uid}>
                        {
                            remoteUser.hasVideo
                                ? <RemoteUser user={remoteUser} playVideo={true} playAudio={true} style={{
                                    height: '100%',
                                    width: '100%',
                                    borderRadius: 20,
                                }} />
                                : <div style={{
                                    height: '100%',
                                    width: '100%',
                                    backgroundColor: "#222222",
                                    borderRadius: 20,
                                }}></div>
                        }
                    </div>
                ))}
                {/* Render the local video track */}
                <div className="vid" style={{
                    height: '65%',
                    width: '48%',
                    borderRadius: 20
                }}>
                    {
                        cameraOn ? <LocalUser
                            audioTrack={localMicrophoneTrack}
                            cameraOn={cameraOn}
                            micOn={micOn}
                            playAudio={false}
                            playVideo={true}
                            videoTrack={localCameraTrack}
                            style={{
                                height: '100%',
                                    width: '100%',
                                borderRadius: 20,
                            }}
                        /> : <div style={{
                            height: '100%',
                                    width: '100%',
                            backgroundColor: "#222222",
                            borderRadius: 20,
                        }}></div>
                    }
                </div>
            </div>
            <div style={{
                position: "relative",
                bottom: '7rem',
                // right: 0,
                display: "flex",
                flexDirection: "row",
                justifyContent: 'center',
                gap: 20,
                padding: 20,
                zIndex:'10',
            }}>
                <button style={{ background: '#222222', borderRadius: '200px', padding: '1rem', border: 'none' }} onClick={() => {
                    toggleVideo()
                }}>
                    {/* {!cameraOn ? "Start Video" : "Stop Video"} */}
                    {!cameraOn ? <i className="fa-solid fa-video px-1"  style={{ color: '#3247ff' }}></i> : <i className="fa-solid fa-video-slash px-1" style={{ color: '#fff' }}></i>}
                </button>

                <button style={{ background: '#222222', borderRadius: '200px', padding: '1rem', border: 'none' }} onClick={() => {
                    toggleAudio()
                }}>
                    {
                        // !micOn ? "Start Audio" : "Stop Audio"
                        !micOn ? <i className="fa-solid fa-microphone px-2"  style={{ color: '#3247ff'}}></i> : <i className="fa-solid fa-microphone-slash px-1" style={{ color: '#fff' }}></i>
                    }
                </button>

                <button style={{ background: 'red', borderRadius: '200px', padding: '1rem', border: 'none' }} onClick={() => {
                    localCameraTrack?.close();
                    localMicrophoneTrack?.close();
                    navigate("/MainDashboard/Dashbaord");
                }}>
                    {/* Leave */}
                    <i className="fa-solid fa-phone px-1" style={{ color: '#fff' }}></i>
                </button>
            </div>
        </AgoraProvider>
        </div>
    );
};

// Export the AgoraManager component as the default export
export default AgoraManager;
