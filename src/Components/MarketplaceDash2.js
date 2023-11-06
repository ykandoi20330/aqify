import React, { useState } from 'react'
import message from "./ProfileDashbaord/chatteardropdots1.svg"
import { Link } from 'react-router-dom'
import profileIcon from "./ProfileDashbaord/ellipse-60@2x.png"
import threeDots from "./ProfileDashbaord/dotsthreeoutlinevertical.svg"

//
import doller from "./MarketDash/VectorDoller.svg"
// import downIcon from "./MarketDash/VectorDownIcon.svg"
import filter from "./MarketDash/VectorFilter.svg"
import location from "./MarketDash/VectorLoaction.svg"
import pie from "./MarketDash/VectorPie.svg"
import search from "./MarketDash/VectorSearch.svg"
// import Close from "./MarketDash/VectorClose.svg"

// card logo images
import cardLogo1 from "./Market/Frame 33.png"
import cardLogo2 from "./Market/Frame 34 (1).png"
import cardLogo3 from "./Market/Frame 33 (6).png"
import cardLogo4 from "./Market/Frame 33 (7).png"
import cardProfile from "./Market/Rectangle 25.png"
import arrow from "./Aqify project/Vector (1).png"
import MarketDashDetail from './MarketDashDetail'

const MarketplaceDash2 = () => {
    const [show, setShow] = useState(1)
    const [detail, setDetail] = useState(1)

    return (
        <>
            {detail === 1 &&
                <>
                    <section>
                        <div className="sideContent">
                            
                            <div>
                                <h1 className='my-3' style={{ fontWeight: '700' }}>Marketplace lists</h1>
                                <span style={{ color: '#636363' }}>Free for owners and affordable for acquirers.</span>
                                <div className='my-3'>
                                    <div class="btn-group" role="group" aria-label="Basic outlined example" style={{ background: 'transparent' }}>
                                        <button style={{ padding: "1rem 4rem" }} type="button" class="btn btn-outline-primary" onClick={show => setShow(1)}>Businesses</button>
                                        <button style={{ padding: "1rem 4rem", }} type="button" class="btn btn-outline-primary" onClick={show => setShow(2)}>Acquirers</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section>
                        <div className='first-line d-flex align-items-center'>
                            <div class="mb-3 my-3 form-floating">
                                <input style={{ width: '41vw', background: '#fff' }} type="email" id="floatingInputValue" class="form-control mx-2" placeholder="Search" />
                                <label for="floatingInputValue"><img src={search} alt="" /></label>
                            </div>
                            <div class="form-floating">
                                <select style={{ width: '20vw', color: '#3247ff', background: '#fff' }} class="form-control form-select form-select-lg mx-2" aria-label="Large select example">
                                    <option id="floatingInputValue" selected>Price</option>
                                    <option value="1">0</option>
                                    <option value="2">99</option>
                                    <option value="3">10000</option>
                                </select>
                                <label for="floatingInputValue"><img src={doller} alt="" /></label>
                            </div>
                        </div>

                        <div className="second-line d-flex">
                            <div class="form-floating">
                                <select style={{ width: '20vw', color: '#3247ff', background: '#fff' }} class="form-control form-select form-select-lg mb-3 mx-2" aria-label="Large select example">
                                    <option id="floatingInputValue" selected>Categories</option>
                                    <option value="1">UI Websites</option>
                                    <option value="2">UI Medical Websites</option>
                                    <option value="3">Start-Ups</option>
                                </select>
                                <label for="floatingInputValue"><img src={pie} alt="" /></label>
                            </div>
                            <div class="form-floating">
                                <select style={{ width: '20vw', color: '#3247ff', background: '#fff' }} class="form-control form-select form-select-lg mb-3 mx-2" aria-label="Large select example">
                                    <option id="floatingInputValue" selected>Company Location</option>
                                    <option value="1">Mumbai</option>
                                    <option value="2">Hydrabad</option>
                                    <option value="3">Banglore</option>
                                </select>
                                <label for="floatingInputValue"><img src={location} alt="" /></label>
                            </div>
                            <div class="form-floating">
                                <select style={{ width: '20vw', color: '#3247ff', background: '#fff' }} class="form-control form-select form-select-lg mb-3 mx-2" aria-label="Large select example">
                                    <option id="floatingInputValue" selected>More Filters</option>
                                    <option value="1">Pricing</option>
                                    <option value="2">Budget</option>
                                    <option value="3">More</option>
                                </select>
                                <label for="floatingInputValue"><img src={filter} alt="" /></label>
                            </div>
                        </div>
                    </section>

                    <section>
                        <section className="ligh-back" style={{ height: '180vh' }} >
                            <div className='d-flex'>
                                <div className="market-card" style={{ padding: "2rem" }} >
                                    <div className="card" style={{ margin: "1rem 1rem", padding: "1rem", width: "50%" }}>

                                        <div className='d-flex'>
                                            <div className='secondPart'>
                                                <img width={200} src={cardProfile} alt="" />
                                            </div>
                                            <div className="firstPart" style={{ marginLeft: "2rem" }}>
                                                <h3 style={{ fontSize: '30px', fontWeight: '700' }}>UI Medical Website</h3>
                                                <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '9px' }}>Nesxt Js</button>
                                                <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '9px' }}>Firebase</button>
                                                <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '9px' }}>Medical</button>
                                                <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '9px' }}>SaaS</button>
                                            </div>
                                            <div >
                                                <span className='d-flex align-items-center'><i class="fa-solid fa-eye" style={{ color: '#3247ff' }}></i>1.2K</span>
                                            </div>
                                        </div>
                                        <div className='my-4'>
                                            <span className='col-6' style={{ color: '#636363', fontSize: '18px' }}>Physical retailer in the apparel space looking for prominent DTC brands to buy into and collaborate with...</span>
                                        </div>

                                        <div className='d-flex justify-content-between' style={{ margin: '2rem 0 2rem 0' }}>
                                            <h3 className='card-h3'>Metrics</h3>
                                            <div className='d-flex'>
                                                <button style={{ padding: '12px 38px' }} className='btn btn-primary mx-2' onClick={detail => setDetail(2)}>View Listing<img style={{ width: '20px' }} src={arrow} alt="" /> </button>
                                                <div >
                                                    <input type="radio" class="btn-check  rounded-pill" name="options-base" id="option12" autocomplete="off" />
                                                    <label class="btn1" style={{ padding: "0.8rem 1rem", margin: '0.3rem 0.7rem 0 0', background: "#fff" }} for="option12">
                                                        <i class="fa-solid fa-heart"></i></label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='d-flex justify-content-between flex-wrap' style={{ width: '100%' }}>
                                            <div style={{ margin: '1rem 3rem 0 0' }}>
                                                <span style={{ color: '#636363', fontWeight: '600' }}>Businesses Type</span>
                                                <div className='d-flex justify-content-start align-items-center'>
                                                    <img width={40} src={cardLogo1} alt="" />
                                                    <span className='card-span' style={{ fontSize: '1.5rem' }}>E-Commerce</span>
                                                </div>
                                            </div>
                                            <div style={{ margin: '1rem 3rem 0 0' }}>
                                                <span style={{ color: '#636363', fontWeight: '600' }}>Based in</span>
                                                <div className='d-flex justify-content-start align-items-center'>
                                                    <img width={40} src={cardLogo2} alt="" />
                                                    <span className='card-span' style={{ fontSize: '1.5rem' }}>Anywhere</span>
                                                </div>
                                            </div>
                                            <div style={{ margin: '1rem 3rem 0 0' }}>
                                                <span style={{ color: '#636363', fontWeight: '600' }}>Acquisition type</span>
                                                <div className='d-flex justify-content-start align-items-center'>
                                                    <img width={40} src={cardLogo3} alt="" />
                                                    <span className='card-span' style={{ fontSize: '1.5rem' }}>Full</span>
                                                </div>
                                            </div>
                                            <div style={{ margin: '1rem 3rem 0 0' }}>
                                                <span style={{ color: '#636363', fontWeight: '600' }}>Valuation</span>
                                                <div className='d-flex justify-content-start align-items-center'>
                                                    <img width={40} src={cardLogo4} alt="" />
                                                    <span className='card-span' style={{ fontSize: '1.5rem' }}>$150K +</span>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    {/** */}
                                    <div className="card" style={{ margin: "1rem 1rem", padding: "1rem", width: "50%" }}>

                                        <div className='d-flex'>
                                            <div className='secondPart'>
                                                <img width={200} src={cardProfile} alt="" />
                                            </div>
                                            <div className="firstPart" style={{ marginLeft: "2rem" }}>
                                                <h3 style={{ fontSize: '30px', fontWeight: '700' }}>UI Medical Website</h3>
                                                <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '9px' }}>Nesxt Js</button>
                                                <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '9px' }}>Firebase</button>
                                                <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '9px' }}>Medical</button>
                                                <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '9px' }}>SaaS</button>
                                            </div>
                                            <div >
                                                <span className='d-flex align-items-center'><i class="fa-solid fa-eye" style={{ color: '#3247ff' }}></i>1.2K</span>
                                            </div>
                                        </div>
                                        <div className='my-4'>
                                            <span className='col-6' style={{ color: '#636363', fontSize: '18px' }}>Physical retailer in the apparel space looking for prominent DTC brands to buy into and collaborate with...</span>
                                        </div>

                                        <div className='d-flex justify-content-between' style={{ margin: '2rem 0 2rem 0' }}>
                                            <h3 className='card-h3'>Metrics</h3>
                                            <div className='d-flex'>
                                                <button style={{ padding: '12px 38px' }} className='btn btn-primary mx-2' onClick={detail => setDetail(2)}>View Listing<img style={{ width: '20px' }} src={arrow} alt="" /> </button>
                                                <div >
                                                    <input type="radio" class="btn-check  rounded-pill" name="options-base" id="option13" autocomplete="off" />
                                                    <label class="btn1" style={{ padding: "0.8rem 1rem", margin: '0.3rem 0.7rem 0 0', background: "#fff" }} for="option13">
                                                        <i class="fa-solid fa-heart"></i></label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='d-flex justify-content-between flex-wrap' style={{ width: '100%' }}>
                                            <div style={{ margin: '1rem 3rem 0 0' }}>
                                                <span style={{ color: '#636363', fontWeight: '600' }}>Businesses Type</span>
                                                <div className='d-flex justify-content-start align-items-center'>
                                                    <img width={40} src={cardLogo1} alt="" />
                                                    <span className='card-span' style={{ fontSize: '1.5rem' }}>E-Commerce</span>
                                                </div>
                                            </div>
                                            <div style={{ margin: '1rem 3rem 0 0' }}>
                                                <span style={{ color: '#636363', fontWeight: '600' }}>Based in</span>
                                                <div className='d-flex justify-content-start align-items-center'>
                                                    <img width={40} src={cardLogo2} alt="" />
                                                    <span className='card-span' style={{ fontSize: '1.5rem' }}>Anywhere</span>
                                                </div>
                                            </div>
                                            <div style={{ margin: '1rem 3rem 0 0' }}>
                                                <span style={{ color: '#636363', fontWeight: '600' }}>Acquisition type</span>
                                                <div className='d-flex justify-content-start align-items-center'>
                                                    <img width={40} src={cardLogo3} alt="" />
                                                    <span className='card-span' style={{ fontSize: '1.5rem' }}>Full</span>
                                                </div>
                                            </div>
                                            <div style={{ margin: '1rem 3rem 0 0' }}>
                                                <span style={{ color: '#636363', fontWeight: '600' }}>Valuation</span>
                                                <div className='d-flex justify-content-start align-items-center'>
                                                    <img width={40} src={cardLogo4} alt="" />
                                                    <span className='card-span' style={{ fontSize: '1.5rem' }}>$150K +</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/** */}
                                    <div className="card" style={{ margin: "1rem 1rem", padding: "1rem", width: "50%" }}>

                                        <div className='d-flex'>
                                            <div className='secondPart'>
                                                <img width={200} src={cardProfile} alt="" />
                                            </div>
                                            <div className="firstPart" style={{ marginLeft: "2rem" }}>
                                                <h3 style={{ fontSize: '30px', fontWeight: '700' }}>UI Medical Website</h3>
                                                <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '9px' }}>Nesxt Js</button>
                                                <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '9px' }}>Firebase</button>
                                                <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '9px' }}>Medical</button>
                                                <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '9px' }}>SaaS</button>
                                            </div>
                                            <div >
                                                <span className='d-flex align-items-center'><i class="fa-solid fa-eye" style={{ color: '#3247ff' }}></i>1.2K</span>
                                            </div>
                                        </div>
                                        <div className='my-4'>
                                            <span className='col-6' style={{ color: '#636363', fontSize: '18px' }}>Physical retailer in the apparel space looking for prominent DTC brands to buy into and collaborate with...</span>
                                        </div>

                                        <div className='d-flex justify-content-between' style={{ margin: '2rem 0 2rem 0' }}>
                                            <h3 className='card-h3'>Metrics</h3>
                                            <div className='d-flex'>
                                                <button style={{ padding: '12px 38px' }} className='btn btn-primary mx-2' onClick={detail => setDetail(2)}>View Listing<img style={{ width: '20px' }} src={arrow} alt="" /> </button>
                                                <div >
                                                    <input type="radio" class="btn-check  rounded-pill" name="options-base" id="option14" autocomplete="off" />
                                                    <label class="btn1" style={{ padding: "0.8rem 1rem", margin: '0.3rem 0.7rem 0 0', background: "#fff" }} for="option14">
                                                        <i class="fa-solid fa-heart"></i></label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='d-flex justify-content-between flex-wrap' style={{ width: '100%' }}>
                                            <div style={{ margin: '1rem 3rem 0 0' }}>
                                                <span style={{ color: '#636363', fontWeight: '600' }}>Businesses Type</span>
                                                <div className='d-flex justify-content-start align-items-center'>
                                                    <img width={40} src={cardLogo1} alt="" />
                                                    <span className='card-span' style={{ fontSize: '1.5rem' }}>E-Commerce</span>
                                                </div>
                                            </div>
                                            <div style={{ margin: '1rem 3rem 0 0' }}>
                                                <span style={{ color: '#636363', fontWeight: '600' }}>Based in</span>
                                                <div className='d-flex justify-content-start align-items-center'>
                                                    <img width={40} src={cardLogo2} alt="" />
                                                    <span className='card-span' style={{ fontSize: '1.5rem' }}>Anywhere</span>
                                                </div>
                                            </div>
                                            <div style={{ margin: '1rem 3rem 0 0' }}>
                                                <span style={{ color: '#636363', fontWeight: '600' }}>Acquisition type</span>
                                                <div className='d-flex justify-content-start align-items-center'>
                                                    <img width={40} src={cardLogo3} alt="" />
                                                    <span className='card-span' style={{ fontSize: '1.5rem' }}>Full</span>
                                                </div>
                                            </div>
                                            <div style={{ margin: '1rem 3rem 0 0' }}>
                                                <span style={{ color: '#636363', fontWeight: '600' }}>Valuation</span>
                                                <div className='d-flex justify-content-start align-items-center'>
                                                    <img width={40} src={cardLogo4} alt="" />
                                                    <span className='card-span' style={{ fontSize: '1.5rem' }}>$150K +</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/** */}
                                    <div className="card" style={{ margin: "1rem 1rem", padding: "1rem", width: "50%" }}>

                                        <div className='d-flex'>
                                            <div className='secondPart'>
                                                <img width={200} src={cardProfile} alt="" />
                                            </div>
                                            <div className="firstPart" style={{ marginLeft: "2rem" }}>
                                                <h3 style={{ fontSize: '30px', fontWeight: '700' }}>UI Medical Website</h3>
                                                <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '9px' }}>Nesxt Js</button>
                                                <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '9px' }}>Firebase</button>
                                                <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '9px' }}>Medical</button>
                                                <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '9px' }}>SaaS</button>
                                            </div>
                                            <div >
                                                <span className='d-flex align-items-center'><i class="fa-solid fa-eye" style={{ color: '#3247ff' }}></i>1.2K</span>
                                            </div>
                                        </div>
                                        <div className='my-4'>
                                            <span className='col-6' style={{ color: '#636363', fontSize: '18px' }}>Physical retailer in the apparel space looking for prominent DTC brands to buy into and collaborate with...</span>
                                        </div>

                                        <div className='d-flex justify-content-between' style={{ margin: '2rem 0 2rem 0' }}>
                                            <h3 className='card-h3'>Metrics</h3>
                                            <div className='d-flex'>
                                                <button style={{ padding: '12px 38px' }} className='btn btn-primary mx-2' onClick={detail => setDetail(2)}>View Listing<img style={{ width: '20px' }} src={arrow} alt="" /> </button>
                                                <div >
                                                    <input type="radio" class="btn-check  rounded-pill" name="options-base" id="option15" autocomplete="off" />
                                                    <label class="btn1" style={{ padding: "0.8rem 1rem", margin: '0.3rem 0.7rem 0 0', background: "#fff" }} for="option15">
                                                        <i class="fa-solid fa-heart"></i></label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='d-flex justify-content-between flex-wrap' style={{ width: '100%' }}>
                                            <div style={{ margin: '1rem 3rem 0 0' }}>
                                                <span style={{ color: '#636363', fontWeight: '600' }}>Businesses Type</span>
                                                <div className='d-flex justify-content-start align-items-center'>
                                                    <img width={40} src={cardLogo1} alt="" />
                                                    <span className='card-span' style={{ fontSize: '1.5rem' }}>E-Commerce</span>
                                                </div>
                                            </div>
                                            <div style={{ margin: '1rem 3rem 0 0' }}>
                                                <span style={{ color: '#636363', fontWeight: '600' }}>Based in</span>
                                                <div className='d-flex justify-content-start align-items-center'>
                                                    <img width={40} src={cardLogo2} alt="" />
                                                    <span className='card-span' style={{ fontSize: '1.5rem' }}>Anywhere</span>
                                                </div>
                                            </div>
                                            <div style={{ margin: '1rem 3rem 0 0' }}>
                                                <span style={{ color: '#636363', fontWeight: '600' }}>Acquisition type</span>
                                                <div className='d-flex justify-content-start align-items-center'>
                                                    <img width={40} src={cardLogo3} alt="" />
                                                    <span className='card-span' style={{ fontSize: '1.5rem' }}>Full</span>
                                                </div>
                                            </div>
                                            <div style={{ margin: '1rem 3rem 0 0' }}>
                                                <span style={{ color: '#636363', fontWeight: '600' }}>Valuation</span>
                                                <div className='d-flex justify-content-start align-items-center'>
                                                    <img width={40} src={cardLogo4} alt="" />
                                                    <span className='card-span' style={{ fontSize: '1.5rem' }}>$150K +</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/** */}
                            </div>
                        </section>
                    </section>
                </>
            }
            {
                detail === 2 &&
                <MarketDashDetail />
            }
        </>
    )
}

export default MarketplaceDash2