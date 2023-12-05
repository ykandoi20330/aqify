import React, { useState } from 'react'
import { Link } from 'react-router-dom'

//
import doller from "./MarketDash/VectorDoller.svg"
// import downIcon from "./MarketDash/VectorDownIcon.svg"
import filter from "./MarketDash/VectorFilter.svg"
import location from "./MarketDash/VectorLoaction.svg"
import pie from "./MarketDash/VectorPie.svg"
import search from "./MarketDash/VectorSearch.svg"
import Close from "./MarketDash/VectorClose.svg"
// import MarketDashDetail from './MarketDashDetail'
import MarketplaceDash2 from './MarketplaceDash2'
// import arrow from "./Aqify project/Vector (1).png"
import upload from "./Selling/VectorUpload.svg"


const MarketplaceDash = () => {

    const [show, setShow] = useState(1)
    const [number, setNumber] = useState(0)

    //for image Upload
    const [image, setImage] = useState(null)
    const [fileName, setfileName] = useState("")

    const input = ({ target: { files } }) => {
        files[0] && setfileName(files[0].name)
        if (files) {
            setImage(URL.createObjectURL(files[0]))
        }
    }


    return (
        <>
            <section className='Marketside d-flex align-items-center'>
                <div className="sideContent">

                    <div className=''>
                        <h1 className='my-3' style={{ fontWeight: '700' }}>Marketplace lists</h1>
                        <span style={{ color: '#636363' }}>Free for owners and affordable for acquirers.</span>
                        <div className='my-3'>
                            <div class="btn-group" role="group" aria-label="Basic outlined example" style={{ background: 'transparent' }}>
                                <button style={{ padding: "1rem 4rem" }} type="button" class="btn btn-outline-primary" onClick={show => setShow(1)}>Businesses</button>
                                <button style={{ padding: "1rem 4rem", }} type="button" class="btn btn-outline-primary" onClick={show => setShow(2)}>Market</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='AddButton' style={{ width: '16%' }}>
                    <Link class="btn btn-primary mx-2" to="/seller" >Add List<i class="fa-solid fa-circle-plus mx-2" style={{ color: "#fff" }}></i></Link> {/* type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" */}
                </div>
            </section>

            {/** modal for add cart */}

            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header" style={{ border: 'none' }}>
                            <h1 class="modal-title fs-5" id="exampleModalLabel" style={{ color: '#3247FF' }}>New Tamplate</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            {/** */}
                            <div className="card1" style={{ width: "100%", background: '#f4f3f9', padding: '0.7rem', boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;' }}>

                                <div className='sideInfo d-flex'>
                                    <div className='' id="display_image" style={{ width: '100%' }}>
                                        <div className='divInput' style={{ width: '100%', height: '35vh' }}>
                                            <div className='d-flex flex-column align-items-center justify-content-center'>
                                                <div className="img-container" id="display_image">
                                                    <img src={image} className="" id="img" alt="" />
                                                </div>
                                                <div>
                                                    <input type="file" class="form-label" id="image_input1" multiple accept='images/*' onChange={input} />
                                                    <label for="image_input1" class="form-label text-center" style={{ color: '#636363' }}> <img src={upload} alt="" /><br /><br /><span >Upload Listing images</span></label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="" style={{ marginLeft: "2rem", width: '70%' }}>
                                        <h3 style={{ fontSize: '30px', fontWeight: '700' }}>
                                            <div class="mb-3 my-3">
                                                <label for="exampleFormControlInput1" class="form-label" style={{ color: '#636363', fontSize: '1.3rem' }}>Website Name</label>
                                                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter Full Name" />
                                            </div>
                                        </h3>
                                        {/** */}
                                        <div className='d-flex justify-content-between flex-wrap' style={{ width: '100%' }}>
                                            <div style={{ width: '48%' }}>
                                                <div class="mb-3 my-3" >
                                                    <input type="text" class="form-control" id="exampleFormControlInput5" placeholder="Nesxt Js" />
                                                </div>
                                            </div>
                                            <div style={{ width: '48%' }}>
                                                <div class="mb-3 my-3" >
                                                    <input type="text" class="form-control" id="exampleFormControlInput4" placeholder="Firebase" />
                                                </div>
                                            </div>
                                            <div style={{ width: '48%' }}>
                                                <div class="mb-3 my-3">
                                                    <input type="text" class="form-control" id="exampleFormControlInput3" placeholder="Medical" />
                                                </div>
                                            </div>
                                            <div style={{ width: '48%' }}>
                                                <div class="mb-3 my-3">
                                                    <input type="text" class="form-control" id="exampleFormControlInput2" placeholder="SaaS" />
                                                </div>
                                            </div>
                                        </div>
                                        {/** */}
                                    </div>
                                    <div >
                                        <span className='d-flex align-items-center'><i class="fa-solid fa-eye" style={{ color: '#3247ff' }}></i>1.2K</span>
                                    </div>
                                </div>
                                <div className='my-4'>
                                    <span className='col-6' style={{ color: '#636363', fontSize: '18px' }}>
                                        <div class="mb-3 my-3">
                                            <label for="exampleFormControlTextarea1" class="form-label" style={{ color: '#636363' }}>Please enter description below</label>
                                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Write a Description'></textarea>
                                        </div>
                                    </span>
                                </div>

                                <div className='d-flex justify-content-between align-items-center' style={{ margin: '2rem 0 2rem 0' }}>
                                    <h3 className='card-h3'>Metrics</h3>
                                    <div className='d-flex align-items-center'>
                                        <div class="mb-3 my-3 mx-2">
                                            <label for="exampleFormControlInput3" class="form-label" style={{ color: '#636363' }}>Link Your Project</label>
                                            <input type="url" class="form-control" id="exampleFormControlInput3" placeholder="URL" />
                                        </div>
                                        <div >
                                            <input type="radio" class="btn-check  rounded-pill" name="options-base" id="option12" autocomplete="off" />
                                            <label class="btn1" style={{ padding: "0.8rem 1rem", margin: '0.3rem 0.7rem 0 0', background: "#fff" }} for="option12">
                                                <i class="fa-solid fa-heart"></i></label>
                                        </div>
                                    </div>
                                </div>

                                <div className='d-flex justify-content-between flex-wrap' style={{ width: '100%' }}>
                                    <div>
                                        <div class="mb-3 my-3">
                                            <label for="exampleFormControlInput5" class="form-label" style={{ color: '#636363' }}>Please Enter Bussiness Type</label>
                                            <input type="text" class="form-control" id="exampleFormControlInput5" placeholder="Enter Full Name" />
                                        </div>
                                    </div>
                                    <div>
                                        <div class="mb-3 my-3">
                                            <label for="exampleFormControlInput4" class="form-label" style={{ color: '#636363' }}>Please Enter Based on Location</label>
                                            <input type="text" class="form-control" id="exampleFormControlInput4" placeholder="Enter Full Name" />
                                        </div>
                                    </div>
                                    <div>
                                        <div class="mb-3 my-3">
                                            <label for="exampleFormControlInput3" class="form-label" style={{ color: '#636363' }}>Please Enter Acquisition Type</label>
                                            <input type="text" class="form-control" id="exampleFormControlInput3" placeholder="Enter Type" />
                                        </div>
                                    </div>
                                    <div >
                                        <div class="mb-3 my-3">
                                            <label for="exampleFormControlInput2" class="form-label" style={{ color: '#636363' }}>Please Enter valuation Amount</label>
                                            <input type="number" class="form-control" id="exampleFormControlInput2" placeholder="$000" />
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="modal-footer" style={{ border: 'none' }}>
                            <button type="button" class="btn btn-secondary py-3" data-bs-dismiss="modal">Cancel</button>
                            <button type="button" class="btn btn-primary py-3">Add Tamplate</button>
                        </div>
                    </div>
                </div>
            </div>

            {/** */}
            <section>
                <div className='first-line d-flex align-items-center'>
                    <div class="mb-3 my-3 form-floating">
                        <input style={{ width: '41vw', background: '#fff' }} type="email" id="floatingInputValue" class="Search-from form-control mx-2" placeholder="Search" />
                        <label for="floatingInputValue"><img src={search} alt="" /></label>
                    </div>
                    <div class="form-floating">
                        <select style={{ width: '20vw', color: '#3247ff', background: '#fff' }} class="form-control form-select form-select-lg mx-2" aria-label="Large select example">
                            <option id="floatingInputValue" selected>Price</option>
                            <option value="1">0</option>
                            <option value="2">99</option>
                            <option value="3">10000</option>
                        </select>
                        <label for="floatingInputValue"><img src={doller} alt="" /></label>
                    </div>
                </div>

                <div className="second-line d-flex">
                    <div class="form-floating">
                        <select style={{ width: '20vw', color: '#3247ff', background: '#fff' }} class="form-control form-select form-select-lg mb-3 mx-2" aria-label="Large select example">
                            <option id="floatingInputValue" selected>Categories</option>
                            <option value="1">UI Websites</option>
                            <option value="2">UI Medical Websites</option>
                            <option value="3">Start-Ups</option>
                        </select>
                        <label for="floatingInputValue"><img src={pie} alt="" /></label>
                    </div>
                    <div class="form-floating">
                        <select style={{ width: '20vw', color: '#3247ff', background: '#fff' }} class="form-control form-select form-select-lg mb-3 mx-2" aria-label="Large select example">
                            <option id="floatingInputValue" selected>Company Location</option>
                            <option value="1">Mumbai</option>
                            <option value="2">Hydrabad</option>
                            <option value="3">Banglore</option>
                        </select>
                        <label for="floatingInputValue"><img src={location} alt="" /></label>
                    </div>
                    <div class="form-floating">
                        <select style={{ width: '20vw', color: '#3247ff', background: '#fff' }} class="form-control form-select form-select-lg mb-3 mx-2" aria-label="Large select example">
                            <option id="floatingInputValue" selected>More Filters</option>
                            <option value="1">Pricing</option>
                            <option value="2">Budget</option>
                            <option value="3">More</option>
                        </select>
                        <label for="floatingInputValue"><img src={filter} alt="" /></label>
                    </div>
                </div>
            </section>

            {show === 1 && <>

                <section className='cardOption d-flex'>
                    <div className="marketDash-card flex-wrap">
                        <div className='d-flex justify-content-end'>
                            <img src={Close} alt="" />
                        </div>
                        <div>
                            <button className='btn-card btn btn-outline-primary my-1'>Ecommerce</button>
                            <button className='btn-card btn btn-outline-primary my-1'>SaaS</button>
                            <button className='btn-card btn btn-outline-primary my-1'>Acquirers</button>
                            <button className='btn-card btn btn-outline-primary my-1'>Community</button>
                            <button className='btn-card btn btn-outline-primary my-1'>Content</button>
                            <button className='btn-card btn btn-outline-primary my-1'>Service</button>
                            <button className='btn-card btn btn-outline-primary my-1'>Wordpress</button>
                            <button className='btn-card btn btn-outline-primary my-1'>Add-on</button>
                            <button className='btn-card btn btn-outline-primary my-1'>Chrome-extension</button>
                            <button className='btn-card btn btn-outline-primary my-1'>Crypto</button>
                        </div>
                    </div>

                    <div className="marketDash-card2">
                        <div className='d-flex justify-content-between mb-3'>
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
                                    {/* <input style={{ height: '7vh', width: '60%' }} type="text" id="inputEmail4" class="form-control mx-2" placeholder="Yes" /> */}
                                    {/* <input style={{ height: '7vh', width: '60%' }} type="text" id="inputEmail4" class="form-control mx-2" placeholder="No" /> */}
                                    <div>
                                        <input type="radio" class="btn-check  rounded-pill" name="options-base" id="option1" placeholder="Yes" autocomplete="off" value=""/>
                                        <label class="btn1" style={{ margin: '0.3rem 0.7rem 0 0',padding:'10px 40px', background: "#EEF0FE"}} for="option1">
                                            Yes</label>
                                    </div>
                                    <div>
                                        <input type="radio" class="btn-check  rounded-pill" name="options-base" id="option2" placeholder="No" autocomplete="off" value=""/>
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
                            <Link className='btn btn-outline-primary rounded-pill py-2 px-4' to="/">clear</Link>
                            <Link className='btn btn-outline-primary rounded-pill py-2 px-4 mx-2' to="/">apply</Link>
                        </div>
                    </div>

                </section >
            </>}

            {show === 2 && <MarketplaceDash2 />}
        </>
    )
}

export default MarketplaceDash