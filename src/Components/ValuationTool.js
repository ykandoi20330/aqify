import React from 'react'
import Close from "./MarketDash/VectorClose.svg"

// import arrow from "./Aqify project/Vector (1).png"

import analytics from "./MarketDash/Vertical.png"
import { Link } from 'react-router-dom'
import Footer from './Footer'
import TopMessage from './TopMessage'
import BlackLogo from "./Aqify project/FrameblackLogo.svg"

const ValuationTool = () => {
    return (
        <>
            <section style={{ background: '#EEF0FE' }}>
                <div className="sideContent">
                    <div className='d-flex justify-content-around'>

                        <div style={{ background: "#EEF0FE", width: "100%", padding: "1.3rem" }}>
                            <Link to="/"><img src={BlackLogo} alt="" /></Link>
                        </div>
                        {/* <TopMessage /> */}
                    </div>

                    <div className='my-5'>
                        <h1>Project Valuation Tool</h1>
                        <span>Get your perfect valuation using Acqify AI</span>
                    </div>

                    <div className="Valuation-card">
                        <div className='d-flex justify-content-between mb-3'>
                            <span style={{ color: '#636363' }}>Filters</span>
                            <img src={Close} alt="" />
                        </div>

                        <div className='valuation-row1 d-flex my-3' style={{ width: '100%' }}>
                            <div className="valuation-input" style={{ width: '35%' }}>
                                <label for="inputEmail4" className="form-label">Revenue / Year</label>
                                <div className='d-flex'>
                                    <input style={{ height: '7vh', width: '95%' }} type="text" id="inputEmail4" className="form-control mx-2" placeholder="$000" />
                                </div>
                            </div>
                            <div className="valuation-input" style={{ width: '35%' }}>
                                <label for="inputEmail4" className="form-label">Costs / Year</label>
                                <div className='d-flex'>
                                    <input style={{ height: '7vh', width: '95%' }} type="text" id="inputEmail4" className="form-control mx-2" placeholder="$000" />
                                </div>
                            </div>
                            <div className="valuation-input" style={{ width: '35%' }}>
                                <label for="inputEmail4" className="form-label">Net income / Year</label>
                                <div className='d-flex'>
                                    <input style={{ height: '7vh', width: '95%' }} type="text" id="inputEmail4" className="form-control mx-2" placeholder="$000" />
                                </div>
                            </div>
                        </div>

                        <div className='valuation-row2  d-flex my-3' style={{ width: '100%' }}>
                            <div className="valuation-input" style={{ width: '35%' }}>
                                <label for="inputEmail4" className="form-label">Type of site</label>
                                <div className='d-flex'>
                                    <input style={{ height: '7vh', width: '95%' }} type="text" id="inputEmail4" className="form-control mx-2" placeholder="membership" />
                                </div>
                            </div>
                            <div className="valuation-input" style={{ width: '35%' }}>
                                <label for="inputEmail4" className="form-label">How much time do you spend on it per week?</label>
                                <div className='d-flex align-items-center'>
                                    <input style={{ height: '7vh', width: '95%' }} type="text" id="inputEmail4" className="form-control mx-2" placeholder="10" />
                                    <span style={{ fontSize: '10px' }}>Hour</span>
                                </div>
                            </div>
                            <div className="valuation-input" style={{ width: '35%' }}>
                                <label for="inputEmail4" className="form-label">Your own labor cost/ year</label>
                                <div className='d-flex align-items-center'>
                                    <input style={{ height: '7vh', width: '95%' }} type="text" id="inputEmail4" className="form-control mx-2" placeholder="35" />
                                    <span style={{ fontSize: '10px' }}>Per Hour</span>
                                </div>
                            </div>
                        </div>

                        <div className='valuation-row3 d-flex my-3' style={{ width: '100%' }}>
                            <div className="valuation-input" style={{ width: '35%' }}>
                                <label for="inputEmail4" className="form-label">Revenue growth rate/year</label>
                                <div className='d-flex'>
                                    <input style={{ height: '7vh', width: '95%' }} type="text" id="inputEmail4" className="form-control mx-2" placeholder="25,000" />
                                </div>
                            </div>
                            <div className="valuation-input" style={{ width: '35%' }}>
                                <label for="inputEmail4" className="form-label">Monthly Net Profit</label>
                                <div className='d-flex align-items-center'>
                                    <input style={{ height: '7vh', width: '95%' }} type="text" id="inputEmail4" className="form-control mx-2" placeholder="10" />
                                    <span>%</span>
                                </div>
                            </div>
                            <div className="valuation-input" style={{ width: '35%' }}>
                                <label for="inputEmail4" className="form-label">Cost growth rate/year</label>
                                <div className='d-flex align-items-center'>
                                    <input style={{ height: '7vh', width: '95%' }} type="text" id="inputEmail4" className="form-control mx-2" placeholder="5" />
                                    <span>%</span>
                                </div>
                            </div>
                        </div>

                        <div className="valuation-row4 d-flex justify-content-between my-3">
                            <div className="valuation-input" style={{ width: '45%' }}>
                                <div className='d-flex'>
                                    <div style={{ width: '100%' }}>
                                        <label for="inputEmail5" className="form-label">Monthly Active Users</label>
                                        <div className='form-floating'>
                                            <input style={{ height: '7vh', width: '95%' }} type="text" id="floatingInputValue" className="form-control mx-2 form-floating" placeholder="12K" />
                                            <label for="floatingInputValue"><i className="fa-solid fa-users" style={{ color: "#005eff" }}></i></label>
                                        </div>
                                    </div>
                                    <div style={{ width: '100%' }}>
                                        <label for="inputEmail5" className="form-label">Instagram Followers</label>
                                        <div className='form-floating'>
                                            <input style={{ height: '7vh', width: '95%' }} type="text" id="floatingInputValue" className="form-control mx-2 form-floating" placeholder="12K" />
                                            <label for="floatingInputValue"><i className="fa-solid fa-users" style={{ color: "#005eff" }}></i></label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="valuation-input" style={{ width: '45%' }}>
                                <div className='d-flex'>
                                    <div style={{ width: '100%' }}>
                                        <label for="inputEmail5" className="form-label">Twitter Followers</label>
                                        <div className='form-floating'>
                                            <input style={{ height: '7vh', width: '95%' }} type="text" id="floatingInputValue" className="form-control mx-2 form-floating" placeholder="12K" />
                                            <label for="floatingInputValue"><i className="fa-solid fa-users" style={{ color: "#005eff" }}></i></label>
                                        </div>
                                    </div>
                                    <div style={{ width: '100%' }}>
                                        <label for="inputEmail5" className="form-label">Email Subscribers</label>
                                        <div className='form-floating'>
                                            <input style={{ height: '7vh', width: '95%' }} type="text" id="floatingInputValue" className="form-control mx-2 form-floating" placeholder="12K" />
                                            <label for="floatingInputValue"><i className="fa-solid fa-users" style={{ color: "#005eff" }}></i></label>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>

                    {/** */}

                    <div className="Valuation-card">
                        <div>
                            <img style={{ width: '100%' }} src={analytics} alt="" />
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <Footer />
            </section>
        </>
    )
}

export default ValuationTool