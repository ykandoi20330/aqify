import React, { useState } from 'react'
import message from "./ProfileDashbaord/chatteardropdots1.svg"
import { Link } from 'react-router-dom'
import profileIcon from "./ProfileDashbaord/ellipse-60@2x.png"
import threeDots from "./ProfileDashbaord/dotsthreeoutlinevertical.svg"
import arrow from "./Aqify project/Vector (1).png"

import anylatics from "./MyProject/VectorAnylatics.svg"
import add from "./MyProject/VectorProject.svg"
import MyAnylatics from './MyAnylatics'
import BlackLogo from "./Aqify project/FrameblackLogo.svg"

const MyProject = () => {

    const [show, setShow] = useState(1)

    return (
        <>
            {show === 1 &&
                <>
                    <div className="sideContent">

                        <div className='d-flex justify-content-between align-items-center' style={{ marginTop: '5vh' }}>
                            <div>
                                <h1 style={{ fontWeight: '700', paddingBottom: '0.5rem' }}>My Projects</h1>
                                <span style={{ color: '#636363' }}>0 active purchases, Buy your first Project.</span>
                            </div>
                            <div>
                                <Link className='btn btn-outline-primary rounded-pill' style={{ padding: '0.6rem 1.2rem' }} onClick={show => setShow(2)}  > <img style={{ width: '10%', marginRight: '10px' }} src={anylatics} alt="" />Analytics</Link>
                                <Link className='btn btn-primary rounded-pill mx-2' style={{ padding: '0.6rem 1.2rem' }} to="/sellingDash" > <img style={{ width: '10%', marginRight: '10px' }} src={add} alt="" />New Project</Link>
                            </div>
                        </div>


                        <div className="buying-card">
                            <div className='d-flex flex-column justify-content-between' style={{ margin: '1rem 0 0rem 0' }}>
                                <ul className='d-flex justify-content-between' style={{ listStyle: 'none', width: '92%', marginBottom: '1rem' }}>
                                    <li className='card-h3' style={{ padding: '0 0 0.5rem 0' }}><Link style={{ textDecoration: 'none' }}>Project Name</Link></li>
                                    <li className='card-h3' style={{ padding: '0 0 0.5rem 0' }}><Link style={{ textDecoration: 'none' }}>Active Status</Link></li>
                                    <li className='card-h3' style={{ padding: '0 0 0.5rem 0' }}><Link style={{ textDecoration: 'none' }}>Invoices</Link></li>
                                    <li className='card-h3' style={{ position: 'relative', left: '-66px', padding: '0 0 0.5rem 0' }}><Link style={{ textDecoration: 'none' }}>Prices</Link></li>
                                </ul>

                                <div>
                                    <div className='d-flex justify-content-between align-items-center my-2' style={{ listStyle: 'none' }}>
                                        <span>UI Medical website</span>
                                        <span><Link style={{ padding: '0.3rem 1rem' }} className="btn btn-outline-primary rounded-pill" href="">Reviewing</Link></span>
                                        <span>0/0</span>
                                        <span>0</span>
                                        <span><Link><img src={threeDots} alt="" /></Link></span>
                                    </div>
                                    <div className='d-flex justify-content-between align-items-center my-2' style={{ listStyle: 'none' }}>
                                        <span>UI Medical website</span>
                                        <span><Link style={{ padding: '0.3rem 1rem' }} className="btn btn-outline-primary rounded-pill" href="">Reviewing</Link></span>
                                        <span>0/0</span>
                                        <span>0</span>
                                        <span><Link><img src={threeDots} alt="" /></Link></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>}

            {show === 2 && <MyAnylatics />}
            {/* {show === 3 && <SellingDash/> } */}
        </>
    )
}

export default MyProject