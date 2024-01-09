import React from 'react'
import Logo from "./Aqify project/Frame 13.png"

//socail media logo
import socail2 from "./Aqify project/Vector (2).png"
import socail3 from "./Aqify project/Vector (3).png"
import socail4 from "./Aqify project/Vector (4).png"
import socail5 from "./Aqify project/Vector (5).png"

import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <section className='footer-section'>
                <div className='d-grid align-content-between align-items-center'>
                    <div style={{width:'95%',position:"relative", padding:'0 0 2rem 0'}} className='footer-main d-flex justify-content-between'>
                        <div className="footer-main col-5">
                            <Link to="/"><img style={{ width: '35%', marginRight:'1rem' }} src={Logo} alt="" /></Link>
                            <span style={{ color: '#C0C0C0',fontSize:'20px' }}>- Unleashing Full Acquisitions Potential</span>
                            <div className='my-4' style={{ color: '#C0C0C0' }}>
                            Acqify is a leading up-market acquisitions platform where all-scale acquirers and owners exchange assets and skyrocket their revenue. 
                            Our global marketplace is proven to streamless acquisitions & mergers anonymously and securely for buyers and sellers—no fee to put up listings and execute confidential business transactions.
                            </div>
                        </div>

                        <div>
                            <ul className='first-ul' style={{ listStyle: 'none' }}>
                                <li style={{ color: '#fff',fontSize:'20px',borderBottom: "3px solid #3247FF",borderRadius: "3px" ,width:'70%' }}>Platform</li>
                                <li style={{ color: '#C0C0C0' }}><Link to="/owner">For owners</Link></li>
                                <li style={{ color: '#C0C0C0' }}><Link to="/acquire">For acquires</Link></li>
                                <li style={{ color: '#C0C0C0' }}><Link to="/market">Marketplace</Link></li>
                                <li style={{ color: '#C0C0C0' }}><Link to="/">Resources</Link></li>
                            </ul>
                        </div>
                        <div>
                            <ul className='first-ul' style={{ listStyle: 'none' }}>
                                <li style={{ color: '#fff',fontSize:'20px',borderBottom: "3px solid #3247FF",borderRadius: "3px"  ,width:'75%'  }}>Company</li>
                                <li style={{ color: '#C0C0C0' }}><Link to="/">About Acqify</Link></li>
                                <li style={{ color: '#C0C0C0' }}><Link to="/contact">Contact us</Link></li>
                                <li style={{ color: '#C0C0C0' }}><Link to="/pricing">Pricing</Link></li>
                                <li style={{ color: '#C0C0C0' }}><Link to="/faq">FAQ</Link></li>
                            </ul>
                        </div>
                        <div>
                            <ul className='first-ul' style={{ listStyle: 'none' }}>
                                <li style={{ color: '#fff',fontSize:'20px',borderBottom: "3px solid #3247FF",borderRadius: "3px"  ,width:'45%'  }}>Legal</li>
                                {/* <li style={{ color: '#C0C0C0' }}><Link to="/advisory">Imprint</Link></li> */}
                                <li style={{ color: '#C0C0C0' }}><Link to="/AdminPanel/AdminPanelListing">Admin</Link></li>
                                <li style={{ color: '#C0C0C0' }}><Link to="/advisory">Advisory</Link></li>
                                <li style={{ color: '#C0C0C0' }}><Link to="/testimonials">Testimonials</Link></li>
                                <li style={{ color: '#C0C0C0' }}><Link to="/valuation">Valuation Tool</Link></li>
                                <li style={{ color: '#C0C0C0' }}><Link to="/terms">Terms and Conditions</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <div className='Social-logo d-flex justify-content-between'>
                            <div style={{ color: '#C0C0C0' }}>Copyright @Acqify | 2023</div>
                            <div>
                                <ul style={{ listStyle: 'none' }} className='d-flex'>
                                    {/* <li><Link to="/"><img className='socailLogo' src={socail2} alt="" /></Link></li>
                                    <li><Link to="/"><img className='socailLogo' src={socail3} alt="" /></Link></li>
                                    <li><Link to="/"><img className='socailLogo' src={socail4} alt="" /></Link></li>
                                    <li><Link to="/"><img className='socailLogo' src={socail5} alt="" /></Link></li> */}
                                    <li><i className="fa-brands fa-facebook mx-3 socialIcon" ></i></li>
                                    <li><i className="fa-brands fa-instagram mx-3 socialIcon" ></i></li>
                                    <li><i className="fa-brands fa-twitter mx-3 socialIcon" ></i></li>
                                    <li><i className="fa-brands fa-linkedin mx-3 socialIcon" ></i></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Footer