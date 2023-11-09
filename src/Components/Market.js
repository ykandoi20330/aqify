import React, { useState } from 'react'
import backgroundImg from "./Market/unsplash_5U_28ojjgms.png"
import arrow from "./Aqify project/Vector (1).png"

import { TypeAnimation } from 'react-type-animation'

//
import search from "./MarketDash/VectorSearch.svg"
import img from "./Market/market.png"

import {
    Link
} from 'react-router-dom'
import Footer from './Footer'
//logo
import Logo from "./Aqify project/Frame 7.png"
import upload from "./Selling/VectorUpload.svg"

const Market = () => {

    //for image Upload
    const [image, setImage] = useState(null)
    const [fileName, setfileName] = useState("")

    const input = ({ target: { files } }) => {
        files[0] && setfileName(files[0].name)
        if (files) {
            setImage(URL.createObjectURL(files[0]))
        }
    }

    return (
        <>
            {/**Nav section */}
            <section>
                <div className='hero1'>
                    <nav className='navbar navbar-expand-lg navbar-dark navline' id="middleNav" style={{ zIndex: "5", position: 'absolute', width: '100%' }}>

                        <div class="container-fluid">
                            <Link className="navbar-brand" to="/"><img src={Logo} alt="Logo" className='Logo' /></Link>
                            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                                <div class="offcanvas-header">
                                    <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel"><Link className="navbar-brand" to="/"><img src={Logo} alt="Logo" className='Logo1' /></Link></h5>
                                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                </div>
                                <div class="offcanvas-body">


                                    {/* <Link className="navbar-brand" to="/"><img src={Logo} alt="Logo" className='Logo' /></Link> */}

                                    <ul className="ul  navbar-nav  nav justify-content-between">
                                        <li className="nav-item">
                                            <Link className="nav-link " aria-current="page" to="/market">Marketplace</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/acquire">For Acquirers</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/owner">For Owners</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/pricing">Pricing</Link>
                                        </li>
                                    </ul>

                                    <Link>
                                        <Link class="btn btn-outline-light mx-2" to="/singin" type="submit">Sign in</Link>
                                        <Link class="btn btn-primary" to="/singup" type="submit">Join <img style={{ width: '30%' }} src={arrow} alt="" /></Link>
                                        <Link class="btn btn-primary mx-2" to="/" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">Add Tamplate<i class="fa-solid fa-circle-plus mx-2" style={{ color: "#fff" }}></i></Link>
                                    </Link>
                                </div>

                            </div>

                        </div>
                    </nav>
                </div >
            </section >

            {/** modal for add cart */}

            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel" style={{ color: '#3247FF' }}>New Tamplate</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">

                            <div className="marketInner-card ">
                                <div className="firstMarket">
                                    {/* <img src={img} alt="" style={{ position: 'relative', width: '100%', borderRadius: '20px 20px 0 0' }} /> */}
                                    <div className='divInput' style={{ width: '100%' }}>
                                        <div className='d-flex flex-column align-items-center justify-content-center'>
                                            <div className="img-container" id="display_image">
                                                <img src={image} className="" id="img" alt="" />
                                            </div>
                                            <div>
                                                <input type="file" class="form-label" id="image_input1" multiple accept='images/*' onChange={input} />
                                                <label for="image_input1" class="form-label text-center" style={{ color: '#636363' }}> <img src={upload} alt="" /><br /><br /><span >Upload Listing images</span></label>
                                            </div>
                                        </div>
                                    </div>
                                    {/** */}
                                    <div className="firstSide-top" style={{ position: 'absolute', top: '0', right: '0px', width: '50%', textAlign: 'end' }}>
                                        <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '13px', background: "#fff", color: "#3247FF " }}>Nesxt Js</button>
                                        <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '13px', background: "#fff", color: "#3247FF " }}>Firebase</button>
                                        <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '13px', background: "#fff", color: "#3247FF " }}>Medical</button>
                                        <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '13px', background: "#fff", color: "#3247FF " }}>SaaS</button>
                                    </div>
                                </div>
                                <div style={{ padding: '2rem' }}>
                                    <div>
                                        <div>
                                            <div class="mb-3 my-3">
                                                <label for="exampleFormControlInput1" class="form-label" style={{ color: '#636363' }}>Website Name</label>
                                                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter Full Name" />
                                            </div>
                                            {/* <h3>DoYogo - Website</h3> */}
                                            <Link style={{ padding: '0.5rem 1.5rem', background: '#EEF0FE', color: '#3247FF', border: 'none' }} to="#" className='btn btn-primary rounded-pill'>Template</Link>
                                        </div>
                                        <div className='d-flex justify-content-between my-4'>
                                            <div><span className='mx-2'>Favorites</span><i class="fa-regular fa-heart" style={{ color: "#005eff" }}></i></div>
                                            <div><span className='mx-2'>Net Profit</span><i class="fa-solid fa-lock" style={{ color: "#005eff" }}></i></div>
                                            <div><span className='mx-2'>India</span><i class="fa-solid fa-location-dot" style={{ color: "#005eff" }}></i></div>
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-between' style={{ margin: '2rem 0 2rem 0' }}>
                                        <div className='d-flex'>
                                            <div class="mb-3 my-3">
                                                <label for="exampleFormControlInput2" class="form-label" style={{ color: '#636363' }}>Please Enter Amount</label>
                                                <input type="number" class="form-control" id="exampleFormControlInput2" placeholder="$000" />
                                            </div>
                                            <div class="mb-3 my-3 mx-2">
                                                <label for="exampleFormControlInput3" class="form-label" style={{ color: '#636363' }}>Link Your Project</label>
                                                <input type="url" class="form-control" id="exampleFormControlInput3" placeholder="URL" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mb-3 my-3">
                                        <label for="exampleFormControlTextarea1" class="form-label" style={{ color: '#636363' }}>Please enter description below</label>
                                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Write a Description'></textarea>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button type="button" class="btn btn-primary">Add Tamplate</button>
                        </div>
                    </div>
                </div>
            </div>

            {/** */}
            <section className='pricing-first-section'>
                <div className="pricing-backgroundImage" style={{ backgroundImage: `url(${backgroundImg})`, width: '100%', height: '100vh', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                    <div className="owner-content">
                        <div>
                            <div className='my-5'>
                                <h1 className='main-h1 col-6'>Welcome to the Marketplace
                                    <TypeAnimation className='typeAnimation marketTypeAnimation' style={{ marginLeft: '1rem', fontSize: '3rem' }}
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

            <section className='marketMain' style={{ background: '#EEF0FE ', padding: '3rem' }}>
                <section className="ligh-back  my-5" style={{ height: '120%' }} >
                    <div className="marketInner-card ">
                        <div className="firstMarket">
                            <img src={img} alt="" style={{ position: 'relative', width: '100%', borderRadius: '20px 20px 0 0' }} />
                            <div className="firstSide-top" style={{ position: 'absolute', top: '0', right: '0px', width: '50%', textAlign: 'end' }}>
                                <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '13px', background: "#fff", color: "#3247FF " }}>Nesxt Js</button>
                                <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '13px', background: "#fff", color: "#3247FF " }}>Firebase</button>
                                <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '13px', background: "#fff", color: "#3247FF " }}>Medical</button>
                                <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '13px', background: "#fff", color: "#3247FF " }}>SaaS</button>
                            </div>
                        </div>
                        <div style={{ padding: '2rem' }}>
                            <div>
                                <div>
                                    <h3>DoYogo - Website</h3>
                                    <Link style={{ padding: '0.5rem 1.5rem', background: '#EEF0FE', color: '#3247FF', border: 'none' }} to="#" className='btn btn-primary rounded-pill'>Template</Link>
                                </div>
                                <div className='d-flex justify-content-between my-4'>
                                    <div><span className='mx-2'>Favorites</span><i class="fa-regular fa-heart" style={{ color: "#005eff" }}></i></div>
                                    <div><span className='mx-2'>Net Profit</span><i class="fa-solid fa-lock" style={{ color: "#005eff" }}></i></div>
                                    <div><span className='mx-2'>India</span><i class="fa-solid fa-location-dot" style={{ color: "#005eff" }}></i></div>
                                </div>
                            </div>
                            <div className='priceTag-div d-flex justify-content-between' style={{ margin: '2rem 0 2rem 0' }}>
                                <h3 className='' style={{ fontWeight: 'bolder', fontSize: '3rem' }}>$25</h3>
                                <Link style={{ padding: '18px 48px' }} className='btn btn-primary' to="/placeDetail">View details<img style={{ width: '20px' }} src={arrow} alt="" /> </Link>
                            </div>
                            <span>DoYoga is Professional and clean one page Webflow app template that can be used for any apps</span>
                        </div>
                    </div>

                    <div className="marketInner-card ">
                        <div className="firstMarket">
                            <img src={img} alt="" style={{ position: 'relative', width: '100%', borderRadius: '20px 20px 0 0' }} />
                            <div className="firstSide-top" style={{ position: 'absolute', top: '0', right: '0px', width: '50%', textAlign: 'end' }}>
                                <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '13px', background: "#fff", color: "#3247FF " }}>Nesxt Js</button>
                                <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '13px', background: "#fff", color: "#3247FF " }}>Firebase</button>
                                <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '13px', background: "#fff", color: "#3247FF " }}>Medical</button>
                                <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '13px', background: "#fff", color: "#3247FF " }}>SaaS</button>
                            </div>
                        </div>
                        <div style={{ padding: '2rem' }}>
                            <div>
                                <h3>DoYogo - Website</h3>
                                <Link style={{ padding: '0.5rem 1.5rem', background: '#EEF0FE', color: '#3247FF', border: 'none' }} to="#" className='btn btn-primary rounded-pill'>Template</Link>
                            </div>
                            <div className='d-flex justify-content-between my-4'>
                                <div><span className='mx-2'>Favorites</span><i class="fa-regular fa-heart" style={{ color: "#005eff" }}></i></div>
                                <div><span className='mx-2'>Net Profit</span><i class="fa-solid fa-lock" style={{ color: "#005eff" }}></i></div>
                                <div><span className='mx-2'>India</span><i class="fa-solid fa-location-dot" style={{ color: "#005eff" }}></i></div>
                            </div>
                            <div className='priceTag-div d-flex justify-content-between' style={{ margin: '2rem 0 2rem 0' }}>
                                <h3 className='' style={{ fontWeight: 'bolder', fontSize: '3rem' }}>$25</h3>
                                <Link style={{ padding: '18px 48px' }} className='btn btn-primary' to="/singup">View details<img style={{ width: '20px' }} src={arrow} alt="" /> </Link>
                            </div>
                            <span>DoYoga is Professional and clean one page Webflow app template that can be used for any apps</span>
                        </div>
                    </div>

                    <div className="marketInner-card ">
                        <div className="firstMarket">
                            <img src={img} alt="" style={{ position: 'relative', width: '100%', borderRadius: '20px 20px 0 0' }} />
                            <div className="firstSide-top" style={{ position: 'absolute', top: '0', right: '0px', width: '50%', textAlign: 'end' }}>
                                <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '13px', background: "#fff", color: "#3247FF " }}>Nesxt Js</button>
                                <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '13px', background: "#fff", color: "#3247FF " }}>Firebase</button>
                                <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '13px', background: "#fff", color: "#3247FF " }}>Medical</button>
                                <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '13px', background: "#fff", color: "#3247FF " }}>SaaS</button>
                            </div>
                        </div>
                        <div style={{ padding: '2rem' }}>
                            <div>
                                <h3>DoYogo - Website</h3>
                                <Link style={{ padding: '0.5rem 1.5rem', background: '#EEF0FE', color: '#3247FF', border: 'none' }} to="#" className='btn btn-primary rounded-pill'>Template</Link>
                            </div>
                            <div className='d-flex justify-content-between my-4'>
                                <div><span className='mx-2'>Favorites</span><i class="fa-regular fa-heart" style={{ color: "#005eff" }}></i></div>
                                <div><span className='mx-2'>Net Profit</span><i class="fa-solid fa-lock" style={{ color: "#005eff" }}></i></div>
                                <div><span className='mx-2'>India</span><i class="fa-solid fa-location-dot" style={{ color: "#005eff" }}></i></div>
                            </div>
                            <div className='priceTag-div d-flex justify-content-between' style={{ margin: '2rem 0 2rem 0' }}>
                                <h3 className='' style={{ fontWeight: 'bolder', fontSize: '3rem' }}>$25</h3>
                                <Link style={{ padding: '18px 48px' }} className='btn btn-primary' to="/singup">View details<img style={{ width: '20px' }} src={arrow} alt="" /> </Link>
                            </div>
                            <span>DoYoga is Professional and clean one page Webflow app template that can be used for any apps</span>
                        </div>
                    </div>
                </section>
                <section className="ligh-back  my-5" style={{ height: '120%' }} >
                    <div className="marketInner-card ">
                        <div className="firstMarket">
                            <img src={img} alt="" style={{ position: 'relative', width: '100%', borderRadius: '20px 20px 0 0' }} />
                            <div className="firstSide-top" style={{ position: 'absolute', top: '0', right: '0px', width: '50%', textAlign: 'end' }}>
                                <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '13px', background: "#fff", color: "#3247FF " }}>Nesxt Js</button>
                                <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '13px', background: "#fff", color: "#3247FF " }}>Firebase</button>
                                <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '13px', background: "#fff", color: "#3247FF " }}>Medical</button>
                                <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '13px', background: "#fff", color: "#3247FF " }}>SaaS</button>
                            </div>
                        </div>
                        <div style={{ padding: '2rem' }}>
                            <div>
                                <h3>DoYogo - Website</h3>
                                <Link style={{ padding: '0.5rem 1.5rem', background: '#EEF0FE', color: '#3247FF', border: 'none' }} to="#" className='btn btn-primary rounded-pill'>Template</Link>
                            </div>
                            <div className='d-flex justify-content-between my-4'>
                                <div><span className='mx-2'>Favorites</span><i class="fa-regular fa-heart" style={{ color: "#005eff" }}></i></div>
                                <div><span className='mx-2'>Net Profit</span><i class="fa-solid fa-lock" style={{ color: "#005eff" }}></i></div>
                                <div><span className='mx-2'>India</span><i class="fa-solid fa-location-dot" style={{ color: "#005eff" }}></i></div>
                            </div>
                            <div className='priceTag-div d-flex justify-content-between' style={{ margin: '2rem 0 2rem 0' }}>
                                <h3 className='' style={{ fontWeight: 'bolder', fontSize: '3rem' }}>$25</h3>
                                <Link style={{ padding: '18px 48px' }} className='btn btn-primary' to="/singup">View details<img style={{ width: '20px' }} src={arrow} alt="" /> </Link>
                            </div>
                            <span>DoYoga is Professional and clean one page Webflow app template that can be used for any apps</span>
                        </div>
                    </div>

                    <div className="marketInner-card ">
                        <div className="firstMarket">
                            <img src={img} alt="" style={{ position: 'relative', width: '100%', borderRadius: '20px 20px 0 0' }} />
                            <div className="firstSide-top" style={{ position: 'absolute', top: '0', right: '0px', width: '50%', textAlign: 'end' }}>
                                <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '13px', background: "#fff", color: "#3247FF " }}>Nesxt Js</button>
                                <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '13px', background: "#fff", color: "#3247FF " }}>Firebase</button>
                                <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '13px', background: "#fff", color: "#3247FF " }}>Medical</button>
                                <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '13px', background: "#fff", color: "#3247FF " }}>SaaS</button>
                            </div>
                        </div>
                        <div style={{ padding: '2rem' }}>
                            <div>
                                <h3>DoYogo - Website</h3>
                                <Link style={{ padding: '0.5rem 1.5rem', background: '#EEF0FE', color: '#3247FF', border: 'none' }} to="#" className='btn btn-primary rounded-pill'>Template</Link>
                            </div>
                            <div className='d-flex justify-content-between my-4'>
                                <div><span className='mx-2'>Favorites</span><i class="fa-regular fa-heart" style={{ color: "#005eff" }}></i></div>
                                <div><span className='mx-2'>Net Profit</span><i class="fa-solid fa-lock" style={{ color: "#005eff" }}></i></div>
                                <div><span className='mx-2'>India</span><i class="fa-solid fa-location-dot" style={{ color: "#005eff" }}></i></div>
                            </div>
                            <div className='priceTag-div d-flex justify-content-between' style={{ margin: '2rem 0 2rem 0' }}>
                                <h3 className='' style={{ fontWeight: 'bolder', fontSize: '3rem' }}>$25</h3>
                                <Link style={{ padding: '18px 48px' }} className='btn btn-primary' to="/singup">View details<img style={{ width: '20px' }} src={arrow} alt="" /> </Link>
                            </div>
                            <span>DoYoga is Professional and clean one page Webflow app template that can be used for any apps</span>
                        </div>
                    </div>

                    <div className="marketInner-card ">
                        <div className="firstMarket">
                            <img src={img} alt="" style={{ position: 'relative', width: '100%', borderRadius: '20px 20px 0 0' }} />
                            <div className="firstSide-top" style={{ position: 'absolute', top: '0', right: '0px', width: '50%', textAlign: 'end' }}>
                                <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '13px', background: "#fff", color: "#3247FF " }}>Nesxt Js</button>
                                <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '13px', background: "#fff", color: "#3247FF " }}>Firebase</button>
                                <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '13px', background: "#fff", color: "#3247FF " }}>Medical</button>
                                <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '13px', background: "#fff", color: "#3247FF " }}>SaaS</button>
                            </div>
                        </div>
                        <div style={{ padding: '2rem' }}>
                            <div>
                                <h3>DoYogo - Website</h3>
                                <Link style={{ padding: '0.5rem 1.5rem', background: '#EEF0FE', color: '#3247FF', border: 'none' }} to="#" className='btn btn-primary rounded-pill'>Template</Link>
                            </div>
                            <div className='d-flex justify-content-between my-4'>
                                <div><span className='mx-2'>Favorites</span><i class="fa-regular fa-heart" style={{ color: "#005eff" }}></i></div>
                                <div><span className='mx-2'>Net Profit</span><i class="fa-solid fa-lock" style={{ color: "#005eff" }}></i></div>
                                <div><span className='mx-2'>India</span><i class="fa-solid fa-location-dot" style={{ color: "#005eff" }}></i></div>
                            </div>
                            <div className='priceTag-div d-flex justify-content-between' style={{ margin: '2rem 0 2rem 0' }}>
                                <h3 className='' style={{ fontWeight: 'bolder', fontSize: '3rem' }}>$25</h3>
                                <Link style={{ padding: '18px 48px' }} className='btn btn-primary' to="/singup">View details<img style={{ width: '20px' }} src={arrow} alt="" /> </Link>
                            </div>
                            <span>DoYoga is Professional and clean one page Webflow app template that can be used for any apps</span>
                        </div>
                    </div>
                </section>
                <section className="ligh-back  my-5" style={{ height: '120%' }} >
                    <div className="marketInner-card ">
                        <div className="firstMarket">
                            <img src={img} alt="" style={{ position: 'relative', width: '100%', borderRadius: '20px 20px 0 0' }} />
                            <div className="firstSide-top" style={{ position: 'absolute', top: '0', right: '0px', width: '50%', textAlign: 'end' }}>
                                <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '13px', background: "#fff", color: "#3247FF " }}>Nesxt Js</button>
                                <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '13px', background: "#fff", color: "#3247FF " }}>Firebase</button>
                                <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '13px', background: "#fff", color: "#3247FF " }}>Medical</button>
                                <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '13px', background: "#fff", color: "#3247FF " }}>SaaS</button>
                            </div>
                        </div>
                        <div style={{ padding: '2rem' }}>
                            <div>
                                <h3>DoYogo - Website</h3>
                                <Link style={{ padding: '0.5rem 1.5rem', background: '#EEF0FE', color: '#3247FF', border: 'none' }} to="#" className='btn btn-primary rounded-pill'>Template</Link>
                            </div>
                            <div className='d-flex justify-content-between my-4'>
                                <div><span className='mx-2'>Favorites</span><i class="fa-regular fa-heart" style={{ color: "#005eff" }}></i></div>
                                <div><span className='mx-2'>Net Profit</span><i class="fa-solid fa-lock" style={{ color: "#005eff" }}></i></div>
                                <div><span className='mx-2'>India</span><i class="fa-solid fa-location-dot" style={{ color: "#005eff" }}></i></div>
                            </div>
                            <div className='priceTag-div d-flex justify-content-between' style={{ margin: '2rem 0 2rem 0' }}>
                                <h3 className='' style={{ fontWeight: 'bolder', fontSize: '3rem' }}>$25</h3>
                                <Link style={{ padding: '18px 48px' }} className='btn btn-primary' to="/singup">View details<img style={{ width: '20px' }} src={arrow} alt="" /> </Link>
                            </div>
                            <span>DoYoga is Professional and clean one page Webflow app template that can be used for any apps</span>
                        </div>
                    </div>

                    <div className="marketInner-card ">
                        <div className="firstMarket">
                            <img src={img} alt="" style={{ position: 'relative', width: '100%', borderRadius: '20px 20px 0 0' }} />
                            <div className="firstSide-top" style={{ position: 'absolute', top: '0', right: '0px', width: '50%', textAlign: 'end' }}>
                                <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '13px', background: "#fff", color: "#3247FF " }}>Nesxt Js</button>
                                <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '13px', background: "#fff", color: "#3247FF " }}>Firebase</button>
                                <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '13px', background: "#fff", color: "#3247FF " }}>Medical</button>
                                <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '13px', background: "#fff", color: "#3247FF " }}>SaaS</button>
                            </div>
                        </div>
                        <div style={{ padding: '2rem' }}>
                            <div>
                                <h3>DoYogo - Website</h3>
                                <Link style={{ padding: '0.5rem 1.5rem', background: '#EEF0FE', color: '#3247FF', border: 'none' }} to="#" className='btn btn-primary rounded-pill'>Template</Link>
                            </div>
                            <div className='d-flex justify-content-between my-4'>
                                <div><span className='mx-2'>Favorites</span><i class="fa-regular fa-heart" style={{ color: "#005eff" }}></i></div>
                                <div><span className='mx-2'>Net Profit</span><i class="fa-solid fa-lock" style={{ color: "#005eff" }}></i></div>
                                <div><span className='mx-2'>India</span><i class="fa-solid fa-location-dot" style={{ color: "#005eff" }}></i></div>
                            </div>
                            <div className='priceTag-div d-flex justify-content-between' style={{ margin: '2rem 0 2rem 0' }}>
                                <h3 className='' style={{ fontWeight: 'bolder', fontSize: '3rem' }}>$25</h3>
                                <Link style={{ padding: '18px 48px' }} className='btn btn-primary' to="/singup">View details<img style={{ width: '20px' }} src={arrow} alt="" /> </Link>
                            </div>
                            <span>DoYoga is Professional and clean one page Webflow app template that can be used for any apps</span>
                        </div>
                    </div>

                    <div className="marketInner-card ">
                        <div className="firstMarket">
                            <img src={img} alt="" style={{ position: 'relative', width: '100%', borderRadius: '20px 20px 0 0' }} />
                            <div className="firstSide-top" style={{ position: 'absolute', top: '0', right: '0px', width: '50%', textAlign: 'end' }}>
                                <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '13px', background: "#fff", color: "#3247FF " }}>Nesxt Js</button>
                                <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '13px', background: "#fff", color: "#3247FF " }}>Firebase</button>
                                <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '13px', background: "#fff", color: "#3247FF " }}>Medical</button>
                                <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '13px', background: "#fff", color: "#3247FF " }}>SaaS</button>
                            </div>
                        </div>
                        <div style={{ padding: '2rem' }}>
                            <div>
                                <h3>DoYogo - Website</h3>
                                <Link style={{ padding: '0.5rem 1.5rem', background: '#EEF0FE', color: '#3247FF', border: 'none' }} to="#" className='btn btn-primary rounded-pill'>Template</Link>
                            </div>
                            <div className='d-flex justify-content-between my-4'>
                                <div><span className='mx-2'>Favorites</span><i class="fa-regular fa-heart" style={{ color: "#005eff" }}></i></div>
                                <div><span className='mx-2'>Net Profit</span><i class="fa-solid fa-lock" style={{ color: "#005eff" }}></i></div>
                                <div><span className='mx-2'>India</span><i class="fa-solid fa-location-dot" style={{ color: "#005eff" }}></i></div>
                            </div>
                            <div className='priceTag-div d-flex justify-content-between' style={{ margin: '2rem 0 2rem 0' }}>
                                <h3 className='' style={{ fontWeight: 'bolder', fontSize: '3rem' }}>$25</h3>
                                <Link style={{ padding: '18px 48px' }} className='btn btn-primary' to="/singup">View details<img style={{ width: '20px' }} src={arrow} alt="" /> </Link>
                            </div>
                            <span>DoYoga is Professional and clean one page Webflow app template that can be used for any apps</span>
                        </div>
                    </div>
                </section>
                <section className="ligh-back my-5" style={{ height: '120%' }} >
                    <div className="marketInner-card ">
                        <div className="firstMarket">
                            <img src={img} alt="" style={{ position: 'relative', width: '100%', borderRadius: '20px 20px 0 0' }} />
                            <div className="firstSide-top" style={{ position: 'absolute', top: '0', right: '0px', width: '50%', textAlign: 'end' }}>
                                <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '13px', background: "#fff", color: "#3247FF " }}>Nesxt Js</button>
                                <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '13px', background: "#fff", color: "#3247FF " }}>Firebase</button>
                                <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '13px', background: "#fff", color: "#3247FF " }}>Medical</button>
                                <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '13px', background: "#fff", color: "#3247FF " }}>SaaS</button>
                            </div>
                        </div>
                        <div style={{ padding: '2rem' }}>
                            <div>
                                <h3>DoYogo - Website</h3>
                                <Link style={{ padding: '0.5rem 1.5rem', background: '#EEF0FE', color: '#3247FF', border: 'none' }} to="#" className='btn btn-primary rounded-pill'>Template</Link>
                            </div>
                            <div className='d-flex justify-content-between my-4'>
                                <div><span className='mx-2'>Favorites</span><i class="fa-regular fa-heart" style={{ color: "#005eff" }}></i></div>
                                <div><span className='mx-2'>Net Profit</span><i class="fa-solid fa-lock" style={{ color: "#005eff" }}></i></div>
                                <div><span className='mx-2'>India</span><i class="fa-solid fa-location-dot" style={{ color: "#005eff" }}></i></div>
                            </div>
                            <div className='priceTag-div d-flex justify-content-between' style={{ margin: '2rem 0 2rem 0' }}>
                                <h3 className='' style={{ fontWeight: 'bolder', fontSize: '3rem' }}>$25</h3>
                                <Link style={{ padding: '18px 48px' }} className='btn btn-primary' to="/singup">View details<img style={{ width: '20px' }} src={arrow} alt="" /> </Link>
                            </div>
                            <span>DoYoga is Professional and clean one page Webflow app template that can be used for any apps</span>
                        </div>
                    </div>

                    <div className="marketInner-card ">
                        <div className="firstMarket">
                            <img src={img} alt="" style={{ position: 'relative', width: '100%', borderRadius: '20px 20px 0 0' }} />
                            <div className="firstSide-top" style={{ position: 'absolute', top: '0', right: '0px', width: '50%', textAlign: 'end' }}>
                                <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '13px', background: "#fff", color: "#3247FF " }}>Nesxt Js</button>
                                <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '13px', background: "#fff", color: "#3247FF " }}>Firebase</button>
                                <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '13px', background: "#fff", color: "#3247FF " }}>Medical</button>
                                <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '13px', background: "#fff", color: "#3247FF " }}>SaaS</button>
                            </div>
                        </div>
                        <div style={{ padding: '2rem' }}>
                            <div>
                                <h3>DoYogo - Website</h3>
                                <Link style={{ padding: '0.5rem 1.5rem', background: '#EEF0FE', color: '#3247FF', border: 'none' }} to="#" className='btn btn-primary rounded-pill'>Template</Link>
                            </div>
                            <div className='d-flex justify-content-between my-4'>
                                <div><span className='mx-2'>Favorites</span><i class="fa-regular fa-heart" style={{ color: "#005eff" }}></i></div>
                                <div><span className='mx-2'>Net Profit</span><i class="fa-solid fa-lock" style={{ color: "#005eff" }}></i></div>
                                <div><span className='mx-2'>India</span><i class="fa-solid fa-location-dot" style={{ color: "#005eff" }}></i></div>
                            </div>
                            <div className='priceTag-div d-flex justify-content-between' style={{ margin: '2rem 0 2rem 0' }}>
                                <h3 className='' style={{ fontWeight: 'bolder', fontSize: '3rem' }}>$25</h3>
                                <Link style={{ padding: '18px 48px' }} className='btn btn-primary' to="/singup">View details<img style={{ width: '20px' }} src={arrow} alt="" /> </Link>
                            </div>
                            <span>DoYoga is Professional and clean one page Webflow app template that can be used for any apps</span>
                        </div>
                    </div>

                    <div className="marketInner-card ">
                        <div className="firstMarket">
                            <img src={img} alt="" style={{ position: 'relative', width: '100%', borderRadius: '20px 20px 0 0' }} />
                            <div className="firstSide-top" style={{ position: 'absolute', top: '0', right: '0px', width: '50%', textAlign: 'end' }}>
                                <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '13px', background: "#fff", color: "#3247FF " }}>Nesxt Js</button>
                                <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '13px', background: "#fff", color: "#3247FF " }}>Firebase</button>
                                <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '13px', background: "#fff", color: "#3247FF " }}>Medical</button>
                                <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '13px', background: "#fff", color: "#3247FF " }}>SaaS</button>
                            </div>
                        </div>
                        <div style={{ padding: '2rem' }}>
                            <div>
                                <h3>DoYogo - Website</h3>
                                <Link style={{ padding: '0.5rem 1.5rem', background: '#EEF0FE', color: '#3247FF', border: 'none' }} to="#" className='btn btn-primary rounded-pill'>Template</Link>
                            </div>
                            <div className='d-flex justify-content-between my-4'>
                                <div><span className='mx-2'>Favorites</span><i class="fa-regular fa-heart" style={{ color: "#005eff" }}></i></div>
                                <div><span className='mx-2'>Net Profit</span><i class="fa-solid fa-lock" style={{ color: "#005eff" }}></i></div>
                                <div><span className='mx-2'>India</span><i class="fa-solid fa-location-dot" style={{ color: "#005eff" }}></i></div>
                            </div>
                            <div className='priceTag-div d-flex justify-content-between' style={{ margin: '2rem 0 2rem 0' }}>
                                <h3 className='' style={{ fontWeight: 'bolder', fontSize: '3rem' }}>$25</h3>
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

            <section>
                <Footer />
            </section>
        </>
    )
}

export default Market