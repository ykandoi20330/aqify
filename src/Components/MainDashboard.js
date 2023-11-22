import React, { useState } from 'react'
import logo from "./Aqify project/FrameWhiteLogo.svg"
import folder from "./ProfileDashbaord/folder.svg"
import address from "./ProfileDashbaord/addressbook.svg"
import list from "./ProfileDashbaord/listnumbers.svg"
import bell from "./ProfileDashbaord/bell.svg"
import setting from "./ProfileDashbaord/gear.svg"
import tag from "./ProfileDashbaord/tag.svg"
import analytic from "./ProfileDashbaord/VectorAnalytics.svg"
import heart from "./ProfileDashbaord/VectorHeart.svg"
import proof from "./ProfileDashbaord/VectorProof.svg"

//card content
import { Link } from 'react-router-dom'
import ContactDashboard from './ContactDashboard'
import MessageDash from './MessageDash'
import message from "./ProfileDashbaord/chatteardropdots.svg"
import PaymentDash from './PaymentDash'
import ChangePassword from './ChangePassword'
import Dashboard from './Dashboard'
import PricingDash from './PricingDash'
import MarketplaceDash from './MarketplaceDash'
import MarketplaceDash2 from './MarketplaceDash2'
import MarketDashDetail from './MarketDashDetail'
import ProjectBuying from './ProjectBuying'
import MyProject from './MyProject'
import MyAnalytics from "./MyAnylatics"

import profileIcon from "./ProfileDashbaord/ellipse-60@2x.png"
import threeDots from "./ProfileDashbaord/dotsthreeoutlinevertical.svg"
import message1 from "./ProfileDashbaord/chatteardropdots1.svg"

import logo1 from "./SignIn/vector.svg"
import DashboardValuation from './DashboardValuation'
import ProofOfFund from './ProofOfFund'
import Favourite from './Favourite'

