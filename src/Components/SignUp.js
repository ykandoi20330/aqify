import google from "./SignUp/google-svg.svg"
import background from "./SignUp/unsplash_5U_28ojjgms.svg"
import { Link } from "react-router-dom";
import vector from "./SignIn/Frame 21.svg"

import React from 'react'

const SignUp = () => {
  return (
    <>
      <section>
        <div className="SignUp-back" style={{ backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', position: 'absolute', width: '100%', height: '130%' }}>
          <div className="SignUp-first col-4 mx-2">
            <Link to="/"><img src={vector} alt="" /></Link>
            <h1 className="my-4" style={{ color: '#fff', fontWeight: '700' }}>Sign up for a free account to access the Marketplace</h1>
            <span style={{ color: '#c0c0c0' }}>Make your profile to negotiate directly with founders of vetted $100K+ revenue startups, scale-ups and SMBs.</span>
          </div>

          <div className="SignUp-second mx-2">
            <div className="signUp-card">

              <div className="d-flex flex-column align-items-center mb-4">
                <h2 style={{ color: '#fff', fontWeight: '700' }}>Join now on Acqify</h2>
                <span style={{ color: '#c0c0c0' }}>Already have an account?<Link className='mx-2' style={{ color: '#6C7AFF' }} to="/singin">Log in</Link></span>
              </div>

              <div>
                <Link style={{ width: '100%', background: '#fff', color: '#282A2B',padding:'0.8rem' }} className="btn" to="/MainDashboard"><img className='mx-3' src={google} alt="" />Sign  up with Google</Link>
              </div>

              <div className="d-flex justify-content-center align-items-center my-4">
                <div className="or-line"></div>
                <div style={{ color: '#fff', margin: '0 2rem' }}>OR</div>
                <div className="or-line"></div>
              </div>

              <div>
                <div class="form-floating mb-3 SignIn-input">
                  <input type="text" class="form-control" id="floatingInput" placeholder="" style={{ background: "#121314", color: '#c0c0c0', border: "1px solid #636363" }} />
                  <label for="floatingInput"><i style={{ color: '#fff' }} class="fa-regular fa-user mx-2"></i></label>
                </div>
              </div>

              <div>
                <div class="form-floating mb-3 SignIn-input">
                  <input type="email" class="form-control" id="floatingInput" placeholder="" style={{ background: "#121314", color: '#c0c0c0', border: "1px solid #636363" }} />
                  <label for="floatingInput"><i style={{ color: '#fff' }} class="fa-regular fa-envelope mx-2"></i></label>
                </div>
              </div>

              <div>
                <div class="form-floating mb-3 SignIn-input">
                  <input type="email" class="form-control" id="floatingInput" placeholder="" style={{ background: "#121314", color: '#c0c0c0', border: "1px solid #636363" }} />
                  <label for="floatingInput"><i style={{ color: '#fff' }} class="fa-solid fa-shield-cat mx-2"></i></label>
                  <span className="d-flex justify-content-end" style={{ color: '#fff' }}>Minimum 8 characters</span>
                </div>
              </div>

              <div className="d-flex flex-column align-items-center my-3">
                <span style={{ color: '#fff' }}>Indicate your main account type</span>
                <div className="d-flex my-2">
                  <div>
                    <input type="radio" class="btn-check  rounded-pill" name="options-base" id="option11" autocomplete="off" />
                    <label class="btn1" style={{ padding: "0.5rem", margin: '0.3rem 0.7rem 0 0', background: "#EEF0FE" }} for="option11">
                      <i class="fa-solid fa-circle-check mx-2"></i>
                      Owner ( Seller )</label>
                  </div>

                  <div >
                    <input type="radio" class="btn-check  rounded-pill" name="options-base" id="option12" autocomplete="off" />
                    <label class="btn1" style={{ padding: "0.5rem", margin: '0.3rem 0.7rem 0 0', background: "#EEF0FE" }} for="option12">
                      <i class="fa-solid fa-circle-check mx-2"></i>
                      Acquirer (buyer)</label>
                  </div>
                </div>
              </div>

              <div className='my-2'>
                <Link style={{ width: '100%' }} className="btn btn-primary" to="/onboard">Join</Link>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default SignUp