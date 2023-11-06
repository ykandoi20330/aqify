import React, { useState } from 'react'
import message from "./ProfileDashbaord/chatteardropdots1.svg"
import { Link } from 'react-router-dom'
import profileIcon from "./ProfileDashbaord/ellipse-60@2x.png"
import threeDots from "./ProfileDashbaord/dotsthreeoutlinevertical.svg"

// card logo images
import cardLogo2 from "./Market/Frame 34 (1).png"
import cardProfile from "./Market/Rectangle 25.png"

//dash
import slideImg from "./MarketDash/Doctor.jpg"
import back from "./MarketDash/VectorBackArrow.svg"
import chart from "./MarketDash/Vertical.png"

//side card
import cart from "./MarketDash/VectorCart.svg"
import blueMsg from "./MarketDash/VectorBlueMsg.svg"
import offer from "./MarketDash/VectorOffer.svg"
import smallMap from "./MarketDash/VectorSmap.svg"
import Right from "./MarketDash/VectorRight.svg"
import Left from "./MarketDash/VectorLeft.svg"

import MarketplaceDash2 from './MarketplaceDash2'

const MarketDashDetail = () => {

    const [show, setShow] = useState(1)

    return (
        <>
            {show === 1 && <>
                <section>
                    <div className="sideContent">
                        <div className="d-flex justify-content-end">
                            <div><Link to="/"><img src={message} alt="" /></Link></div>
                            <div><Link to="/"><img style={{ width: '2.8vw' }} src={profileIcon} alt="" /></Link></div>
                            <div><Link to="/"><img src={threeDots} alt="" /></Link></div>
                        </div>

                        <div>
                            <Link onClick={show => setShow(2)}><img src={back} alt="" /></Link>
                            <span className='mx-3' style={{ color: '#636363' }}>Go back Marketplace</span>
                        </div>
                    </div>
                </section>

                <section>


                    <div className="card d-flex flex-row justify-content-between" style={{ margin: "1rem 1rem", padding: "2rem", height: '100vh', overflow: 'hidden', width: "100%" }}>

                        <div style={{ width: '55%', overflowY: 'scroll' }}>
                            <div className='d-flex align-items-center'>
                                <div className='secondPart'>
                                    <img width={200} src={cardProfile} alt="" />
                                </div>
                                <div className="firstPart" style={{ marginLeft: "2rem" }}>
                                    <h3 style={{ fontSize: '20px', fontWeight: '700' }}>UI Medical Website</h3>
                                    <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '9px' }}>Nesxt Js</button>
                                    <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '9px' }}>Firebase</button>
                                    <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '9px' }}>Medical</button>
                                    <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '9px' }}>SaaS</button>
                                </div>
                            </div>
                            <div className='d-flex justify-content-between' style={{ margin: '1rem 0 0rem 0' }}>
                                <h3 className='card-h3'>Metrics</h3>
                            </div>

                            <div className='my-4'>
                                <span className='col-6' style={{ color: '#636363', fontSize: '16px' }}>
                                    A design inspiration platform for SaaS apps that helps designers find inspiration for their next project by showcasing over 1,000 pages from over 100 SaaS apps, organized by category and page type. Designers can also
                                    filter designs by color and fonts, and bookmark their favorites for later.<br /><br />
                                    Project can be grown by doing proper content marketing through blogs and social media, further paid ads can also be utilized to get more customers for the app.
                                </span>
                            </div>

                            <div className="imgSlider d-flex justify-content-center align-items-center" style={{position:'relative'}}>
                                <img style={{ borderRadius: '10px', width: '100%' }} src={slideImg} alt="" />
                                <div className='d-flex justify-content-between' style={{position:'absolute',width:'100%'}}>
                                    <Link style={{ background: '#3247ff', borderRadius: '50px', padding: '0.3rem 0.8rem' }}><img src={Left} alt="" /></Link>
                                    <Link style={{ background: '#3247ff', borderRadius: '50px', padding: '0.3rem 0.8rem' }}><img src={Right} alt="" /></Link>
                                </div>
                            </div>


                            <div className='d-flex justify-content-between flex-wrap' style={{ width: '100%' }}>
                                <div style={{ margin: '1rem 1rem 0 0', background: '#EEF0FE', borderRadius: '10px', padding: '1rem' }}>
                                    <span style={{ color: '#636363', fontWeight: '500' }}>Feature Name</span>
                                    <div className='d-flex justify-content-start align-items-center'>
                                        <img width={35} src={cardLogo2} alt="" />
                                        <span className='card-span' style={{ fontSize: '1.4rem' }}>Feature Value</span>
                                    </div>
                                </div>
                                <div style={{ margin: '1rem 1rem 0 0', background: '#EEF0FE', borderRadius: '10px', padding: '1rem' }}>
                                    <span style={{ color: '#636363', fontWeight: '500' }}>Feature Name</span>
                                    <div className='d-flex justify-content-start align-items-center'>
                                        <img width={35} src={cardLogo2} alt="" />
                                        <span className='card-span' style={{ fontSize: '1.4rem' }}>Feature Value</span>
                                    </div>
                                </div>
                                <div style={{ margin: '1rem 1rem 0 0', background: '#EEF0FE', borderRadius: '10px', padding: '1rem' }}>
                                    <span style={{ color: '#636363', fontWeight: '500' }}>Feature Name</span>
                                    <div className='d-flex justify-content-start align-items-center'>
                                        <img width={35} src={cardLogo2} alt="" />
                                        <span className='card-span' style={{ fontSize: '1.4rem' }}>Feature Value</span>
                                    </div>
                                </div>
                                <div style={{ margin: '1rem 1rem 0 0', background: '#EEF0FE', borderRadius: '10px', padding: '1rem' }}>
                                    <span style={{ color: '#636363', fontWeight: '500' }}>Feature Name</span>
                                    <div className='d-flex justify-content-start align-items-center'>
                                        <img width={35} src={cardLogo2} alt="" />
                                        <span className='card-span' style={{ fontSize: '1.4rem' }}>Feature Value</span>
                                    </div>
                                </div>
                                <div style={{ margin: '1rem 1rem 0 0', background: '#EEF0FE', borderRadius: '10px', padding: '1rem' }}>
                                    <span style={{ color: '#636363', fontWeight: '500' }}>Feature Name</span>
                                    <div className='d-flex justify-content-start align-items-center'>
                                        <img width={35} src={cardLogo2} alt="" />
                                        <span className='card-span' style={{ fontSize: '1.4rem' }}>Feature Value</span>
                                    </div>
                                </div>
                                <div style={{ margin: '1rem 1rem 0 0', background: '#EEF0FE', borderRadius: '10px', padding: '1rem' }}>
                                    <span style={{ color: '#636363', fontWeight: '500' }}>Feature Name</span>
                                    <div className='d-flex justify-content-start align-items-center'>
                                        <img width={35} src={cardLogo2} alt="" />
                                        <span className='card-span' style={{ fontSize: '1.4rem' }}>Feature Value</span>
                                    </div>
                                </div>
                            </div>

                            <div className="chart my-3">
                                <img style={{ width: '100%' }} src={chart} alt="" />
                            </div>

                            <div className="description">
                                <div className='d-flex justify-content-between' style={{ margin: '1rem 0 0rem 0' }}>
                                    <h3 className='card-h3'>Metrics</h3>
                                </div>

                                <div className='d-flex flex-wrap justify-content-between'>
                                    <div style={{ margin: '1rem 1rem 0 0' }}>
                                        <span style={{ color: '#636363' }}>Details Name</span>
                                        <h5>Details value</h5>
                                    </div>
                                    <div style={{ margin: '1rem 1rem 0 0' }}>
                                        <span style={{ color: '#636363' }}>Details Name</span>
                                        <h5>Details value</h5>
                                    </div>
                                    <div style={{ margin: '1rem 1rem 0 0' }}>
                                        <span style={{ color: '#636363' }}>Details Name</span>
                                        <h5>Details value</h5>
                                    </div>
                                    <div style={{ margin: '1rem 1rem 0 0' }}>
                                        <span style={{ color: '#636363' }}>Details Name</span>
                                        <h5>Details value</h5>
                                    </div>
                                    <div style={{ margin: '1rem 3rem 0 0' }}>
                                        <span style={{ color: '#636363' }}>Details Name</span>
                                        <h5>Details value</h5>
                                    </div>
                                    <div style={{ margin: '1rem 1rem 0 0' }}>
                                        <span style={{ color: '#636363' }}>Details Name</span>
                                        <h5>Details value</h5>
                                    </div>
                                    <div style={{ margin: '1rem 1rem 0 0' }}>
                                        <span style={{ color: '#636363' }}>Details Name</span>
                                        <h5>Details value</h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div style={{ width: '40%', position: "sticky" }}>
                            <div className="sideCard d-flex flex-column justify-content-between" style={{ background: '#EEF0FE', borderRadius: '10px', padding: '1rem', height: '90vh' }}>
                                <div>
                                    <div className='d-flex justify-content-between' style={{ margin: '1rem 0 0rem 0' }}>
                                        <h5 className='card-h3'>Asking Price</h5>
                                    </div>
                                    <div className='my-3'>
                                        <h1>$3000</h1>
                                    </div>

                                    <div className='my-3' style={{ border: '2px solid #3247ff', color: '#3247ff', borderRadius: "15px", padding: '1rem 2rem', textAlign: 'center' }}>
                                        <img src={blueMsg} alt="" />
                                        <span className='mx-2'>Message Seller</span>
                                    </div>
                                    <div className='my-3' style={{ border: '2px solid #3247ff', color: '#3247ff', borderRadius: "15px", padding: '1rem 2rem', textAlign: 'center' }}>
                                    <i class="fa-solid fa-phone-volume"  style={{color: "#005eff"}}></i>
                                        <span className='mx-2'>Audio Call</span>
                                    </div>
                                    <div className='my-3' style={{ border: '2px solid #3247ff', color: '#3247ff', borderRadius: "15px", padding: '1rem 2rem', textAlign: 'center' }}>
                                        <img src={offer} alt="" />
                                        <span className='mx-2' >Make Offer</span>
                                    </div>
                                    <div className='my-3'>
                                        <Link style={{ width: '100%' }} className='btn btn-primary' to="/"><img src={cart} alt="" className='mx-2' /> Buy Now</Link>
                                    </div>
                                </div>

                                <div>
                                    <div className='d-flex justify-content-between my-3' style={{ margin: '1rem 0 0rem 0' }}>
                                        <h5 className='card-h3'>About the Seller</h5>
                                    </div>
                                    <div className='d-flex align-items-center'>
                                        <img src={profileIcon} alt="" />
                                        <div className='mx-2'>
                                            <h4>Akash ku. Padhi</h4>
                                            <span><img src={smallMap} alt="" />India</span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>

                </section>
            </>}

            {show === 2 && <MarketplaceDash2 />}
        </>
    )
}

export default MarketDashDetail