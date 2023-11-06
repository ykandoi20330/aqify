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
import Close from "./MarketDash/VectorClose.svg"
import MarketDashDetail from './MarketDashDetail'
import MarketplaceDash2 from './MarketplaceDash2'


const MarketplaceDash = () => {

    const [show, setShow] = useState(1)

    return (
        <>
            <section>
                <div className="sideContent">
                    <div className="d-flex justify-content-end">
                        <div><Link to="/"><img src={message} alt="" /></Link></div>
                        <div><Link to="/"><img style={{ width: '2.8vw' }} src={profileIcon} alt="" /></Link></div>
                        <div><Link to="/"><img src={threeDots} alt="" /></Link></div>
                    </div>

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

            { show  === 1 && <>

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

            <section className='d-flex'>
                <div className="marketDash-card flex-wrap">
                    <div className='d-flex justify-content-end'>
                        <img src={Close} alt="" />
                    </div>
                    <div>
                        <button className='btn-card btn btn-outline-primary my-1'>Ecommerce</button>
                        <button className='btn-card btn btn-outline-primary my-1'>SaaS</button>
                        <button className='btn-card btn btn-outline-primary my-1'>Acquirers</button>
                        <button className='btn-card btn btn-outline-primary my-1'>Community</button>
                        <button className='btn-card btn btn-outline-primary my-1'>Content</button>
                        <button className='btn-card btn btn-outline-primary my-1'>Service</button>
                        <button className='btn-card btn btn-outline-primary my-1'>Wordpress</button>
                        <button className='btn-card btn btn-outline-primary my-1'>Add-on</button>
                        <button className='btn-card btn btn-outline-primary my-1'>Chrome-extension</button>
                        <button className='btn-card btn btn-outline-primary my-1'>Crypto</button>
                    </div>
                </div>

                <div className="marketDash-card2">
                    <div className='d-flex justify-content-between mb-3'>
                        <span style={{ color: '#636363' }}>More Filters</span>
                        <img src={Close} alt="" />
                    </div>

                    <div className="d-flex justify-content-between my-3">
                        <div className="">
                            <label for="inputEmail4" class="form-label">Community Size</label>
                            <input style={{ height: '7vh' }} type="text" id="inputEmail4" class="form-control mx-2" placeholder="$ 000" />
                        </div>
                        <div className="" style={{ width: '45%' }}>
                            <label for="inputEmail4" class="form-label">Offers Recieved</label>
                            <div className='d-flex'>
                                <input style={{ height: '7vh', width: '60%' }} type="text" id="inputEmail4" class="form-control mx-2" placeholder="Yes" />
                                <input style={{ height: '7vh', width: '60%' }} type="text" id="inputEmail4" class="form-control mx-2" placeholder="No" />
                            </div>
                        </div>
                    </div>
                    <div className='my-3'>
                        <div className="">
                            <label for="inputEmail4" class="form-label">Monthly Net Profit</label>
                            <div className='d-flex'>
                                <input style={{ height: '7vh', width: '60%' }} type="text" id="inputEmail4" class="form-control mx-2" placeholder="$20000" />
                                <input style={{ height: '7vh', width: '60%' }} type="text" id="inputEmail4" class="form-control mx-2" placeholder="$500000" />
                            </div>
                        </div>
                    </div>

                    <div className='my-3'>
                        <div>
                            <label style={{ color: "#636363" }} for="customRange1" class="form-label">Project Age ( premium listing )</label>
                            <input type="range" class="form-range" id="customRange1"/>
                        </div>
                    </div>
                </div>

            </section >
            </>}

            { show === 2 && <MarketplaceDash2/> }
        </>
    )
}

export default MarketplaceDash