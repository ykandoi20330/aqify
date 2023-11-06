import React from 'react'
import message from "./ProfileDashbaord/chatteardropdots1.svg"
import lightMessage from "./ProfileDashbaord/chatteardropdots1.svg"


const MessageDash = () => {
    return (
        <>
            <div className="sideContent">

                <div className="message-card">
                    <div>
                        <h1 style={{ fontWeight: '700', width: '33%', borderBottom: "4px solid #3247ff", borderRadius: '5px', paddingBottom:'0.5rem' }}> <img src={message} alt="" /> Messages</h1>
                    </div>

                <div className='d-flex justify-content-center align-items-center flex-column' style={{height:'70vh', color:'#c0c0c0'}}>
                    <img width={50} src={lightMessage} alt="" />
                    <span style={{fontSize:'25px'}}>No conversations yet</span>
                </div>
                </div>
            </div>
        </>
    )
}

export default MessageDash