const MainDashboard = () => {

    const [Show, setShow] = useState(1)

    return (
        <>
            <section className='profile-section'>
                <nav className='navbar navbar-expand-lg dashboard' style={{ top: '0px' }}>
                    <div class="container-fluid" style={{ padding: "0rem" }}>
                        <button style={{ margin: '0 1.5rem' }} class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div style={{ left: '0', transform: 'translateX(-100%)' }} class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                            <div class="offcanvas-header">
                                <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">
                                    <Link className="navbar-brand" to="/"><img src={logo1} alt="Logo" style={{ left: "0px" }} className='Logo' /></Link>
                                    <br />
                                </h5>
                                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div class="offcanvas-body" style={{ left: '0px' }}>
                                {/** */}
                                <div class="Navdashboard d-flex flex-column flex-shrink-0 p-3 text-bg-dark" >
                                    <Link to="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                                        <img src={logo} alt="" />
                                        <br />
                                        <br />
                                        <br />
                                    </Link>
                                    <hr />
                                    <Link className='text-white' style={{ textDecoration: 'none' }} onClick={Show => setShow(1)}>
                                        <h2> Dashboard</h2>
                                    </Link>
                                    <ul class="nav flex-column mb-auto"> {/**nav-pills */}
                                        <li class="nav-item">
                                            <Link to="#" class="nav-link1 text-white" aria-current="page" onClick={Show => setShow(8)}>
                                                <img style={{ marginRight: "1rem" }} src={list} alt="" />
                                                Lists
                                            </Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link to="#" class="nav-link1 text-white" aria-current="page" onClick={Show => setShow(16)}>
                                                <img style={{ marginRight: "1rem" }} src={heart} alt="" />
                                                Favourite Lists
                                            </Link>
                                        </li>
                                        <li class="nav-item dropdown">
                                            <Link class="nav-link1 text-white dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                <img style={{ marginRight: "1rem" }} src={folder} alt="" />
                                                My Projects
                                            </Link>
                                            <ul class="dropdown-menu dropdown-menu-dark">
                                                <li><Link class="dropdown-item" onClick={Show => setShow(12)}>Project Lists</Link></li>
                                                <li><Link class="dropdown-item" onClick={Show => setShow(11)}>Projects Buying</Link></li>
                                            </ul>
                                        </li>

                                        <li>
                                            <Link onClick={Show => setShow(13)} class="nav-link1 text-white">
                                                <img style={{ marginRight: "1rem" }} src={analytic} alt="" />
                                                Analytics
                                            </Link>
                                        </li>
                                        <li>
                                            <Link onClick={Show => setShow(3)} class="nav-link1 text-white">
                                                <img style={{ marginRight: "1rem" }} src={message} alt="" />
                                                Messages
                                            </Link>
                                        </li>
                                        <li>
                                            <Link class="nav-link1 text-white" onClick={Show => setShow("")}> 
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
                                                <li><Link class="dropdown-item" to='/proflie'>Profile</Link></li>
                                                <li><Link class="dropdown-item" onClick={Show => setShow(5)}>Change Password</Link></li>
                                                <li><Link class="dropdown-item" onClick={Show => setShow(4)} >Payments</Link></li>
                                                <li><Link class="dropdown-item">Connect</Link></li>
                                            </ul> 
                                        </li>
                                        <li>
                                            <Link to="#" class="nav-link1 text-white" onClick={Show => setShow(15)}>
                                                <img style={{ marginRight: "1rem" }} src={proof} alt="" />
                                                Proof of Funds
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#" class="nav-link1 text-white" onClick={Show => setShow(7)}>
                                                <img style={{ marginRight: "1rem" }} src={tag} alt="" />
                                                pricings
                                            </Link>
                                        </li>
                                        <li>
                                            <Link onClick={Show => setShow(2)} class="nav-link1 text-white">
                                                <img style={{ marginRight: "1rem" }} src={address} alt="" />
                                                Contact us
                                            </Link>
                                        </li>
                                        <li>
                                            <Link onClick={Show => setShow(14)} class="nav-link1 text-white">
                                                {/* <img style={{ marginRight: "1rem" }} src={""} alt="" /> */}
                                                <i class="fa-solid fa-calculator" style={{ color: "#f5f5f5", fontSize: '1.5rem', margin: '0 1rem 0 0.5rem' }}></i>
                                                Valuation Tools
                                            </Link>
                                        </li>
                                    </ul>
                                    <hr />
                                    {/* <div class="dropdown">
                            <Link to="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src="https://github.com/mdo.png" alt="" width="32" height="32" class="rounded-circle me-2" />
                                <strong>mdo</strong>
                            </Link>
                            <ul class="dropdown-menu dropdown-menu-dark text-small shadow">
                                <li><Link class="dropdown-item" to="#">New project...</Link></li>
                                <li><Link class="dropdown-item" to="#">Settings</Link></li>
                                <li><Link class="dropdown-item" to="#">Profile</Link></li>
                                <li><hr class="dropdown-divider" /></li>
                                <li><Link class="dropdown-item" to="#">Sign out</Link></li>
                            </ul>
                        </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>

                <div className="sideContent">
                    <div className="d-flex justify-content-end">
                        <div className='mx-2'><Link to="/message"><img src={message1} alt="" /></Link></div>
                        <div className='mx-1'><Link to="/proflie"><img style={{ width: '40px' }} src={profileIcon} alt="" /></Link></div>
                        <div className='mx-1'>
                            {/* <Link to="/"></Link> */}
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
                    {Show === 2 &&
                        <ContactDashboard />}
                    {Show === 3 &&
                        <MessageDash />
                    }
                    {Show === 4 &&
                        <PaymentDash />
                    }
                    {Show === 5 &&
                        <ChangePassword />
                    }
                    {Show === 1 &&
                        <Dashboard />
                    }
                    {Show === 7 &&
                        <PricingDash />
                    }
                    {Show === 8 &&
                        <MarketplaceDash />
                    }
                    {Show === 9 &&
                        <MarketplaceDash2 />
                    }
                    {Show === 10 &&
                        <MarketDashDetail />
                    }
                    {Show === 11 &&
                        <ProjectBuying />
                    }
                    {Show === 12 &&
                        <MyProject />
                    }
                    {Show === 13 &&
                        <MyAnalytics />
                    }
                    {Show === 14 &&
                        <DashboardValuation />
                    }
                    {Show === 15 &&
                        <ProofOfFund />
                    }
                    {Show === 16 &&
                        <Favourite />
                    }
                </div>
            </section >
        </>
    )
}

export default MainDashboard