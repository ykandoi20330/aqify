import React from 'react'
import backgroundImg from "./Market/unsplash_5U_28ojjgms.png"
import arrow from "./Aqify project/Vector (1).png"

import { TypeAnimation } from 'react-type-animation'

//
import search from "./MarketDash/VectorSearch.svg"
import img from "./Market/market.png"

import {
    Link
} from 'react-router-dom'
import Navbar from "./Navbar"
import MarketplaceDetail from './MarketplaceDetail'

const Market = () => {

    return (
        <>
            <section>
                <Navbar />
            </section>
            {/** */}
            <section className='pricing-first-section'>
                <div className="pricing-backgroundImage" style={{ backgroundImage: `url(${backgroundImg})`, width: '100%', height: '100vh', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                    <div className="owner-content">
                        <div>
                            <div className='my-5'>
                                <h1 className='main-h1 col-6'>Welcome to the Marketplace
                                    <TypeAnimation className='typeAnimation' style={{ marginLeft: '1rem', fontSize: '3rem' }}
                                        sequence={[
                                            'Ecommerce', // Types 'One'
                                            1000, // Waits 1s
                                            'Saas', // Deletes 'One' and types 'Two'
                                            2000, // Waits 
                                            'Community',
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
                                    List your startup for free with total anonymity to receive full or partial acquisition offers from verified buyers commission-free.List your business anonymously on the Marketplace to receive offers from acquirers
                                </span>
                            </div>
                            {/* <div className=''>
                                <Link style={{ fontSize: '1.5rem' }} className='btn btn-primary' to="/singin">List your business<img style={{ width: '10%' }} src={arrow} alt="" /></Link>
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>

            <section className='d-flex justify-content-center' style={{ background: '#EEF0FE' }}>
                <div className="advisory-card">
                    <div className="second-line d-flex">
                        <div class="mb-3 my-3 form-floating" style={{ width: '100%' }}>
                            <input style={{ width: '100%' }} type="email" id="floatingInputValue" class="form-control" placeholder="Search" />
                            <label for="floatingInputValue"><img src={search} alt="" /></label>
                        </div>
                    </div>

                    <div className='first-line d-flex'>
                        <div class="form-floating mr-2" style={{ width: '100%' }}>
                            <select style={{ width: '97%', color: '#3247ff' }} class="form-control form-select form-select-lg" aria-label="Large select example">
                                <option id="floatingInputValue" selected>Category</option>
                                <option value="1">Ecommerce</option>
                                <option value="2">Saas apps</option>
                                <option value="3">Wordpress</option>
                            </select>
                            <label for="floatingInputValue"><img src="" alt="" /><i class="fa-brands fa-squarespace" style={{ color: "#005eff" }}></i></label>
                        </div>
                        <div class="form-floating mr-2" style={{ width: '100%' }}>
                            <select style={{ width: '97%', color: '#3247ff' }} class="form-control form-select form-select-lg mb-3" aria-label="Large select example">
                                <option id="floatingInputValue" selected>Tool</option>
                                <option value="1">Acqify</option>
                                <option value="2">Acqify</option>
                                <option value="3">Acqify</option>
                            </select>
                            <label for="floatingInputValue"><img src="" alt="" /><i class="fa-solid fa-screwdriver-wrench" style={{ color: "#005eff" }}></i></label>
                        </div>
                        <div class="form-floating mr-2" style={{ width: '100%' }}>
                            <select style={{ width: '100%', color: '#3247ff' }} class="form-control form-select form-select-lg mb-3" aria-label="Large select example">
                                <option id="floatingInputValue" selected>Sort by</option>
                                <option value="1">UI Design</option>
                                <option value="2">UI Deveploment</option>
                                <option value="3">Saas</option>
                            </select>
                            <label for="floatingInputValue"><img src="" alt="" /><i class="fa-solid fa-list" style={{ color: "#005eff" }}></i></label>
                        </div>
                    </div>
                </div>
            </section>

            <section style={{ background: '#EEF0FE ',padding:'3rem' }}>
                <section className="ligh-back  my-5" style={{ height: '120%' }} >
                    <div className="marketInner-card ">
                        <div className="firstMarket">
                            <img src={img} alt="" style={{position:'relative', width:'100%',borderRadius:'20px 20px 0 0'}}/>
                            <div className="firstPart" style={{position:'absolute',top:'0',right:'0px',width:'50%',textAlign:'end'}}>
                                <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '13px' ,background:"#fff",color:"#3247FF "}}>Nesxt Js</button>
                                <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '13px' ,background:"#fff",color:"#3247FF "}}>Firebase</button>
                                <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '13px' ,background:"#fff",color:"#3247FF "}}>Medical</button>
                                <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '13px' ,background:"#fff",color:"#3247FF "}}>SaaS</button>
                            </div>
                        </div>
                        <div style={{padding:'2rem'}}>
                            <h3>DoYogo - Website</h3>
                            <Link style={{padding:'0.5rem 1.5rem',background:'#EEF0FE',color:'#3247FF',border:'none'}} to="#" className='btn btn-primary rounded-pill'>Template</Link>
                            <div className='d-flex justify-content-between' style={{ margin: '2rem 0 2rem 0' }}>
                                <h3 className=''style={{fontWeight:'bolder',fontSize:'3rem'}}>$25</h3>
                                <Link style={{ padding: '18px 48px' }} className='btn btn-primary' to="/placeDetail">View details<img style={{ width: '20px' }} src={arrow} alt="" /> </Link>
                            </div>
                            <span>DoYoga is Professional and clean one page Webflow app template that can be used for any apps</span>
                        </div>
                    </div>

                    <div className="marketInner-card ">
                        <div className="firstMarket">
                            <img src={img} alt="" style={{position:'relative', width:'100%',borderRadius:'20px 20px 0 0'}}/>
                            <div className="firstPart" style={{position:'absolute',top:'0',right:'0px',width:'50%',textAlign:'end'}}>
                                <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '13px' ,background:"#fff",color:"#3247FF "}}>Nesxt Js</button>
                                <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '13px' ,background:"#fff",color:"#3247FF "}}>Firebase</button>
                                <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '13px' ,background:"#fff",color:"#3247FF "}}>Medical</button>
                                <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '13px' ,background:"#fff",color:"#3247FF "}}>SaaS</button>
                            </div>
                        </div>
                        <div style={{padding:'2rem'}}>
                            <h3>DoYogo - Website</h3>
                            <Link style={{padding:'0.5rem 1.5rem',background:'#EEF0FE',color:'#3247FF',border:'none'}} to="#" className='btn btn-primary rounded-pill'>Template</Link>
                            <div className='d-flex justify-content-between' style={{ margin: '2rem 0 2rem 0' }}>
                                <h3 className='' style={{fontWeight:'bolder',fontSize:'3rem'}}>$25</h3>
                                <Link style={{ padding: '18px 48px' }} className='btn btn-primary' to="/singup">View details<img style={{ width: '20px' }} src={arrow} alt="" /> </Link>
                            </div>
                            <span>DoYoga is Professional and clean one page Webflow app template that can be used for any apps</span>
                        </div>
                    </div>
                    
                    <div className="marketInner-card ">
                        <div className="firstMarket">
                            <img src={img} alt="" style={{position:'relative', width:'100%',borderRadius:'20px 20px 0 0'}}/>
                            <div className="firstPart" style={{position:'absolute',top:'0',right:'0px',width:'50%',textAlign:'end'}}>
                                <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '13px' ,background:"#fff",color:"#3247FF "}}>Nesxt Js</button>
                                <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '13px' ,background:"#fff",color:"#3247FF "}}>Firebase</button>
                                <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '13px' ,background:"#fff",color:"#3247FF "}}>Medical</button>
                                <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '13px' ,background:"#fff",color:"#3247FF "}}>SaaS</button>
                            </div>
                        </div>
                        <div style={{padding:'2rem'}}>
                            <h3>DoYogo - Website</h3>
                            <Link style={{padding:'0.5rem 1.5rem',background:'#EEF0FE',color:'#3247FF',border:'none'}} to="#" className='btn btn-primary rounded-pill'>Template</Link>
                            <div className='d-flex justify-content-between' style={{ margin: '2rem 0 2rem 0' }}>
                                <h3 className='' style={{fontWeight:'bolder',fontSize:'3rem'}}>$25</h3>
                                <Link style={{ padding: '18px 48px' }} className='btn btn-primary' to="/singup">View details<img style={{ width: '20px' }} src={arrow} alt="" /> </Link>
                            </div>
                            <span>DoYoga is Professional and clean one page Webflow app template that can be used for any apps</span>
                        </div>
                    </div>
                </section>
                <section className="ligh-back  my-5" style={{ height: '120%' }} >
                    <div className="marketInner-card ">
                        <div className="firstMarket">
                            <img src={img} alt="" style={{position:'relative', width:'100%',borderRadius:'20px 20px 0 0'}}/>
                            <div className="firstPart" style={{position:'absolute',top:'0',right:'0px',width:'50%',textAlign:'end'}}>
                                <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '13px' ,background:"#fff",color:"#3247FF "}}>Nesxt Js</button>
                                <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '13px' ,background:"#fff",color:"#3247FF "}}>Firebase</button>
                                <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '13px' ,background:"#fff",color:"#3247FF "}}>Medical</button>
                                <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '13px' ,background:"#fff",color:"#3247FF "}}>SaaS</button>
                            </div>
                        </div>
                        <div style={{padding:'2rem'}}>
                            <h3>DoYogo - Website</h3>
                            <Link style={{padding:'0.5rem 1.5rem',background:'#EEF0FE',color:'#3247FF',border:'none'}} to="#" className='btn btn-primary rounded-pill'>Template</Link>
                            <div className='d-flex justify-content-between' style={{ margin: '2rem 0 2rem 0' }}>
                                <h3 className=''style={{fontWeight:'bolder',fontSize:'3rem'}}>$25</h3>
                                <Link style={{ padding: '18px 48px' }} className='btn btn-primary' to="/singup">View details<img style={{ width: '20px' }} src={arrow} alt="" /> </Link>
                            </div>
                            <span>DoYoga is Professional and clean one page Webflow app template that can be used for any apps</span>
                        </div>
                    </div>

                    <div className="marketInner-card ">
                        <div className="firstMarket">
                            <img src={img} alt="" style={{position:'relative', width:'100%',borderRadius:'20px 20px 0 0'}}/>
                            <div className="firstPart" style={{position:'absolute',top:'0',right:'0px',width:'50%',textAlign:'end'}}>
                                <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '13px' ,background:"#fff",color:"#3247FF "}}>Nesxt Js</button>
                                <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '13px' ,background:"#fff",color:"#3247FF "}}>Firebase</button>
                                <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '13px' ,background:"#fff",color:"#3247FF "}}>Medical</button>
                                <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '13px' ,background:"#fff",color:"#3247FF "}}>SaaS</button>
                            </div>
                        </div>
                        <div style={{padding:'2rem'}}>
                            <h3>DoYogo - Website</h3>
                            <Link style={{padding:'0.5rem 1.5rem',background:'#EEF0FE',color:'#3247FF',border:'none'}} to="#" className='btn btn-primary rounded-pill'>Template</Link>
                            <div className='d-flex justify-content-between' style={{ margin: '2rem 0 2rem 0' }}>
                                <h3 className='' style={{fontWeight:'bolder',fontSize:'3rem'}}>$25</h3>
                                <Link style={{ padding: '18px 48px' }} className='btn btn-primary' to="/singup">View details<img style={{ width: '20px' }} src={arrow} alt="" /> </Link>
                            </div>
                            <span>DoYoga is Professional and clean one page Webflow app template that can be used for any apps</span>
                        </div>
                    </div>

                    <div className="marketInner-card ">
                        <div className="firstMarket">
                            <img src={img} alt="" style={{position:'relative', width:'100%',borderRadius:'20px 20px 0 0'}}/>
                            <div className="firstPart" style={{position:'absolute',top:'0',right:'0px',width:'50%',textAlign:'end'}}>
                                <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '13px' ,background:"#fff",color:"#3247FF "}}>Nesxt Js</button>
                                <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '13px' ,background:"#fff",color:"#3247FF "}}>Firebase</button>
                                <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '13px' ,background:"#fff",color:"#3247FF "}}>Medical</button>
                                <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '13px' ,background:"#fff",color:"#3247FF "}}>SaaS</button>
                            </div>
                        </div>
                        <div style={{padding:'2rem'}}>
                            <h3>DoYogo - Website</h3>
                            <Link style={{padding:'0.5rem 1.5rem',background:'#EEF0FE',color:'#3247FF',border:'none'}} to="#" className='btn btn-primary rounded-pill'>Template</Link>
                            <div className='d-flex justify-content-between' style={{ margin: '2rem 0 2rem 0' }}>
                                <h3 className='' style={{fontWeight:'bolder',fontSize:'3rem'}}>$25</h3>
                                <Link style={{ padding: '18px 48px' }} className='btn btn-primary' to="/singup">View details<img style={{ width: '20px' }} src={arrow} alt="" /> </Link>
                            </div>
                            <span>DoYoga is Professional and clean one page Webflow app template that can be used for any apps</span>
                        </div>
                    </div>
                </section>
                <section className="ligh-back  my-5" style={{ height: '120%' }} >
                    <div className="marketInner-card ">
                        <div className="firstMarket">
                            <img src={img} alt="" style={{position:'relative', width:'100%',borderRadius:'20px 20px 0 0'}}/>
                            <div className="firstPart" style={{position:'absolute',top:'0',right:'0px',width:'50%',textAlign:'end'}}>
                                <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '13px' ,background:"#fff",color:"#3247FF "}}>Nesxt Js</button>
                                <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '13px' ,background:"#fff",color:"#3247FF "}}>Firebase</button>
                                <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '13px' ,background:"#fff",color:"#3247FF "}}>Medical</button>
                                <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '13px' ,background:"#fff",color:"#3247FF "}}>SaaS</button>
                            </div>
                        </div>
                        <div style={{padding:'2rem'}}>
                            <h3>DoYogo - Website</h3>
                            <Link style={{padding:'0.5rem 1.5rem',background:'#EEF0FE',color:'#3247FF',border:'none'}} to="#" className='btn btn-primary rounded-pill'>Template</Link>
                            <div className='d-flex justify-content-between' style={{ margin: '2rem 0 2rem 0' }}>
                                <h3 className=''style={{fontWeight:'bolder',fontSize:'3rem'}}>$25</h3>
                                <Link style={{ padding: '18px 48px' }} className='btn btn-primary' to="/singup">View details<img style={{ width: '20px' }} src={arrow} alt="" /> </Link>
                            </div>
                            <span>DoYoga is Professional and clean one page Webflow app template that can be used for any apps</span>
                        </div>
                    </div>

                    <div className="marketInner-card ">
                        <div className="firstMarket">
                            <img src={img} alt="" style={{position:'relative', width:'100%',borderRadius:'20px 20px 0 0'}}/>
                            <div className="firstPart" style={{position:'absolute',top:'0',right:'0px',width:'50%',textAlign:'end'}}>
                                <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '13px' ,background:"#fff",color:"#3247FF "}}>Nesxt Js</button>
                                <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '13px' ,background:"#fff",color:"#3247FF "}}>Firebase</button>
                                <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '13px' ,background:"#fff",color:"#3247FF "}}>Medical</button>
                                <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '13px' ,background:"#fff",color:"#3247FF "}}>SaaS</button>
                            </div>
                        </div>
                        <div style={{padding:'2rem'}}>
                            <h3>DoYogo - Website</h3>
                            <Link style={{padding:'0.5rem 1.5rem',background:'#EEF0FE',color:'#3247FF',border:'none'}} to="#" className='btn btn-primary rounded-pill'>Template</Link>
                            <div className='d-flex justify-content-between' style={{ margin: '2rem 0 2rem 0' }}>
                                <h3 className='' style={{fontWeight:'bolder',fontSize:'3rem'}}>$25</h3>
                                <Link style={{ padding: '18px 48px' }} className='btn btn-primary' to="/singup">View details<img style={{ width: '20px' }} src={arrow} alt="" /> </Link>
                            </div>
                            <span>DoYoga is Professional and clean one page Webflow app template that can be used for any apps</span>
                        </div>
                    </div>

                    <div className="marketInner-card ">
                        <div className="firstMarket">
                            <img src={img} alt="" style={{position:'relative', width:'100%',borderRadius:'20px 20px 0 0'}}/>
                            <div className="firstPart" style={{position:'absolute',top:'0',right:'0px',width:'50%',textAlign:'end'}}>
                                <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '13px' ,background:"#fff",color:"#3247FF "}}>Nesxt Js</button>
                                <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '13px' ,background:"#fff",color:"#3247FF "}}>Firebase</button>
                                <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '13px' ,background:"#fff",color:"#3247FF "}}>Medical</button>
                                <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '13px' ,background:"#fff",color:"#3247FF "}}>SaaS</button>
                            </div>
                        </div>
                        <div style={{padding:'2rem'}}>
                            <h3>DoYogo - Website</h3>
                            <Link style={{padding:'0.5rem 1.5rem',background:'#EEF0FE',color:'#3247FF',border:'none'}} to="#" className='btn btn-primary rounded-pill'>Template</Link>
                            <div className='d-flex justify-content-between' style={{ margin: '2rem 0 2rem 0' }}>
                                <h3 className='' style={{fontWeight:'bolder',fontSize:'3rem'}}>$25</h3>
                                <Link style={{ padding: '18px 48px' }} className='btn btn-primary' to="/singup">View details<img style={{ width: '20px' }} src={arrow} alt="" /> </Link>
                            </div>
                            <span>DoYoga is Professional and clean one page Webflow app template that can be used for any apps</span>
                        </div>
                    </div>
                </section>
                <section className="ligh-back my-5" style={{ height: '120%' }} >
                    <div className="marketInner-card ">
                        <div className="firstMarket">
                            <img src={img} alt="" style={{position:'relative', width:'100%',borderRadius:'20px 20px 0 0'}}/>
                            <div className="firstPart" style={{position:'absolute',top:'0',right:'0px',width:'50%',textAlign:'end'}}>
                                <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '13px' ,background:"#fff",color:"#3247FF "}}>Nesxt Js</button>
                                <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '13px' ,background:"#fff",color:"#3247FF "}}>Firebase</button>
                                <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '13px' ,background:"#fff",color:"#3247FF "}}>Medical</button>
                                <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '13px' ,background:"#fff",color:"#3247FF "}}>SaaS</button>
                            </div>
                        </div>
                        <div style={{padding:'2rem'}}>
                            <h3>DoYogo - Website</h3>
                            <Link style={{padding:'0.5rem 1.5rem',background:'#EEF0FE',color:'#3247FF',border:'none'}} to="#" className='btn btn-primary rounded-pill'>Template</Link>
                            <div className='d-flex justify-content-between' style={{ margin: '2rem 0 2rem 0' }}>
                                <h3 className=''style={{fontWeight:'bolder',fontSize:'3rem'}}>$25</h3>
                                <Link style={{ padding: '18px 48px' }} className='btn btn-primary' to="/singup">View details<img style={{ width: '20px' }} src={arrow} alt="" /> </Link>
                            </div>
                            <span>DoYoga is Professional and clean one page Webflow app template that can be used for any apps</span>
                        </div>
                    </div>

                    <div className="marketInner-card ">
                        <div className="firstMarket">
                            <img src={img} alt="" style={{position:'relative', width:'100%',borderRadius:'20px 20px 0 0'}}/>
                            <div className="firstPart" style={{position:'absolute',top:'0',right:'0px',width:'50%',textAlign:'end'}}>
                                <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '13px' ,background:"#fff",color:"#3247FF "}}>Nesxt Js</button>
                                <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '13px' ,background:"#fff",color:"#3247FF "}}>Firebase</button>
                                <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '13px' ,background:"#fff",color:"#3247FF "}}>Medical</button>
                                <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '13px' ,background:"#fff",color:"#3247FF "}}>SaaS</button>
                            </div>
                        </div>
                        <div style={{padding:'2rem'}}>
                            <h3>DoYogo - Website</h3>
                            <Link style={{padding:'0.5rem 1.5rem',background:'#EEF0FE',color:'#3247FF',border:'none'}} to="#" className='btn btn-primary rounded-pill'>Template</Link>
                            <div className='d-flex justify-content-between' style={{ margin: '2rem 0 2rem 0' }}>
                                <h3 className='' style={{fontWeight:'bolder',fontSize:'3rem'}}>$25</h3>
                                <Link style={{ padding: '18px 48px' }} className='btn btn-primary' to="/singup">View details<img style={{ width: '20px' }} src={arrow} alt="" /> </Link>
                            </div>
                            <span>DoYoga is Professional and clean one page Webflow app template that can be used for any apps</span>
                        </div>
                    </div>

                    <div className="marketInner-card ">
                        <div className="firstMarket">
                            <img src={img} alt="" style={{position:'relative', width:'100%',borderRadius:'20px 20px 0 0'}}/>
                            <div className="firstPart" style={{position:'absolute',top:'0',right:'0px',width:'50%',textAlign:'end'}}>
                                <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '13px' ,background:"#fff",color:"#3247FF "}}>Nesxt Js</button>
                                <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '13px' ,background:"#fff",color:"#3247FF "}}>Firebase</button>
                                <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '13px' ,background:"#fff",color:"#3247FF "}}>Medical</button>
                                <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '13px' ,background:"#fff",color:"#3247FF "}}>SaaS</button>
                            </div>
                        </div>
                        <div style={{padding:'2rem'}}>
                            <h3>DoYogo - Website</h3>
                            <Link style={{padding:'0.5rem 1.5rem',background:'#EEF0FE',color:'#3247FF',border:'none'}} to="#" className='btn btn-primary rounded-pill'>Template</Link>
                            <div className='d-flex justify-content-between' style={{ margin: '2rem 0 2rem 0' }}>
                                <h3 className='' style={{fontWeight:'bolder',fontSize:'3rem'}}>$25</h3>
                                <Link style={{ padding: '18px 48px' }} className='btn btn-primary' to="/singup">View details<img style={{ width: '20px' }} src={arrow} alt="" /> </Link>
                            </div>
                            <span>DoYoga is Professional and clean one page Webflow app template that can be used for any apps</span>
                        </div>
                    </div>
                </section>

                <section style={{ height: '20vh', background: '#EEF0FE ' }}>
                    <div>
                        <div className='d-flex justify-content-center'>
                            <Link style={{ padding: '18px 48px' }} className='btn btn-primary' to="/singup">View more<img style={{ width: '20px', marginLeft: '1rem' }} src={arrow} alt="" /> </Link>
                        </div>
                    </div>
                </section>
            </section>
        </>
    )
}

export default Market