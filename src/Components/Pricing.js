import React, { useState } from 'react'
import backgroundImg from "./Pricing/unsplash_5U_28ojjgms2.png"
import trueImg from "./Pricing/Frame 147.png"
import arrow from "./Aqify project/Vector (1).png"

import Navbar from "./Navbar"
import Footer from './Footer'

import { Link } from 'react-router-dom'

const Pricing = () => {

    const [show, setShow] = useState(1)

    return (
        <>
            <section>
                <Navbar />
            </section>


            <section className='pricing-first-section'>
                <div style={{ background: "linear-gradient(359deg, black, #000000f5)" }}>
                    <div className="pricing-backgroundImage" style={{ background:'#161616', padding:'4rem 0 8rem 0'}}>
                    {/* backgroundImage: `url(${backgroundImg})`, width: '100%', height: '80vh', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' */}
                        <h1>ACQIFY’S LANS DON’T HURT YOUR BUDGET!</h1>
                        <span className='text-center'>Our pricing plans are tailored according to the budgets of buyers and sellers.</span>
                        <div>
                            <div className="btn-group" role="group" aria-label="Basic outlined example">
                                <button style={{ padding: "1rem 4rem" }} type="button" className="btn btn-outline-primary" onClick={show => setShow(1)}>Owners</button>
                                <button style={{ padding: "1rem 4rem" }} type="button" className="btn btn-outline-primary" onClick={show => setShow(2)}>Acquirers</button>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <section className="pricing-back" >
                {show === 1 && <>
                    <div className="pricing-card pricing-free" style={{ height: '60%', position: 'relative', top: '-75px', width:'35%' }}>
                        <span className='span1'>Basic</span>
                        <h1>Free</h1>
                        <span className='col-10' style={{ color: '#636363', fontSize: '1.2rem', fontWeight: '500' }}>Join Acqify and sell your business without paying a cent!</span>
                        <div className='my-4'>
                            <img style={{ marginRight: '1rem' }} width={40} src={trueImg} alt="" />
                            <span style={{ color: '#636363' }}>Know about potential verified buyers on the marketplace</span>
                        </div>
                    </div>

                    <div className="pricing-card pricingCard2" style={{ height: '110%', position: 'relative', top: '-75px', width: '35%' }}>
                        <span className='span1'>Prime</span>
                        <h1>Free</h1>
                        <span style={{ color: '#636363', fontSize: '1.2rem', fontWeight: '500' }}>Choose any plan, and sell for free!</span>
                        <div className='my-4'>
                            <div className='my-3'>
                                <img style={{ marginRight: '1rem' }} width={40} src={trueImg} alt="" />
                                <span style={{ color: '#636363' }}>Keep your listings confidential</span>
                            </div>
                            <div className='my-3'>
                                <img style={{ marginRight: '1rem' }} width={40} src={trueImg} alt="" />
                                <span style={{ color: '#636363' }}>Collaborate with expert acquirers</span>
                            </div>
                            <div className='my-3'>
                                <img style={{ marginRight: '1rem' }} width={40} src={trueImg} alt="" />
                                <span style={{ color: '#636363' }}>Promote your assets to a huge buyers' community</span>
                            </div>
                            <div className='my-3'>
                                <img style={{ marginRight: '1rem' }} width={40} src={trueImg} alt="" />
                                <span style={{ color: '#636363' }}>Get lucrative proposals for your assets</span>
                            </div>
                            <div className='my-3'>
                                <img style={{ marginRight: '1rem' }} width={40} src={trueImg} alt="" />
                                <span style={{ color: '#636363' }}> Execute selling your assets absolutely for free</span>
                            </div>
                        </div>
                        <div className='my-4'>
                            <Link to="/singup" style={{ fontSize: '1.5rem' }} className='pricing-btn btn btn-primary'>List your business<img style={{ width: '7%', margin: '0 0 0 3rem' }} src={arrow} alt="" /></Link>
                        </div>
                    </div>
                </>
                }

                {show === 2 && <>
                    <div className="pricing-card pricing-free" style={{ height: '80%', position: 'relative', top: '-75px', width: '35%' }}>
                        <span className='span1'>Basic</span>
                        <h2 className='my-3' style={{fontWeight:'900'}}>Listing your assets on Acqify is free of cost</h2>
                        <span className='col-10' style={{ color: '#636363', fontSize: '1.2rem', fontWeight: '500' }}>Join Acqify and sell your business without paying a cent!</span>
                        <div className='my-4'>
                            <img style={{ marginRight: '1rem' }} width={40} src={trueImg} alt="" />
                            <span style={{ color: '#636363' }}>Know about potential verified buyers on the marketplace</span>
                        </div>
                    </div>

                    <div className="pricing-card pricingCard2" style={{ height: '110%', position: 'relative', top: '-75px', width: '35%' }}>
                        <span className='span1'>Premium</span>
                        <h1>$99<span style={{ fontSize: '20px', }}>/year</span></h1>
                        <span style={{ color: '#636363', fontSize: '1.2rem', fontWeight: '500' }}>Choose Premium, Stay Updated On New Assets</span>
                        <div className='my-4'>
                            <div className='my-3'>
                                <img style={{ marginRight: '1rem' }} width={40} src={trueImg} alt="" />
                                <span style={{ color: '#636363' }}>—-<i className="fa-solid fa-chevron-right"></i>  Success Fee/ Commission</span>
                            </div>
                            <div className='my-3'>
                                <img style={{ marginRight: '1rem' }} width={40} src={trueImg} alt="" />
                                <span style={{ color: '#636363' }}>Quick access to all listings</span>
                            </div>
                            <div className='my-3'>
                                <img style={{ marginRight: '1rem' }} width={40} src={trueImg} alt="" />
                                <span style={{ color: '#636363' }}>Reach out to sellers directly</span>
                            </div>
                            <div className='my-3'>
                                <img style={{ marginRight: '1rem' }} width={40} src={trueImg} alt="" />
                                <span style={{ color: '#636363' }}>Get a hands-on official acquirer profile from Acqify</span>
                            </div>
                            {/* <div className='my-3'>
                                <img style={{ marginRight: '1rem' }} width={40} src={trueImg} alt="" />
                                <span style={{ color: '#636363' }}>Private acquirer Discord invite</span>
                            </div> */}
                        </div>
                        <div className='my-4'>
                            <Link to="/singup" style={{ fontSize: '1.5rem' }} className='pricing-btn2 btn btn-primary'>Choose Plan<img style={{ width: '7%', margin: '0 0 0 3rem' }} src={arrow} alt="" /></Link>
                        </div>
                    </div>

                    <div className="pricing-card pricingCard2" style={{ height: '110%', position: 'relative', top: '-75px', width: '35%' }}>
                        <span className='span1'>Pro</span>
                        <h1>$1,000<span style={{ fontSize: '20px', }}>/year</span></h1>
                        <span style={{ color: '#636363', fontSize: '1.2rem', fontWeight: '500' }}>Choose Pro, Waive Off Success Fee
                        <br/>
                        <br/>
                        </span>
                        <div className='my-4'>
                            <div className='my-3'>
                                <img style={{ marginRight: '1rem' }} width={40} src={trueImg} alt="" />
                                <span style={{ color: '#636363' }}>Lock deals without paying a success fee</span>
                            </div>
                            <div className='my-3'>
                                <img style={{ marginRight: '1rem' }} width={40} src={trueImg} alt="" />
                                <span style={{ color: '#636363' }}>Quick access to all listings</span>
                            </div>
                            <div className='my-3'>
                                <img style={{ marginRight: '1rem' }} width={40} src={trueImg} alt="" />
                                <span style={{ color: '#636363' }}>Reach out to sellers directly</span>
                            </div>
                            <div className='my-3'>
                                <img style={{ marginRight: '1rem' }} width={40} src={trueImg} alt="" />
                                <span style={{ color: '#636363' }}>Get a hands-on official acquirer profile from Acqify</span>
                            </div>
                            {/* <div className='my-3'>
                                <img style={{ marginRight: '1rem' }} width={40} src={trueImg} alt="" />
                                <span style={{ color: '#636363' }}>Private acquirer Discord invite</span>
                            </div> */}
                        </div>
                        <div className='my-4'>
                            <Link to="/singup" style={{ fontSize: '1.5rem' }} className='pricing-btn2 btn btn-primary'>Choose Plan <img style={{ width: '7%', margin: '0 0 0 3rem' }} src={arrow} alt="" /></Link>
                        </div>
                    </div>
                </>}
            </section>

            <section>
                <Footer/>
            </section>
        </>
    )
}

export default Pricing