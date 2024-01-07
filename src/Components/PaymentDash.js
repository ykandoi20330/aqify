import React from 'react'
import { Link } from 'react-router-dom'
import credit from "./ProfileDashbaord/VectorCredit.svg"
import credit1 from "./ProfileDashbaord/vectorCredit1.svg"

const PaymentDash = () => {
    return (
        <>
            <div className="sideContent">

                <div className='d-flex justify-content-between align-items-center' style={{ marginTop: '5vh' }}>
                    <div>
                    <h1 style={{ fontWeight: '700', paddingBottom: '0.5rem' }}>Payment Wallet</h1>
                    <span style={{ color: '#636363' }}>View and edit your payment settings</span>
                    </div>
                    <div className='My-btns'>
                        <Link className='Myproject-btn btn btn-outline-primary rounded-pill mx-2' style={{ padding: '0.6rem 1.2rem' }} to="#" ><i className="fa-regular fa-credit-card creditIcon mx-2" style={{color: "#005eff"}}></i>$2500</Link>
                    </div>
                </div>

                <div className="message-card">
                    <div className='d-flex flex-column justify-content-center align-items-center' style={{ height: '50vh' }}>
                        <img width={70} src={credit} alt="" />
                        <span className='col-6 my-4 text-center' style={{ color: '#c0c0c0', fontSize: '25px' }}>You haven't added a payment method yet</span>
                        <Link className='btn btn-primary rounded-pill' style={{ padding: '0.8rem 1.5rem' }} href="#"><img className='mx-2' width={30} src={credit1} alt="" />Add money</Link>
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
                        <span className='col-6 my-4 text-center' style={{ color: '#c0c0c0', fontSize: '25px' }}>Your payments history will automatically appear here</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PaymentDash