import React from 'react'
import Logo from "./Aqify project/Frame 13.png"

//socail media logo
import socail2 from "./Aqify project/Vector (2).png"
import socail3 from "./Aqify project/Vector (3).png"
import socail4 from "./Aqify project/Vector (4).png"
import socail5 from "./Aqify project/Vector (5).png"

const Footer = () => {
    return (
        <>
            <section className='footer-section'>
                <div className='d-grid align-content-between align-items-center'>
                    <div style={{width:'95%',top:'5vh',position:"relative"}} className='d-flex justify-content-between'>
                        <div className="footer-main col-5">
                            <img style={{ width: '35%', marginRight:'1rem' }} src={Logo} alt="" />
                            <span style={{ color: '#C0C0C0',fontSize:'20px' }}>-Leading acquistion platform</span>
                            <div className='my-4' style={{ color: '#C0C0C0' }}>
                                Acqify  is an up-market acquisition platform for $100K+ revenue startups. Our global marketplace makes it free and anonymous for business owners to attract full and partial acquisition offers directly. No listing fees. 100% anonymity.
                            </div>
                        </div>

                        <div>
                            <ul className='first-ul' style={{ listStyle: 'none' }}>
                                <li style={{ color: '#fff',fontSize:'20px',borderBottom: "3px solid #3247FF",borderRadius: "3px" ,width:'70%' }}>Platform</li>
                                <li style={{ color: '#C0C0C0' }}>For owners</li>
                                <li style={{ color: '#C0C0C0' }}>For acquires</li>
                                <li style={{ color: '#C0C0C0' }}>Market</li>
                                <li style={{ color: '#C0C0C0' }}>Stories</li>
                            </ul>
                        </div>
                        <div>
                            <ul className='first-ul' style={{ listStyle: 'none' }}>
                                <li style={{ color: '#fff',fontSize:'20px',borderBottom: "3px solid #3247FF",borderRadius: "3px"  ,width:'75%'  }}>Company</li>
                                <li style={{ color: '#C0C0C0' }}>About</li>
                                <li style={{ color: '#C0C0C0' }}>FAQ</li>
                                <li style={{ color: '#C0C0C0' }}>Pricing</li>
                                <li style={{ color: '#C0C0C0' }}>Contact us</li>
                            </ul>
                        </div>
                        <div>
                            <ul className='first-ul' style={{ listStyle: 'none' }}>
                                <li style={{ color: '#fff',fontSize:'20px',borderBottom: "3px solid #3247FF",borderRadius: "3px"  ,width:'45%'  }}>Legal</li>
                                <li style={{ color: '#C0C0C0' }}>Imprint</li>
                                <li style={{ color: '#C0C0C0' }}>Terms and Conditions</li>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <div className='d-flex justify-content-between'>
                            <div style={{ color: '#C0C0C0' }}>Copyright @Acquify</div>
                            <div>
                                <ul style={{ listStyle: 'none' }} className='d-flex'>
                                    <li><img className='socailLogo' src={socail2} alt="" /></li>
                                    <li><img className='socailLogo' src={socail3} alt="" /></li>
                                    <li><img className='socailLogo' src={socail4} alt="" /></li>
                                    <li><img className='socailLogo' src={socail5} alt="" /></li>
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