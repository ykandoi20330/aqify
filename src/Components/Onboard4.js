import React, { useState } from 'react'
import { Link } from 'react-router-dom'
//
import back from "./MarketDash/VectorBackArrow.svg"
import Onboard3 from './Onboard3'
import Onboard5 from './Onboard5'
const Onboard4 = () => {

    const [currentStep, setCurrentStep] = useState(4)
    const [complete, setComplete] = useState(false)

    const steps = ['Basic Info','More Details','Build Listing','Set Price','Review']

    return (
        <>
            {currentStep === 4 && <>
                <div className="Onboard-card2">
                    <div style={{ overflow: 'hidden', overflowY: 'scroll' }}>
                        <div>
                            <h3 style={{ fontWeight: '700,', fontSize: '30px' }}>Set your price</h3>
                            <span style={{ fontSize: '18px', color: '#636363' }} className='d-flex col-8 mt-2 mb-4'>Get your listing ready to be seen by thousands of buyers</span>
                        </div>

                        <div className="">
                            <div className='d-flex justify-content-between'>
                                <div style={{ width: '100%' }}>
                                    <label for="inputEmail4" class="form-label">Max Price</label>
                                    <input style={{ height: '7vh', width: '95%' }} type="text" id="inputEmail4" class="form-control" placeholder="$ less than $100k" />
                                </div>
                                <div style={{ width: '100%' }}>
                                    <label for="inputEmail4" class="form-label">Min Price</label>
                                    <input style={{ height: '7vh', width: '100%' }} type="text" id="inputEmail4" class="form-control" placeholder="$ less than $100k" />
                                </div>
                            </div>
                        </div>

                        <div className='my-5' style={{color:'#636363'}}>
                            <div>
                            Set your asking price, then negotiate with potential buyers.
                             Setting your asking price is crucial and will be the first thing sellers notice when looking at your listing.
                             If you need help deciding  what an appropriate price is based on the status and performance of your business,
                             use this Valuation Tool (by Pieter Levels). <br/><br/>
                             Interested buyers can make offers above or below your asking price.
                             You have the ability to approve or reject any offers.Listings over $10k attract a one-time $15 fee
                            </div>
                        </div>



                    </div>

                    <div className='button d-flex justify-content-between align-items-center'>
                        <div className='mt-5'>
                            <Link id="prev" style={{ textDecoration: 'none', color: '#636363' }}
                                onClick={() => {
                                    currentStep === steps.length ? setComplete(true)
                                        : setCurrentStep((prev) => prev - 1)
                                }}
                            ><img src={back} alt="" /><span className='mx-3'>Back</span></Link>
                        </div>
                        <div className='mt-5'>
                            {!complete &&
                                <Link id="next" className='btn btn-primary rounded-pill px-5 py-2'
                                    onClick={() => {
                                        currentStep === steps.length ? setComplete(true)
                                            : setCurrentStep((prev) => prev + 1)
                                    }}>{currentStep === steps.length ? "Finish" : "Next"}</Link>}
                        </div>
                    </div>
                </div>
            </>}
            {currentStep === 3 && <Onboard3 />}
            {currentStep === 5 && <Onboard5/>}
        </>
    )
}

export default Onboard4