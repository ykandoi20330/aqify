import React from 'react'
import message from "./ProfileDashbaord/chatteardropdots1.svg"
import lightMessage from "./ProfileDashbaord/chatteardropdots1.svg"
import { Link } from 'react-router-dom'

const MessageDash = () => {
    return (
        <>
            <div className="sideContent">

                <div className="message-card">
                    <div>
                        <h1 style={{ fontWeight: '700', width: '33%', borderBottom: "4px solid #3247ff", borderRadius: '5px', paddingBottom: '0.5rem' }}> <img src={message} alt="" /> Messages</h1>
                    </div>

                    <div className='d-flex justify-content-center align-items-center flex-column' style={{ height: '70vh', color: '#c0c0c0' }}>
                        <img width={50} src={lightMessage} alt="" />
                        <span style={{ fontSize: '25px' }}>No conversations yet</span>
                    </div>

                    <div>
                        <div className='' style={{ color: '#636363', width: "100%" }}>
                            <div class="d-flex mb-3 my-3 ">
                            <div className='d-flex justify-content-center align-items-center'>
                                <i style={{color:'#3247FF', fontSize:'1.5rem'}} class="fa-solid fa-camera mx-2"></i>
                                <i style={{color:'#3247FF', fontSize:'1.5rem'}}  class="fa-solid fa-microphone mx-2"></i>
                                <i style={{color:'#3247FF', fontSize:'1.5rem'}}  class="fa-solid fa-face-smile mx-2"></i>
                            </div>
                                <input style={{ width: '100', background: '#fff', borderRadius: '50px' }} type="text" id="floatingInputValue" class="Search-from form-control mx-2" placeholder="Write message..." />
                                <Link className='messageSendBtn text-center mx-2 d-flex  justify-content-center align-items-center'
                                    style={{ color: '#3247FF', right: '5%', position: 'relative', textDecoration: 'none' }}>
                                    <><i style={{ fontSize: '1.5rem' }} class="messageSend fa-regular fa-paper-plane py-3"></i></>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MessageDash