import React, { useState } from 'react'
import { Link } from 'react-router-dom'
//
import upload from "./Selling/VectorUpload.svg"
import back from "./MarketDash/VectorBackArrow.svg"
import Onboard2 from './Onboard2'
import Onboard4 from './Onboard4'

const Onboard3 = () => {

    const [currentStep, setCurrentStep] = useState(3)
    const [complete, setComplete] = useState(false)

    //for image Upload
    const [image, setImage] = useState(null)
    const [Logo, setLogo] = useState(null)
    const [document, setDocument] = useState(null)
    const [fileName, setfileName] = useState("")

    const input = ({ target: { files } }) => {
        files[0] && setfileName(files[0].name)
        if (files) {
            setImage(URL.createObjectURL(files[0]))
        }
    }

    // for logo upload
    const inputLogo = ({ target: { files } }) => {
        files[0] && setfileName(files[0].name)
        if (files) {
            setLogo(URL.createObjectURL(files[0]))
        }
    }

    // for logo upload
    const inputDocument = ({ target: { files } }) => {
        files[0] && setfileName(files[0].name)
        if (files) {
            setDocument(URL.createObjectURL(files[0]))
        }
    }

    const steps = ['Basic Info','More Details','Build Listing','Set Price','Review']

    return (
        <>
            {currentStep === 3 && <>
                <div className="Onboard-card3">
                    <div style={{ overflow: 'hidden', overflowY: 'scroll' }}>
                        <div>
                            <h3 style={{ fontWeight: '700,', fontSize: '30px' }}>Build your listing</h3>
                            <span style={{ fontSize: '18px', color: '#636363' }} className='d-flex col-6 mt-2 mb-4'>Get your listing ready to be seen by thousands of buyers</span>
                        </div>

                        <div>
                            <div class="mb-3 my-3">
                                <label for="exampleFormControlInput1" class="form-label" style={{ color: '#636363' }}>Tagline</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Acqify" />
                            </div>
                        </div>
                        <div className='my-5'>
                            <div class="mb-3 my-3">
                                <label for="exampleFormControlInput1" class="form-label" style={{ color: '#636363' }}>When did your business begin operations?</label>
                                <div className='d-flex justify-content-evenly'>
                                    <div className='divInput'>
                                        <div className='d-flex flex-column align-items-center justify-content-center'>
                                            <div className="img-container" id="display_image">
                                                <img src={Logo} className="" id="img" alt="" />
                                                {/* <p id="img-name">{fileName}</p> */}
                                            </div>
                                            <div>
                                                <input type="file" class="form-label" id="image_input" multiple accept='image/*' onChange={inputLogo} />
                                                <label for="image_input" class="form-label" style={{ color: '#636363' }}> <img src={upload} alt="" /><br /><br /><span >Upload Logo</span></label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='divInput'>
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
                                </div>
                            </div>
                        </div>

                        <div>
                            <div class="mb-3 my-5">
                                <label for="exampleFormControlTextarea1" class="form-label" style={{ color: '#636363' }}>Description</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Tell  about your project details'></textarea>
                            </div>
                        </div>

                        <div className='my-5'>
                            <div className="">
                                <div className='d-flex justify-content-between'>
                                    <div style={{ width: '100%' }}>
                                        <label for="inputEmail4" class="form-label">Monthly Net Profit</label>
                                        <input style={{ height: '7vh', width: '95%' }} type="text" id="inputEmail4" class="form-control" placeholder="$000" />
                                    </div>
                                    <div style={{ width: '100%' }}>
                                        <label for="inputEmail4" class="form-label">Monthly Revenue</label>
                                        <input style={{ height: '7vh', width: '100%' }} type="text" id="inputEmail4" class="form-control" placeholder="$000" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <label for="exampleFormControlTextarea1" class="form-label" style={{ color: '#636363' }}>Build trust with buyers by including files, screenshots or walkthroughs that clearly show evidence of stated financials</label>
                            <div className='divInput-document'>
                                <div className='d-flex flex-column align-items-center justify-content-center'>
                                    <div className="img-container" id="display_image">
                                        <img src={document} className="" id="img" alt="" />
                                    </div>
                                    <div>
                                        <input type="file" class="form-label" id="image_input2" multiple accept='image/*' onChange={inputDocument} />
                                        <label for="image_input2" class="form-label text-center" style={{ color: '#636363' }}> <img src={upload} alt="" /><br /><br /><span >Upload Documents ( s )</span></label>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className='my-5'>
                            <div>
                                <span style={{ fontSize: '20px', fontWeight: '500', color: '#636363' }} className='d-flex col-4 mt-2 mb-4'>Community Size & Social Media</span>
                            </div>

                            <div className='d-flex flex-wrap'>
                                <div className='d-flex'>

                                    <div className=''>
                                        <label for="inputEmail4" class="form-label">Instagram</label>
                                        <div className='d-flex'>
                                            <div class="mb-3 my-3 form-floating" style={{ width: '60%' }}>
                                                <input style={{ width: '100%' }} type="email" id="floatingInputValue" class="form-control mx-2" placeholder="Instagram" />
                                                <label for="floatingInputValue"><i class="fa-brands fa-instagram" style={{ color: " #005eff" }}></i></label>
                                            </div>
                                            <div class="mb-3 mx-2 my-3 form-floating" style={{ width: '10%' }}>
                                                <input style={{ width: '100%' }} type="email" id="floatingInputValue" class="form-control mx-2" placeholder="Users" />
                                                <label for="floatingInputValue"><i class="fa-solid fa-users" style={{ color: " #005eff" }}></i></label>
                                            </div>
                                        </div>

                                        <label for="inputEmail4" class="form-label">Facebook</label>
                                        <div className='d-flex'>
                                            <div class="mb-3 my-3 form-floating" style={{ width: '60%' }}>
                                                <input style={{ width: '100%' }} type="email" id="floatingInputValue" class="form-control mx-2" placeholder="Facebook" />
                                                <label for="floatingInputValue"><i class="fa-brands fa-facebook" style={{ color: " #005eff" }}></i></label>
                                            </div>
                                            <div class="mb-3 mx-2 my-3 form-floating" style={{ width: '10%' }}>
                                                <input style={{ width: '100%'}} type="email" id="floatingInputValue" class="form-control mx-2" placeholder="Users" />
                                                <label for="floatingInputValue"><i class="fa-solid fa-users" style={{ color: " #005eff" }}></i></label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className=''>
                                    <label for="inputEmail4" class="form-label">Twitter</label>
                                        <div className='d-flex'>
                                            <div class="mb-3 my-3 form-floating" style={{ width: '60%' }}>
                                                <input style={{ width: '100%' }} type="email" id="floatingInputValue" class="form-control mx-2" placeholder="Twitter" />
                                                <label for="floatingInputValue"><i class="fa-brands fa-twitter" style={{ color: " #005eff" }}></i></label>
                                            </div>
                                            <div class="mb-3 mx-2 my-3 form-floating" style={{ width: '10%' }}>
                                                <input style={{ width: '100%' }} type="email" id="floatingInputValue" class="form-control mx-2" placeholder="Users" />
                                                <label for="floatingInputValue"><i class="fa-solid fa-users" style={{ color: " #005eff" }}></i></label>
                                            </div>
                                        </div>

                                        <label for="inputEmail4" class="form-label">Youtube</label>
                                        <div className='d-flex'>
                                            <div class="mb-3 my-3 form-floating" style={{ width: '60%' }} >
                                                <input style={{ width: '100%' }} type="email" id="floatingInputValue" class="form-control mx-2" placeholder="Youtube" />
                                                <label for="floatingInputValue"><i class="fa-brands fa-youtube" style={{ color: " #005eff" }}></i></label>
                                            </div>
                                            <div class="mb-3 mx-2 my-3 form-floating" style={{ width: '10%' }}>
                                                <input style={{ width: '100%'}} type="email" id="floatingInputValue" class="form-control mx-2" placeholder="Users" />
                                                <label for="floatingInputValue"><i class="fa-solid fa-users" style={{ color: " #005eff" }}></i></label>
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
            {currentStep === 2 && <Onboard2 />}
            {currentStep === 4 && <Onboard4/>}
        </>
    )
}

export default Onboard3