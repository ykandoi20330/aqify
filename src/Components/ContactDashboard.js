import React from 'react'
// import logo from "./ProfileDashbaord/vector.svg"
// import folder from "./ProfileDashbaord/folder.svg"
// import address from "./ProfileDashbaord/addressbook.svg"
// import list from "./ProfileDashbaord/listnumbers.svg"
// import bell from "./ProfileDashbaord/bell.svg"
// import setting from "./ProfileDashbaord/gear.svg"
// import tag from "./ProfileDashbaord/tag.svg"

//side content
import message from "./ProfileDashbaord/chatteardropdots1.svg"
import profileIcon from "./ProfileDashbaord/ellipse-60@2x.png"
import threeDots from "./ProfileDashbaord/dotsthreeoutlinevertical.svg"
import arrow from "./Aqify project/Vector (1).png"

const ContactDashboard = () => {
    return (
        <>
            <section className='profile-section'>
                {/* <div className="dashboard" >
                    <div class="Navdashboard d-flex flex-column flex-shrink-0 p-3 text-bg-dark" >
                        <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                            <svg class="bi pe-none me-2" width="40" height="32"><use href="#bootstrap"></use></svg>
                            <span class="fs-4"><img src={logo} alt="" />Acqify</span>
                        </a>
                        <hr />
                        <h2> Dashboard</h2>
                        <ul class="nav flex-column mb-auto">
                            <li class="nav-item">
                                <a href="#" class="nav-link1 active" aria-current="page">
                                    <img style={{ marginRight: "1rem" }} src={list} alt="" />
                                    Lists
                                </a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link1 text-white dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img style={{ marginRight: "1rem" }} src={folder} alt="" />
                                    My Projects
                                </a>
                                <ul class="dropdown-menu dropdown-menu-dark">
                                    <li><a class="dropdown-item" href="#">Project Lists</a></li>
                                    <li><a class="dropdown-item" href="#">Projects Buying</a></li>
                                </ul>
                            </li>

                            <li>
                                <a href="#" class="nav-link1 text-white">
                                    <img style={{ marginRight: "1rem" }} src={bell} alt="" />
                                    Notifications
                                </a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link1 text-white dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img style={{ marginRight: "1rem" }} src={setting} alt="" />
                                    Settings
                                </a>
                                <ul class="dropdown-menu dropdown-menu-dark">
                                    <li><a class="dropdown-item" href="#">Profile</a></li>
                                    <li><a class="dropdown-item" href="#">change Password</a></li>
                                    <li><a class="dropdown-item" href="#">Payments</a></li>
                                    <li><a class="dropdown-item" href="#">Connect</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="#" class="nav-link1 text-white">
                                    <img style={{ marginRight: "1rem" }} src={tag} alt="" />
                                    pricings
                                </a>
                            </li>
                            <li>
                                <a href="#" class="nav-link1 text-white">
                                    <img style={{ marginRight: "1rem" }} src={address} alt="" />
                                    Contact us
                                </a>
                            </li>
                        </ul>
                        <hr />
                    </div>
                </div> */}

                <div className="sideContent">

                    <div className='contactDashboard-card d-flex'>
                        <div>
                            <h1 style={{ fontWeight: '700', width: '28%', borderBottom: "4px solid #3247ff", borderRadius: '5px' }}>Contact us</h1>
                        </div>
                        <div class="mb-3 my-3">
                            <label for="exampleFormControlInput1" class="form-label" style={{ color: '#636363' }}>Please enter your full name</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="&#128100; Name" />
                        </div>
                        <div class="mb-3 my-3">
                            <label for="exampleFormControlInput1" class="form-label" style={{ color: '#636363' }}>Please enter your email address</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="&#128386; Email Address" />
                        </div>
                        <div class="mb-3 my-3">
                            <label for="exampleFormControlTextarea1" class="form-label" style={{ color: '#636363' }}>Please enter your message below</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='&#128386; message'></textarea>
                        </div>
                        <button class="contact-btn btn btn-primary my-3" type="submit" style={{ width: '30%', padding: "1.5rem 2.5rem" }}>Send Us <img style={{ width: '10%' }} src={arrow} alt="" /></button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactDashboard