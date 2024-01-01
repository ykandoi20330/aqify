import AgoraRTC, { AgoraRTCProvider, useRTCClient } from "agora-rtc-react";
import { AgoraManager } from "./AgoraManager";
import { useParams } from "react-router-dom";

export function Agora() {
    const client = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });
    const params = useParams();
    const { id } = params;

    return (
        <div>
            <h1>Get Started with Video Calling</h1>

            <AgoraRTCProvider client={client}>
                <AgoraManager config={{
                    channelName: id,
                    appId: "dddb85ef72bb477da91d180b9f804357",
                }} >
                </AgoraManager>
            </AgoraRTCProvider>

        </div>
    );
}

export default Agora;
