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
                    <div style={{width:'95%',top:'5vh',position:"relative"}} className='footer-main d-flex justify-content-between'>
                        <div className="footer-main col-5">
                            <Link to="/"><img style={{ width: '35%', marginRight:'1rem' }} src={Logo} alt="" /></Link>
                            <span style={{ color: '#C0C0C0',fontSize:'20px' }}>-Leading acquistion platform</span>
                            <div className='my-4' style={{ color: '#C0C0C0' }}>
                                Acqify  is an up-market acquisition platform for $100K+ revenue startups. Our global marketplace makes it free and anonymous for business owners to attract full and partial acquisition offers directly. No listing fees. 100% anonymity.
                            </div>
                        </div>

                        <div>
                            <ul className='first-ul' style={{ listStyle: 'none' }}>
                                <li style={{ color: '#fff',fontSize:'20px',borderBottom: "3px solid #3247FF",borderRadius: "3px" ,width:'70%' }}>Platform</li>
                                <li style={{ color: '#C0C0C0' }}><Link to="/owner">For owners</Link></li>
                                <li style={{ color: '#C0C0C0' }}><Link to="/acquire">For acquires</Link></li>
                                <li style={{ color: '#C0C0C0' }}><Link to="/market">Market</Link></li>
                                <li style={{ color: '#C0C0C0' }}><Link to="/">Stories</Link></li>
                            </ul>
                        </div>
                        <div>
                            <ul className='first-ul' style={{ listStyle: 'none' }}>
                                <li style={{ color: '#fff',fontSize:'20px',borderBottom: "3px solid #3247FF",borderRadius: "3px"  ,width:'75%'  }}>Company</li>
                                <li style={{ color: '#C0C0C0' }}><Link to="/">About</Link></li>
                                <li style={{ color: '#C0C0C0' }}><Link to="/valuation">Valuation Tool</Link></li>
                                <li style={{ color: '#C0C0C0' }}><Link to="/pricing">Pricing</Link></li>
                                <li style={{ color: '#C0C0C0' }}><Link to="/contact"> Contact us</Link></li>
                            </ul>
                        </div>
                        <div>
                            <ul className='first-ul' style={{ listStyle: 'none' }}>
                                <li style={{ color: '#fff',fontSize:'20px',borderBottom: "3px solid #3247FF",borderRadius: "3px"  ,width:'45%'  }}>Legal</li>
                                {/* <li style={{ color: '#C0C0C0' }}><Link to="/advisory">Imprint</Link></li> */}
                                <li style={{ color: '#C0C0C0' }}><Link to="/advisory">Advisory</Link></li>
                                <li style={{ color: '#C0C0C0' }}><Link to="/testimonials">Testimonials</Link></li>
                                <li style={{ color: '#C0C0C0' }}><Link to="/faq">FAQ</Link></li>
                                <li style={{ color: '#C0C0C0' }}><Link to="/terms">Terms and Conditions</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <div className='Social-logo d-flex justify-content-between'>
                            <div style={{ color: '#C0C0C0' }}>Copyright @Acquify</div>
                            <div>
                                <ul style={{ listStyle: 'none' }} className='d-flex'>
                                    <li><Link to="/"><img className='socailLogo' src={socail2} alt="" /></Link></li>
                                    <li><Link to="/"><img className='socailLogo' src={socail3} alt="" /></Link></li>
                                    <li><Link to="/"><img className='socailLogo' src={socail4} alt="" /></Link></li>
                                    <li><Link to="/"><img className='socailLogo' src={socail5} alt="" /></Link></li>
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