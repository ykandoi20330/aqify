import React, { useState } from 'react'
import MyProject from './MyProject'
import { Link } from 'react-router-dom'
import arrow from "./Aqify project/Vector (1).png"

const MyAnylatics = () => {

    const [show, setShow] = useState(1)

    return (
        <>

            {show === 1 &&
                <>
                    <div className="sideContent">

                        <div className='d-flex flex-column justify-content-between' style={{ marginTop: '5vh' }}>
    
                            <div className='d-flex justify-content-between align-items-center' style={{ marginTop: '5vh' }}>
                                <div>
                                    <h1 style={{ fontWeight: '700', paddingBottom: '0.5rem' }}>My Analytics </h1>
                                    <span style={{ color: '#636363' }}>0 active purchases, Buy your first Project.</span>
                                </div>
                                <div className='My-btns'>
                                    {/* <Link className='btn btn-outline-primary rounded-pill' style={{ padding: '0.6rem 1.2rem' }} onClick={show => setShow(2)}  > <img style={{ width: '10%', marginRight: '10px' }} src={anylatics} alt="" />Analytics</Link> */}
                                    <Link className='Myproject-btn btn btn-primary rounded-pill mx-2' style={{ padding: '0.6rem 1.2rem' }} to="#" >Google Analytics<img style={{ width: '10%', marginLeft: '10px' }} src={arrow} alt="" /></Link>
                                </div>
                            </div>

                            <div className='my-5'>
                                <span style={{ color: '#636363' }}>Select Your Project</span>
                                <div className="form-floating my-3">
                                    <select style={{ width: '35vw', color: '#3247ff', background: '#fff' }} className="form-control form-select form-select-lg mb-3 mx-2" aria-label="Large select example">
                                        <option id="floatingInputValue" selected>Select project name</option>
                                        <option value="1">UI Design</option>
                                        <option value="2">UI Development</option>
                                        <option value="3">AI</option>
                                    </select>
                                    <label for="floatingInputValue"><i className="fa-solid fa-check-double" style={{ color: "#005eff" }}></i></label>
                                </div>
                            </div>
                        </div>


                        <div className="analytic-card d-felx justify-content-center align-items-center">
                            <div style={{ fontSize: '25px', color: '#636363', fontWeight: 'bolder' }}>Content Chart</div>
                        </div>
                    </div>
                </>}

            {show === 2 && <MyProject />}
        </>
    )
}

export default MyAnylatics