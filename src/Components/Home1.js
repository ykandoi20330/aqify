import React, { useEffect } from 'react'
import backgroundImg from "./Aqify project/unsplash_5U_28ojjgms2.png"
import arrow from "./Aqify project/Vector (1).png"

//fourth-section card images
import FourthCard1 from "./Aqify project/image 2.png"
import FourthCard2 from "./Aqify project/image 2 (1).png"
import FourthCard3 from "./Aqify project/image 2 (2).png"

import FourthCard4 from "./Aqify project/image 2 (3).png"

import ENV from '../config.js';

//six section images
import quoteImg from "./Aqify project/Vector.png"
import personImg from "./Aqify project/Ellipse 8.png"


//circle images
import circle1 from "./Aqify project/Ellipse 57.png"
import circle2 from "./Aqify project/Ellipse 58.png"

//Logos Images
import microsoft from "./HomePage/microsoft-logo-svgrepo-com.svg"
import Xartup from "./HomePage/Xartup (1).png"

import Footer from "./Footer"
import { Link } from 'react-router-dom'
import { TypeAnimation } from 'react-type-animation';
import Navbar from "./Navbar"
import trueImg from "./Tamplate/Frame 147.svg"
import BackSidePhoto from "./Tamplate/unsplash_tfNyTfJpKvc.svg"
import Aos from 'aos';
import "aos/dist/aos.css"

import acqify from "./acqify.mp4"
// import CountUp from 'react-countup';
//scroll trigger
// import ScrollTrigger from 'react-scroll-trigger';

const Home1 = () => {
    useEffect(() => {
        Aos.init();
        // const token = localStorage.getItem("token");
        // if (token) {
        //     window.location.href = `${ENV.FRONTEND_URL}/#/singin`;
        // }
    }, [])
    return (
        <>
            <section>
                <Navbar />
            </section>

            {/** */}
            < section className='homeSection'>
                <div className='Tamplate-main' style={{ background: '#161616' }}>
                    {/* backgroundImage: `url(${backgroundImg})`, width: '100%', backgroundRepeat: 'no-repeat'  */}
                    <div className='fade-contain  d-flex flex-row'>
                        <div data-aos="fade-right" data-aos-easing="ease-in-sine" data-aos-delay="300" className='d-flex'>
                            <div className="content" style={{ top: '0px' }}>
                                <div>
                                    <div className='my-5'>
                                        <h1 className='main-h1 col-9'>
                                            <span>
                                                {/* Future Lift: Elevate with
                                                Acqify's Effortless Start */}
                                                How Does It Feel To Keep Profitable Acquisition Projects In Your Pocket?
                                            </span><br />
                                            <TypeAnimation className='typeAnimation'
                                                sequence={[
                                                    'Ecommerce', // Types 'One'
                                                    1000, // Waits 1s
                                                    'Saas apps', // Deletes 'One' and types 'Two'
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
                                        <span className='main-span col-7 d-flex'>
                                            {/* Future Entrepreneurship: Simple Founder Exits. Join the
                                            Exclusive Marketplace - Free, Direct, Private! */}
                                            Acqify is a full-fledge marketplace where you acquire and sell assets
                                            while overcoming acquisition blockades like a pro.
                                        </span>
                                    </div>
                                    <div className=''>
                                        <Link style={{ fontSize: '1.5rem' }} className='btn btn-primary my-1' to="/singup">Start Acqify's Tour!<img className='mx-2' style={{ width: '10%' }} src={arrow} alt="" /></Link>
                                        <Link style={{ fontSize: '1.5rem' }} className='btn btn-outline-primary mx-2 my-2' to="/singup">
                                            {/* Seller | Buyers |  */}
                                            Successful Deals<img className='mx-2' style={{ width: '10%' }} src={arrow} alt="" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='video-div' data-aos="fade-left" data-aos-easing="ease-in-sine" data-aos-delay="300">
                            <video className='video' autoPlay loop muted playsInline >
                                <source src={acqify} type='video/mp4' />
                            </video>
                        </div>
                    </div>
                    {/* <div style={{ bottom: '0', right: '0', position: 'absolute' }}>
                        <img className='bottomCircle1' src={circle1} alt="" />
                        <img className='bottomCircle2' src={circle2} alt="" />
                    </div> */}
                </div >
            </section >

            {/*second section */}
            < section >
                <div className='Tamplate-secondPart d-flex flex-column align-items-center' style={{ padding: '4rem', background: '#EEF0FE', position: 'relative' }}>
                    <h1 className='listing-h1 text-center'>Featured On</h1>
                    <span className='listing-span text-center'>Every Monday, find new businesses for sale at Acqify!</span>

                    {/* <div className='tamplate-logoBox d-flex' style={{ width: '100%' }}>
                        <div className='mx-2' data-aos="zoom-in" data-aos-easing="ease-in-sine" data-aos-delay="100" style={{ width: '100%' }}>
                            //* className="card-tamplate " //
                            <div className="d-flex align-items-center justify-content-center">
                                <img style={{ width: '10rem' }} src={microsoft} alt="" />
                            </div>
                        </div>
                        <div className='mx-2 d-flex align-items-center justify-content-center' data-aos="zoom-in" data-aos-easing="ease-in-sine" data-aos-delay="300" style={{ width: '100%' }}>
                            <div className="d-flex align-items-center justify-content-center">
                                <img style={{ width: '10rem' }} src={Xartup} alt="" />
                            </div>
                        </div>
                        <div className='mx-2 d-flex  align-items-center justify-content-center' data-aos="zoom-in" data-aos-easing="ease-in-sine" data-aos-delay="600" style={{ width: '100%' }}>
                            <div className="d-flex align-items-center justify-content-center">
                                <img style={{ width: '10rem' }} src={Xartup} alt="" />
                            </div>
                        </div>
                        <div className='mx-2' data-aos="zoom-in" data-aos-easing="ease-in-sine" data-aos-delay="900" style={{ width: '100%' }}>
                            <div className="d-flex align-items-center justify-content-center">
                                <img style={{ width: '10rem' }} src={microsoft} alt="" />
                            </div>
                        </div>
                    </div> */}

                    <div className='Explore-part d-flex justify-content-around' style={{ width: '100%' }}>
                        <div className='explore-div' data-aos="fade-right" data-aos-easing="ease-in-sine" data-aos-delay="300" style={{ width: '50%' }}>
                            <div className="Imageowner-third-card" style={{ backgroundImage: `url(${BackSidePhoto})`, width: '100%', backgroundRepeat: 'no-repeat', backgroundSize: 'contain ', backgroundPosition: 'right', padding: '2rem' }}>
                                <div className='imageBottom-div d-flex justify-content-between align-items-center'>
                                    <div style={{ color: '#fff' }}>
                                        <h1>Buy a project</h1>
                                        <span className='col-8 d-flex' style={{ fontSize: '1.2rem', fontWeight: '500' }}>Building a business from scratch is rough! Acqify helps you buy online business that fit your criteria.</span>
                                        <div className='my-4'>
                                            <div className='my-3'>
                                                <img style={{ marginRight: '1rem' }} width={25} src={trueImg} alt="" />
                                                <span >Get in touch with the verified buyers</span>
                                            </div>
                                            <div className='my-3'>
                                                <img style={{ marginRight: '1rem' }} width={25} src={trueImg} alt="" />
                                                <span >Propose custom offers and deals to sellers</span>
                                            </div>
                                            <div className='my-3'>
                                                <img style={{ marginRight: '1rem' }} width={25} src={trueImg} alt="" />
                                                <span >All transactions are online and card-friendly</span>
                                            </div>
                                            {/* <div className='my-3'>
                                                <img style={{ marginRight: '1rem' }} width={25} src={trueImg} alt="" />
                                                <span >View all $100k+ revenue listings</span>
                                            </div> */}
                                        </div>
                                        <div className=''>
                                            <Link style={{ fontSize: '1.5rem', padding: "1rem 2rem" }} className='btn btn-light' to="/market">Explore Listing</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='explore-div mx-3' data-aos="fade-left" data-aos-easing="ease-in-sine" data-aos-delay="300" style={{ width: '50%' }}>
                            <div className="Imageowner-third-card" style={{ backgroundImage: `url(${BackSidePhoto})`, width: '100%', backgroundRepeat: 'no-repeat', backgroundSize: 'contain ', backgroundPosition: 'right', padding: '2rem' }}>
                                <div className='imageBottom-div d-flex justify-content-between align-items-center'>
                                    <div style={{ color: '#fff' }}>
                                        <h1>Sell a project</h1>
                                        <span className='d-flex col-8' style={{ fontSize: '1.2rem', fontWeight: '500' }}>You get suitable liquidation options being our seller. List your business  and find your perfect buyer.</span>
                                        <div className='my-4'>
                                            <div className='my-3'>
                                                <img style={{ marginRight: '1rem' }} width={25} src={trueImg} alt="" />
                                                <span >See  how other sellers are doing at Acqify</span>
                                            </div>
                                            <div className='my-3'>
                                                <img style={{ marginRight: '1rem' }} width={25} src={trueImg} alt="" />
                                                <span >New to acquisitions? Learn how to sell online businesses!</span>
                                            </div>
                                            <div className='my-3'>
                                                <img style={{ marginRight: '1rem' }} width={25} src={trueImg} alt="" />
                                                <span >Get your business valuation</span>
                                            </div>
                                            {/* <div className='my-3'>
                                                <img style={{ marginRight: '1rem' }} width={25} src={trueImg} alt="" />
                                                <span >View all $100k+ revenue listings</span>
                                            </div> */}
                                        </div>
                                        <div className=''>
                                            <Link style={{ fontSize: '1.5rem', padding: "1rem 2rem" }} className='btn btn-light mt-1' to="/singup">Sign up</Link>
                                            <Link style={{ fontSize: '1.5rem', padding: "1rem 2rem" }} className='btn btn-outline-light mx-2 mt-1' to="#video">Demo</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section >

            {/**Fourth section home*/}
            < section className='fourth-main' >
                <div>
                    <div className='d-flex flex-column align-items-center justify-content-center mb-5'>
                        <h2 className='fourth-h1'>Key Features</h2>
                        <span className='text-center' style={{ color: '#636363' }}>Every Monday we publish new businesses for sale on our marketplace.</span>
                    </div>
                </div>
                <div className='info-card'>
                    <div data-aos="fade-right" data-aos-easing="ease-in-sine" data-aos-delay="300" className="card-four">
                        <img width={150} src={FourthCard1} alt="" />
                        <h3 className='my-3'>Sshh..Keep Your Listings Hidden!</h3>
                        <span>Buy and sell your business anonymously and crack your best deals securely.</span>
                    </div>
                    <div data-aos="fade-left" data-aos-easing="ease-in-sine" data-aos-delay="400" className="card-four">
                        <img width={150} src={FourthCard2} alt="" />
                        <h3 className='my-3'>Get An Edge From Integrated Buyer Network</h3>
                        <span className=''>Discover diversified buyers worldwide, and hop on to streamline business scaling.</span>
                    </div>
                    <div data-aos="fade-right" data-aos-easing="ease-in-sine" data-aos-delay="500" className="card-four">
                        <img width={150} src={FourthCard3} alt="" />
                        <h3 className='my-3'>Work On Flexible Timeframes</h3>
                        <span>So you ate it and left no crumbs because closing acquisition deals in time yields that.</span>
                    </div>
                    <div data-aos="fade-left" data-aos-easing="ease-in-sine" data-aos-delay="600" className="card-four">
                        <img width={150} src={FourthCard4} alt="" />
                        <h3 className='my-3'>Receive Real-time Counseling </h3>
                        <span className=''>Become an easy decision-maker with hands-on expert guidance before locking your deals.</span>
                    </div>
                </div>
            </section >

            {/**Six home section */}
            < section className='six-main' >
                <div className="six-content">
                    <div style={{ left: '50px', position: 'relative' }} className='d-flex justify-content-between align-items-center'>
                        <div>
                            <h1 className='six-h1'>Stories From Founders And Buyers</h1>
                            <div className='my-5'>
                                <Link className='six-arrow' data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev"><i className="fa-solid fa-arrow-left"></i></Link>
                                <Link className='six-arrow' data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next"><i className="fa-solid fa-arrow-right"></i></Link>
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
            </section >

            {/*Seven Home section */}

            <section>
                <div className='d-flex flex-column align-items-center justify-content-center' style={{ padding: '3rem 0', background: '#EEF0FE' }}>
                    <h2 className='fourth-h1'>Acqify Premium</h2>
                    <span className='text-center' style={{ color: '#636363' }}>Everything you need to acquire your next project.</span>
                </div>
                <div className="pricing-back">
                    <div className="pricing-card pricing-free" data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-delay="100" style={{ width: '35%' }}>
                        <span className='span1'>Basic</span>
                        <h1>Free</h1>
                        <span className='col-10' style={{ color: '#636363', fontSize: '1.2rem', fontWeight: '500' }}>Join Acqify and sell your business without paying a cent!</span>
                        <div className='my-4'>
                            <img style={{ marginRight: '1rem' }} width={40} src={trueImg} alt="" />
                            <span style={{ color: '#636363' }}>Know about potential verified buyers on the marketplace</span>
                        </div>
                    </div>

                    <div className="pricing-card pricingCard2" data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-delay="400" style={{ width: '35%' }}>
                        <span className='span1'>Premium</span>
                        <h1>$99<span style={{ fontSize: '20px', }}>/year</span></h1>
                        <span style={{ color: '#636363', fontSize: '1.2rem', fontWeight: '500' }}>Choose Premium, Stay Updated On New Assets.</span>
                        <div className='my-4'>
                            <div className='my-3'>
                                <img style={{ marginRight: '1rem' }} width={40} src={trueImg} alt="" />
                                <span style={{ color: '#636363' }}>—-<i className="fa-solid fa-chevron-right"></i> Success Fee/ Commission</span>
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
                            <Link style={{ fontSize: '1.5rem' }} className='pricing-btn2 btn btn-primary' to="/singup">Choose Plan<img style={{ width: '7%', margin: '0 0 0 3rem' }} src={arrow} alt="" /></Link>
                        </div>
                    </div>

                    <div className="pricing-card pricingCard2" data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-delay="800" style={{ width: '35%' }}>
                        <span className='span1'>Pro</span>
                        <h1>$1,000<span style={{ fontSize: '20px', }}>/year</span></h1>
                        <span style={{ color: '#636363', fontSize: '1.2rem', fontWeight: '500' }}>Choose Pro, Waive Off Success Fee
                            <br />
                            <br />
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
                            <Link style={{ fontSize: '1.5rem' }} className='pricing-btn2 btn btn-primary' to="/singup">Choose Plan<img style={{ width: '7%', margin: '0 0 0 3rem' }} src={arrow} alt="" /></Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className='d-flex align-items-center justify-content-center' style={{ padding: '50px 0', background: '#EEF0FE' }}>

                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    Join Premium Now <i className="fa-solid fa-chevron-right" style={{ color: "#ffffff" }}></i>
                </button>


                <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content" style={{ borderRadius: '20px' }}>
                            <div className="modal-header" style={{ border: 'none' }}>
                                <div>
                                    <h1 className="modal-title fs-5" id="staticBackdropLabel" style={{ fontWeight: '700' }}>Pricing plans</h1>
                                    <span>Choose a plan that's right for you.</span>
                                </div>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className='' style={{ border: '1px solid lightgray', borderRadius: '20px', padding: '2rem' }}>
                                    <div className="form-check d-flex justify-content-between">
                                        <div>
                                            <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1" />
                                            <label style={{ fontWeight: '800', fontSize: '1rem' }} className="form-check-label" for="flexRadioDefault1">
                                                Premium Annually
                                            </label>
                                            <br />
                                            <span>Get full access every 6 months.</span>
                                            <br />
                                            <br />
                                            <ul>
                                                <li>Project metrics</li>
                                                <li>Send Message</li>
                                                <li>Make Offers</li>
                                                <li>One Click Purchase</li>
                                                <li>Community Access</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h3>$149<span style={{ fontSize: '1rem', color: '#636363' }}>/6mths</span></h3>
                                        </div>
                                    </div>
                                </div>
                                <div className='my-3' style={{ border: '1px solid lightgray', borderRadius: '20px', padding: '2rem' }}>
                                    <div className="form-check d-flex justify-content-between">
                                        <div>
                                            <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault2" />
                                            <label style={{ fontWeight: '800', fontSize: '1rem' }} className="form-check-label" for="flexRadioDefault2">
                                                Pro Annually
                                            </label>
                                            <br />
                                            <span>Get full access on an annual basis.</span>
                                            <br />
                                            <br />
                                            <ul>
                                                <li>Project metrics</li>
                                                <li>Send Message</li>
                                                <li>Make Offers</li>
                                                <li>One Click Purchase</li>
                                                <li>Community Access</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h3>$199<span style={{ fontSize: '1rem', color: '#636363' }}>/year</span></h3>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="modal-footer" style={{ border: 'none' }}>
                                <button type="button" className="btn btn-primary rounded-pill py-2 px-5">Confirm</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/** */}
            <section style={{ background: '#EEF0FE' }}>
                <div className='d-flex flex-column align-items-center justify-content-center' style={{ padding: '50px 0' }}>
                    <h2 className='fourth-h1' style={{ width: '56%' }}>Demo Video - How To Start Your Journey With Aciqfy</h2>
                    <span className='text-center' style={{ color: '#636363' }}>Explore all the tips for cracking high revenue deals for yourself!</span>
                </div>

                <div id="video" data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-delay="200" className='d-flex align-items-center justify-content-center'>
                    <div className="card d-flex align-items-center justify-content-center" style={{ width: '80%', height: '80vh', margin: '1rem' }}>
                        <h1>Video</h1>
                        {/* <video autoPlay  controls >
                            <source src={}/>
                        </video> */}
                    </div>
                </div>
            </section>


            {/*Footer */}

            <section>
                <Footer />
            </section>
        </>
    )
}

export default Home1