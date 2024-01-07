import React from 'react'
import backgroundImg from "./Pricing/unsplash_5U_28ojjgms2.png"

import Navbar from "./Navbar"
import Footer from './Footer'

const FAQ = () => {
    return (
        <>
        <section>
            <Navbar/>
        </section>

        {/** */}
            <section className='pricing-first-section'>
                <div className="pricing-backgroundImage" style={{background:'#161616', padding:'4rem 0 8rem 0'}}>
                {/* style={{ backgroundImage: `url(${backgroundImg})`, width: '100%', height: '80vh', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} */}
                    <h1 className='col-6 text-center'>DON’T LET DOUBTS COME IN YOUR WAY! HELP IS HERE!</h1>
                </div>
            </section>

            <section className="FAQ-back" >
                <div style={{position:'relative',top:'-80px'}}>
                    <div className="accordion accordion-flush" id="accordionFlushExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                Can I list my assets for free?
                                </button>
                                <img src="" alt="" />
                            </h2>
                            <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body"><span >Of course! Acqify does not charge sellers for listing their assets; either they choose our basic pricing plan or premium.</span> <br />
                                <div className='my-4'></div>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                I am unable to estimate my valuation. Can you help?
                                </button>
                                <img src="" alt="" />
                            </h2>
                            <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body"><span className='my-3'>Yes, we provide a quick valuation service to our sellers so they can easily make informed decisions on Acqify’s platform.</span><br />
                                <div className='my-4'></div>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                    Which types of businesses can list on Acqify?
                                </button>
                                <img src="" alt="" />
                            </h2>
                            <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body"><span className='my-3'>Acqify is dedicated private internet companies of all sizes and categories including start-ups, scale-ups and SMBs in categories SaaS, eCommerce, mobile, Fintech, content, Web3, agency and, of course, marketplace.Acquirers on the platform look for distressed and cashflow positive businesses with minimum $100K in annualised or TTM revenues. </span><br />
                                <div className='my-4'>Owners can share these details while staying anonymous when they list their business for free to receive offers from buyers.</div></div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                    Which types of businesses can list on Acqify?
                                </button>
                                <img src="" alt="" />
                            </h2>
                            <div id="flush-collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body"><span className='my-3'>Acqify is dedicated private internet companies of all sizes and categories including start-ups, scale-ups and SMBs in categories SaaS, eCommerce, mobile, Fintech, content, Web3, agency and, of course, marketplace.Acquirers on the platform look for distressed and cashflow positive businesses with minimum $100K in annualised or TTM revenues. </span><br />
                                <div className='my-4'>  Owner can share these details while staying anonymous when they list their business for free to receive offers from buyers.</div></div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                                    Which types of businesses can list on Acqify?
                                </button>
                                <img src="" alt="" />
                            </h2>
                            <div id="flush-collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body"><span className='my-3'>Acqify is dedicated private internet companies of all sizes and categories including start-ups, scale-ups and SMBs in categories SaaS, eCommerce, mobile, Fintech, content, Web3, agency and, of course, marketplace.Acquirers on the platform look for distressed and cashflow positive businesses with minimum $100K in annualised or TTM revenues. </span><br />
                                <div className='my-4'>Owners can share these details while staying anonymous when they list their business for free to receive offers from buyers.</div></div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                                    Which types of businesses can list on Acqify?
                                </button>
                                <img src="" alt="" />
                            </h2>
                            <div id="flush-collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body"><span className='my-3'>Acqify is dedicated private internet companies of all sizes and categories including start-ups, scale-ups and SMBs in categories SaaS, eCommerce, mobile, Fintech, content, Web3, agency and, of course, marketplace.Acquirers on the platform look for distressed and cashflow positive businesses with minimum $100K in annualised or TTM revenues. </span><br />
                                   <div className='my-4'>Owners can share these details while staying anonymous when they list their business for free to receive offers from buyers.</div></div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>

            <section>
                <Footer/>
            </section>
        </>
    )
}

export default FAQ