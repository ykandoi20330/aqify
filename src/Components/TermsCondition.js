import React from 'react'
import backgroundImg from "./Term & privacy/unsplash_5U_28ojjgms2.png"

import Navbar from "./Navbar"
import Footer from './Footer'

const TermsCondition = () => {
    return (
        <>
            <section>
                <Navbar />
            </section>

            <section className='pricing-first-section'>
                <div className="pricing-backgroundImage" style={{background:'#161616', padding:'4rem 0 8rem'}}>
                {/* style={{ backgroundImage: `url(${backgroundImg})`, width: '100%', height: '80vh', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} */}
                    <h1 className='col-6 text-center'>Terms & Privacy</h1>
                </div>
            </section>

            <section className="ligh-back align-items-center" style={{ height: '100%' }} >
                <div className="terms-card">
                    <div>
                        <h1 className='mb-5' style={{fontWeight:'700'}}>TERMS</h1>
                        <div className='mb-5'>
                            <h3 style={{fontWeight:'700'}}>1. Official Promotion</h3>
                            <span style={{ color: '#636363' }}>When you sign up to Acqify, you can receive promotional emails, the latest offers,
                                and listing alerts. You also agree to receive our official newsletter.
                                However, you can turn off all notifications by subscribing to our Newsletter.</span>
                        </div>
                        <div  className='mb-5'>
                            <h3 style={{fontWeight:'700'}}>2. Acquiring </h3>
                            <span style={{ color: '#636363' }}>If you are a buyer and want to acquire an online business that interests you,
                                Acqify will ask you for personal and confidential information. It includes your credit/debit card details,
                                the expiration date of your credit card, the official billing country and address, and crucial shipping details.
                                You cannot submit invalid and tampered details. To help you acquire businesses, Acqify can incorporate third-party transaction platforms,
                                and by agreeing to our privacy policy, you allow us to forward your information to them.
                                We can also put your orders on hold in case of Website maintenance, Technical problems, or asset unavailability. </span>
                        </div>
                    </div>
                    <div>
                        <h1  className='mb-3' style={{fontWeight:'700'}}>PRIVACY</h1>
                        <div  style={{ color: '#636363' }}>We are Acqify - an upmarket acquisitions platform where you get full liberty for buying and selling assets.
                         You are viewing the official Privacy Policy Statment by Aciqfy.</div>
                        <div style={{ color: '#636363' }}>This policy is only related to the affairs and services of Acqify.
                         This policy does not represent third-party platforms and partners of Acqify that it can use to gather your data in acquiring and selling assets.  </div>
                        <div style={{ color: '#636363' , background:'#EEF0FE'}}>This policy demonstrates our commitment to the European General Data Protection Regulation <span style={{fontWeight:'700'}}>(“GDPR”)</span> and the California Consumer Privacy Act <span style={{fontWeight:'700'}}>(“CCPA”)</span> to the extent we offer Services or monitor the activity of individuals in the European Union and California in the USA.</div>
                        <div style={{ color: '#636363' }}>Acqify can process your personal information through its services. After going through our Terms of Service, you permit us to use your data for transaction and shipping purposes. </div>
                        <div  className='mb-5' style={{ color: '#636363' }}>We can also amend our Official Privacy Policy if we consider it essential. However, in case of any changes made to our policy, we will notify you through a dedicated email to keep you updated. </div>
                        <div  className='mb-5'>
                            <h4>What do we need from you?</h4>
                            <span style={{ color: '#636363' }}>Acqify can demand the following set of personal data from you:</span>
                            <ol className='mt-3' style={{fontWeight:'700'}}>
                                <li>Your details</li>
                                <li>Your business details</li>
                                <li>Your payment information as per your preferred platform</li>
                            </ol>
                            <span style={{ color: '#636363' }}>We can also inquire for the following information:</span>
                            <ol className='mt-3' style={{fontWeight:'700'}}>
                                <li>Your IP address;</li>
                                <li>Your geolocation;</li>
                                <li>Your geolocation;</li>
                            </ol>
                        </div>
                        <div  className='mb-5'>
                            <h4 style={{fontWeight:'700'}}>How do we process this information?</h4>
                            <span style={{ color: '#636363' }}>We gather your data for:</span>
                            <ol className='mt-3' style={{fontWeight:'700'}}>
                                <li>Provide you with complete website access and Acqify’s services</li>
                                <li>To build an interactive relationship with you</li>
                                <li>To fix the website’s glitches in time </li>
                                <li>To execute your orders and complete transactions</li>
                                <li>To update you on the latest updates about Acqify’s offers</li>
                            </ol>
                        </div>
                        <div  className='mb-5'>
                            <h4 style={{fontWeight:'700'}}>How do we protect this information?</h4>
                            <span style={{ color: '#636363' }}>Acqify uses advanced technological systems to store your personal information. Encryption is also included in our information storage of a user. </span>
                        </div>
                        <div  className='mb-5'>
                            <h4 style={{fontWeight:'700'}}>When will we share your personal information with third parties? </h4>
                            <span style={{ color: '#636363' }}>We honor your privacy and keep it confidential as much as possible. However, your information can be shared with third parties when:</span>
                            <ul className='mx-4 mt-3' style={{fontWeight:'700'}}>
                                <li>We will receive your consent. </li>
                                <li>We would have to offer our services on your demand. </li>
                                <li>Letting you access paramount information on our website is necessary.</li>
                                <li>We would have to provide access to a government authority to our website and all the data it contains, including the user’s personal information. </li>
                                <li>We would have to prevent data threats and cyber leaks.</li>
                            </ul>
                        </div>
                        <div>
                            <h4 style={{fontWeight:'700'}}>What can you do to stop Acqify from accessing your identifiable information?</h4>
                            <span style={{ color: '#636363' }}>In case you do not want us to access your identifiable information, then you can do this by:</span>
                            <ol className='mt-3' style={{fontWeight:'700'}}>
                                <li>Not allowing website cookies</li>
                                <li>Not making an account on Acqify’s website</li>
                                <li>Not ordering our services</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <Footer />
            </section>
        </>
    )
}

export default TermsCondition