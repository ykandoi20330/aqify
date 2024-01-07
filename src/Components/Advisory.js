import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import ENV from '../config.js'

import backgroundImg from "./Owner/unsplash_5U_28ojjgms2.png"
//
import location from "./MarketDash/VectorLoaction.svg"
import search from "./MarketDash/VectorSearch.svg"
import doller from "./MarketDash/VectorDoller.svg"
import arrow from "./Aqify project/Vector (1).png"

// card logo images

import cardLogo1 from "./Market/Frame 33.png"
import cardLogo2 from "./Market/Frame 34 (1).png"
import cardLogo3 from "./Market/Frame 33 (6).png"
import cardLogo4 from "./Market/Frame 33 (7).png"
import cardProfile from "./Market/Rectangle 25.png"
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

const Advisory = () => {

    const [card, setCard] = useState([]);
    const [filterSearch, setFilterSearch] = useState([]);
    const [searchTerm, setSearchTerm] = useState([]);

    useEffect(() => {
        getCard();
    }, []);

    const getCard = async () => {
        try {
            const response = await axios.get(
                `${ENV.BACKEND_URL}/advisory/getAdvisory`);
            console.log(response.data.advisory);
            setCard(response.data.advisory);
            setFilterSearch(response.data.advisory);

        } catch (error) {
            console.error(error);
        }
    }


    const onSearch = (searchTerm) => {
        setFilterSearch(card.filter(f => f.ownerName.toLowerCase().includes(searchTerm.toLowerCase())))
    }

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
        onSearch(e.target.value);
    }


    //location filters

    const filterLocation = (loc) => {
        const updatedLoc = card?.filter((l) => l.location === loc)

        setFilterSearch(updatedLoc);
    }

    const handleLocationChange = (e) => {
        filterLocation(e.target.value);
    };

    //deal size filters

    const filterDeal = (deal) => {
        const updatedLoc = card?.filter((d) => d.dealSize === deal)

        setFilterSearch(updatedLoc);
    }

    const handleDealChange = (e) => {
        filterDeal(e.target.value);
    };


    return (
        <>
            <section>
                <Navbar />
            </section>

            {/** */}
            <section>
                <div className='Ownermain'>
                    {/* style={{ backgroundImage: `url(${backgroundImg})`, width: '100%', backgroundRepeat: 'no-repeat' }} */}
                    <div className="owner-content">
                        <div>
                            <div className='my-5'>
                                <h1 className='main-h1 col-8'>Our Advisors Are Quite Helpful; Talk To Them!
                                </h1>
                            </div>
                            <div className='my-4'>
                                <span className='main-span col-7 d-flex'>
                                    Acqify’s advisors are here to help you with your doubts and queries by deal-centric recommendations.
                                </span>
                            </div>
                            <div className=''>
                                <Link style={{ fontSize: '1.5rem' }} className='btn btn-primary' to="/advisoryOnbaord">Take Me To The Experts! <img style={{ width: '7%', marginLeft: '20px' }} src={arrow} alt="" /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='d-flex justify-content-center' style={{ background: '#EEF0FE' }}>
                <div className="advisory-card">
                    <div className='first-line d-flex align-items-center'>
                        <div className="mb-3 my-3 form-floating" style={{ width: '100%' }}>
                            <input style={{ width: '97%' }} type="email" id="floatingInputValue" className="form-control" value={searchTerm} onChange={handleSearch} placeholder="Search" />
                            <label for="floatingInputValue"><img src={search} alt="" /></label>
                        </div>
                        <div className="form-floating mx-2" style={{ width: '100%' }}>
                            <select onChange={handleDealChange} style={{ width: '100%', color: '#3247ff' }} className="form-control form-select form-select-lg" aria-label="Large select example">
                                <option id="floatingInputValue" selected>Deal Size</option>
                                {card.map((deal) => {
                                    return (
                                        <option key={deal.id} value={deal.dealSize}>{deal.dealSize}</option>
                                    )
                                })}
                            </select>
                            <label for="floatingInputValue"><img src={doller} alt="" /></label>
                        </div>
                    </div>

                    <div className="second-line d-flex">
                        <div className="form-floating" style={{ width: '100%' }}>
                            <select onChange={handleLocationChange} style={{ width: '100%', color: '#3247ff' }} className="form-control form-select form-select-lg mb-3" aria-label="Large select example">
                                <option id="floatingInputValue" selected>Company Location</option>
                                {card.map((loca) => {
                                    return (
                                        <option key={loca.id} value={loca.location}>{loca.location}</option>
                                    )
                                })}
                            </select>
                            <label for="floatingInputValue"><img src={location} alt="" /></label>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="ligh-back" style={{ height: '100%' }}>
                    <div className="AdvisoryMarket-card " style={{ padding: "3rem" }} >
                        {filterSearch.map((item, index) => {
                            const id = index + 1
                            return (

                                <div className="advisoryDisplay-card" style={{ margin: "2rem 1rem" }}>

                                    <div className='advisory-div1 d-flex align-items-center'>
                                        <div className='secondPart' style={{ padding: '0 2rem' }}>
                                            <img style={{ width: '100%', borderRadius: '1.2rem' }} src={item.ownerImage} alt="" />
                                        </div>
                                        <div className="firstPart" style={{ marginLeft: "2rem" }}>
                                            <h3 style={{ fontSize: '25px', fontWeight: '700' }}>{item.ownerName}</h3>
                                            <button className='btn-card btn btn-primary rounded-pill my-2' style={{ fontSize: '13px', background: '#cbd0ff', color: '#3247FF' }}>{item.category}</button><br />
                                            <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '13px' }}>{item.techStack1}</button>
                                            <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '13px' }}>{item.techStack2}</button>
                                            <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '13px' }}>{item.techStack3}</button>
                                            <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '13px' }}>{item.techStack4}</button>
                                        </div>
                                    </div>
                                    <div className='my-4'>
                                        <span style={{ color: "#c0c0c0", fontSize: '13px' }}>Short Bio</span><br />
                                        <span className='advisory-span col-6' style={{ color: '#636363', fontSize: '18px' }}>{item.shortBio}</span>
                                    </div>

                                    <div className='d-flex justify-content-between' style={{ margin: '2rem 0 2rem 0' }}>
                                        <h3 className='card-h3'>Metrics</h3>
                                        <Link style={{ padding: '18px 48px' }} className='advisory-btn btn btn-primary' to="/singup">View more<img className='mx-2' style={{ width: '15px' }} src={arrow} alt="" /> </Link>
                                    </div>

                                    <div className='d-flex justify-content-between flex-wrap' style={{ width: '100%' }}>
                                        <div style={{ margin: '0 3rem 0 0' }}>
                                            <span style={{ color: '#636363', fontWeight: '600' }}>Prefered Deal Size?</span>
                                            <div className='d-flex justify-content-start align-items-center'>
                                                <img width={40} src={cardLogo1} alt="" />
                                                <span className='card-span' style={{ fontSize: '1.5rem' }}>{item.dealSize}</span>
                                            </div>
                                        </div>
                                        <div style={{ margin: '0 3rem 0 0' }}>
                                            <span style={{ color: '#636363', fontWeight: '600' }}>Based in</span>
                                            <div className='d-flex justify-content-start align-items-center'>
                                                <img width={40} src={cardLogo2} alt="" />
                                                <span className='card-span' style={{ fontSize: '1.5rem' }}>{item.location}</span>
                                            </div>
                                        </div>
                                        <div style={{ margin: '0 3rem 0 0' }}>
                                            <span style={{ color: '#636363', fontWeight: '600' }}>Acquisition type</span>
                                            <div className='d-flex justify-content-start align-items-center'>
                                                <img width={40} src={cardLogo3} alt="" />
                                                <span className='card-span' style={{ fontSize: '1.5rem' }}>{item.acquisitionType}</span>
                                            </div>
                                        </div>
                                        <div style={{ margin: '0 3rem 0 0' }}>
                                            <span style={{ color: '#636363', fontWeight: '600' }}>Valuation</span>
                                            <div className='d-flex justify-content-start align-items-center'>
                                                <img width={40} src={cardLogo4} alt="" />
                                                <span className='card-span' style={{ fontSize: '1.5rem' }}>{item.valuation}</span>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            )
                        })}

                    </div>
                </div>
            </section>

            {/* <section className='d-flex justify-content-center' style={{ height: '20vh', background: '#EEF0FE ' }}>
                <div>
                    <div >
                        <Link style={{ padding: '18px 48px' }} className='btn btn-primary' to="/singup">View Listing<img className='mx-2' style={{ width: '20px'}} src={arrow} alt="" /> </Link>
                    </div>
                </div>
            </section> */}

            <section>
                <Footer />
            </section>

        </>
    )
}

export default Advisory