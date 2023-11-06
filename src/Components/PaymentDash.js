import React from 'react'
import message from "./ProfileDashbaord/chatteardropdots1.svg"
import { Link } from 'react-router-dom'
import profileIcon from "./ProfileDashbaord/ellipse-60@2x.png"
import threeDots from "./ProfileDashbaord/dotsthreeoutlinevertical.svg"
import credit from "./ProfileDashbaord/VectorCredit.svg"
import credit1 from "./ProfileDashbaord/vectorCredit1.svg"

const PaymentDash = () => {
    return (
        <>
            <div className="sideContent">

                <div>
                    <h1 style={{ fontWeight: '700', paddingBottom: '0.5rem' }}>Payment Settings</h1>
                    <span style={{ color: '#636363' }}>View and edit your payment settings</span>
                </div>
                <div className="message-card">
                    <div className='d-flex flex-column justify-content-center align-items-center' style={{ height: '50vh' }}>
                        <img width={70} src={credit} alt="" />
                        <span className='col-6 my-4 text-center' style={{ color: '#c0c0c0', fontSize: '25px' }}>You haven't added a payment method yet</span>
                        <a className='btn btn-primary rounded-pill' style={{ padding: '0.8rem 1.5rem' }} href="#"><img className='mx-2' width={30} src={credit1} alt="" />Add Card</a>
                    </div>
                </div>

                <br />
                <div>
                    <h1 style={{ fontWeight: '700', paddingBottom: '0.5rem' }}>Payment History</h1>
                    <span style={{ color: '#636363' }}>View your payment history</span>
                </div>
                <div className="message-card">
                    <div className='d-flex flex-column justify-content-center align-items-center' style={{ height: '50vh' }}>
                        <img width={70} src={credit} alt="" />
                        <span className='col-6 my-4 text-center' style={{ color: '#c0c0c0', fontSize: '25px' }}>Your p hereayments history will automatically appear</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PaymentDash