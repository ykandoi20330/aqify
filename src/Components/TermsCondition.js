import React from 'react'
import backgroundImg from "./Term & privacy/unsplash_5U_28ojjgms2.png"

import Navbar from "./Navbar"
import Footer from './Footer'

const TermsCondition = () => {
    return (
        <>
        <section>
            <Navbar/>
        </section>

        {/** */}
            <section className='pricing-first-section'>
                <div className="pricing-backgroundImage" style={{ backgroundImage: `url(${backgroundImg})`, width: '100%', height: '80vh', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                    <h1 className='col-6 text-center'>Terms & Privacy</h1>
                </div>
            </section>

            <section className="ligh-back" style={{ height: '100vh' }} >
                <div className="terms-card">
                    <span className='text-center' style={{color:'#636363',fontWeight:'bolder',fontSize:'4rem'}}>text field</span>
                </div>
            </section>

            <section>
                <Footer/>
            </section>
        </>
    )
}

export default TermsCondition