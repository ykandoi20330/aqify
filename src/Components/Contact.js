import React from 'react'
import backgroundImg from "./Pricing/unsplash_5U_28ojjgms.svg"
import arrow from "./Aqify project/Vector (1).png"

import Navbar from "./Navbar"
import Footer from './Footer'

const Contact = () => {
    return (
        <>
        <section>
            <Navbar/>
        </section>

        {/** */}
            <section className='pricing-first-section'>
                <div className="pricing-backgroundImage" style={{ backgroundImage: `url(${backgroundImg})`, width: '100%', height: '80vh', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                    <h1 className='col-6 text-center'>Contact Us</h1>
                    <span className="col-4 text-center" style={{margin:'0rem'}}>We'd really like to hear any feedback or issue that you might have.</span>
                </div>
            </section>

            <section className="contact-back" style={{ height: '120vh' }} >
                <div className="contact-card">
                    <div class="mb-3 my-3">
                        <label for="exampleFormControlInput1" class="form-label" style={{color:'#636363'}}>Please enter your full name</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="&#128100; Name"/>
                    </div>
                    <div class="mb-3 my-3">
                        <label for="exampleFormControlInput1" class="form-label" style={{color:'#636363'}}>Please enter your email address</label>
                        <input type="email" class="form-control"  id="exampleFormControlInput1" placeholder="&#128386; Email Address"/>
                    </div>
                    <div class="mb-3 my-3">
                        <label for="exampleFormControlTextarea1" class="form-label" style={{color:'#636363'}}>Please enter your message below</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='&#128386; message'></textarea>
                    </div>
                    <button class="contact-btn btn btn-primary my-3" type="submit" style={{width:'30%', padding:"1.5rem 2.5rem"}}>Send Us <img style={{ width: '10%' }} src={arrow} alt="" /></button>
                </div>
            </section>

            <section>
                <Footer/>
            </section>
        </>
    )
}

export default Contact