import AgoraRTC, { AgoraRTCProvider, useRTCClient } from "agora-rtc-react";
import { AgoraManager } from "./AgoraManager";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Axios from "axios";
import ENV from "../config.js";
import Navbar from "./Navbar.js";

export function Agora() {
    const client = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });
    const params = useParams();
    const { id } = params;

    useEffect(() => {
        const token = localStorage.getItem("token");

        Axios.post(`${ENV.BACKEND_URL}/agora/create`, {
            channelName: id,
            otherId: id,
        }, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }).then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err);
        });
    }, []);


    return (
        <AgoraRTCProvider client={client}>
            <AgoraManager config={{
                channelName: id,
                appId: ENV.AGORA_APP_ID,
            }}>
            </AgoraManager>
        </AgoraRTCProvider>

    );
}

export default Agora;
