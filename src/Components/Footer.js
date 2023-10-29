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
                <div>
                    <div className='d-flex justify-content-between'>
                        <div className="footer-main col-6">
                            <img style={{ width: '25%' }} src={Logo} alt="" />
                            <span style={{ color: '#C0C0C0' }}>-Leading acquistion platform</span>
                            <div className='' style={{ color: '#C0C0C0' }}>
                                Acqify  is an up-market acquisition platform for $100K+ revenue startups. Our global marketplace makes it free and anonymous for business owners to attract full and partial acquisition offers directly. No listing fees. 100% anonymity.
                            </div>
                        </div>

                        <div>
                            <ul style={{ listStyle: 'none' }}>
                                <li style={{ color: '#fff' }}>Platform</li>
                                <li style={{ color: '#C0C0C0' }}>For owners</li>
                                <li style={{ color: '#C0C0C0' }}>For acquires</li>
                                <li style={{ color: '#C0C0C0' }}>Market</li>
                                <li style={{ color: '#C0C0C0' }}>Stories</li>
                            </ul>
                        </div>
                        <div>
                            <ul style={{ listStyle: 'none' }}>
                                <li style={{ color: '#fff' }}>Company</li>
                                <li style={{ color: '#C0C0C0' }}>About</li>
                                <li style={{ color: '#C0C0C0' }}>FAQ</li>
                                <li style={{ color: '#C0C0C0' }}>Pricing</li>
                                <li style={{ color: '#C0C0C0' }}>Contact us</li>
                            </ul>
                        </div>
                        <div>
                            <ul style={{ listStyle: 'none' }}>
                                <li style={{ color: '#fff' }}>Legal</li>
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