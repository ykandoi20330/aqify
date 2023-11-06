import React from 'react'
import message from "./ProfileDashbaord/chatteardropdots1.svg"
import lightMessage from "./ProfileDashbaord/chatteardropdots1.svg"
import { Link } from 'react-router-dom'
import profileIcon from "./ProfileDashbaord/ellipse-60@2x.png"
import threeDots from "./ProfileDashbaord/dotsthreeoutlinevertical.svg"

const MessageDash = () => {
    return (
        <>
            <div className="sideContent">
            <div className="d-flex justify-content-end">
                        <div><Link to="/"><img src={message} alt="" /></Link></div>
                        <div><Link to="/"><img style={{ width: '2.8vw' }} src={profileIcon} alt="" /></Link></div>
                        <div><Link to="/"><img src={threeDots} alt="" /></Link></div>
                    </div>

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