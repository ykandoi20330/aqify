import React from 'react'
import message from "./ProfileDashbaord/chatteardropdots1.svg"
import { Link, Outlet } from 'react-router-dom'
import profileIcon from "./ProfileDashbaord/ellipse-60@2x.png"
import threeDots from "./ProfileDashbaord/dotsthreeoutlinevertical.svg"
import BlackLogo from "./Aqify project/FrameblackLogo.svg"

const TopMessage = () => {
    return (
        <>
            <section>
                <div className="" style={{ background: "#EEF0FE", width: "100%", padding: "1.3rem" }}>
                    <div className="d-flex justify-content-between align-items-center">
                        <br />
                        <div className='d-flex justify-content-end'>
                            <div className='mx-2'><Link to="/message"><img src={message} alt="" /></Link></div>
                            <div className='mx-1'><Link to="/MainDashboard/proflie"><img style={{ width: '40px' }} src={profileIcon} alt="" /></Link></div>
                            <div className='mx-1'>
                                <div class="dropdown" >
                                    <Link to="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                        <img src={threeDots} alt="" />
                                    </Link>
                                    <ul style={{ border: 'none' }} class="dropdown-menu dropdown-menu-lg-end shadow">
                                        <li><Link class="dropdown-item" to="/proflie"><i class="fa-solid fa-user mx-2" style={{ color: "#005eff" }}></i>My Profile</Link></li>
                                        <li><Link class="dropdown-item" to="#"><i class="fa-solid fa-right-from-bracket mx-2" style={{ color: "#005eff" }}></i>Sign out</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >

            <section>
                <Outlet />
            </section>
        </>
    )
}

export default TopMessage