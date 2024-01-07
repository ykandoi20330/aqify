import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import threeDots from "./ProfileDashbaord/dotsthreeoutlinevertical.svg"
import arrow from "./Aqify project/Vector (1).png"

const ProjectBuying = () => {
    const [card, setCard] = useState([])
    return (
        <>
            <div className="sideContent">

                <div className='d-flex justify-content-between align-items-center' style={{ marginTop: '5vh' }}>
                    <div>
                        <h1 style={{ fontWeight: '700', paddingBottom: '0.5rem' }}>Projects Buying</h1>
                        <span style={{ color: '#636363' }}>0 active purchases, Buy your first Project.</span>
                    </div>
                    <div>
                        <Link to='/MarketDash2' className='btn btn-primary rounded-pill' style={{ padding: '0.6rem 1.2rem' }} ><img style={{ width: '10%', marginRight: '10px' }} src={arrow} alt="" />Marketplace</Link> {/**  <i className="fa-solid fa-arrow-trend-up mx-1" style={{color: "#ffffff"}}></i> */}
                    </div>
                </div>


                <div className="buying-card">
                    <table style={{ width: '100%' }}>
                        <tr style={{ listStyle: 'none', width: '92%', marginBottom: '1rem' }}>
                            <th className=' py-2' ><Link style={{ textDecoration: 'none' }}>Project Name</Link></th>
                            <th className=' py-2' ><Link style={{ textDecoration: 'none' }}>Active Status</Link></th>
                            <th className=' py-2' ><Link style={{ textDecoration: 'none' }}>Invoices</Link></th>
                            <th className=' py-2' ><Link style={{ textDecoration: 'none' }}>Prices</Link></th>
                            <th className=' py-2' ><Link style={{ textDecoration: 'none' }}><br /></Link></th>
                            {/*  card-h3*/}
                        </tr>
                        {/* {card.map((item) => {
                            return ( */}
                        <>
                            <tr className=' my-2' style={{ listStyle: 'none' }}>
                                <td className='py-1'>UI Medical website</td>
                                <td className='py-1'><Link style={{ padding: '0.3rem 1rem' }} className="btn btn-outline-primary rounded-pill" href="">Reviewing</Link></td>
                                <td className='py-1'>0/0</td>
                                <td className='py-1'>0</td>
                                <td className='py-1'><Link><img src={threeDots} alt="" /></Link></td>
                            </tr>
                        </>
                        {/* )
                        })} */}

                        {/* <div className='d-flex justify-content-between align-items-center my-2' style={{ listStyle: 'none' }}>
                                        <span>UI Medical website</span>
                                        <span><Link style={{ padding: '0.3rem 1rem' }} className="btn btn-outline-primary rounded-pill" href="">Reviewing</Link></span>
                                        <span>0/0</span>
                                        <span>0</span>
                                        <span><Link><img src={threeDots} alt="" /></Link></span>
                                    </div> */}
                    </table>
                </div>

            </div>
        </>
    )
}

export default ProjectBuying