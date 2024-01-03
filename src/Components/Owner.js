import React from 'react'
import backgroundImg from "./Owner/unsplash_5U_28ojjgms2.png"
import arrow from "./Aqify project/Vector (1).png"

//Logo images
import cardLogo1 from "./Owner/Frame 100.png"
import cardLogo2 from "./Owner/Frame 100 (1).png"
import cardLogo3 from "./Owner/Frame 100 (2).png"

//owner second section
import BackPhoto from "./Owner/Rectangle2.png"
import roundedImg from "./Owner/Frame 105.png"
import profileImg from "./Owner/Ellipse 8.png"


//third section owner
import cardIcon1 from "./Owner/Frame 100 (3).png"
import cardIcon2 from "./Owner/Frame 100 (4).png"
import cardIcon3 from "./Owner/Frame 100 (5).png"
import BackSidePhoto from "./Owner/Rectangle16.png"

import { Link } from 'react-router-dom'
import Navbar from "./Navbar"
import { TypeAnimation } from 'react-type-animation';
import Footer from './Footer'


const Owner = () => {
    return (
        <>
            <section>
                <Navbar />
            </section>

            {/** */}
            <section>
                <div className='Ownermain'>
                {/* style={{ backgroundImage: `url(${backgroundImg})`, width: '100%', backgroundRepeat: 'no-repeat' }} */}
                    <div className="owner-content">
                        <div>
                            <div className='my-5'>
                                <h1 className='main-h1 col-7'><span style={{ marginRight: '1rem' }}>Time To Save On Money And Start Listing For Free!</span><br />
                                    <TypeAnimation className='typeAnimation'
                                        sequence={[
                                            'Ecommerce', // Types 'One'
                                            1000, // Waits 1s
                                            'Saas', // Deletes 'One' and types 'Two'
                                            2000, // Waits 
                                            'Community',
                                            2000,
                                            'Marketplace',
                                            2000,
                                            'Crypto',
                                            2000,
                                            'Wordpress',
                                            2000,
                                            'Content',
                                            2000,
                                            'Services',
                                            2000,
                                        ]}
                                        wrapper="span"
                                        cursor={false}
                                        repeat={Infinity}
                                    />.
                                </h1>
                            </div>
                            <div className='my-4'>
                                <span className='main-span col-6 d-flex'>
                                    Tap onto “get offers” button to tap into endless acquiring proposals from legitimate buyers.
                                </span>
                            </div>
                            <div className=''>
                                <Link style={{ fontSize: '1.5rem' }} className='btn btn-primary' to="/singup">Get Offers! <img style={{ width: '10%' }} src={arrow} alt="" /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='owner-first-section'>
                <div>
                    <div className='d-flex flex-column align-items-center justify-content-center'>
                        <h1 className='fourth-h1' style={{width:'85%'}}>Our Platform Gives You The Ultimate Selling Experience For Cracking Money-Packed Deals!</h1>
                        <span className='text-center' style={{ color: '#636363', fontSize: '20px', margin: '1rem 0 3rem 0' }}>Become our privileged anonymous seller to get verified offers!</span>
                    </div>
                </div>
                <div className='Owner-card-div'>
                    <div className="owner-card">
                        <img width={80} src={cardLogo1} alt="" />
                        <h3 className='my-3'>Run an online business</h3>
                        <span style={{ color: '#636363' }}>Every Monday we publish new businesses for sale on our marketplace.</span>
                    </div>
                    <div className="owner-card">
                        <img width={80} src={cardLogo2} alt="" />
                        <h3 className='my-3'>Make $100K+ in revenue</h3>
                        <span style={{ color: '#636363' }}>Achieved product-market fit with $100,000+ in ARR or TTM revenue.</span>
                    </div>
                    <div className="owner-card">
                        <img width={80} src={cardLogo3} alt="" />
                        <h3 className='my-3'>Seek personal liquidity</h3>
                        <span style={{ color: '#636363' }}>A full exit or partial sale of the business on your terms to verified buyers.</span>
                    </div>
                </div>
            </section>

            <section className='owner-second-section'>
                <div className="Sell-detail">
                    <div>
                        <div className='d-flex flex-column align-items-center justify-content-center'>
                            <h1 className='fourth-h1' style={{ marginBottom: '3rem' }}>We Have A Long List Of Buyers For You, Take Your Time!</h1>
                        </div>
                    </div>
                    <div className='owner-second-background' style={{ backgroundImage: `url(${BackPhoto})`, width: '100%', backgroundRepeat: 'no-repeat', padding: '3rem 0', backgroundSize: 'cover' }}>
                        <div className='d-flex flex-row align-items-center'>
                            <img style={{ width: '17%', margin: '0 3rem' }} src={roundedImg} alt="" />
                            <div className='owner-write-detail'>
                                <span style={{ width: '70%', display: 'flex', fontSize: '20px' }}>"Calm Capital acquires and invests in good profitable businesses from independent founders looking for smoother waters.</span><br />
                                <span style={{ width: '70%', display: 'flex', fontSize: '20px' }}>"Calm Capital acquires and invests in good profitable businesses from independent founders looking for smoother waters.</span>
                            </div>
                        </div>
                        <div className='founder-content d-flex justify-content-end'>
                            <div className='owner-Co-founder d-flex flex-row align-items-center' style={{ position: 'relative', left: '230px' }}>
                                <div className='mx-3 text-end'>
                                    <span style={{ fontSize: '2rem', color: '#fff', fontWeight: '700' }}>David Horne</span><br />
                                    <span style={{ fontSize: '1.5rem', color: '#fff' }}>Co-founder, Managing Partner</span>
                                </div>
                                <img style={{ width: "20%" }} src={profileImg} alt="" />
                            </div>
                            <div className='owner-Co-founder1 d-flex flex-row align-items-center' style={{ position: 'relative', left: '110px' }}>
                                <div className='mx-3 text-end'>
                                    <span style={{ fontSize: '2rem', color: '#fff', fontWeight: '700' }}>Marty Balkema</span><br />
                                    <span style={{ fontSize: '1.5rem', color: '#fff' }}>Co-founder, Managing Partner</span>
                                </div>
                                <img style={{ width: "20%" }} src={profileImg} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='owner-third-section'>
                <div className='d-flex justify-content-between align-items-center'>
                    <div>
                        <h1 className='owner-third-h1 col-4'>Follow These 3 Simple Steps To 10X Lucrative Offers!</h1>
                        <div className='my-5'>
                            <Link style={{ fontSize: '1.5rem' }} className='btn btn-primary' to="/singup">List your business<img style={{ width: '7%', margin: '0 0 0 4rem' }} src={arrow} alt="" /></Link>
                        </div>
                    </div>
                </div>

                <div className="owner-third-card">
                    <h3>1.</h3>
                    <div style={{ padding: "2rem 6rem 4rem 3rem" }} className='owner-third-detail d-flex justify-content-between'>
                        <div>
                            <img width={80} src={cardIcon1} alt="" />
                            <h4>Make Your Seller Account</h4>
                        </div>
                        <div>
                            <ul>
                                <li>Sign yourself up as a seller to make a free account</li>
                                <li>Create an anonymous listing</li>
                                <li>Pick from full or partial acquisition sale</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="owner-third-card">
                    <h3>2.</h3>
                    <div style={{ padding: "2rem 6rem 4rem 3rem" }} className='owner-third-detail d-flex justify-content-between'>
                        <div>
                            <img width={80} src={cardIcon2} alt="" />
                            <h4>Start Networking With Buyers</h4>
                        </div>
                        <div>
                            <ul>
                                <li>Receive offers from registered acquirers.</li>
                                <li>Respond to the offers that interest you</li>
                                <li>Interact with the buyers for real-time communication</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="owner-third-card">
                    <h3>3.</h3>
                    <div style={{ padding: "2rem 11rem 4rem 3rem" }} className='owner-third-detail d-flex justify-content-between'>
                        <div>
                            <img width={80} src={cardIcon3} alt="" />
                            <h4>Shake Hands And Close deals</h4>
                        </div>
                        <div>
                            <ul>
                                <li>Sign and NDA for exchanging more details</li>
                                <li>Negotiate terms and sign an LOI</li>
                                <li>Have your payment soon after closing your deal</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className='owner-four-section'>
                <div className="Imageowner-third-card" style={{ backgroundImage: `url(${BackSidePhoto})`, width: '100%', backgroundRepeat: 'no-repeat', backgroundSize: 'contain ', backgroundPosition: 'right' }}>
                    <div className='imageBottom-div d-flex justify-content-between align-items-center'>
                        <div>
                            <h1 className='owner-four-h1'>Head Over To Our Advisor Portal And Get A Second Opinion!</h1>
                            <span className='col-8 d-flex' style={{ color: '#fff', fontSize: '1.2rem' }}>We recommend locking your sit-in with our experts to achieve your revenue target successfully. </span>
                            <div className='my-5'>
                                <Link style={{ fontSize: '1.5rem', fontSize: "1.5rem", padding: "1rem 2rem" }} className='btn btn-outline-light' to="/advisory">Take Me To Advisor Portal!</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <Footer />
            </section>
        </>
    )
}

export default Owner