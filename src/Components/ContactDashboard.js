import React from 'react'

//side content
import arrow from "./Aqify project/Vector (1).png"

const ContactDashboard = () => {
    return (
        <>
            <section className='profile-section'>
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