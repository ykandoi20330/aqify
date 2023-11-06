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
import profilePhoto from "./ProfileDashbaord/group-11.svg"

//card content
import verify from "./ProfileDashbaord/vector1.svg"
import { Link } from 'react-router-dom'

const DashboardProfile = () => {
    return (
        <>
            <section className='profile-section'>
                {/* <div className="dashboard" >
                    <div class="Navdashboard d-flex flex-column flex-shrink-0 p-3 text-bg-dark" >
                        <Link to="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                            <svg class="bi pe-none me-2" width="40" height="32"><use href="#bootstrap"></use></svg>
                            <span class="fs-4"><img src={logo} alt="" />Acqify</span>
                        </Link>
                        <hr />
                        <h2> Dashboard</h2>
                        <ul class="nav flex-column mb-auto">
                            <li class="nav-item">
                                <Link to="#" class="nav-link1 active" aria-current="page">
                                    <img style={{ marginRight: "1rem" }} src={list} alt="" />
                                    Lists
                                </Link>
                            </li>
                            <li class="nav-item dropdown">
                                <Link class="nav-link1 text-white dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img style={{ marginRight: "1rem" }} src={folder} alt="" />
                                    My Projects
                                </Link>
                                <ul class="dropdown-menu dropdown-menu-dark">
                                    <li><Link class="dropdown-item" to="#">Project Lists</Link></li>
                                    <li><Link class="dropdown-item" to="#">Projects Buying</Link></li>
                                </ul>
                            </li>

                            <li>
                                <Link to="#" class="nav-link1 text-white">
                                    <img style={{ marginRight: "1rem" }} src={bell} alt="" />
                                    Notifications
                                </Link>
                            </li>
                            <li class="nav-item dropdown">
                                <Link class="nav-link1 text-white dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img style={{ marginRight: "1rem" }} src={setting} alt="" />
                                    Settings
                                </Link>
                                <ul class="dropdown-menu dropdown-menu-dark">
                                    <li><Link class="dropdown-item" to="#">Profile</Link></li>
                                    <li><Link class="dropdown-item" to="#">change Password</Link></li>
                                    <li><Link class="dropdown-item" to="#">Payments</Link></li>
                                    <li><Link class="dropdown-item" to="#">Connect</Link></li>
                                </ul>
                            </li>
                            <li>
                                <Link to="#" class="nav-link1 text-white">
                                    <img style={{ marginRight: "1rem" }} src={tag} alt="" />
                                    pricings
                                </Link>
                            </li>
                            <li>
                                <Link to="/contactDashboard" class="nav-link1 text-white">
                                    <img style={{ marginRight: "1rem" }} src={address} alt="" />
                                    Contact us
                                </Link>
                            </li>
                        </ul>
                        <hr />
                    </div>
                </div> */}

                <div className="sideContent">
                    
                    <div>
                        <h1 style={{ fontWeight: '700' }}>Profile</h1>
                        <span style={{ color: '#636363' }}>Update your information below</span>
                    </div>

                    <div className='profile-card d-flex'>
                        <div className='d-flex justify-content-around align-items-center'>
                            <div className="profilePhoto d-flex flex-column align-items-center">
                                <img src={profilePhoto} alt="" />
                                <Link to="/" className='btn btn-primary rounded-pill' style={{ padding: '0.5rem 0.8rem' }}><img src={verify} alt="" />Verify</Link>
                            </div>

                            <div style={{ width: '60%' }}>
                                <div class="mb-3 my-3">
                                    <div class="row">
                                        <div class="col">
                                            <label for="exampleFormControlInput1" class="form-label" style={{ color: '#636363' }}>First name</label>
                                            <input style={{ height: '6vh' }} type="text" class="form-control" aria-label="First name" />
                                        </div>
                                        <div class="col">
                                            <label for="exampleFormControlInput1" class="form-label" style={{ color: '#636363' }}>Last name</label>
                                            <input style={{ height: '6vh' }} type="text" class="form-control" aria-label="Last name" />
                                        </div>
                                    </div>
                                </div>
                                <div class="mb-3 my-3">
                                    <label for="exampleFormControlInput1" class="form-label" style={{ color: '#636363' }}>Username</label>
                                    <input style={{ height: '6vh' }} type="email" class="form-control" id="exampleFormControlInput1" />
                                </div>
                                <div class="mb-3 my-3">
                                    <label for="exampleFormControlTextarea1" class="form-label" style={{ color: '#636363' }}>About me</label>
                                    <textarea style={{ height: '25vh' }} class="form-control" id="exampleFormControlTextarea1" rows="3" ></textarea>
                                </div>

                                <div>
                                    <span className='my-5' style={{ color: '#636363' }}>Change your account type</span>
                                    <div className='d-flex flex-wrap'>
                                        <div>
                                            <input type="radio" class="btn-check  rounded-pill" name="options-base" id="option8" autocomplete="off" />
                                            <label  class="btn1" style={{ padding: "0.5rem", margin:'0.3rem 0.7rem 0 0',background: "#EEF0FE"}} for="option8">
                                                <i class="fa-solid fa-circle-check mx-2"></i>
                                                Owner( Seller )</label>
                                        </div>
                                        <div >
                                            <input type="radio" class="btn-check  rounded-pill" name="options-base" id="option9" autocomplete="off" />
                                            <label  class="btn1" style={{ padding: "0.5rem", margin:'0.3rem 0.7rem 0 0',background: "#EEF0FE"}}  for="option9">
                                                <i class="fa-solid fa-circle-check mx-2"></i>
                                                Acquirer( buyer )</label>
                                        </div>
                                        <div>
                                            <input type="radio" class="btn-check  rounded-pill" name="options-base" id="option10" autocomplete="off" />
                                            <label class="btn1" style={{ padding: "0.5rem", margin:'0.3rem 0.7rem 0 0',background: "#EEF0FE"}}  for="option10">
                                                <i class="fa-solid fa-circle-check mx-2"></i>
                                                Owner and Aquirer</label>
                                        </div>
                                        <div >
                                            <input type="radio" class="btn-check  rounded-pill" name="options-base" id="option11" autocomplete="off" />
                                            <label class="btn1" style={{ padding: "0.5rem", margin:'0.3rem 0.7rem 0 0',background: "#EEF0FE"}}  for="option11">
                                                <i class="fa-solid fa-circle-check mx-2"></i>
                                                Fundriser</label>
                                        </div>

                                    </div>
                                </div>
                                <button class="btn btn-primary my-3 rounded-pill" type="submit" style={{ width: '40%', padding: "0.8rem 1.5rem" }}>Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default DashboardProfile