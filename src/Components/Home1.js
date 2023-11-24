import React, { useEffect } from 'react'
import backgroundImg from "./Aqify project/unsplash_5U_28ojjgms2.png"
import arrow from "./Aqify project/Vector (1).png"

//fourth-section card images
import FourthCard1 from "./Aqify project/image 2.png"
import FourthCard2 from "./Aqify project/image 2 (1).png"
import FourthCard3 from "./Aqify project/image 2 (2).png"
import FourthCard4 from "./Aqify project/image 2 (3).png"


//six section images
import quoteImg from "./Aqify project/Vector.png"
import personImg from "./Aqify project/Ellipse 8.png"


//circle images
import circle1 from "./Aqify project/Ellipse 57.png"
import circle2 from "./Aqify project/Ellipse 58.png"

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
    }, [])
    return (
        <>
            <section>
                <Navbar />
            </section>

            {/** */}
            < section className='homeSection'>
                <div className='Tamplate-main' style={{ backgroundImage: `url(${backgroundImg})`, width: '100%', backgroundRepeat: 'no-repeat' }}>
                    <div className='fade-contain  d-flex flex-row'>
                        <div data-aos="fade-right" data-aos-easing="ease-in-sine" data-aos-delay="300" className='d-flex'>
                            <div className="content" style={{ top: '0px' }}>
                                <div>
                                    <div className='my-5'>
                                        <h1 className='main-h1 col-9'>
                                            <span>Future Lift: Elevate with
                                                Acqify's Effortless Start</span><br />
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
                                            Future Entrepreneurship: Simple Founder Exits. Join the
                                            Exclusive Marketplace - Free, Direct, Private!
                                        </span>
                                    </div>
                                    <div className=''>
                                        <Link style={{ fontSize: '1.5rem' }} className='btn btn-primary' to="/singup">Buy<img className='mx-2' style={{ width: '10%' }} src={arrow} alt="" /></Link>
                                        <Link style={{ fontSize: '1.5rem' }} className='btn btn-outline-primary mx-2' to="/singup">Sell<img className='mx-2' style={{ width: '10%' }} src={arrow} alt="" /></Link>
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
                    <div style={{ bottom: '0', right: '0', position: 'absolute' }}>
                        <img className='bottomCircle1' src={circle1} alt="" />
                        <img className='bottomCircle2' src={circle2} alt="" />
                    </div>
                </div >
            </section >

            {/*second section */}
            < section >
                <div className='Tamplate-secondPart d-flex flex-column align-items-center' style={{ padding: '4rem', height: '100%', background: '#EEF0FE', position: 'relative' }}>
                    <h1 className='listing-h1 text-center'>Featured On</h1>
                    <span className='listing-span text-center'>Every Monday we publish new businesses for sale on our marketplace</span>

                    <div className='tamplate-logoBox d-flex' style={{ width: '100%' }}>
                        <div className='mx-2' data-aos="zoom-in" data-aos-easing="ease-in-sine" data-aos-delay="100" style={{ width: '100%' }}>
                            <div className="card-tamplate text-center">
                                <h4>Logo</h4>
                            </div>
                        </div>
                        <div className='mx-2' data-aos="zoom-in" data-aos-easing="ease-in-sine" data-aos-delay="300" style={{ width: '100%' }}>
                            <div className="card-tamplate text-center" >
                                <h4>Logo</h4>
                            </div>
                        </div>
                        <div className='mx-2' data-aos="zoom-in" data-aos-easing="ease-in-sine" data-aos-delay="600" style={{ width: '100%' }}>
                            <div className="card-tamplate text-center" >
                                <h4>Logo</h4>
                            </div>
                        </div>
                        <div className='mx-2' data-aos="zoom-in" data-aos-easing="ease-in-sine" data-aos-delay="900" style={{ width: '100%' }}>
                            <div className="card-tamplate text-center">
                                <h4>Logo</h4>
                            </div>
                        </div>
                    </div>

                    <div className='Explore-part d-flex justify-content-around' style={{ width: '100%' }}>
                        <div className='explore-div' data-aos="fade-right" data-aos-easing="ease-in-sine" data-aos-delay="300" style={{ width: '50%' }}>
                            <div className="Imageowner-third-card" style={{ backgroundImage: `url(${BackSidePhoto})`, width: '100%', backgroundRepeat: 'no-repeat', height: '65vh', backgroundSize: 'contain ', backgroundPosition: 'right' }}>
                                <div className='imageBottom-div d-flex justify-content-between align-items-center'>
                                    <div style={{ color: '#fff' }}>
                                        <h1>Buy a tiny project</h1>
                                        <span className='col-8 d-flex' style={{ fontSize: '20px', fontWeight: '500' }}>Build a startup through acquisition for less than $100k vs. going from scratch.</span>
                                        <div className='my-4'>
                                            <div className='my-3'>
                                                <img style={{ marginRight: '1rem' }} width={25} src={trueImg} alt="" />
                                                <span >View verified buyers on the marketplace</span>
                                            </div>
                                            <div className='my-3'>
                                                <img style={{ marginRight: '1rem' }} width={25} src={trueImg} alt="" />
                                                <span >Make offers through the platform</span>
                                            </div>
                                            <div className='my-3'>
                                                <img style={{ marginRight: '1rem' }} width={25} src={trueImg} alt="" />
                                                <span >Connect your card, buy projects</span>
                                            </div>
                                            <div className='my-3'>
                                                <img style={{ marginRight: '1rem' }} width={25} src={trueImg} alt="" />
                                                <span >View all $100k+ revenue listings</span>
                                            </div>
                                        </div>
                                        <div className=''>
                                            <Link style={{ fontSize: '1.5rem', padding: "1rem 2rem" }} className='btn btn-light' to="/market">Explore Listing</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='explore-div mx-3' data-aos="fade-left" data-aos-easing="ease-in-sine" data-aos-delay="300" style={{ width: '50%' }}>
                            <div className="Imageowner-third-card" style={{ backgroundImage: `url(${BackSidePhoto})`, width: '100%', backgroundRepeat: 'no-repeat', height: '65vh', backgroundSize: 'contain ', backgroundPosition: 'right' }}>
                                <div className='imageBottom-div d-flex justify-content-between align-items-center'>
                                    <div style={{ color: '#fff' }}>
                                        <h1>Sell a tiny project</h1>
                                        <span className='d-flex col-8' style={{ fontSize: '20px', fontWeight: '500' }}>Liquidate that side project quickly, easily and for a fair price.</span>
                                        <div className='my-4'>
                                            <div className='my-2'>
                                                <img style={{ marginRight: '1rem' }} width={25} src={trueImg} alt="" />
                                                <span >View all $100k+ revenue listings</span>
                                            </div>
                                            <div className='my-2'>
                                                <img style={{ marginRight: '1rem' }} width={25} src={trueImg} alt="" />
                                                <span >Make offers through the platform</span>
                                            </div>
                                            <div className='my-2'>
                                                <img style={{ marginRight: '1rem' }} width={25} src={trueImg} alt="" />
                                                <span >Connect your card, buy projects</span>
                                            </div>
                                            <div className='my-2'>
                                                <img style={{ marginRight: '1rem' }} width={25} src={trueImg} alt="" />
                                                <span >View all $100k+ revenue listings</span>
                                            </div>
                                        </div>
                                        <div className='my-5'>
                                            <Link style={{ fontSize: '1.5rem', padding: "1rem 2rem" }} className='btn btn-light' to="/singup">Sign up</Link>
                                            <Link style={{ fontSize: '1.5rem', padding: "1rem 2rem" }} className='btn btn-outline-light mx-2' to="/">Demo</Link>
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
                        <h3 className='my-3'>List Anonymously</h3>
                        <span>Sell or buy online businesses confidentially. List anonymously, connect securely, and close deals with confidence.</span>
                    </div>
                    <div data-aos="fade-left" data-aos-easing="ease-in-sine" data-aos-delay="400" className="card-four">
                        <img width={150} src={FourthCard2} alt="" />
                        <h3 className='my-3'>Largest Buyers Ecosystem</h3>
                        <span className='largeSpan'>Explore unparalleled opportunities with the largest buyer ecosystem. Maximize your options, elevate your transactions, and achieve success on a grand scale.</span>
                    </div>
                    <div data-aos="fade-right" data-aos-easing="ease-in-sine" data-aos-delay="500" className="card-four">
                        <img width={150} src={FourthCard3} alt="" />
                        <h3 className='my-3'>Faster Timelines</h3>
                        <span>Accelerate success with faster timelines. Achieve your goals swiftly and efficiently, leaving no room for delays.</span>
                    </div>
                    <div data-aos="fade-left" data-aos-easing="ease-in-sine" data-aos-delay="600" className="card-four">
                        <img width={150} src={FourthCard4} alt="" />
                        <h3 className='my-3'>Access to best counsel</h3>
                        <span className='largeSpan'>Gain an edge with access to the best counsel. Elevate your decisions with expert guidance and strategic insights for unparalleled success.</span>
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
                                <Link className='six-arrow' data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev"><i class="fa-solid fa-arrow-left"></i></Link>
                                <Link className='six-arrow' data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next"><i class="fa-solid fa-arrow-right"></i></Link>
                            </div>
                        </div>
                        <div>
                            <img className='quoteImg' src={quoteImg} alt="" />
                        </div>
                    </div>

                    <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel"> {/*data-bs-touch="false" */}
                        <div class="carousel-inner">
                            <div class="carousel-item active">

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

                            <div class="carousel-item">

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
                <div className='d-flex flex-column align-items-center justify-content-center' style={{ padding: '50px 0', background: '#EEF0FE' }}>
                    <h2 className='fourth-h1'>Acqify Premium</h2>
                    <span className='text-center' style={{ color: '#636363' }}>Everything you need to acquire your next project.</span>
                </div>
                <div className="pricing-back" style={{ height: '120vh' }}>
                    <div className="pricing-card" data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-delay="100" style={{ height: '90%' }}>
                        <span className='span1'>Basic</span>
                        <h1>Free</h1>
                        <span className='col-10' style={{ color: '#636363', fontSize: '20px', fontWeight: '500' }}>Free for owners and affordable for accquirers.</span>
                        <div className='my-4'>
                            <img style={{ marginRight: '1rem' }} width={40} src={trueImg} alt="" />
                            <span style={{ color: '#636363' }}>View verified buyers on the marketplace</span>
                        </div>
                    </div>

                    <div className="pricing-card pricingCard2" data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-delay="400" style={{ height: '90%', width: '35%' }}>
                        <span className='span1'>Premium</span>
                        <h1>$99<span style={{ fontSize: '20px', }}>/year</span></h1>
                        <span style={{ color: '#636363', fontSize: '20px', fontWeight: '500' }}>Go premium, never miss a deal.</span>
                        <div className='my-4'>
                            <div className='my-3'>
                                <img style={{ marginRight: '1rem' }} width={40} src={trueImg} alt="" />
                                <span style={{ color: '#636363' }}>2% Success Fee</span>
                            </div>
                            <div className='my-3'>
                                <img style={{ marginRight: '1rem' }} width={40} src={trueImg} alt="" />
                                <span style={{ color: '#636363' }}>View all $100k+ revenue listings</span>
                            </div>
                            <div className='my-3'>
                                <img style={{ marginRight: '1rem' }} width={40} src={trueImg} alt="" />
                                <span style={{ color: '#636363' }}>Message sellers directly</span>
                            </div>
                            <div className='my-3'>
                                <img style={{ marginRight: '1rem' }} width={40} src={trueImg} alt="" />
                                <span style={{ color: '#636363' }}>Verified acquirer profile</span>
                            </div>
                            <div className='my-3'>
                                <img style={{ marginRight: '1rem' }} width={40} src={trueImg} alt="" />
                                <span style={{ color: '#636363' }}>Private acquirer Discord invite</span>
                            </div>
                        </div>
                        <div className='my-4'>
                            <Link style={{ fontSize: '1.5rem' }} className='pricing-btn2 btn btn-primary' to="/singup">Select Plan<img style={{ width: '7%', margin: '0 0 0 3rem' }} src={arrow} alt="" /></Link>
                        </div>
                    </div>

                    <div className="pricing-card pricingCard2" data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-delay="800" style={{ height: '90%', width: '35%' }}>
                        <span className='span1'>Pro</span>
                        <h1>$1,000<span style={{ fontSize: '20px', }}>/year</span></h1>
                        <span style={{ color: '#636363', fontSize: '20px', fontWeight: '500' }}>Go pro, close deals for free</span>
                        <div className='my-4'>
                            <div className='my-3'>
                                <img style={{ marginRight: '1rem' }} width={40} src={trueImg} alt="" />
                                <span style={{ color: '#636363' }}>No Success Fee</span>
                            </div>
                            <div className='my-3'>
                                <img style={{ marginRight: '1rem' }} width={40} src={trueImg} alt="" />
                                <span style={{ color: '#636363' }}>View all $100k+ revenue listings</span>
                            </div>
                            <div className='my-3'>
                                <img style={{ marginRight: '1rem' }} width={40} src={trueImg} alt="" />
                                <span style={{ color: '#636363' }}>Message sellers directly</span>
                            </div>
                            <div className='my-3'>
                                <img style={{ marginRight: '1rem' }} width={40} src={trueImg} alt="" />
                                <span style={{ color: '#636363' }}>Verified acquirer profile</span>
                            </div>
                            <div className='my-3'>
                                <img style={{ marginRight: '1rem' }} width={40} src={trueImg} alt="" />
                                <span style={{ color: '#636363' }}>Private acquirer Discord invite</span>
                            </div>
                        </div>
                        <div className='my-4'>
                            <Link style={{ fontSize: '1.5rem' }} className='pricing-btn2 btn btn-primary' to="/singup">Select Plan<img style={{ width: '7%', margin: '0 0 0 3rem' }} src={arrow} alt="" /></Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className='d-flex align-items-center justify-content-center' style={{ padding: '50px 0', background: '#EEF0FE' }}>

                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    Join Premium Now <i class="fa-solid fa-chevron-right" style={{color: "#ffffff"}}></i>
                </button>


                <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content" style={{borderRadius:'20px'}}>
                            <div class="modal-header" style={{border:'none'}}>
                                <div>
                                    <h1 class="modal-title fs-5" id="staticBackdropLabel" style={{fontWeight:'700'}}>Pricing plans</h1>
                                    <span>Choose a plan that's right for you.</span>
                                </div>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div className='' style={{border:'1px solid lightgray',borderRadius:'20px',padding:'2rem'}}>
                                    <div class="form-check d-flex justify-content-between">
                                        <div>
                                            <input class="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1" />
                                            <label style={{ fontWeight: '800', fontSize: '1rem' }} class="form-check-label" for="flexRadioDefault1">
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
                                            <h3>$149<span style={{fontSize:'15px',color:'#636363'}}>/6mths</span></h3>
                                        </div>
                                    </div>
                                </div>
                                <div className='my-3' style={{border:'1px solid lightgray',borderRadius:'20px',padding:'2rem'}}>
                                    <div class="form-check d-flex justify-content-between">
                                        <div>
                                            <input class="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault2" />
                                            <label style={{ fontWeight: '800', fontSize: '1rem' }} class="form-check-label" for="flexRadioDefault2">
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
                                            <h3>$199<span style={{fontSize:'15px',color:'#636363'}}>/year</span></h3>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div class="modal-footer" style={{border:'none'}}>
                                <button type="button" class="btn btn-primary py-2 px-5">Confirm</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/** */}
            <section style={{ height: '150vh', background: '#EEF0FE' }}>
                <div className='d-flex flex-column align-items-center justify-content-center' style={{ padding: '50px 0' }}>
                    <h2 className='fourth-h1'>Demo Video - How it’s Works</h2>
                    <span style={{ color: '#636363' }}>Everything you need to acquire your next project.</span>
                </div>

                <div data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-delay="200" className='d-flex align-items-center justify-content-center'>
                    <div className="card d-flex align-items-center justify-content-center" style={{ width: '80%', height: '80vh', margin: '1rem' }}>
                        <h1>Video</h1>
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