import React, { useState } from 'react'
import { Link } from 'react-router-dom'

//
import back from "./MarketDash/VectorBackArrow.svg"
import proof from "./ProfileDashbaord/VectorFund.svg"

const ProofOfFund = () => {
  const [currentStep, setCurrentStep] = useState(1)

  const steps = ['Basic Info', 'More Details']
  const [complete, setComplete] = useState(false)

  //for image Upload
  const [document, setDocument] = useState(null)
  const [fileName, setfileName] = useState("")

  // for logo upload
  const inputDocument = ({ target: { files } }) => {
    files[0] && setfileName(files[0].name)
    if (files) {
      setDocument(URL.createObjectURL(files[0]))
    }
  }
  return (
    <>
      <section className='first-sell d-flex justify-content-between align-items-center' style={{ padding: '3rem 6rem', background: '#EEF0FE' }}>

        {currentStep === 1 && <>
          <div className="Onboard-card" style={{ width: '100%' }}>
            <div>
              <h3 style={{ fontWeight: '700,', fontSize: '30px' }}>Tell us about yourself</h3>
              <span style={{ fontSize: '18px', color: '#636363' }} className='d-flex col-8 mt-2 mb-4'>We need this information to qualify you as a buyer. Only qualified buyers can get funding for deals and contact sellers.</span>
            </div>

            <div>
              <div>
                <div class="mb-3 my-3">
                  <label for="exampleFormControlInput1" class="form-label" style={{ color: '#636363' }}>Business/Asset Name</label>
                  <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Acqify" />
                </div>
              </div>
            </div>

            <div>
              <div class="mb-3 my-3">
                <label for="exampleFormControlInput2" class="form-label" style={{ color: '#636363' }}>What is your project name?</label>
                  <input  style={{ width:'80%' }} type="text" class="form-control" id="exampleFormControlInput2" placeholder="Enter project name" />
              </div>
            </div>

            <div>
              <div class="mb-3 my-3">
                <label for="exampleFormControlInput2" class="form-label" style={{ color: '#636363' }}>Where is your business located?</label>
                  <input  style={{ width:'80%' }} type="text" class="form-control" id="exampleFormControlInput2" placeholder="Enter Location name" />
              </div>
            </div>


            <div className='button d-flex justify-content-between align-items-center'>
              <div className='mt-5'>
                <Link style={{ textDecoration: 'none', color: '#636363' }} id="prev" to="/MainDashboard/Dashbaord" ><img src={back} alt="" /> <span className='mx-3'>Back</span></Link>
              </div>
              <div className='mt-5'>
                {!complete &&
                  <Link id="next" className='btn btn-primary rounded-pill px-5 py-2'
                    onClick={() => {
                      currentStep === 2 ? setComplete(true)
                        : setCurrentStep((prev) => prev + 1)
                    }}>{currentStep === 2 ? "Finish" : "Next"}</Link>}
              </div>
            </div>
          </div>
        </>}

        {currentStep === 2 && <>
          <div className="Onboard-card2" style={{ width: '100%' }}>
            <div style={{ overflow: 'hidden', overflowY: 'scroll' }}>
              <div>
                <h3 style={{ fontWeight: '700,', fontSize: '30px' }}>Provide proof of funds for</h3>
                <span style={{ fontSize: '18px', color: '#636363' }} className='d-flex col-8 mt-2 mb-4'>Make sure the accounts are in your name. For business accounts,
                  upload additional documents linking your name to the legal entity.</span>
              </div>

              <div>
                <div className='divInput-document'>
                  <div className='d-flex flex-column align-items-center justify-content-center'>
                    <div className="img-container" id="display_image">
                      <img src={document} className="" id="img" alt="" />
                    </div>
                    <div>
                      <input type="file" class="form-label" id="image_input2" multiple accept='image/*' onChange={inputDocument} />
                      <label for="image_input2" class="form-label text-center" style={{ color: '#636363' }}> <img src={proof} alt="" /><br /><br /><h4 style={{ color: '#18191' }} >Upload proof of funds</h4><span>Bank statements, bank certificates or liquid investments</span></label>
                    </div>
                  </div>
                </div>
              </div>

              <div className='my-4'>
                <div className='divInput-document'>
                  <div className='d-flex flex-column align-items-center justify-content-center'>
                    <div className="img-container" id="display_image">
                      <img src={document} className="" id="img" alt="" />
                    </div>
                    <div>
                      <input type="file" class="form-label" id="image_input2" multiple accept='image/*' onChange={inputDocument} />
                      <label for="image_input2" class="form-label text-center" style={{ color: '#636363' }}> <img src={proof} alt="" /><br /><br /><h4 style={{ color: '#18191' }} >Upload proof of funds</h4><span>Bank statements, bank certificates or liquid investments</span></label>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            <div className='button d-flex justify-content-between align-items-center'>
              <div className='mt-5'>
                <Link id="prev" style={{ textDecoration: 'none', color: '#636363' }}
                  onClick={() => {
                    currentStep === 1 ? setComplete(true)
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

      </section>
    </>
  )
}

export default ProofOfFund