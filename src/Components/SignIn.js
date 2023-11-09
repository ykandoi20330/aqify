import React from 'react'

import google from "./SignIn/google-svg.svg"
import background from "./SignIn/unsplash5u-28ojjgms@2x.png"
import vector from "./SignIn/Frame 21.svg"
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <>
      <section>
        <div className="Signin-back" style={{ backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', position: 'absolute', width: '100%', height: '130%' }}>
          <div className="signIn-card">
            <div className="d-flex flex-column align-items-center mb-4">
              <div className='my-2'>
                <Link to="/"><img src={vector} alt="" /></Link>
              </div>
              <div className="d-flex flex-column align-items-center my-2">
                <h2 style={{ color: '#fff', fontWeight: '700' }}>Welcome Back</h2>
                <span style={{ color: '#c0c0c0' }}>Don’t have any account?<Link className='mx-2' style={{ color: '#6C7AFF' }} to="/singup">Join now</Link></span>
              </div>
            </div>

            <div>
              <div class="form-floating mb-3 SignIn-input">
                <input type="text" class="form-control" id="floatingInput" placeholder="" style={{ background: "#121314", color: '#c0c0c0', border: "1px solid #636363" }} />
                <label for="floatingInput"><i style={{ color: '#fff' }} class="fa-regular fa-envelope mx-2"></i></label>
              </div>
            </div>

            <div>
              <div class="form-floating mb-3 SignIn-input">
                <input type="email" class="form-control" id="floatingInput" placeholder="" style={{ background: "#121314", color: '#c0c0c0', border: "1px solid #636363" }} />
                <label for="floatingInput"><i style={{ color: '#fff' }} class="fa-solid fa-shield-cat mx-2"></i></label>
                <span className="d-flex justify-content-end" style={{ color: '#6C7AFF' }}>Forgot Password?</span>
              </div>
            </div>

            <div className='my-3'>
              <Link style={{ width: '100%' }} className="btn btn-primary" to="/MainDashboard">Join</Link>
            </div>

            <div className="d-flex justify-content-center align-items-center my-3">
              <div className="or-line"></div>
              <div style={{ color: '#fff', margin: '0 2rem' }}>OR</div>
              <div className="or-line"></div>
            </div>

            <div>
              <Link style={{ width: '100%', background: '#fff', color: '#282A2B' }} className="btn" to="/MainDashboard"><img className='mx-3' src={google} alt="" />Sign  up with Google</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default SignIn