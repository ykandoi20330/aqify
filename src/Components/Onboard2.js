import React, { useState } from 'react'
import { Link } from 'react-router-dom'
//
import back from "./MarketDash/VectorBackArrow.svg"
import Onboard1 from './Onboard1'
import Onboard3 from './Onboard3'

const Onboard2 = () => {

    const [currentStep, setCurrentStep] = useState(2)
    const [complete, setComplete] = useState(false)

    const steps = ['Basic Info','More Details','Build Listing','Set Price','Review']
    
    return (
        <>
            {currentStep === 2 && <>
                <div className="Onboard-card2">
                    <div style={{overflow:'hidden', overflowY:'scroll'}}>
                        <div>
                            <h3 style={{ fontWeight: '700,', fontSize: '30px' }}>We need some more details</h3>
                            <span style={{ fontSize: '18px', color: '#636363' }} className='d-flex col-6 mt-2 mb-4'>Get your listing ready to be seen by thousands of buyers</span>
                        </div>

                        <div>
                            <div class="mb-3 my-3">
                                <label for="exampleFormControlInput1" class="form-label" style={{ color: '#636363' }}>Business/Asset Name</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Acqify" />
                            </div>
                        </div>
                        <div>
                            <div class="mb-3 my-3">
                                <label for="exampleFormControlInput1" class="form-label" style={{ color: '#636363' }}>When did your business begin operations?</label>
                                <input type="date" class="form-control" id="exampleFormControlInput1" placeholder="Month/Year" />
                            </div>
                        </div>
                        <div>
                            <div class="mb-3 my-3">
                                <label for="exampleFormControlInput1" class="form-label" style={{ color: '#636363' }}>Where is your business located?</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Acqify" />
                            </div>
                        </div>
                        <div>
                            <div class="mb-3 my-3">
                                <label for="exampleFormControlInput1" class="form-label" style={{ color: '#636363' }}>What is your project name?</label>
                                <select style={{ width: '60%', color: '#636363', fontSize: '16px' }} class="form-control form-select form-select-lg" aria-label="Large select example">
                                    <option id="floatingInputValue" selected>Select project name</option>
                                    <option value="1">UI Design</option>
                                    <option value="2">UI  Development</option>
                                    <option value="3">Artifitial Intelligence</option>
                                </select>
                            </div>
                        </div>


                        <div>
                            <span style={{ fontSize: '18px', color: '#636363' }} className='d-flex col-4 mt-2 mb-4'>Choose other categories</span>
                        </div>

                        <div>
                            <div className='d-flex flex-wrap'>
                                <div>
                                    <input type="radio" class="btn-check  rounded-pill" name="options-base" id="option8" autocomplete="off" />
                                    <label class="btn2" for="option8">Ecommerce</label>
                                </div>
                                <div >
                                    <input type="radio" class="btn-check  rounded-pill" name="options-base" id="option9" autocomplete="off" />
                                    <label class="btn2" for="option9"> Saas</label>
                                </div>
                                <div>
                                    <input type="radio" class="btn-check  rounded-pill" name="options-base" id="option10" autocomplete="off" />
                                    <label class="btn2" for="option10">Community</label>
                                </div>
                                <div >
                                    <input type="radio" class="btn-check  rounded-pill" name="options-base" id="option11" autocomplete="off" />
                                    <label class="btn2" for="option11">Marketplace</label>
                                </div>
                                <div >
                                    <input type="radio" class="btn-check  rounded-pill" name="options-base" id="option12" autocomplete="off" />
                                    <label class="btn2" for="option12">Content</label>
                                </div>
                                <div >
                                    <input type="radio" class="btn-check  rounded-pill" name="options-base" id="option13" autocomplete="off" />
                                    <label class="btn2" for="option13">Service</label>
                                </div>
                                <div >
                                    <input type="radio" class="btn-check  rounded-pill" name="options-base" id="option14" autocomplete="off" />
                                    <label class="btn2" for="option14">Wordpress</label>
                                </div>
                                <div >
                                    <input type="radio" class="btn-check  rounded-pill" name="options-base" id="option15" autocomplete="off" />
                                    <label class="btn2" for="option15">Add-on</label>
                                </div>
                                <div >
                                    <input type="radio" class="btn-check  rounded-pill" name="options-base" id="option16" autocomplete="off" />
                                    <label class="btn2" for="option16">Chrome-extension</label>
                                </div>
                                <div >
                                    <input type="radio" class="btn-check  rounded-pill" name="options-base" id="option17" autocomplete="off" />
                                    <label class="btn2" for="option17">Crypto</label>
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
                </div>
            </>}
            {currentStep === 1 && <Onboard1 />}
            {currentStep === 3 && <Onboard3/> }
        </>
    )
}

export default Onboard2