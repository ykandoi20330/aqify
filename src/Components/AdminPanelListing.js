import React, { useState, useEffect } from 'react'
import DataTable, { createTheme } from 'react-data-table-component'
import axios from 'axios';
import ENV from "../config.js";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import cardLogo2 from "./Market/Frame 34 (1).png";

//side card
import cart from "./MarketDash/VectorCart.svg";
import blueMsg from "./MarketDash/VectorBlueMsg.svg";
import offer from "./MarketDash/VectorOffer.svg";
import smallMap from "./MarketDash/VectorSmap.svg";
import Right from "./MarketDash/VectorRight.svg";
import Left from "./MarketDash/VectorLeft.svg";

const AdminPanelListing = () => {

    const [card, setCard] = useState([]);
    const [filterSearch, setFilterSearch] = useState([]);
    const [searchTerm, setSearchTerm] = useState([]);

    const [detail, setDetail] = useState([]);
    const [text, setText] = useState("Share");
    const [show, setShow] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        getCard();
    }, []);

    const getCard = async () => {
        try {
            const response = await axios.get(
                `${ENV.BACKEND_URL}/business/getbusiness`);
            console.log(response.data.business);
            setCard(response.data.business);
            setFilterSearch(response.data.business);

        } catch (error) {
            console.error(error);
        }
    }

    const handleDeny = async (id) => {
        try {
            const response = await axios.post(
                `${ENV.BACKEND_URL}/business/deny`, { id: id });
            console.log(response.data.business);
            getCard();
        } catch (error) {
            console.error(error);
        }
    }

    const handleApprove = async (id) => {
        try {
            const response = await axios.post(
                `${ENV.BACKEND_URL}/business/approve`, { id: id });
            console.log(response.data.business);
            getCard();
        } catch (error) {
            console.error(error);
        }
    }


    const handleShare = () => {
        console.log("share");
        setText("Link Copied");
        navigator.clipboard.writeText(window.location.href);
    };

    const back = () => {
        setShow(true);
    }

    const detailPage = (Product) => {
        setDetail([{ ...Product }]);
        setShow(false);
    };

    const columns = [
        {
            name: "Project Name",
            selector: (row) => row.projectName,
            sortable: true,
        },
        {
            name: "Category",
            selector: (row) => row.category
        },
        {
            name: "Valuation",
            selector: (row) => row.valuation
        },
        {
            name: "Tech Stack1",
            selector: (row) => row.techStack1
        },
        {
            name: "Tech Stack2",
            selector: (row) => row.techStack2
        },
        {
            name: "Tech Stack3",
            selector: (row) => row.techStack3
        },
        {
            name: "Tech Stack4",
            selector: (row) => row.techStack4
        },
        {
            name: 'Approve Listing',
            cell: row => <button className='btn btn-primary py-1 px-3 rounded-pill' onClick={() => handleApprove(row._id)}>Approve</button>
        },
        {
            name: 'Cancel Listing',
            cell: row => <button className='btn btn-danger py-1 px-3 rounded-pill' onClick={() => handleDeny(row._id)}>Deny</button>
        },
        {
            name: 'Details Listing',
            cell: row => <button className='btn btn-secondary py-1 px-3 rounded-pill' onClick={() => detailPage(row._id)}>Details</button>
        },
    ]

    // createTheme creates a new theme named solarized that overrides the build in dark theme
    createTheme('solarized', {
        text: {
            primary: '#3247FF',
            secondary: '#3247FF',
        },
        background: {
            default: '#EEF0FE',
        },
        context: {
            background: '#EEF0FE',
            text: '#FFFFFF',
        },
        divider: {
            default: '#EEF0FE',
        },
        action: {
            //   button: 'rgba(0,0,0,.54)',
            button: '#e6e9fd',
            //   hover: 'rgba(0,0,0,.08)',
            hover: '#e6e9fd',
            disabled: 'rgba(0,0,0,.12)',
        },
    }, 'dark');


    const customStyles = {
        rows: {
            style: {
                paddingLeft: '0px',
            },
        },
        headCells: {
            style: {
                paddingLeft: '0px',
                paddingRight: '0px',
            },
        },
        cells: {
            style: {
                paddingLeft: '0px',
                paddingRight: '0px',
            },
        }
    }


    const onSearch = (searchTerm) => {
        setFilterSearch(card.filter(f => f.projectName.toLowerCase().includes(searchTerm.toLowerCase())))
    }

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
        onSearch(e.target.value);
    }



    return (
        <>
            {show === true &&
                <>
                    <div className='d-flex flex-column align-items-start'>
                        <div className='d-flex justify-content-center flex-column' style={{ height: '20vh', background: '#eef0fe' }}>
                            <h1 className='mx-3' style={{ fontWeight: '700' }}>Acqify Listing Data</h1>
                            <span className='mx-3' style={{ color: '#636363' }}>View and edit all listing settings</span>
                        </div>
                        <DataTable
                            title="Listings Details"
                            columns={columns}
                            data={filterSearch}
                            pagination
                            responsive
                            fixedHeader
                            selectableRows
                            selectableRowsHighlight
                            highlightOnHover
                            actions={
                                <Link className='btn btn-primary py-1 px-3 rounded-pill' to="#">export</Link>
                            }
                            subHeader
                            subHeaderComponent={
                                <input style={{ height: '7vh' }} type="text" placeholder='Search Here' className='form-control' value={searchTerm} onChange={handleSearch} />
                            }
                            theme="solarized"
                            customStyles={customStyles}
                        />
                    </div>
                </>}

            {/* MarketPlace Detail Dashbaord */}
            {show === false && (
                <>
                    <section>
                        {detail.map(() => (
                            <Link className='btn btn-primary py-2 px-4 rounded-pill my-5 mx-3' style={{ textDecoration: 'none' }} onClick={() => back()}><i class="fa-solid fa-arrow-left me-3" ></i>Back</Link>
                        ))}
                    </section>
                    <section
                        className="placeDetail-section"
                        style={{ background: "#EEF0FE" }}
                    >
                        {detail.map((item, index) => {
                            return (
                                <div
                                    key={item.id}
                                    className="detailContent MarketPlace-card  d-flex flex-row justify-content-between"
                                    style={{
                                        margin: "0rem 1rem",
                                        padding: "2rem",
                                        height: "100vh",
                                        overflow: "hidden",
                                        width: "98%",
                                    }}
                                >
                                    <div
                                        className="Placecontent"
                                        style={{ width: "55%", overflowY: "scroll" }}
                                    >
                                        <div className="FirstContent d-flex align-items-center">
                                            <div className="secondPart">
                                                <img
                                                    style={{ borderRadius: "8px" }}
                                                    width={200}
                                                    src={item.link}
                                                    alt=""
                                                />
                                            </div>
                                            <div className="firstPart" style={{ marginLeft: "2rem" }}>
                                                <h3 style={{ fontSize: "20px", fontWeight: "700" }}>
                                                    {item.projectName}
                                                </h3>
                                                <button
                                                    className="btn-card btn btn-outline-primary my-2"
                                                    style={{ fontSize: "9px" }}
                                                >
                                                    {item.techStack1}
                                                </button>
                                                <button
                                                    className="btn-card btn btn-outline-primary my-2"
                                                    style={{ fontSize: "9px" }}
                                                >
                                                    {item.techStack2}
                                                </button>
                                                <button
                                                    className="btn-card btn btn-outline-primary my-2"
                                                    style={{ fontSize: "9px" }}
                                                >
                                                    {item.techStack3}
                                                </button>
                                                <button
                                                    className="btn-card btn btn-outline-primary my-2"
                                                    style={{ fontSize: "9px" }}
                                                >
                                                    {item.techStack4}
                                                </button>
                                            </div>
                                        </div>
                                        <div
                                            className="d-flex justify-content-between"
                                            style={{ margin: "1rem 0 0rem 0" }}
                                        >
                                            <h3 className="card-h3 py-2">Description</h3>
                                            {/* <Link> <i className="fa-solid fa-heart"></i></Link> */}
                                        </div>

                                        <div className="my-4">
                                            <span
                                                className="col-6"
                                                style={{ color: "#636363", fontSize: "16px" }}
                                            >
                                                {item.description}
                                            </span>
                                        </div>

                                        <div
                                            className="imgSlider d-flex justify-content-center align-items-center"
                                            style={{ position: "relative" }}
                                        >
                                            <div
                                                id={`carouselExampleAutoplaying${index}`}
                                                className="carousel slide"
                                                data-bs-ride="carousel"
                                            >
                                                {" "}
                                                {/*data-bs-touch="false" */}
                                                <div className="carousel-inner">
                                                    <div className="carousel-item active">
                                                        <img
                                                            style={{ borderRadius: "10px", width: "100%" }}
                                                            src={item.carouselImage1}
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div className="carousel-item">
                                                        <img
                                                            style={{ borderRadius: "10px", width: "100%" }}
                                                            src={item.carouselImage2}
                                                            alt=""
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            <div
                                                className="d-flex justify-content-between"
                                                style={{ position: "absolute", width: "100%" }}
                                            >
                                                {/* <Link
                                                    style={{
                                                        background: "#3247ff",
                                                        borderRadius: "50px",
                                                        padding: "0.3rem 0.8rem",
                                                    }}
                                                    data-bs-target={`#carouselExampleAutoplaying${index}`}
                                                    data-bs-slide="next"
                                                >
                                                    <img src={Left} alt="" />
                                                </Link> */}
                                                {/* <Link
                                                    style={{
                                                        background: "#3247ff",
                                                        borderRadius: "50px",
                                                        padding: "0.3rem 0.8rem",
                                                    }}
                                                    data-bs-target={`#carouselExampleAutoplaying${index}`}
                                                    data-bs-slide="prev"
                                                >
                                                    <img src={Right} alt="" />
                                                </Link> */}
                                            </div>
                                        </div>

                                        <div
                                            className="d-flex justify-content-between flex-wrap"
                                            style={{ width: "100%" }}
                                        >
                                            <div
                                                style={{
                                                    margin: "1rem 1rem 0 0",
                                                    background: "#EEF0FE",
                                                    borderRadius: "10px",
                                                    padding: "1rem",
                                                }}
                                            >
                                                <span style={{ color: "#636363", fontWeight: "500" }}>
                                                    Financing
                                                </span>
                                                <div className="d-flex justify-content-start align-items-center">
                                                    <img width={35} src={cardLogo2} alt="" />
                                                    <span
                                                        className="card-span"
                                                        style={{ fontSize: "1.4rem" }}
                                                    >
                                                        {item.financing}
                                                    </span>
                                                </div>
                                            </div>
                                            <div
                                                style={{
                                                    margin: "1rem 1rem 0 0",
                                                    background: "#EEF0FE",
                                                    borderRadius: "10px",
                                                    padding: "1rem",
                                                }}
                                            >
                                                <span style={{ color: "#636363", fontWeight: "500" }}>
                                                    Multiplies
                                                </span>
                                                <div className="d-flex justify-content-start align-items-center">
                                                    <img width={35} src={cardLogo2} alt="" />
                                                    <span
                                                        className="card-span"
                                                        style={{ fontSize: "1.4rem" }}
                                                    >
                                                        {item.multiplies}
                                                    </span>
                                                </div>
                                            </div>
                                            <div
                                                style={{
                                                    margin: "1rem 1rem 0 0",
                                                    background: "#EEF0FE",
                                                    borderRadius: "10px",
                                                    padding: "1rem",
                                                }}
                                            >
                                                <span style={{ color: "#636363", fontWeight: "500" }}>
                                                    TTM Revenue
                                                </span>
                                                <div className="d-flex justify-content-start align-items-center">
                                                    <img width={35} src={cardLogo2} alt="" />
                                                    <span
                                                        className="card-span"
                                                        style={{ fontSize: "1.4rem" }}
                                                    >
                                                        {item.ttmRevenue}
                                                    </span>
                                                </div>
                                            </div>
                                            <div
                                                style={{
                                                    margin: "1rem 1rem 0 0",
                                                    background: "#EEF0FE",
                                                    borderRadius: "10px",
                                                    padding: "1rem",
                                                }}
                                            >
                                                <span style={{ color: "#636363", fontWeight: "500" }}>
                                                    TTM Profit
                                                </span>
                                                <div className="d-flex justify-content-start align-items-center">
                                                    <img width={35} src={cardLogo2} alt="" />
                                                    <span
                                                        className="card-span"
                                                        style={{ fontSize: "1.4rem" }}
                                                    >
                                                        {item.ttmProfit}
                                                    </span>
                                                </div>
                                            </div>
                                            <div
                                                style={{
                                                    margin: "1rem 1rem 0 0",
                                                    background: "#EEF0FE",
                                                    borderRadius: "10px",
                                                    padding: "1rem",
                                                }}
                                            >
                                                <span style={{ color: "#636363", fontWeight: "500" }}>
                                                    Monthly Revenue
                                                </span>
                                                <div className="d-flex justify-content-start align-items-center">
                                                    <img width={35} src={cardLogo2} alt="" />
                                                    <span
                                                        className="card-span"
                                                        style={{ fontSize: "1.4rem" }}
                                                    >
                                                        {item.monthlyRevenue}
                                                    </span>
                                                </div>
                                            </div>
                                            <div
                                                style={{
                                                    margin: "1rem 1rem 0 0",
                                                    background: "#EEF0FE",
                                                    borderRadius: "10px",
                                                    padding: "1rem",
                                                }}
                                            >
                                                <span style={{ color: "#636363", fontWeight: "500" }}>
                                                    Monthly Profit
                                                </span>
                                                <div className="d-flex justify-content-start align-items-center">
                                                    <img width={35} src={cardLogo2} alt="" />
                                                    <span
                                                        className="card-span"
                                                        style={{ fontSize: "1.4rem" }}
                                                    >
                                                        {item.monthlyProfit}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="chart my-3">
                                            <img
                                                style={{ width: "100%" }}
                                                src={item.googleAnalytics}
                                                alt=""
                                            />
                                        </div>

                                        <div className="description">
                                            <div
                                                className="d-flex justify-content-between"
                                                style={{ margin: "1rem 0 0rem 0" }}
                                            >
                                                <h3 className="card-h3 py-2">Metrics</h3>
                                            </div>

                                            <div className="d-flex flex-wrap justify-content-between">
                                                <div style={{ margin: "1rem 1rem 0 0" }}>
                                                    <span style={{ color: "#636363" }}>
                                                        TTM Gross Revenue
                                                    </span>
                                                    <h5>{item.ttmGrossRevenue}</h5>
                                                </div>
                                                <div style={{ margin: "1rem 1rem 0 0" }}>
                                                    <span style={{ color: "#636363" }}>
                                                        TTM Net Profit
                                                    </span>
                                                    <h5>{item.ttmNetProfit}</h5>
                                                </div>
                                                <div style={{ margin: "1rem 1rem 0 0" }}>
                                                    <span style={{ color: "#636363" }}>
                                                        Last months gross Revenue
                                                    </span>
                                                    <h5>{item.lastMonthGrossRevenue}</h5>
                                                </div>
                                                <div style={{ margin: "1rem 1rem 0 0" }}>
                                                    <span style={{ color: "#636363" }}>
                                                        Last months net Profit
                                                    </span>
                                                    <h5>{item.lastMonthNetProfit}</h5>
                                                </div>
                                                <div style={{ margin: "1rem 3rem 0 0" }}>
                                                    <span style={{ color: "#636363" }}>Customers</span>
                                                    <h5>{item.customers}</h5>
                                                </div>
                                                <div style={{ margin: "1rem 1rem 0 0" }}>
                                                    <span style={{ color: "#636363" }}>
                                                        Annual Recurring Revenue
                                                    </span>
                                                    <h5>{item.annualRecurringRevenue}</h5>
                                                </div>
                                                <div style={{ margin: "1rem 1rem 0 0" }}>
                                                    <span style={{ color: "#636363" }}>
                                                        Annual Growth Rate
                                                    </span>
                                                    <h5>{item.annualGrowthRate}</h5>
                                                </div>
                                            </div>
                                        </div>

                                        {/* <div>
                                            <div className="feedback my-3">
                                                <div className="FirstFeedback d-flex flex-column justify-content-center align-items-center text-center">
                                                    <h3 style={{ color: "#000" }}>Did you Like it?</h3>
                                                    <span style={{ color: "#636363" }}></span>
                                                </div>
                                                <div className="SecondFeedback d-flex">
                                                    <div className="mt-4">
                                                        <input
                                                            type="text"
                                                            id="next"
                                                            className="feedInput"
                                                            style={{
                                                                textDecoration: "none",
                                                                color: "#636363",
                                                            }}
                                                        />
                                                        <label htmlFor="next">
                                                            <span
                                                                className="feedbtn me-5 my-2"
                                                            >
                                                                No
                                                            </span>
                                                        </label>
                                                    </div>
                                                    <div className="mt-4">
                                                        <>
                                                            <input
                                                                type="text"
                                                                id="next"
                                                                className="feedInput"
                                                            />
                                                            <label htmlFor="next">
                                                                <span
                                                                    className="feedbtn"
                                                                >Yes
                                                                </span>
                                                            </label>
                                                        </>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> */}
                                    </div>

                                    <div
                                        className="AskingPlace"
                                        style={{ width: "40%", position: "sticky" }}
                                    >
                                        <div
                                            className="sideCard d-flex flex-column justify-content-between"
                                            style={{
                                                background: "#EEF0FE",
                                                borderRadius: "10px",
                                                padding: "1rem",
                                                height: "100%",
                                                overflowY: "scroll",
                                            }}
                                        >
                                            <div>
                                                <div
                                                    className="d-flex justify-content-between"
                                                    style={{ margin: "1rem 0 0rem 0" }}
                                                >
                                                    <h5 className="card-h3 py-2">Asking Price</h5>
                                                </div>
                                                <div className="my-3">
                                                    <h1>${item.askingPrice}</h1>
                                                </div>

                                                {/* <Link
                                                    to="#"
                                                    className="my-3 d-flex align-items-center justify-content-center"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#exampleModal"
                                                    data-bs-whatever="@getbootstrap"
                                                    style={{
                                                        border: "2px solid #3247ff",
                                                        color: "#3247ff",
                                                        borderRadius: "15px",
                                                        padding: "1rem 2rem",
                                                        textAlign: "center",
                                                        width: "100%",
                                                        textDecoration: "none",
                                                    }}
                                                >
                                                    <img src={blueMsg} alt="" />
                                                    <span className="mx-2">Message Seller</span>
                                                </Link>
                                                <div
                                                    onClick={() => {
                                                        navigate(`/call/${item.ownerId}`);
                                                    }}
                                                    className="my-3 d-flex align-items-center justify-content-center"
                                                    style={{
                                                        cursor: "pointer",
                                                        border: "2px solid #3247ff",
                                                        color: "#3247ff",
                                                        borderRadius: "15px",
                                                        padding: "1rem 2rem",
                                                        textAlign: "center",
                                                        width: "100%",
                                                        textDecoration: "none",
                                                    }}
                                                >
                                                    <i
                                                        className="fa-solid fa-phone-volume"
                                                        style={{ color: "#005eff" }}
                                                    ></i>
                                                    <span className="mx-2">Video Call</span>
                                                </div>
                                                <Link
                                                    data-bs-target="#ScheduleModalToggle"
                                                    data-bs-toggle="modal"
                                                    className="my-3 d-flex align-items-center justify-content-center"
                                                    style={{
                                                        cursor: "pointer",
                                                        border: "2px solid #3247ff",
                                                        color: "#3247ff",
                                                        borderRadius: "15px",
                                                        padding: "1rem 2rem",
                                                        textAlign: "center",
                                                        width: "100%",
                                                        textDecoration: "none",
                                                    }}
                                                >
                                                    <i
                                                        className="fa-solid fa-calendar-days"
                                                        style={{ color: "#005eff" }}
                                                    ></i>
                                                    <span className="mx-2">Schedule Video Call</span>
                                                </Link> */}
                                                {/* <Link
                                                    className="my-3 d-flex align-items-center justify-content-center"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#staticBackdrop"
                                                    style={{
                                                        border: "2px solid #3247ff",
                                                        color: "#3247ff",
                                                        borderRadius: "15px",
                                                        padding: "1rem 2rem",
                                                        textAlign: "center",
                                                        width: "100%",
                                                        textDecoration: "none",
                                                    }}
                                                >
                                                    <img src={offer} alt="" />
                                                    <span className="mx-2">Make Offer</span>
                                                </Link>
                                                <Link
                                                    className="my-3 d-flex align-items-center justify-content-center"
                                                    type="button"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#staticBackdrop1"
                                                    style={{
                                                        border: "2px solid #3247ff",
                                                        color: "#3247ff",
                                                        borderRadius: "15px",
                                                        padding: "1rem 2rem",
                                                        textAlign: "center",
                                                        width: "100%",
                                                        textDecoration: "none",
                                                    }}
                                                >
                                                    <i
                                                        className="fa-solid fa-video"
                                                        style={{ color: "#005eff" }}
                                                    ></i>
                                                    <span className="mx-2">Watch video Path</span>
                                                </Link>
                                                <Link
                                                    className="my-3 d-flex align-items-center justify-content-center"
                                                    onClick={handleShare}
                                                    style={{
                                                        border: "2px solid #3247ff",
                                                        color: "#3247ff",
                                                        borderRadius: "15px",
                                                        padding: "1rem 2rem",
                                                        textAlign: "center",
                                                        width: "100%",
                                                        textDecoration: "none",
                                                    }}
                                                >
                                                    <i
                                                        className="fa-solid fa-share-nodes"
                                                        style={{ color: "#005eff" }}
                                                    ></i>
                                                    <span className="mx-2">{text}</span>
                                                </Link>
                                                <div className="my-3">
                                                    <Link
                                                        style={{ width: "100%" }}
                                                        className="btn btn-primary"
                                                        to="/MainDashboard/PaymentDash"
                                                    >
                                                        <img src={cart} alt="" className="mx-2" /> Buy Now
                                                    </Link>
                                                </div> */}
                                            </div>

                                            <div>
                                                <div
                                                    className="d-flex justify-content-between my-3"
                                                    style={{ margin: "1rem 0 0rem 0" }}
                                                >
                                                    <h5 className="card-h3 py-2">About the Seller</h5>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <img
                                                        src={item.ownerImage}
                                                        alt=""
                                                        style={{
                                                            borderRadius: "50px",
                                                            height: "50px",
                                                            width: "50px",
                                                        }}
                                                    />
                                                    <div className="mx-2">
                                                        <h4>{item.ownerName}</h4>
                                                        <span>
                                                            <img className="mx-1" src={smallMap} alt="" />
                                                            {item.location}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </section>
                </>
            )}
        </>

    )
}

export default AdminPanelListing