import React, { useEffect, useState, useRef } from 'react'
import message from "./ProfileDashbaord/chatteardropdots1.svg"
import lightMessage from "./ProfileDashbaord/chatteardropdots1.svg"
import { Link } from 'react-router-dom'
import Axios from 'axios'
import ENV from '../config.js'
import { jwtDecode } from "jwt-decode";

const MessageDash = () => {
    const [ws, setWs] = useState(null)
    const [allChats, setAllChats] = useState([]) // this is the list of all the chats that the user has brougt by the function get AllChats
    const [selectedUserId, setSelectedUserId] = useState(null) // this is the id of the user that the user is currently chatting with
    const [messages, setMessages] = useState([]) // this is the list of all the messages that the user has sent to the selected user
    const [newMessageText, setNewMessageText] = useState('') // this is the text that the user is currently typing in the input field
    const [id, setId] = useState(null) // this is the id of the user that is currently logged in

    const connectToWs = () => {
        const ws = new WebSocket('ws://localhost:5000');
        setWs(ws);
        ws.addEventListener('message', handleMessage);
        ws.addEventListener('close', () => {
            setTimeout(() => {
                console.log('Disconnected. Trying to reconnect.');
                connectToWs();
            }, 10000);
        });
    }

    useEffect(() => {
        connectToWs();
    }, [selectedUserId])

    const handleMessage = (ev) => {
        const messageData = JSON.parse(ev.data);
        console.log({ ev, messageData });
        if ('message' in messageData) {
            if (messageData.sender === selectedUserId) {
                setMessages(prev => ([...prev, { ...messageData }]));
            }
        }
        console.log('Running')
    }

    const getChat = async () => {
        const token = localStorage.getItem('token');
        if (!selectedUserId) return;
        try {
            const { data } = await Axios.get(`${ENV.BACKEND_URL}/chat/get-chat/${selectedUserId}`, {
                headers: {
                    'authorization': `Bearer ${token}`
                }
            });
            console.log(data)
            setMessages(data);
        }

        catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getChat();
    }, [selectedUserId])

    const sendMessage = (ev) => {
        if (ev) ev.preventDefault();
        ws.send(JSON.stringify({
            reciever: selectedUserId,
            messageString: newMessageText,
        }));
        setNewMessageText('');
        setMessages(prev => ([...prev, {
            message: newMessageText,
            sender: id,
            reciever: selectedUserId,
            _id: Date.now(),
        }]));
    }

    const divUnderMessages = useRef();

    useEffect(() => {
        const getAllChats = async () => {
            let token = null;
            const cookies = document.cookie.split(";");
            for (let cookie of cookies) {
                const [cookieName, cookieValue] = cookie.trim().split("=");
                if (cookieName === "token") {
                    token = cookieValue;
                }
            }

            if (token) {
                const userData = jwtDecode(token);
                setId(userData.id);

                Axios.get(`${ENV.BACKEND_URL}/chat/all`, {
                    headers: {
                        'authorization': `Bearer ${token}`
                    }
                }).then(({ data }) => {
                    console.log(data)
                    setAllChats(data)
                }).catch(err => {
                    console.log(err)
                })

            }
        }
        getAllChats()
    }, [])

    return (
        <>
            <div className="sideContent">

                <div className="message-card">
                    <div>
                        <h1 style={{ fontWeight: '700', width: '33%', borderBottom: "4px solid #3247ff", borderRadius: '5px', paddingBottom: '0.5rem' }}> <img src={message} alt="" /> Messages</h1>
                    </div>

                    {
                        allChats.length > 0 ? (
                            <>
                                <div className='d-flex justify-content-center align-items-center flex-row' style={{ height: '70vh', color: '#c0c0c0', width: '100%' }}>
                                    <div className='d-flex flex-column w-1/3' style={{ height: '70vh', width: '30%', borderRight: '1px solid #c0c0c0' }}>
                                        {
                                            allChats.map((chat, i) => {
                                                return (
                                                    <div key={i} className="d-flex flex-row align-items-center gap-2 p-2" style={{
                                                        cursor: 'pointer',
                                                    }} onClick={() => setSelectedUserId(chat._id)}>
                                                        <img src={chat.pic} alt="" style={{
                                                            width: '30px',
                                                            height: '30px',
                                                            borderRadius: '50%',
                                                            objectFit: 'cover'
                                                        }} />
                                                        <h3 style={{
                                                            fontSize: '1.3rem',
                                                        }}>{chat.userName}</h3>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                    <div className='d-flex justify-content-center align-items-center flex-column' style={{ height: '70vh', color: '#c0c0c0', width: '70%' }}>
                                        {
                                            selectedUserId ? <>
                                                <div className='d-flex justify-content-center flex-column' style={{ color: '#c0c0c0', width: '100%' }}>
                                                    {messages.map(message => (
                                                        <div key={message._id} >
                                                            <div className={(message.sender === id ? 'text-end' : 'text-start') + " text-left inline-block p-2 my-2 rounded-md text-sm " + (message.sender === id ? 'bg-blue-500 text-black' : 'bg-white text-gray-500')}>
                                                                {message.message}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                                <div className='' style={{ color: '#636363', width: "100%" }}>
                                                    <div class="d-flex mb-3 my-3 ">
                                                        <div className='d-flex justify-content-center align-items-center'>
                                                            <i style={{ color: '#3247FF', fontSize: '1.5rem' }} class="fa-solid fa-camera mx-2"></i>
                                                            <i style={{ color: '#3247FF', fontSize: '1.5rem' }} class="fa-solid fa-microphone mx-2"></i>
                                                            <i style={{ color: '#3247FF', fontSize: '1.5rem' }} class="fa-solid fa-face-smile mx-2"></i>
                                                        </div>
                                                        <input
                                                            style={{ width: '100', background: '#fff', borderRadius: '50px' }}
                                                            type="text"
                                                            id="floatingInputValue"
                                                            className="Search-from form-control mx-2"
                                                            placeholder="Write message..."
                                                            value={newMessageText}
                                                            onChange={(ev) => setNewMessageText(ev.target.value)}
                                                        />
                                                        <div
                                                            className='messageSendBtn text-center mx-2 d-flex  justify-content-center align-items-center'
                                                            style={{ color: '#3247FF', right: '5%', position: 'relative', textDecoration: 'none', cursor: 'pointer' }}
                                                            onClick={() => sendMessage()}
                                                        >
                                                            <><i style={{ fontSize: '1.5rem' }} class="messageSend fa-regular fa-paper-plane py-3"></i></>
                                                        </div>
                                                    </div>
                                                </div>
                                            </> :
                                                <div className='d-flex justify-content-center align-items-center flex-column' style={{ height: '70vh', color: '#c0c0c0', width: '100%' }}>
                                                    <img width={50} src={lightMessage} alt="" />
                                                    <span style={{ fontSize: '25px' }}>No conversation selected!</span>
                                                </div>
                                        }
                                    </div>

                                </div>
                            </>
                        ) :
                            <div className='d-flex justify-content-center align-items-center flex-column' style={{ height: '70vh', color: '#c0c0c0' }}>
                                <img width={50} src={lightMessage} alt="" />
                                <span style={{ fontSize: '25px' }}>No conversations yet</span>
                            </div>
                    }

                    <div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default MessageDash