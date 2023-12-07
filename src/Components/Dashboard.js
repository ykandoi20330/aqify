import React, { useState } from 'react'
import message from "./ProfileDashbaord/chatteardropdots1.svg"
import lightMessage from "./ProfileDashbaord/chatteardropdots1.svg"
import { Link } from 'react-router-dom'
import Arrow from "./ProfileDashbaord/ArrowUp.svg"
import PricingDash from "./PricingDash"

const Dashboard = () => {

    // let userName=JSON.parse(localStorage.getItem('user'));
    // userName = userName.userName;

    const [Show, setShow] = useState(1)

    return (
        <>
        { Show === 1 &&
        <>
            <div className="sideContent">

                <div className='d-flex justify-content-between' style={{ marginTop: '6vh' }}>
                    <div>
                        <span style={{ color: '#636363', fontWeight: '500' }}>Welcome back,</span>
                        <h1 style={{ fontWeight: '700', paddingBottom: '0.5rem', color: '#3247ff' }}>Aamish</h1> {/*{userName} */}
                    </div>
                    <div>
                        <Link to="" onClick={Show => setShow(2)} style={{ padding: '0.5rem 1.3rem' }} className='btn btn-primary rounded-pill'>Upgrade<img src={Arrow} alt="" /></Link>
                    </div>
                </div>
                <br />

                <div className="message-card">
                    <div>
                        <h2 style={{ fontWeight: '700', width: '28%', borderBottom: "4px solid #3247ff", borderRadius: '5px', paddingBottom: '0.5rem' }}> <img src={message} alt="" /> Messages</h2>
                    </div>

                    <div className='d-flex justify-content-center align-items-center flex-column' style={{ height: '70vh', color: '#c0c0c0' }}>
                        <img width={50} src={lightMessage} alt="" />
                        <span style={{ fontSize: '25px' }}>No conversations yet</span>
                    </div>
                </div>
            </div>
        </> }
        {
            Show === 2 && <PricingDash />
        }
        </>

    )
}

export default Dashboard