import React from 'react'
import backgroundImg from "./Owner/unsplash_5U_28ojjgms.png"
//
import location from "./MarketDash/VectorLoaction.svg"
import search from "./MarketDash/VectorSearch.svg"
import doller from "./MarketDash/VectorDoller.svg"
import arrow from "./Aqify project/Vector (1).png"

// card logo images

import cardLogo1 from "./Market/Frame 33.png"
import cardLogo2 from "./Market/Frame 34 (1).png"
import cardLogo3 from "./Market/Frame 33 (6).png"
import cardLogo4 from "./Market/Frame 33 (7).png"
import cardProfile from "./Market/Rectangle 25.png"
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

const Advisory = () => {
    return (
        <>
            <section>
                <Navbar />
            </section>

            {/** */}
            <section>
                <div className='main' style={{ backgroundImage: `url(${backgroundImg})`, width: '100%', backgroundRepeat: 'no-repeat' }}>
                    <div className="owner-content">
                        <div>
                            <div className='my-5'>
                                <h1 className='main-h1 col-8'>Advisor Directory
                                </h1>
                            </div>
                            <div className='my-4'>
                                <span className='main-span col-7 d-flex'>
                                    Affordable advice on valuations, negotiations, legal, tax, accounting & due diligence.
                                </span>
                            </div>
                            <div className=''>
                                <Link style={{ fontSize: '1.5rem' }} className='btn btn-primary' to="/singup">Add your Advisor Profile<img style={{ width: '7%', marginLeft: '20px' }} src={arrow} alt="" /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='d-flex justify-content-center' style={{ background: '#EEF0FE' }}>
                <div className="advisory-card">
                    <div className='first-line d-flex align-items-center'>
                        <div class="mb-3 my-3 form-floating" style={{ width: '100%' }}>
                            <input style={{ width: '97%' }} type="email" id="floatingInputValue" class="form-control" placeholder="Search" />
                            <label for="floatingInputValue"><img src={search} alt="" /></label>
                        </div>
                        <div class="form-floating mx-2" style={{ width: '100%' }}>
                            <select style={{ width: '100%', color: '#3247ff' }} class="form-control form-select form-select-lg" aria-label="Large select example">
                                <option id="floatingInputValue" selected>Deal Size</option>
                                <option value="1">$0</option>
                                <option value="2">$99</option>
                                <option value="3">$10000</option>
                            </select>
                            <label for="floatingInputValue"><img src={doller} alt="" /></label>
                        </div>
                    </div>

                    <div className="second-line d-flex">
                        <div class="form-floating" style={{ width: '100%' }}>
                            <select style={{ width: '100%', color: '#3247ff' }} class="form-control form-select form-select-lg mb-3" aria-label="Large select example">
                                <option id="floatingInputValue" selected>Company Location</option>
                                <option value="1">Mumbai</option>
                                <option value="2">Hydrabad</option>
                                <option value="3">Banglore</option>
                            </select>
                            <label for="floatingInputValue"><img src={location} alt="" /></label>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="ligh-back" style={{ height: '120vh' }}>
                    <div className="AdvisoryMarket-card " style={{ padding: "3rem" }} >
                        <div className="advisoryDisplay-card" style={{ margin: "2rem 1rem" }}>

                            <div className='d-flex align-items-center'>
                                <div className='secondPart'>
                                    <img width={280} src={cardProfile} alt="" />
                                </div>
                                <div className="firstPart" style={{ marginLeft: "2rem" }}>
                                    <h3 style={{ fontSize: '25px', fontWeight: '700' }}>Taliesen Hollywood</h3>
                                    <button className='btn-card btn btn-primary rounded-pill my-2' style={{ fontSize: '13px', background: '#cbd0ff', color: '#3247FF' }}>M&A Consultant</button><br />
                                    <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '13px' }}>Nesxt Js</button>
                                    <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '13px' }}>Firebase</button>
                                    <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '13px' }}>Medical</button>
                                    <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '13px' }}>SaaS</button>
                                </div>
                            </div>
                            <div className='my-4'>
                                <span style={{ color: "#c0c0c0", fontSize: '13px' }}>Short Bio</span><br />
                                <span className='col-6' style={{ color: '#636363', fontSize: '18px' }}>
                                    Taliesen is the CEO of Hahnbeck, a leading global M&A boutique focused on consumer retail and SaaS.
                                    An experienced dealmaker with extensive connections in the CPG space,
                                    Taliesen’s insights into e-commerce mergers......</span>
                            </div>

                            <div className='d-flex justify-content-between' style={{ margin: '2rem 0 2rem 0' }}>
                                <h3 className='card-h3'>Metrics</h3>
                                <Link style={{ padding: '18px 48px' }} className='btn btn-primary' to="/singup">View more<img style={{ width: '20px' }} src={arrow} alt="" /> </Link>
                            </div>

                            <div className='d-flex justify-content-between flex-wrap' style={{ width: '100%' }}>
                                <div style={{ margin: '0 3rem 0 0' }}>
                                    <span style={{ color: '#636363', fontWeight: '600' }}>Businesses Type</span>
                                    <div className='d-flex justify-content-start align-items-center'>
                                        <img width={40} src={cardLogo1} alt="" />
                                        <span className='card-span' style={{ fontSize: '1.5rem' }}>E-Commerce</span>
                                    </div>
                                </div>
                                <div style={{ margin: '0 3rem 0 0' }}>
                                    <span style={{ color: '#636363', fontWeight: '600' }}>Based in</span>
                                    <div className='d-flex justify-content-start align-items-center'>
                                        <img width={40} src={cardLogo2} alt="" />
                                        <span className='card-span' style={{ fontSize: '1.5rem' }}>Anywhere</span>
                                    </div>
                                </div>
                                <div style={{ margin: '0 3rem 0 0' }}>
                                    <span style={{ color: '#636363', fontWeight: '600' }}>Acquisition type</span>
                                    <div className='d-flex justify-content-start align-items-center'>
                                        <img width={40} src={cardLogo3} alt="" />
                                        <span className='card-span' style={{ fontSize: '1.5rem' }}>Full</span>
                                    </div>
                                </div>
                                <div style={{ margin: '2rem 3rem 0 0' }}>
                                    <span style={{ color: '#636363', fontWeight: '600' }}>Valuation</span>
                                    <div className='d-flex justify-content-start align-items-center'>
                                        <img width={40} src={cardLogo4} alt="" />
                                        <span className='card-span' style={{ fontSize: '1.5rem' }}>$150K +</span>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="advisoryDisplay-card" style={{ margin: "2rem 1rem" }}>

                            <div className='d-flex align-items-center'>
                                <div className='secondPart'>
                                    <img width={280} src={cardProfile} alt="" />
                                </div>
                                <div className="firstPart" style={{ marginLeft: "2rem" }}>
                                    <h3 style={{ fontSize: '25px', fontWeight: '700' }}>Taliesen Hollywood</h3>
                                    <button className='btn-card btn btn-primary rounded-pill my-2' style={{ fontSize: '13px', background: '#cbd0ff', color: '#3247FF' }}>M&A Consultant</button><br />
                                    <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '13px' }}>Nesxt Js</button>
                                    <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '13px' }}>Firebase</button>
                                    <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '13px' }}>Medical</button>
                                    <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '13px' }}>SaaS</button>
                                </div>
                            </div>
                            <div className='my-4'>
                                <span style={{ color: "#c0c0c0", fontSize: '13px' }}>Short Bio</span><br />
                                <span className='col-6' style={{ color: '#636363', fontSize: '18px' }}>
                                    Taliesen is the CEO of Hahnbeck, a leading global M&A boutique focused on consumer retail and SaaS.
                                    An experienced dealmaker with extensive connections in the CPG space,
                                    Taliesen’s insights into e-commerce mergers......</span>
                            </div>

                            <div className='d-flex justify-content-between' style={{ margin: '2rem 0 2rem 0' }}>
                                <h3 className='card-h3'>Metrics</h3>
                                <Link style={{ padding: '18px 48px' }} className='btn btn-primary' to="/singup">View more<img style={{ width: '20px' }} src={arrow} alt="" /> </Link>
                            </div>

                            <div className='d-flex justify-content-between flex-wrap' style={{ width: '100%' }}>
                                <div style={{ margin: '0 3rem 0 0' }}>
                                    <span style={{ color: '#636363', fontWeight: '600' }}>Businesses Type</span>
                                    <div className='d-flex justify-content-start align-items-center'>
                                        <img width={40} src={cardLogo1} alt="" />
                                        <span className='card-span' style={{ fontSize: '1.5rem' }}>E-Commerce</span>
                                    </div>
                                </div>
                                <div style={{ margin: '0 3rem 0 0' }}>
                                    <span style={{ color: '#636363', fontWeight: '600' }}>Based in</span>
                                    <div className='d-flex justify-content-start align-items-center'>
                                        <img width={40} src={cardLogo2} alt="" />
                                        <span className='card-span' style={{ fontSize: '1.5rem' }}>Anywhere</span>
                                    </div>
                                </div>
                                <div style={{ margin: '0 3rem 0 0' }}>
                                    <span style={{ color: '#636363', fontWeight: '600' }}>Acquisition type</span>
                                    <div className='d-flex justify-content-start align-items-center'>
                                        <img width={40} src={cardLogo3} alt="" />
                                        <span className='card-span' style={{ fontSize: '1.5rem' }}>Full</span>
                                    </div>
                                </div>
                                <div style={{ margin: '2rem 3rem 0 0' }}>
                                    <span style={{ color: '#636363', fontWeight: '600' }}>Valuation</span>
                                    <div className='d-flex justify-content-start align-items-center'>
                                        <img width={40} src={cardLogo4} alt="" />
                                        <span className='card-span' style={{ fontSize: '1.5rem' }}>$150K +</span>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
                <div className="ligh-back" style={{ height: '120vh' }}>
                    <div className="AdvisoryMarket-card " style={{ padding: "3rem" }} >
                        <div className="advisoryDisplay-card" style={{ margin: "2rem 1rem" }}>

                            <div className='d-flex align-items-center'>
                                <div className='secondPart'>
                                    <img width={280} src={cardProfile} alt="" />
                                </div>
                                <div className="firstPart" style={{ marginLeft: "2rem" }}>
                                    <h3 style={{ fontSize: '25px', fontWeight: '700' }}>Taliesen Hollywood</h3>
                                    <button className='btn-card btn btn-primary rounded-pill my-2' style={{ fontSize: '13px', background: '#cbd0ff', color: '#3247FF' }}>M&A Consultant</button><br />
                                    <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '13px' }}>Nesxt Js</button>
                                    <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '13px' }}>Firebase</button>
                                    <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '13px' }}>Medical</button>
                                    <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '13px' }}>SaaS</button>
                                </div>
                            </div>
                            <div className='my-4'>
                                <span style={{ color: "#c0c0c0", fontSize: '13px' }}>Short Bio</span><br />
                                <span className='col-6' style={{ color: '#636363', fontSize: '18px' }}>
                                    Taliesen is the CEO of Hahnbeck, a leading global M&A boutique focused on consumer retail and SaaS.
                                    An experienced dealmaker with extensive connections in the CPG space,
                                    Taliesen’s insights into e-commerce mergers......</span>
                            </div>

                            <div className='d-flex justify-content-between' style={{ margin: '2rem 0 2rem 0' }}>
                                <h3 className='card-h3'>Metrics</h3>
                                <Link style={{ padding: '18px 48px' }} className='btn btn-primary' to="/singup">View more<img style={{ width: '20px' }} src={arrow} alt="" /> </Link>
                            </div>

                            <div className='d-flex justify-content-between flex-wrap' style={{ width: '100%' }}>
                                <div style={{ margin: '0 3rem 0 0' }}>
                                    <span style={{ color: '#636363', fontWeight: '600' }}>Businesses Type</span>
                                    <div className='d-flex justify-content-start align-items-center'>
                                        <img width={40} src={cardLogo1} alt="" />
                                        <span className='card-span' style={{ fontSize: '1.5rem' }}>E-Commerce</span>
                                    </div>
                                </div>
                                <div style={{ margin: '0 3rem 0 0' }}>
                                    <span style={{ color: '#636363', fontWeight: '600' }}>Based in</span>
                                    <div className='d-flex justify-content-start align-items-center'>
                                        <img width={40} src={cardLogo2} alt="" />
                                        <span className='card-span' style={{ fontSize: '1.5rem' }}>Anywhere</span>
                                    </div>
                                </div>
                                <div style={{ margin: '0 3rem 0 0' }}>
                                    <span style={{ color: '#636363', fontWeight: '600' }}>Acquisition type</span>
                                    <div className='d-flex justify-content-start align-items-center'>
                                        <img width={40} src={cardLogo3} alt="" />
                                        <span className='card-span' style={{ fontSize: '1.5rem' }}>Full</span>
                                    </div>
                                </div>
                                <div style={{ margin: '2rem 3rem 0 0' }}>
                                    <span style={{ color: '#636363', fontWeight: '600' }}>Valuation</span>
                                    <div className='d-flex justify-content-start align-items-center'>
                                        <img width={40} src={cardLogo4} alt="" />
                                        <span className='card-span' style={{ fontSize: '1.5rem' }}>$150K +</span>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="advisoryDisplay-card" style={{ margin: "2rem 1rem" }}>

                            <div className='d-flex align-items-center'>
                                <div className='secondPart'>
                                    <img width={280} src={cardProfile} alt="" />
                                </div>
                                <div className="firstPart" style={{ marginLeft: "2rem" }}>
                                    <h3 style={{ fontSize: '25px', fontWeight: '700' }}>Taliesen Hollywood</h3>
                                    <button className='btn-card btn btn-primary rounded-pill my-2' style={{ fontSize: '13px', background: '#cbd0ff', color: '#3247FF' }}>M&A Consultant</button><br />
                                    <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '13px' }}>Nesxt Js</button>
                                    <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '13px' }}>Firebase</button>
                                    <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '13px' }}>Medical</button>
                                    <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '13px' }}>SaaS</button>
                                </div>
                            </div>
                            <div className='my-4'>
                                <span style={{ color: "#c0c0c0", fontSize: '13px' }}>Short Bio</span><br />
                                <span className='col-6' style={{ color: '#636363', fontSize: '18px' }}>
                                    Taliesen is the CEO of Hahnbeck, a leading global M&A boutique focused on consumer retail and SaaS.
                                    An experienced dealmaker with extensive connections in the CPG space,
                                    Taliesen’s insights into e-commerce mergers......</span>
                            </div>

                            <div className='d-flex justify-content-between' style={{ margin: '2rem 0 2rem 0' }}>
                                <h3 className='card-h3'>Metrics</h3>
                                <Link style={{ padding: '18px 48px' }} className='btn btn-primary' to="/singup">View more<img style={{ width: '20px' }} src={arrow} alt="" /> </Link>
                            </div>

                            <div className='d-flex justify-content-between flex-wrap' style={{ width: '100%' }}>
                                <div style={{ margin: '0 3rem 0 0' }}>
                                    <span style={{ color: '#636363', fontWeight: '600' }}>Businesses Type</span>
                                    <div className='d-flex justify-content-start align-items-center'>
                                        <img width={40} src={cardLogo1} alt="" />
                                        <span className='card-span' style={{ fontSize: '1.5rem' }}>E-Commerce</span>
                                    </div>
                                </div>
                                <div style={{ margin: '0 3rem 0 0' }}>
                                    <span style={{ color: '#636363', fontWeight: '600' }}>Based in</span>
                                    <div className='d-flex justify-content-start align-items-center'>
                                        <img width={40} src={cardLogo2} alt="" />
                                        <span className='card-span' style={{ fontSize: '1.5rem' }}>Anywhere</span>
                                    </div>
                                </div>
                                <div style={{ margin: '0 3rem 0 0' }}>
                                    <span style={{ color: '#636363', fontWeight: '600' }}>Acquisition type</span>
                                    <div className='d-flex justify-content-start align-items-center'>
                                        <img width={40} src={cardLogo3} alt="" />
                                        <span className='card-span' style={{ fontSize: '1.5rem' }}>Full</span>
                                    </div>
                                </div>
                                <div style={{ margin: '2rem 3rem 0 0' }}>
                                    <span style={{ color: '#636363', fontWeight: '600' }}>Valuation</span>
                                    <div className='d-flex justify-content-start align-items-center'>
                                        <img width={40} src={cardLogo4} alt="" />
                                        <span className='card-span' style={{ fontSize: '1.5rem' }}>$150K +</span>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
                <div className="ligh-back" style={{ height: '120vh' }}>
                    <div className="AdvisoryMarket-card " style={{ padding: "3rem" }} >
                        <div className="advisoryDisplay-card" style={{ margin: "2rem 1rem" }}>

                            <div className='d-flex align-items-center'>
                                <div className='secondPart'>
                                    <img width={280} src={cardProfile} alt="" />
                                </div>
                                <div className="firstPart" style={{ marginLeft: "2rem" }}>
                                    <h3 style={{ fontSize: '25px', fontWeight: '700' }}>Taliesen Hollywood</h3>
                                    <button className='btn-card btn btn-primary rounded-pill my-2' style={{ fontSize: '13px', background: '#cbd0ff', color: '#3247FF' }}>M&A Consultant</button><br />
                                    <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '13px' }}>Nesxt Js</button>
                                    <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '13px' }}>Firebase</button>
                                    <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '13px' }}>Medical</button>
                                    <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '13px' }}>SaaS</button>
                                </div>
                            </div>
                            <div className='my-4'>
                                <span style={{ color: "#c0c0c0", fontSize: '13px' }}>Short Bio</span><br />
                                <span className='col-6' style={{ color: '#636363', fontSize: '18px' }}>
                                    Taliesen is the CEO of Hahnbeck, a leading global M&A boutique focused on consumer retail and SaaS.
                                    An experienced dealmaker with extensive connections in the CPG space,
                                    Taliesen’s insights into e-commerce mergers......</span>
                            </div>

                            <div className='d-flex justify-content-between' style={{ margin: '2rem 0 2rem 0' }}>
                                <h3 className='card-h3'>Metrics</h3>
                                <Link style={{ padding: '18px 48px' }} className='btn btn-primary' to="/singup">View more<img style={{ width: '20px' }} src={arrow} alt="" /> </Link>
                            </div>

                            <div className='d-flex justify-content-between flex-wrap' style={{ width: '100%' }}>
                                <div style={{ margin: '0 3rem 0 0' }}>
                                    <span style={{ color: '#636363', fontWeight: '600' }}>Businesses Type</span>
                                    <div className='d-flex justify-content-start align-items-center'>
                                        <img width={40} src={cardLogo1} alt="" />
                                        <span className='card-span' style={{ fontSize: '1.5rem' }}>E-Commerce</span>
                                    </div>
                                </div>
                                <div style={{ margin: '0 3rem 0 0' }}>
                                    <span style={{ color: '#636363', fontWeight: '600' }}>Based in</span>
                                    <div className='d-flex justify-content-start align-items-center'>
                                        <img width={40} src={cardLogo2} alt="" />
                                        <span className='card-span' style={{ fontSize: '1.5rem' }}>Anywhere</span>
                                    </div>
                                </div>
                                <div style={{ margin: '0 3rem 0 0' }}>
                                    <span style={{ color: '#636363', fontWeight: '600' }}>Acquisition type</span>
                                    <div className='d-flex justify-content-start align-items-center'>
                                        <img width={40} src={cardLogo3} alt="" />
                                        <span className='card-span' style={{ fontSize: '1.5rem' }}>Full</span>
                                    </div>
                                </div>
                                <div style={{ margin: '2rem 3rem 0 0' }}>
                                    <span style={{ color: '#636363', fontWeight: '600' }}>Valuation</span>
                                    <div className='d-flex justify-content-start align-items-center'>
                                        <img width={40} src={cardLogo4} alt="" />
                                        <span className='card-span' style={{ fontSize: '1.5rem' }}>$150K +</span>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="advisoryDisplay-card" style={{ margin: "2rem 1rem" }}>

                            <div className='d-flex align-items-center'>
                                <div className='secondPart'>
                                    <img width={280} src={cardProfile} alt="" />
                                </div>
                                <div className="firstPart" style={{ marginLeft: "2rem" }}>
                                    <h3 style={{ fontSize: '25px', fontWeight: '700' }}>Taliesen Hollywood</h3>
                                    <button className='btn-card btn btn-primary rounded-pill my-2' style={{ fontSize: '13px', background: '#cbd0ff', color: '#3247FF' }}>M&A Consultant</button><br />
                                    <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '13px' }}>Nesxt Js</button>
                                    <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '13px' }}>Firebase</button>
                                    <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '13px' }}>Medical</button>
                                    <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '13px' }}>SaaS</button>
                                </div>
                            </div>
                            <div className='my-4'>
                                <span style={{ color: "#c0c0c0", fontSize: '13px' }}>Short Bio</span><br />
                                <span className='col-6' style={{ color: '#636363', fontSize: '18px' }}>
                                    Taliesen is the CEO of Hahnbeck, a leading global M&A boutique focused on consumer retail and SaaS.
                                    An experienced dealmaker with extensive connections in the CPG space,
                                    Taliesen’s insights into e-commerce mergers......</span>
                            </div>

                            <div className='d-flex justify-content-between' style={{ margin: '2rem 0 2rem 0' }}>
                                <h3 className='card-h3'>Metrics</h3>
                                <Link style={{ padding: '18px 48px' }} className='btn btn-primary' to="/singup">View more<img style={{ width: '20px' }} src={arrow} alt="" /> </Link>
                            </div>

                            <div className='d-flex justify-content-between flex-wrap' style={{ width: '100%' }}>
                                <div style={{ margin: '0 3rem 0 0' }}>
                                    <span style={{ color: '#636363', fontWeight: '600' }}>Businesses Type</span>
                                    <div className='d-flex justify-content-start align-items-center'>
                                        <img width={40} src={cardLogo1} alt="" />
                                        <span className='card-span' style={{ fontSize: '1.5rem' }}>E-Commerce</span>
                                    </div>
                                </div>
                                <div style={{ margin: '0 3rem 0 0' }}>
                                    <span style={{ color: '#636363', fontWeight: '600' }}>Based in</span>
                                    <div className='d-flex justify-content-start align-items-center'>
                                        <img width={40} src={cardLogo2} alt="" />
                                        <span className='card-span' style={{ fontSize: '1.5rem' }}>Anywhere</span>
                                    </div>
                                </div>
                                <div style={{ margin: '0 3rem 0 0' }}>
                                    <span style={{ color: '#636363', fontWeight: '600' }}>Acquisition type</span>
                                    <div className='d-flex justify-content-start align-items-center'>
                                        <img width={40} src={cardLogo3} alt="" />
                                        <span className='card-span' style={{ fontSize: '1.5rem' }}>Full</span>
                                    </div>
                                </div>
                                <div style={{ margin: '2rem 3rem 0 0' }}>
                                    <span style={{ color: '#636363', fontWeight: '600' }}>Valuation</span>
                                    <div className='d-flex justify-content-start align-items-center'>
                                        <img width={40} src={cardLogo4} alt="" />
                                        <span className='card-span' style={{ fontSize: '1.5rem' }}>$150K +</span>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>


            </section >

            <section className='d-flex justify-content-center' style={{ height: '20vh', background: '#EEF0FE ' }}>
                <div>
                    <div >
                        <Link style={{ padding: '18px 48px' }} className='btn btn-primary' to="/singup">View Listing<img style={{ width: '20px', marginLeft: '1rem' }} src={arrow} alt="" /> </Link>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Advisory