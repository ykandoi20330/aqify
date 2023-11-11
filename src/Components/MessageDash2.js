import React from 'react'
import message from "./ProfileDashbaord/chatteardropdots1.svg"
import lightMessage from "./ProfileDashbaord/chatteardropdots1.svg"
import img2 from "./Message/Ellipse 59 (1).svg"
import img3 from "./Message/Ellipse 59 (2).svg"
import img4 from "./Message/Ellipse 59 (3).svg"
import img5 from "./Message/Ellipse 59 (4).svg"
import img1 from "./Message/Ellipse 59.svg"
import Red from "./Message/FrameRed.svg"
import logo from "./Selling/Frame 18.svg"
import { Link } from 'react-router-dom'

const MessageDash2 = () => {
    return (
        <>
            <div className="sideContent">

                <div>
                    <Link to="/"><img src={logo} alt="" /></Link>
                </div>

                <div className="message-card">
                    <div>
                        <h1 style={{ fontWeight: '700', width: '20%', borderBottom: "4px solid #3247ff", borderRadius: '5px', paddingBottom: '0.5rem' }}> <img src={message} alt="" /> Messages</h1>
                    </div>

                    <div>
                        <div className='d-flex justify-content-between my-5'>
                            <div className='d-flex'>
                                <img src={img1} alt="" />
                                <div className='mx-3'>
                                    <h2 className='msg-h2'>Akash Ku. Padhi</h2>
                                    <span style={{ color: '#c0c0c0' }}>ZyShip.com</span>
                                </div>
                            </div>
                            <div className='d-flex align-items-center'>
                                <span style={{ color: '#c0c0c0' }}>Hello, I am owner of ZyShip.com...</span>
                                <div className='mx-3'>
                                    <img src={Red} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className='d-flex justify-content-between my-5'>
                            <div className='d-flex'>
                                <img src={img2} alt="" />
                                <div className='mx-3'>
                                    <h2 className='msg-h2'>Akash Ku. Padhi</h2>
                                    <span style={{ color: '#c0c0c0' }}>ZyShip.com</span>
                                </div>
                            </div>
                            <div className='d-flex align-items-center'>
                                <span style={{ color: '#c0c0c0' }}>Hello, I am owner of ZyShip.com...</span>
                                <div className='mx-3'>
                                    <img src={Red} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className='d-flex justify-content-between my-5'>
                            <div className='d-flex'>
                                <img src={img3} alt="" />
                                <div className='mx-3'>
                                    <h2 className='msg-h2'>Akash Ku. Padhi</h2>
                                    <span style={{ color: '#c0c0c0' }}>ZyShip.com</span>
                                </div>
                            </div>
                            <div className='d-flex align-items-center'>
                                <span style={{ color: '#c0c0c0' }}>Hello, I am owner of ZyShip.com...</span>
                                <div className='mx-3'>
                                    <img src={Red} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className='d-flex justify-content-between my-5'>
                            <div className='d-flex'>
                                <img src={img4} alt="" />
                                <div className='mx-3'>
                                    <h2 className='msg-h2'>Akash Ku. Padhi</h2>
                                    <span style={{ color: '#c0c0c0' }}>ZyShip.com</span>
                                </div>
                            </div>
                            <div className='d-flex align-items-center'>
                                <span style={{ color: '#c0c0c0' }}>Hello, I am owner of ZyShip.com...</span>
                                <div className='mx-3'>
                                    <img src={Red} alt="" />
                                </div>
                            </div>
                        </div>

                        <div className='d-flex justify-content-between my-5'>
                            <div className='d-flex'>
                                <img src={img5} alt="" />
                                <div className='mx-3'>
                                    <h2 className='msg-h2'>Akash Ku. Padhi</h2>
                                    <span style={{ color: '#c0c0c0' }}>ZyShip.com</span>
                                </div>
                            </div>
                            <div className='d-flex align-items-center'>
                                <span style={{ color: '#c0c0c0' }}>Hello, I am owner of ZyShip.com...</span>
                                <div className='mx-3'>
                                    <img src={Red} alt="" />
                                </div>
                            </div>
                        </div>

                       

                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default MessageDash2