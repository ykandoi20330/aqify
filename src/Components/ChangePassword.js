import React from 'react'
import message from "./ProfileDashbaord/chatteardropdots1.svg"
import { Link } from 'react-router-dom'
import profileIcon from "./ProfileDashbaord/ellipse-60@2x.png"
import threeDots from "./ProfileDashbaord/dotsthreeoutlinevertical.svg"

const ChangePassword = () => {
    return (
        <>
            <div className="sideContent">
                <div className="d-flex justify-content-end">
                    <div><Link to="/"><img src={message} alt="" /></Link></div>
                    <div><Link to="/"><img style={{ width: '2.8vw' }} src={profileIcon} alt="" /></Link></div>
                    <div><Link to="/"><img src={threeDots} alt="" /></Link></div>
                </div>

                <div>
                    <h1 style={{ fontWeight: '700', paddingBottom: '0.5rem' }}>Change Password</h1>
                    <span style={{ color: '#636363' }}>Update your email or password below</span>
                </div>

                <div className="password-card">
                <div class="mb-3 my-3">
                        <label for="exampleFormControlInput1" class="form-label" style={{color:'#636363'}}>Current Email</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="akashkumar0007@gmail.com"/>
                    </div>
                    <div class="mb-3 my-3">
                        <label for="exampleFormControlInput1" class="form-label" style={{color:'#636363'}}>Current Password</label>
                        <input type="password" class="form-control"  id="exampleFormControlInput1" placeholder="akashkumar0007"/>
                    </div>
                    <button class="btn btn-primary my-3 rounded-pill" type="submit" style={{width:'30%', padding:"0.9rem 1.5rem"}}>Save changes</button>
                    </div>
            </div>
        </>
    )
}

export default ChangePassword