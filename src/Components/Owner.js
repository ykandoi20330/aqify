import React from 'react'
import backgroundImg from "./Owner/unsplash_5U_28ojjgms.png"
import arrow from "./Aqify project/Vector (1).png"

//Logo images
import cardLogo1 from "./Owner/Frame 100.png"
import cardLogo2 from "./Owner/Frame 100 (1).png"
import cardLogo3 from "./Owner/Frame 100 (2).png"

//owner second section
import BackPhoto from "./Owner/Rectangle.png"
import roundedImg from "./Owner/Frame 105.png"
import profileImg from "./Owner/Ellipse 8.png"


//third section owner
import cardIcon1 from "./Owner/Frame 100 (3).png"
import cardIcon2 from "./Owner/Frame 100 (4).png"
import cardIcon3 from "./Owner/Frame 100 (5).png"
import BackSidePhoto from "./Owner/Rectangle16.png"


const Owner = () => {
    return (
        <>
            <section>
                <div className='main' style={{ backgroundImage: `url(${backgroundImg})`, width: '100%', backgroundRepeat: 'no-repeat' }}>
                    <div className="owner-content">
                        <div>
                            <div className='my-5'>
                                <h1 className='main-h1 col-6'>Acquire Without Cost: Have Your Cake and Eat It, Too!
                                </h1>
                            </div>
                            <div className='my-4'>
                                <span className='main-span col-6 d-flex'>
                                    List your startup for free with total anonymity to receive full or partial acquisition offers from verified buyers commission-free.
                                </span>
                            </div>
                            <div className=''>
                                <button style={{ fontSize: '1.5rem' }} className='btn btn-primary'>List your business<img style={{ width: '10%' }} src={arrow} alt="" /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='owner-first-section'>
                <div>
                    <div className='d-flex flex-column align-items-center justify-content-center'>
                        <h1 className='fourth-h1'>Our Marketplace Is Built For Owners Who...</h1>
                        <span style={{ color: '#636363', fontSize: '20px', margin: '1rem 0 3rem 0' }}>Every Monday we publish new businesses for sale on our marketplace.</span>
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
                            <h1 className='fourth-h1' style={{ marginBottom: '3rem' }}>Sell To Private Equity Acquirers Like These</h1>
                        </div>
                    </div>
                    <div style={{ backgroundImage: `url(${BackPhoto})`, width: '100%', backgroundRepeat: 'no-repeat', height: '75vh', backgroundSize: 'contain '}}>
                        <div className='d-flex flex-row align-items-center'>
                            <img style={{ width: '17%', margin: '0 3rem' }} src={roundedImg} alt="" />
                            <div>
                                <span style={{ width: '70%', display: 'flex', fontSize: '20px' }}>"Calm Capital acquires and invests in good profitable businesses from independent founders looking for smoother waters.</span><br />
                                <span style={{ width: '70%', display: 'flex', fontSize: '20px' }}>"Calm Capital acquires and invests in good profitable businesses from independent founders looking for smoother waters.</span>
                            </div>
                        </div>
                        <div className='d-flex justify-content-end'>
                            <div className='d-flex flex-row align-items-center' style={{ position: 'relative', left: '230px' }}>
                                <div className='mx-3 text-end'>
                                    <span style={{ fontSize: '2rem', color: '#fff', fontWeight: '700' }}>David Horne</span><br />
                                    <span style={{ fontSize: '1.5rem', color: '#fff' }}>Co-founder, Managing Partner</span>
                                </div>
                                <img style={{ width: "20%" }} src={profileImg} alt="" />
                            </div>
                            <div className='d-flex flex-row align-items-center' style={{ position: 'relative', left: '110px' }}>
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
                        <h1 className='owner-third-h1 col-4'>Get Acquisition Offers And Sell In 3 Easy Steps</h1>
                        <div className='my-5'>
                            <button style={{ fontSize: '1.5rem' }} className='btn btn-primary'>List your business<img style={{ width: '7%',margin:'0 0 0 4rem' }} src={arrow} alt="" /></button>
                        </div>
                    </div>
                </div>

                <div className="owner-third-card">
                    <h3>1.</h3>
                    <div style={{padding:"2rem 6rem 4rem 3rem"}} className='d-flex justify-content-between'>
                        <div>
                            <img width={80} src={cardIcon1} alt="" />
                            <h4>Sign up to list your business</h4>
                        </div>
                        <div>
                            <ul>
                                <li>Sign up as an owner to create a free account</li>
                                <li>List your business on the Marketplace</li>
                                <li>Choose a full acquisition or partial sale</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="owner-third-card">
                    <h3>2.</h3>
                    <div style={{padding:"2rem 6rem 4rem 3rem"}} className='d-flex justify-content-between'>
                        <div>
                            <img width={80} src={cardIcon2} alt="" />
                            <h4>Connect with verified acquirers</h4>
                        </div>
                        <div>
                            <ul>
                                <li>Review offers from buyers and investors</li>
                                <li>Respond to favourable requests as you please</li>
                                <li>Ask and answer questions from investors</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="owner-third-card">
                    <h3>3.</h3>
                    <div style={{padding:"2rem 11rem 4rem 3rem"}} className='d-flex justify-content-between'>
                        <div>
                            <img width={80} src={cardIcon3} alt="" />
                            <h4>Close a deal</h4>
                        </div>
                        <div>
                            <ul>
                                <li>Sign an NDA to share more details</li>
                                <li>Negotiate terms and sign an LOI</li>
                                <li>Close a deal and receive payout</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className='owner-four-section'>
                <div className="Imageowner-third-card" style={{ backgroundImage: `url(${BackSidePhoto})`, width: '100%', backgroundRepeat: 'no-repeat', height: '65vh', backgroundSize: 'contain ',backgroundPosition:'right'}}>
                <div className='d-flex justify-content-between align-items-center'>
                    <div>
                        <h1 className='owner-four-h1'>Get Offers From Professional Acquirers</h1>
                        <span className='col-8 d-flex' style={{color:'#fff',fontSize:'20px'}}>The Acqify Advisor Directory connects owners with experts for valuations, due diligence, legal, tax, accounting and M&A.</span>
                        <div className='my-5'>
                            <button style={{ fontSize: '1.5rem', fontSize: "20px", padding: "1rem 2rem" }} className='btn btn-outline-light'>Advisor Activity</button>
                        </div>
                    </div>
                </div>
                </div>
            </section>
        </>
    )
}

export default Owner