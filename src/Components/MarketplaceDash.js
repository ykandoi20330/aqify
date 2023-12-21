import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

//
import doller from "./MarketDash/VectorDoller.svg"
import filter from "./MarketDash/VectorFilter.svg"
import location from "./MarketDash/VectorLoaction.svg"
import pie from "./MarketDash/VectorPie.svg"
import search from "./MarketDash/VectorSearch.svg"
import Close from "./MarketDash/VectorClose.svg"
// import {jwtDecode} from "jwt-decode";
import axios from "axios";
import ENV from '../config.js';


const MarketplaceDash = (props) => {

    // const [show, setShow] = useState(1)
    const [number, setNumber] = useState(0)
    const [card, setCard] = useState([])
    // const [records, setRecords] = useState([])
    const [isOpen, setIsOpen] = useState(false)
    const [isOpenCategory, setIsOpenCategory] = useState(false)
    const [isOpenmore, setIsOpenmore] = useState(false)

    const [searchTerm, setSearchTerm] = useState([]);
    // const [locTerm, setLocTerm] = useState([]);

    useEffect(() => {
        getCard();
    }, []);

    const getCard = async () => {
        try {
            const response = await axios.get(
                `${ENV.BACKEND_URL}/business/getbusiness`);
            console.log(response.data.business);
            setCard(response.data.business);

        } catch (error) {
            console.error(error);
        }
    }


    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const toggleDropdownCategory = () => {
        setIsOpenCategory(!isOpenCategory);
    };

    const toggleDropdownMore = () => {
        setIsOpenmore(!isOpenmore);
    };

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
        props.onSearching(e.target.value);
    }

    const onFilterLocation = (event) => {
        props.filterLocation(event.target.value)
    }


    const handlecategory = (e) => {
        props.filterCategory(e.target.value);
    }

    const handlePrice = (el) => {
        props.filterPrice(el.target.value)
    }

    const handleTech = (t) => {
        props.filterTech(t.target.value)
    }

    return (
        <>
            <section className='Marketside d-flex justify-content-between align-items-center' style={{ background: '#EEF0FE' }}>
                <div className="sideContent">

                    <div className='' style={{position:'relative', right:'-9%'}}>
                        <Link to="/MainDashboard/Dashbaord" style={{ color: '#000', textDecoration: 'none' }}><h1 className='my-3' style={{ fontWeight: '700' }}>Marketplace lists</h1></Link>
                        <span style={{ color: '#636363' }}>Free for owners and affordable for acquirers.</span>
                    </div>
                </div>
                <div className='AddButton ' style={{ width: '20%' }}>
                    <Link class="btn btn-primary mx-2" to="/seller" >Add List<i class="fa-solid fa-circle-plus mx-2" style={{ color: "#fff" }}></i></Link> {/* type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" */}
                </div>
            </section>

            {/** */}
            <section style={{ background: '#EEF0FE' }}>
                <div className='first-line mb-3 d-flex justify-content-center align-items-center'>
                    <div class="mb-3 my-3 form-floating">
                        <input style={{ width: '41vw', background: '#fff' }} type="email" id="floatingInputValue" class="Search-from form-control mx-2" placeholder="Search" value={searchTerm} onChange={handleSearch} />
                        <label for="floatingInputValue"><img src={search} alt="" /></label>
                    </div>
                    <div class="form-floating" >
                        <select style={{ width: '20vw', color: '#3247ff', background: '#fff' }} class="form-control form-select form-select-lg mx-2" aria-label="Large select example"
                            onChange={handlePrice}>
                            <option id="floatingInputValue" selected>Price</option>
                            {card.map((price) => {
                                return (
                                    <option key={price.id} value={price.askingPrice}>{price.askingPrice}</option>
                                )
                            })}
                        </select>
                        <label for="floatingInputValue"><img src={doller} alt="" /></label>
                    </div>
                    <div class="form-floating">
                        <select style={{ width: '20vw', color: '#3247ff', background: '#fff' }} class="form-control form-select form-select-lg mx-2" aria-label="Large select example"
                            onChange={handleTech} >
                            <option id="floatingInputValue" selected>Tech Stack</option>
                            {card.map((item) => {
                                return (
                                    <option key={item.id} value={item.techStack}>{item.techStack}</option>
                                )
                            })}
                        </select>
                        <label for="floatingInputValue"><i class="fa-solid fa-screwdriver-wrench" style={{ color: "#005eff", marginRight: '5px' }}></i></label>
                    </div>
                </div>

                <div className="second-line d-flex justify-content-center">
                    <div class="form-floating">
                        <div style={{ width: '20vw', color: '#3247ff', background: '#fff' }} class="form-control form-select mb-3 mx-2" onClick={toggleDropdownCategory}>Categories</div>
                        <label for="floatingInputValue"><img src={pie} alt="" /></label>
                    </div>
                    <div class="form-floating">
                        <select style={{ width: '20vw', color: '#3247ff', background: '#fff' }} class="form-control form-select form-select-lg mb-3 mx-2" aria-label="Large select example"
                            onChange={onFilterLocation} >
                            <option id="floatingInputValue" selected>Company Location</option>
                            {card.map((item) => {
                                return (
                                    <option key={item.id} value={item.location}>{item.location}</option>
                                )
                            })}
                        </select>
                        <label for="floatingInputValue"><img src={location} alt="" /></label>
                    </div>
                    <div class="form-floating">
                        <div class="form-control form-select mb-3 mx-2" style={{ width: '20vw', color: '#3247ff', background: '#fff' }} onClick={toggleDropdown}>More Filters</div>
                        <label for="floatingInputValue"><img src={filter} alt="" /></label>
                    </div>
                    <div class="form-floating">
                        <div class="form-control form-select mb-3 mx-2" style={{ width: '20vw', color: '#3247ff', background: '#fff' }} onClick={toggleDropdownMore}>Sort</div>
                        <label for="floatingInputValue"><i class="fa-solid fa-arrow-down-wide-short" style={{ color: '#3247ff' }}></i></label>
                    </div>
                </div>
            </section>


            <section className='cardOption d-flex justify-content-center' style={{ background: '#EEF0FE' }}>
                {isOpenCategory && (
                    <div className="marketDash-card flex-wrap">
                        <div className='d-flex justify-content-end'>
                            <img src={Close} alt="" />
                        </div>
                        <div>
                            {card.map((cate, index) => {
                                return (
                                    <>
                                        <input type="radio" class="btn-check rounded-pill" name="options-base" id={`option${index}`} autocomplete="off" onChange={handlecategory} value={cate.category} />
                                        <label className="btnFilter" for={`option${index}`}>
                                            {cate.category}
                                        </label>
                                    </>
                                )
                            })}
                        </div>
                    </div>)}

                {isOpen && (
                    <div className="marketDash-card2" >
                        <div className='filters d-flex justify-content-between mb-3'>
                            <span style={{ color: '#636363' }}>More Filters</span>
                            <img src={Close} alt="" />
                        </div>

                        <div className="more-filters d-flex justify-content-between my-3">
                            <div className="">
                                <label for="inputEmail4" class="form-label">Community Size</label>
                                <input style={{ height: '7vh' }} type="text" id="inputEmail4" class="form-control mx-2" placeholder="$ 000" />
                            </div>
                            <div className="offersRecieved" style={{ width: '45%' }}>
                                <label for="inputEmail4" class="form-label">Offers Recieved</label>
                                <div className='d-flex'>
                                    <div>
                                        <input type="radio" class="btn-check  rounded-pill" name="options-base" id="option1" placeholder="Yes" autocomplete="off" value="" />
                                        <label class="btn1" style={{ margin: '0.3rem 0.7rem 0 0', padding: '10px 40px', background: "#EEF0FE" }} for="option1">
                                            Yes</label>
                                    </div>
                                    <div>
                                        <input type="radio" class="btn-check  rounded-pill" name="options-base" id="option2" placeholder="No" autocomplete="off" value="" />
                                        <label class="btn1" style={{ padding: "10px 40px", margin: '0.3rem 0.7rem 0 0', background: "#EEF0FE" }} for="option2">
                                            No</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='my-3'>
                            <div className="">
                                <label for="inputEmail4" class="form-label">Monthly Net Profit</label>
                                <div className='d-flex'>
                                    <input style={{ height: '7vh', width: '60%' }} type="text" id="inputEmail4" class="form-control mx-2" placeholder="$20000" />
                                    <input style={{ height: '7vh', width: '60%' }} type="text" id="inputEmail4" class="form-control mx-2" placeholder="$500000" />
                                </div>
                            </div>
                        </div>

                        <div className='my-3'>
                            <div>
                                <label style={{ color: "#636363" }} for="customRange1" class="form-label">Project Age ( premium listing )</label>
                                <input type="range" min="1" max='10' value={number} onChange={(e) => setNumber(e.target.value)} class="form-range" id="customRange1" />
                                <div className='d-flex justify-content-between'>
                                    <span>
                                        <span className='number'>{number} Years</span>
                                    </span>
                                    <span className='number'>{number} Years</span>
                                </div>
                            </div>
                        </div>
                        <div className='my-2 d-flex  justify-content-end'>
                            <Link className='btn btn-outline-primary rounded-pill py-2 px-4' to="#">clear</Link>
                            <Link className='btn btn-outline-primary rounded-pill py-2 px-4 mx-2' to="#">apply</Link>
                        </div>
                    </div>)}

                {isOpenmore &&
                    <div className="marketDash-card flex-wrap">
                        <div className='d-flex justify-content-end'>
                            <img src={Close} alt="" />
                        </div>
                        <div className='d-flex'>
                            <div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                    <label class="form-check-label" for="inlineCheckbox1">Most Favorited</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                                    <label class="form-check-label" for="inlineCheckbox2">Newest</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option3" />
                                    <label class="form-check-label" for="inlineCheckbox3">Most Viewed</label>
                                </div>
                            </div>

                            <div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option4" />
                                    <label class="form-check-label" for="inlineCheckbox4">Sold</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option5" />
                                    <label class="form-check-label" for="inlineCheckbox5">Premium</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option6" />
                                    <label class="form-check-label" for="inlineCheckbox6">Price (low to high)</label>
                                </div>
                            </div>
                        </div>
                    </div>}

            </section >
        </>
    )
}

export default MarketplaceDash