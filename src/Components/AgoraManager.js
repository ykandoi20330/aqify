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

    // Join the Agora channel with the specified configuration
    usePublish([localCameraTrack, localMicrophoneTrack]);

    useJoin({
        appid: config.appId,
        channel: config.channelName,
        token: null,
        uid: null,
    });

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
        localMicrophoneTrack?.setMuted(!localMicrophoneTrack?.muted);
    };

    const toggleVideo = () => {
        localCameraTrack?.setMuted(!localCameraTrack?.muted);
    };

    // Render the AgoraProvider and associated UI components
    return (
        <AgoraProvider localCameraTrack={localCameraTrack} localMicrophoneTrack={localMicrophoneTrack}>
            {children}
            <div id="videos" style={{
                width: "100vw",
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
                gap: 20,
                flexWrap: "wrap",
            }}>
                {/* Render the local video track */}
                <div style={{
                    height: 300,
                    width: 600,
                }}>
                    <LocalUser
                        audioTrack={localMicrophoneTrack}
                        cameraOn
                        micOn
                        playAudio
                        playVideo
                        videoTrack={localCameraTrack}
                    />



                    <button onClick={() => {
                        toggleVideo()
                    }}>
                        {localCameraTrack?.muted ? "Start Video" : "Stop Video"}
                    </button>

                    <button onClick={() => {
                        toggleAudio()
                    }}>
                        {
                            localMicrophoneTrack?.muted ? "Start Audio" : "Stop Audio"
                        }
                    </button>

                    <button onClick={() => {
                        localCameraTrack?.close();
                        localMicrophoneTrack?.close();
                        navigate("/MainDashboard");
                    }}>Leave</button>

                </div>
                {/* Render remote users' video and audio tracks */}
                {remoteUsers.map((remoteUser) => (
                    <div className="vid" style={{ height: 300, width: 600 }} key={remoteUser.uid}>
                        <RemoteUser user={remoteUser} playVideo={true} playAudio={true} />
                    </div>
                ))}
            </div>
        </AgoraProvider>
    );
};

// Export the AgoraManager component as the default export
export default AgoraManager;
