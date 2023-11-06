import React, { useState } from 'react'
import { Link } from 'react-router-dom'
//
import Logo from "./Selling/Frame 18.svg"
import clip from "./Selling/VectorClip.svg"
import back from "./MarketDash/VectorBackArrow.svg"
import Onboard2 from './Onboard2'

const Onboard1 = () => {

    const [currentStep, setCurrentStep] = useState(1)
    const [complete, setComplete] = useState(false)

    const steps = ['Basic Info','More Details','Build Listing','Set Price','Review']

    return (
        <>

            {currentStep === 1 && <>
                <div className="Onboard-card">
                    <div>
                        <h3 style={{ fontWeight: '700,', fontSize: '30px' }}>What are you selling</h3>
                        <span style={{ fontSize: '18px', color: '#636363' }} className='d-flex col-4 mt-2 mb-4'>Get your listing ready to be seen by thousands of buyers</span>
                    </div>

                    <div>
                        <div class="mb-3 my-3 form-floating">
                            <input style={{ width: '100%' }} type="email" id="floatingInputValue" class="form-control" placeholder="Enter Full URL" />
                            <label for="floatingInputValue"><img src={clip} alt="" /></label>
                            <span style={{ fontSize: '15px' }}>Your tiny project should contain a URL</span>
                        </div>
                    </div>

                    <div className='d-flex justify-content-between' style={{ margin: '1rem 0 0rem 0' }}>
                        <h3 className='card-h3 pb-2 my-4'>Category</h3>
                    </div>

                    <div>
                        <div className='d-flex flex-wrap'>
                            <div>
                                <input type="radio" class="btn-check  rounded-pill" name="options-base" id="option8" autocomplete="off" />
                                <label class="btn2" for="option8">
                                    <i class="fa-solid fa-cart-shopping mx-2"></i>
                                    Ecommerce</label>
                            </div>
                            <div >
                                <input type="radio" class="btn-check  rounded-pill" name="options-base" id="option9" autocomplete="off" />
                                <label class="btn2" for="option9">
                                    <i class="fa-brands fa-soundcloud mx-2"></i>
                                    Saas</label>
                            </div>
                            <div>
                                <input type="radio" class="btn-check  rounded-pill" name="options-base" id="option10" autocomplete="off" />
                                <label class="btn2" for="option10">
                                    <i class="fa-solid fa-users-line mx-2" ></i>
                                    Community</label>
                            </div>
                            <div >
                                <input type="radio" class="btn-check  rounded-pill" name="options-base" id="option11" autocomplete="off" />
                                <label class="btn2" for="option11">
                                    <i class="fa-solid fa-shop mx-2" ></i>
                                    Marketplace</label>
                            </div>
                            <div >
                                <input type="radio" class="btn-check  rounded-pill" name="options-base" id="option12" autocomplete="off" />
                                <label class="btn2" for="option12">
                                    <i class="fa-solid fa-file-contract mx-2"></i>
                                    Content</label>
                            </div>
                            <div >
                                <input type="radio" class="btn-check  rounded-pill" name="options-base" id="option13" autocomplete="off" />
                                <label class="btn2" for="option13">
                                    <i class="fa-solid fa-cube mx-2"></i>
                                    Service</label>
                            </div>

                        </div>
                    </div>

                    <div className='button d-flex justify-content-between align-items-center'>
                        <div className='mt-5'>
                            <Link id="prev" to="/MainDashboard" ><img src={back} alt="" /></Link>
                            <span className='mx-3'>Back</span>
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
                    {/* <div className='button d-flex justify-content-between align-items-center'>
                        <div className='mt-5'>
                            <Link id="prev" to="/MainDashboard" ><img src={back} alt="" /></Link>
                            <span className='mx-3'>Back</span>
                        </div>
                        <div className='mt-5'>
                            {!complete &&
                                <Link id="next" className='btn btn-primary rounded-pill px-5 py-2'
                                    onClick={() => {
                                        currentStep === 5 ? setComplete(true)
                                            : setCurrentStep((prev) => prev + 1)
                                    }}>{currentStep === 5 ? "Finish" : "Next"}</Link>}
                        </div>
                    </div> */}
                </div>
            </>}

            {currentStep === 2 && <Onboard2 />}
        </>
    )
}

export default Onboard1