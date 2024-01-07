import React from 'react'
import backgroundImg from "./Testimonials/unsplash_5U_28ojjgms_2.png"

//six section images
import quoteImg from "./Aqify project/Vector.png"
import personImg from "./Aqify project/Ellipse 8.png"
import BackSidePhoto from "./Owner/Rectangle16.png"
import { Link } from 'react-router-dom'
import Navbar from "./Navbar"
import Footer from './Footer'

const Testimonials = () => {
    return (
        <>
        <section>
            <Navbar/>
        </section>

            <section className='pricing-first-section'>
                <div className="pricing-backgroundImage" style={{background:'#161616', padding:'8rem 0 8rem 0'}} >
                {/* style={{ backgroundImage: `url(${backgroundImg})`, width: '100%', height: '80vh', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} */}
                    <h1 className='col-6 text-center'>Testimonials</h1>
                </div>
            </section>

            <section className="ligh-back" style={{padding:'4rem 0'}} >
                <div className='d-flex justify-content-center align-items-center'>
                    <div style={{ marginLeft: '-0px', position: 'relative' }}>
                        <ul className='Testimonails-ul'>
                            <li>2,000+<br /><span style={{ fontSize: '20px', fontWeight: '100' }}>Registered buyers and sellers</span></li>
                            <li>345<br /> <span style={{ fontSize: '20px', fontWeight: '100' }}>Registered buyers and sellers</span> </li>
                            <li style={{ borderRight: '5px solid #3247FF' }}>150<br /> <span style={{ fontSize: '20px', fontWeight: '100' }}>Product Hunt Product of the Day</span></li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className='six-main'>
                <div className="six-content">
                    <div style={{ left: '50px', position: 'relative' }} className='d-flex justify-content-between align-items-center'>
                        <div>
                            <h1 className='six-h1'>Stories From Founders And Buyers</h1>
                            <div className='my-5'>
                                <Link className='six-arrow' data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next"><i className="fa-solid fa-arrow-left"></i></Link>
                                <Link className='six-arrow' data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev"><i className="fa-solid fa-arrow-right"></i></Link>
                            </div>
                        </div>
                        <div>
                            <img className='quoteImg' src={quoteImg} alt="" />
                        </div>
                    </div>

                    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel"> {/*data-bs-touch="false" */}
                        <div className="carousel-inner">
                            <div className="carousel-item active">

                                <div className='six-card-main d-flex justify-content-evenly my-4'>
                                    <div className="six-card">
                                        <span className="six-card-content">“Acqify helped us get acquired catalysing our growth exponentially. Quality advice & ready documentation helped us smoothly close our deal in record time. Strongly recommend this platform to other founders!"</span>
                                        <div className='d-flex flex-row align-items-center'>
                                            <img style={{ width: "15%" }} src={personImg} alt="" />
                                            <div className='mx-3'>
                                                <span style={{ fontSize: '1.5rem', color: '#636363' }}>Owner</span><br />
                                                <span className='bitsCool' style={{ fontSize: '2rem', color: '#000', fontWeight: '700' }}>BitsCool.com</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="six-card">
                                        <span className="six-card-content">“Acqify helped us get acquired catalysing our growth exponentially. Quality advice & ready documentation helped us smoothly close our deal in record time. Strongly recommend this platform to other founders!"</span>
                                        <div className='d-flex flex-row align-items-center'>
                                            <img style={{ width: "15%" }} src={personImg} alt="" />
                                            <div className='mx-3'>
                                                <span style={{ fontSize: '1.5rem', color: '#636363' }}>Owner</span><br />
                                                <span className='bitsCool' style={{ fontSize: '2rem', color: '#000', fontWeight: '700' }}>BitsCool.com</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="carousel-item">

                                <div className='six-card-main d-flex justify-content-evenly my-4'>
                                    <div className="six-card">
                                        <span className="six-card-content">“Acqify helped us get acquired catalysing our growth exponentially. Quality advice & ready documentation helped us smoothly close our deal in record time. Strongly recommend this platform to other founders!"</span>
                                        <div className='d-flex flex-row align-items-center'>
                                            <img style={{ width: "15%" }} src={personImg} alt="" />
                                            <div className='mx-3'>
                                                <span style={{ fontSize: '1.5rem', color: '#636363' }}>Owner</span><br />
                                                <span className='bitsCool' style={{ fontSize: '2rem', color: '#000', fontWeight: '700' }}>BitsCool.com</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="six-card">
                                        <span className="six-card-content">“Acqify helped us get acquired catalysing our growth exponentially. Quality advice & ready documentation helped us smoothly close our deal in record time. Strongly recommend this platform to other founders!"</span>
                                        <div className='d-flex flex-row align-items-center'>
                                            <img style={{ width: "15%" }} src={personImg} alt="" />
                                            <div className='mx-3'>
                                                <span style={{ fontSize: '1.5rem', color: '#636363' }}>Owner</span><br />
                                                <span className='bitsCool' style={{ fontSize: '2rem', color: '#000', fontWeight: '700' }}>BitsCool.com</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

            </section>

            <section className='owner-four-section'>
                <div className="Imageowner-third-card" style={{ backgroundImage: `url(${BackSidePhoto})`, width: '100%', backgroundRepeat: 'no-repeat', backgroundSize: 'contain ', backgroundPosition: 'right' }}>
                    <div className='imageBottom-div d-flex justify-content-between align-items-center'>
                        <div>
                            <h1 className='owner-four-h1'>Get Offers From Professional Acquirers</h1>
                            <span className='col-8 d-flex' style={{ color: '#fff', fontSize: '1.2rem' }}>The Acqify Advisor Directory connects owners with experts for valuations, due diligence, legal, tax, accounting and M&A.</span>
                            <div className='my-5'>
                                <Link style={{ fontSize: '1.5rem', padding: "1rem 2rem" }} className='btn btn-outline-light' to="/advisory">Advisor Activity</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <Footer/>
            </section>
        </>
    )
}

export default Testimonials