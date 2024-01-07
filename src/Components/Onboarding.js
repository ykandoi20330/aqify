import background from "./Onboard/unsplash5u-28ojjgms@2x2.png"
import { Link } from "react-router-dom";
import React from 'react'

const Onboarding = () => {
  return (
    <>
      <section>
        <div className="onboard-back" style={{ backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', position: 'absolute', width: '100%', height: '130%' }}>
          <div className="onboard-card">
            <div className="my-1">
            <label style={{color:'#C0C0C0'}}  for="inputEmail5" className="form-label">How did you hear about Acqify?*</label>
              <select style={{ color: '#c0c0c0' }} className="form-select onboard-input" aria-label="Default select example">
                <option selected><i style={{ color: '#fff' }} className="fa-solid fa-user-group"></i>Select one</option>
                <option value="1">Instagram</option>
                <option value="2">Facebook</option>
                <option value="3">Twitter</option>
                <option value="3">LinkedIn</option>
              </select>
            </div>
            <div className="mt-3">
            <label style={{color:'#C0C0C0'}} for="inputEmail5" className="form-label">Where are you located?*</label>
              <select style={{ color: '#c0c0c0' }} className="form-select onboard-input" aria-label="Default select example">
                <option selected><i className="fa-solid fa-location-dot" style={{ color: "#ffffff" }}></i>Select one</option>
                <option value="1">India</option>
                <option value="2">USA</option>
                <option value="3">Chaina</option>
                <option value="3">Europe</option>
              </select>
            </div>

            <div className="mt-5">
                <Link style={{ width: '100%'}} className="btn btn-primary" to="/MainDashboard">Continue</Link>
              </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Onboarding