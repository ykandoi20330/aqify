import React, { useState } from 'react'
import { Link } from 'react-router-dom'
//
import back from "./MarketDash/VectorBackArrow.svg"
import Onboard4 from './Onboard4'
import trueImg from "./Pricing/Frame 147.png"

const Onboard5 = () => {

    const [currentStep, setCurrentStep] = useState(5)
    const [complete, setComplete] = useState(false)

    const steps = ['Basic Info','More Details','Build Listing','Set Price','Review']

    return (
        <>
            {currentStep === 5 && <>
                <div className="Onboard-card2">
                    <div style={{ overflow: 'hidden', overflowY: 'scroll' }}>
                        <div>
                            <h3 style={{ fontWeight: '700,', fontSize: '30px' }}>Review and activate</h3>
                            <span style={{ fontSize: '18px', color: '#636363' }} className='d-flex col-8 mt-2 mb-4'>Get your listing ready to be seen by thousands of buyers</span>
                        </div>

                        <div className="">
                            <div className="onboard-Contentcard">
                                <span className='span1' style={{ fontSize: '16px' }}>Listing Fee</span>
                                <h1 style={{ fontWeight: '900' }}>$15<span style={{ fontSize: '22px', fontWeight: '700' }}>USD</span></h1>
                                <span style={{ color: '#636363', fontSize: '17px', fontWeight: '500' }}>includes</span>
                                <div className='my-4 d-flex flex-wrap'>
                                    <div>
                                        <div className='my-3 mx-2'>
                                            <img style={{ marginRight: '1rem' }} width={30} src={trueImg} alt="" />
                                            <span style={{ color: '#636363' }}>Marketplace listing</span>
                                        </div>
                                        <div className='my-3 mx-2'>
                                            <img style={{ marginRight: '1rem' }} width={30} src={trueImg} alt="" />
                                            <span style={{ color: '#636363' }}>Standard Reach</span>
                                        </div>
                                        <div className='my-3 mx-2'>
                                            <img style={{ marginRight: '1rem' }} width={30} src={trueImg} alt="" />
                                            <span style={{ color: '#636363' }}>Escrow</span>
                                        </div>
                                    </div>

                                    <div className='mx-5'>
                                        <div className='my-3 mx-2'>
                                            <img style={{ marginRight: '1rem' }} width={30} src={trueImg} alt="" />
                                            <span style={{ color: '#636363' }}>Unlimited Listing Duration</span>
                                        </div>
                                        <div className='my-3 mx-2'>
                                            <img style={{ marginRight: '1rem' }} width={30} src={trueImg} alt="" />
                                            <span style={{ color: '#636363' }}>Same day support</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className='button d-flex justify-content-between align-items-center'>
                        <div className='mt-5'>
                            <Link id="prev" style={{ textDecoration: 'none', color: '#636363' }}
                                onClick={() => {
                                    currentStep === 4 ? setComplete(true)
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
            {currentStep === 4 && <Onboard4 />}
        </>
    )
}

export default Onboard5