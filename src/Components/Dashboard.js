import React from 'react'
import message from "./ProfileDashbaord/chatteardropdots1.svg"
import lightMessage from "./ProfileDashbaord/chatteardropdots1.svg"
import { Link } from 'react-router-dom'
import profileIcon from "./ProfileDashbaord/ellipse-60@2x.png"
import threeDots from "./ProfileDashbaord/dotsthreeoutlinevertical.svg"
import Arrow from "./ProfileDashbaord/ArrowUp.svg"

const Dashboard = () => {
    return (
        <>
            <div className="sideContent">
    
                <div className='d-flex justify-content-between' style={{marginTop:'6vh'}}>
                    <div>
                        <span style={{ color: '#636363', fontWeight: '500' }}>Welcome back,</span>
                        <h1 style={{ fontWeight: '700', paddingBottom: '0.5rem', color: '#3247ff' }}>Smruti Ranjan Nayak</h1>
                    </div>
                    <div>
                        <a href="#" style={{ padding: '0.5rem 1.3rem' }} className='btn btn-primary rounded-pill'>Upgrade<img src={Arrow} alt="" /></a>
                    </div>
                </div>
                <br/>

                <div className="message-card">
                    <div>
                        <h2 style={{ fontWeight: '700', width: '28%', borderBottom: "4px solid #3247ff", borderRadius: '5px', paddingBottom: '0.5rem' }}> <img src={message} alt="" /> Messages</h2>
                    </div>

                    <div className='d-flex justify-content-center align-items-center flex-column' style={{ height: '70vh', color: '#c0c0c0' }}>
                        <img width={50} src={lightMessage} alt="" />
                        <span style={{ fontSize: '25px' }}>No conversations yet</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard