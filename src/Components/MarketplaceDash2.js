import React, { useEffect, useState } from "react";

// card logo images
import cardLogo1 from "./Market/Frame 33.png";
import cardLogo2 from "./Market/Frame 34 (1).png";
import cardLogo3 from "./Market/Frame 33 (6).png";
import cardLogo4 from "./Market/Frame 33 (7).png";
import cardProfile from "./Market/Rectangle 25.png";
import arrow from "./Aqify project/Vector (1).png";
import MarketDashDetail from "./MarketDashDetail";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import ENV from "../config.js";

//app Context
import { useAppContext } from "./Context/appContext";
import { Link } from "react-router-dom";

/////////////////////MarketPlaceDetail

//dash
import slideImg from "./MarketDash/Doctor.jpg"
import back from "./MarketDash/VectorBackArrow.svg"
import chart from "./MarketDash/Vertical.png"

//side card
import cart from "./MarketDash/VectorCart.svg"
import blueMsg from "./MarketDash/VectorBlueMsg.svg"
import offer from "./MarketDash/VectorOffer.svg"
import smallMap from "./MarketDash/VectorSmap.svg"
import Right from "./MarketDash/VectorRight.svg"
import Left from "./MarketDash/VectorLeft.svg"

// import { FaStar } from "react-icons/fa"
import MarketplaceDash from "./MarketplaceDash.js";
///////////////

const MarketplaceDash2 = () => {

  const [card, setCard] = useState([]);
  const [detail, setDetail] = useState([]);
  const [show, setShow] = useState(true);
  const [filterSearch, setFilterSearch] = useState([]);


  //////MarketPlaceDetail
  const [text, setText] = useState("Share")
  const [username, setUsername] = useState("");

  // const [rating, setRating] = useState(null)
  // const [hover, setHover] = useState(null)

  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);

  const steps = [
    "Basic Feedback",
    "More Details",
    "Build Feedback",
    "Other Feedback",
  ];

  const handleShare = () => {
    console.log("share")
    setText("Link Copied")
    navigator.clipboard.writeText(`${ENV.FRONTEND_URL}/aqify#/MainDashboard/MarketDash2`)
  }

  //seller username

  useEffect(() => {
    const getUsername = async () => {
      let token = null;
      const cookies = document.cookie.split(";");
      for (let cookie of cookies) {
        const [cookieName, cookieValue] = cookie.trim().split("=");
        if (cookieName === "token") {
          token = cookieValue;
          localStorage.setItem("token", token);
        }
      }

      if (!token) {
        const user = JSON.parse(localStorage.getItem("user"));
        token = user.token;
        localStorage.setItem("token", token);
      }


      if (token) {
        const decoded = jwtDecode(token);
        const id = decoded.id;
        try {
          const response = await axios.get(
            `${ENV.BACKEND_URL}/users/getUser`,
            {
              headers: { "x-auth-token": id },
            }
          );
          setUsername(response.data.user.userName);
        } catch (error) {
          console.error(error);
        }
      }
    };

    getUsername();
  }, [setUsername]);



  const exploreMore = (pro) => {
    const oldExplore = [...card];
    const filterExplore  = oldExplore?.filter((ex) => ex.category === pro)
    setShow(filterExplore ? true : false)
  }


  ////////
  const detailPage = (Product) => {
    setDetail([{ ...Product }])
    setShow(false)
  }


  useEffect(() => {
    getCard();
  }, []);

  const { favourite, addToFavorites, removeFromFavorites } = useAppContext();

  const getCard = async () => {
    try {
      const response = await axios.get(
        `${ENV.BACKEND_URL}/business/getbusiness`);
      console.log(response.data.business);
      setCard(response.data.business);
      setFilterSearch(response.data.business)

    } catch (error) {
      console.error(error);
    }
  }

  const favoriteChecker = (cate) => {
    const boolean = favourite.some((items) => items.category === cate);
    return boolean;
  };

  console.log('favorites are added', favourite)

  const onSearch = (searchTerm) => {
    setFilterSearch(card.filter(f => f.projectName.toLowerCase().includes(searchTerm.toLowerCase())))
  }


  const filterCategory = (cate) => {
    const updatedCate = card?.filter((c) => c.category === cate)

    setFilterSearch(updatedCate);
    console.log("category filters", updatedCate);
}


const filterLocation = (e) => {
  const Loc = card?.filter((x) => x.location === e)
  // console.log(Loc);

  setFilterSearch(Loc);
}

const filterPrice = (el) => {
  const price = card?.filter((p) => p.askingPrice === el)

  setFilterSearch(price)
}


return (
  <>
    <section>
      <MarketplaceDash
        onSearching={onSearch}

        filterCategory={filterCategory}

        filterLocation={filterLocation}

        filterPrice={filterPrice}
      />
    </section>

    {show === true && (
      <>
        <section  >
          <section className="marketDash2-back" style={{ height: '100%' }} >
            <div className='d-flex'>
              <div className="market-card my-4" >
                {filterSearch.map((item, index) => {
                  const id = index + 1
                  return (
                    <div className="card1" key={item.id} style={{ margin: "1rem 0.5rem", padding: "1rem", width: "34vw" }}>
                      <div className="sideInfo d-flex">
                        <div className="secondPart">
                          <img style={{ borderRadius: '8px' }} width={200} src={item.link} alt="" />
                        </div>
                        <div className="firstPart" style={{ marginLeft: "2rem" }}>
                          <h3 style={{ fontSize: "30px", fontWeight: "700" }}>
                            {item.projectName}
                          </h3>
                          <button className="btn-card btn btn-outline-primary my-2" style={{ fontSize: "9px" }}>
                            {/* Nesxt Js */}
                            {item.techStack}
                          </button>
                          <button className="btn-card btn btn-outline-primary my-2" style={{ fontSize: "9px" }}>
                            {/* Firebase */}
                            {item.techStack}
                          </button>
                          <button className="btn-card btn btn-outline-primary my-2" style={{ fontSize: "9px" }}>
                            {/* Medical */}
                            {item.techStack}
                          </button>
                          <button className="btn-card btn btn-outline-primary my-2" style={{ fontSize: "9px" }}>
                            {/* SaaS */}
                            {item.techStack}
                          </button>
                        </div>
                        <div>
                          <span className="d-flex align-items-center">
                            <i class="fa-solid fa-eye" style={{ color: "#3247ff" }}></i>
                            1.2K
                          </span>
                        </div>
                      </div>
                      <div className="my-4">
                        <span className="col-6" style={{ color: "#636363", fontSize: "18px" }}>
                          {/* Physical retailer in the apparel space looking for
                            prominent DTC brands to buy into and collaborate
                            with... */}
                          {item.description}
                        </span>
                      </div>

                      <div className='d-flex justify-content-between' style={{ margin: '2rem 0 2rem 0' }}>
                        <h3 className='card-h3'>Metrics</h3>
                        <div className='d-flex align-items-center'>
                          <Link style={{ padding: '12px 38px' }} onClick={() => detailPage(item)} className='btn btn-primary mx-2'>View Listing<img className='mx-2' style={{ width: '15px' }} src={arrow} alt="" /> </Link>
                          {favoriteChecker(item.category) ?
                            (<Link key={item.id} onClick={() => removeFromFavorites(item.category)}><i class="fa-solid fa-heart" style={{ color: '' }}></i></Link>)
                            :
                            (<Link key={item.id} onClick={() => addToFavorites(item)}><i class="fa-solid fa-heart" style={{ color: '#c0c0c0' }}></i></Link>)}
                        </div>
                      </div>

                      <div className="d-flex justify-content-between flex-wrap" style={{ width: "100%" }}>
                        <div style={{ margin: "1rem 3rem 0 0" }}>
                          <span style={{ color: "#636363", fontWeight: "600" }}>
                            Businesses Type
                          </span>
                          <div className="d-flex justify-content-start align-items-center">
                            <img width={40} src={cardLogo1} alt="" />
                            <span className="card-span" style={{ fontSize: "1.5rem" }}>
                              {item.category}
                            </span>
                          </div>

                        </div>
                        <div style={{ margin: "1rem 3rem 0 0" }}>
                          <span style={{ color: "#636363", fontWeight: "600" }} >
                            Based in
                          </span>
                          <div className="d-flex justify-content-start align-items-center">
                            <img width={40} src={cardLogo2} alt="" />
                            <span className="card-span" style={{ fontSize: "1.5rem" }}>
                              {item.location}
                            </span>
                          </div>
                        </div>
                        <div style={{ margin: "1rem 3rem 0 0" }}>
                          <span style={{ color: "#636363", fontWeight: "600" }} >
                            Acquisition type
                          </span>
                          <div className="d-flex justify-content-start align-items-center">
                            <img width={40} src={cardLogo3} alt="" />
                            <span className="card-span" style={{ fontSize: "1.5rem" }}>
                              {/* {item}  */}
                              Full
                            </span>
                          </div>
                        </div>
                        <div style={{ margin: "1rem 3rem 0 0" }}>
                          <span style={{ color: "#636363", fontWeight: "600" }} >
                            Valuation
                          </span>
                          <div className="d-flex justify-content-start align-items-center">
                            <img width={40} src={cardLogo4} alt="" />
                            <span className="card-span" style={{ fontSize: "1.5rem" }}>
                              {/* $150K + */}
                              ${item.valuation}k +
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </section >
      </>
    )}

    {/* MarketPlace Detail Dashbaord */}
    {show === false &&
      <>
        <section>
          <div className="sideContent d-flex justify-content-between">
            <div>
              {/* <Link onClick={show => setShow(2)}><img src={back} alt="" /></Link>
                <span className='mx-3' style={{ color: '#636363' }}>Go back Marketplace</span> */}
              <br />
            </div>
            <div>
              {/** data-bs-toggle="modal" data-bs-target="#exampleModal1" */}
              <Link className='btn btn-primary rounded-pill px-5 py-2'
                onClick={exploreMore}>Explore More<i class="fa-solid fa-arrow-right mx-2" style={{ color: "#ffffff" }}></i>
              </Link>
            </div>
          </div>
        </section>

        <section className='placeDetail-section'>

          {detail.map((item, index) => {
            return (
              <div key={item.id} className="detailContent MarketPlace-card  d-flex flex-row justify-content-between" style={{ margin: "1rem 1rem", padding: "2rem", height: '100vh', overflow: 'hidden', width: "100%" }}>

                <div className='Placecontent' style={{ width: '55%', overflowY: 'scroll' }}>
                  <div className='FirstContent d-flex align-items-center'>
                    <div className='secondPart'>
                      <img style={{ borderRadius: '8px' }} width={200} src={item.link} alt="" />
                    </div>
                    <div className="firstPart" style={{ marginLeft: "2rem" }}>
                      <h3 style={{ fontSize: '20px', fontWeight: '700' }}>{item.projectName}</h3>
                      <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '9px' }}>{item.techStack}</button>
                      <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '9px' }}>{item.techStack}</button>
                      <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '9px' }}>{item.techStack}</button>
                      <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '9px' }}>{item.techStack}</button>
                    </div>
                  </div>
                  <div className='d-flex justify-content-between' style={{ margin: '1rem 0 0rem 0' }}>
                    <h3 className='card-h3 py-2'>Description</h3>
                    {/* <Link> <i class="fa-solid fa-heart"></i></Link> */}
                  </div>

                  <div className='my-4'>
                    <span className='col-6' style={{ color: '#636363', fontSize: '16px' }}>
                      {/* A design inspiration platform for SaaS apps that helps designers find inspiration for their next project by showcasing over 1,000 pages from over 100 SaaS apps, organized by category and page type. Designers can also
                                    filter designs by color and fonts, and bookmark their favorites for later.<br /><br />
                                    Project can be grown by doing proper content marketing through blogs and social media, further paid ads can also be utilized to get more customers for the app. */}
                      {item.description}
                    </span>
                  </div>

                  <div className="imgSlider d-flex justify-content-center align-items-center" style={{ position: 'relative' }}>

                    <div id={`carouselExampleAutoplaying${index}`} class="carousel slide" data-bs-ride="carousel"> {/*data-bs-touch="false" */}
                      <div class="carousel-inner">
                        <div class="carousel-item active">
                          <img style={{ borderRadius: '10px', width: '100%' }} src={slideImg} alt="" />
                        </div>
                        <div class="carousel-item">
                          <img style={{ borderRadius: '10px', width: '100%' }} src={slideImg} alt="" />
                        </div>
                      </div>
                    </div>

                    <div className='d-flex justify-content-between' style={{ position: 'absolute', width: '100%' }}>
                      <Link style={{ background: '#3247ff', borderRadius: '50px', padding: '0.3rem 0.8rem' }} data-bs-target={`#carouselExampleAutoplaying${index}`} data-bs-slide="next" ><img src={Left} alt="" /></Link>
                      <Link style={{ background: '#3247ff', borderRadius: '50px', padding: '0.3rem 0.8rem' }} data-bs-target={`#carouselExampleAutoplaying${index}`} data-bs-slide="prev" ><img src={Right} alt="" /></Link>
                    </div>
                  </div>


                  <div className='d-flex justify-content-between flex-wrap' style={{ width: '100%' }}>
                    <div style={{ margin: '1rem 1rem 0 0', background: '#EEF0FE', borderRadius: '10px', padding: '1rem' }}>
                      <span style={{ color: '#636363', fontWeight: '500' }}>Financing</span>
                      <div className='d-flex justify-content-start align-items-center'>
                        <img width={35} src={cardLogo2} alt="" />
                        <span className='card-span' style={{ fontSize: '1.4rem' }}>{item.financing}</span>
                      </div>
                    </div>
                    <div style={{ margin: '1rem 1rem 0 0', background: '#EEF0FE', borderRadius: '10px', padding: '1rem' }}>
                      <span style={{ color: '#636363', fontWeight: '500' }}>Multiplies</span>
                      <div className='d-flex justify-content-start align-items-center'>
                        <img width={35} src={cardLogo2} alt="" />
                        <span className='card-span' style={{ fontSize: '1.4rem' }}>{item.multiplies}</span>
                      </div>
                    </div>
                    <div style={{ margin: '1rem 1rem 0 0', background: '#EEF0FE', borderRadius: '10px', padding: '1rem' }}>
                      <span style={{ color: '#636363', fontWeight: '500' }}>TTM Revenue</span>
                      <div className='d-flex justify-content-start align-items-center'>
                        <img width={35} src={cardLogo2} alt="" />
                        <span className='card-span' style={{ fontSize: '1.4rem' }}>{item.ttmRevenue}</span>
                      </div>
                    </div>
                    <div style={{ margin: '1rem 1rem 0 0', background: '#EEF0FE', borderRadius: '10px', padding: '1rem' }}>
                      <span style={{ color: '#636363', fontWeight: '500' }}>TTM Profit</span>
                      <div className='d-flex justify-content-start align-items-center'>
                        <img width={35} src={cardLogo2} alt="" />
                        <span className='card-span' style={{ fontSize: '1.4rem' }}>{item.ttmProfit}</span>
                      </div>
                    </div>
                    <div style={{ margin: '1rem 1rem 0 0', background: '#EEF0FE', borderRadius: '10px', padding: '1rem' }}>
                      <span style={{ color: '#636363', fontWeight: '500' }}>Monthly Revenue</span>
                      <div className='d-flex justify-content-start align-items-center'>
                        <img width={35} src={cardLogo2} alt="" />
                        <span className='card-span' style={{ fontSize: '1.4rem' }}>{item.monthlyRevenue}</span>
                      </div>
                    </div>
                    <div style={{ margin: '1rem 1rem 0 0', background: '#EEF0FE', borderRadius: '10px', padding: '1rem' }}>
                      <span style={{ color: '#636363', fontWeight: '500' }}>Monthly Profit</span>
                      <div className='d-flex justify-content-start align-items-center'>
                        <img width={35} src={cardLogo2} alt="" />
                        <span className='card-span' style={{ fontSize: '1.4rem' }}>{item.monthlyProfit}</span>
                      </div>
                    </div>
                  </div>

                  <div className="chart my-3">
                    <img style={{ width: '100%' }} src={chart} alt="" />
                  </div>

                  <div className="description">
                    <div className='d-flex justify-content-between' style={{ margin: '1rem 0 0rem 0' }}>
                      <h3 className='card-h3 py-2'>Metrics</h3>
                    </div>

                    <div className='d-flex flex-wrap justify-content-between'>
                      <div style={{ margin: '1rem 1rem 0 0' }}>
                        <span style={{ color: '#636363' }}>TTM Gross Revenue</span>
                        <h5>{item.ttmGrossRevenue}</h5>
                      </div>
                      <div style={{ margin: '1rem 1rem 0 0' }}>
                        <span style={{ color: '#636363' }}>TTM Net Profit</span>
                        <h5>{item.ttmNetProfit}</h5>
                      </div>
                      <div style={{ margin: '1rem 1rem 0 0' }}>
                        <span style={{ color: '#636363' }}>Last months gross Revenue</span>
                        <h5>{item.lastMonthGrossRevenue}</h5>
                      </div>
                      <div style={{ margin: '1rem 1rem 0 0' }}>
                        <span style={{ color: '#636363' }}>Last months net Profit</span>
                        <h5>{item.lastMonthNetProfit}</h5>
                      </div>
                      <div style={{ margin: '1rem 3rem 0 0' }}>
                        <span style={{ color: '#636363' }}>Customers</span>
                        <h5>{item.customers}</h5>
                      </div>
                      <div style={{ margin: '1rem 1rem 0 0' }}>
                        <span style={{ color: '#636363' }}>Annual Recurring Revenue</span>
                        <h5>{item.annualRecurringRevenue}</h5>
                      </div>
                      <div style={{ margin: '1rem 1rem 0 0' }}>
                        <span style={{ color: '#636363' }}>Annual Growth Rate</span>
                        <h5>{item.annualGrowthRate}</h5>
                      </div>
                    </div>
                  </div>

                  <div>
                    {currentStep === 1 && (
                      <div className="feedback my-3">
                        <div className="FirstFeedback d-flex flex-column justify-content-center align-items-center text-center">
                          <h3 style={{ color: '#000' }}>Did you Like it?</h3>
                          <span style={{ color: '#636363' }}></span>
                        </div>
                        <div className="SecondFeedback d-flex">
                          <div className="mt-4">
                            <Link
                              style={{ textDecoration: "none", color: "#636363" }}
                              id="prev"
                              onClick={() => {
                                setCurrentStep((prev) => prev - 1);
                              }}
                            >
                              <span className="feedbtn mx-5 my-2">No</span>
                            </Link>
                          </div>
                          <div className="mt-4">
                            {!complete && (
                              <Link
                                id="next"
                                className="feedbtn mx-5 my-2"
                                onClick={() => {
                                  currentStep === 4
                                    ? setComplete(true)
                                    : setCurrentStep((prev) => prev + 1);
                                }}
                              >
                                {currentStep === 3 ? "Finish" : "Yes"}
                              </Link>
                            )}
                          </div>
                        </div>
                      </div>)}
                  </div>
                  <div>
                    {currentStep === 2 && (
                      <div className="feedback my-3">
                        <div className="FirstFeedback d-flex flex-column justify-content-center align-items-center text-center">
                          <h3 style={{ color: '#000' }}>How was the Pricing?</h3>
                          <span style={{ color: '#636363' }}></span>
                          <span></span>
                        </div>
                        <div className="SecondFeedback d-flex">
                          <div className="mt-4">
                            <Link
                              style={{ textDecoration: "none", color: "#636363" }}
                              id="prev"
                              onClick={() => {
                                setCurrentStep((prev) => prev - 1);
                              }}
                            >
                              <span className="feedbtn mx-5 my-2">Very bad</span>
                            </Link>
                          </div>
                          <div className="mt-4">
                            {!complete && (
                              <Link
                                id="next"
                                className="feedbtn mx-5 my-2"
                                onClick={() => {
                                  currentStep === steps.length
                                    ? setComplete(true)
                                    : setCurrentStep((prev) => prev + 1);
                                }}
                              >
                                {currentStep === steps.length ? "Finish" : "Very good"}
                              </Link>
                            )}
                          </div>
                        </div>
                      </div>)}
                  </div>
                  <div>
                    {currentStep === 3 && (
                      <div className="feedback my-3">
                        <div className="FirstFeedback d-flex flex-column justify-content-center align-items-center text-center">
                          <h3 style={{ color: '#000' }}>Acquisition financing?</h3>
                          <span style={{ color: '#636363' }}>( not having enough money )</span>
                        </div>
                        <div className="SecondFeedback d-flex">
                          <div className="mt-4">
                            <Link
                              style={{ textDecoration: "none", color: "#636363" }}
                              id="prev"
                              onClick={() => {
                                setCurrentStep((prev) => prev - 1);
                              }}
                            >
                              <span className="feedbtn mx-5 my-2">No</span>
                            </Link>
                          </div>
                          <div className="mt-4">
                            {!complete && (
                              <Link
                                id="next"
                                className="feedbtn mx-5 my-2"
                                onClick={() => {
                                  currentStep === steps.length
                                    ? setComplete(true)
                                    : setCurrentStep((prev) => prev + 1);
                                }}
                              >
                                {currentStep === steps.length ? "Yes" : "Yes"}
                              </Link>
                            )}
                          </div>
                        </div>
                      </div>)}
                  </div>
                  <div>
                    {currentStep === 4 && (
                      <div className="feedback my-3">
                        <div className="FirstFeedback d-flex flex-column justify-content-center align-items-center text-center">
                          <h3 style={{ color: '#000' }}>Other feedback you’re giving?</h3>
                          <div style={{ color: '#636363', width: "100%" }}>
                            <input
                              style={{ height: "6vh", width: "100%" }}
                              type="text"
                              id="inputEmail10"
                              class="form-control"
                              name="otherFeedback"
                              placeholder="Enter comment..."
                              value={""}
                              onChange={""}
                            />
                          </div>
                        </div>
                        <div className="SecondFeedback d-flex">
                          <div className="mt-4">
                            <Link
                              style={{ textDecoration: "none", color: "#636363" }}
                              id="prev"
                              onClick={() => {
                                setCurrentStep((prev) => prev - 1);
                              }}
                            >
                              <span className="feedbtn mx-5 my-2">Cancel</span>
                            </Link>
                          </div>
                          <div className="mt-4">
                            {!complete && (
                              <Link
                                id="next"
                                className="feedbtn mx-5 my-2"
                                onClick={() => {
                                  currentStep === 3
                                    ? setComplete(true)
                                    : setCurrentStep((prev) => prev + 1);
                                }}
                              >
                                {currentStep === steps.length ? "Send" : "Send"}
                              </Link>
                            )}
                          </div>
                        </div>
                      </div>)}
                  </div>
                </div>

                <div className='AskingPlace' style={{ width: '40%', position: "sticky" }}>
                  <div className="sideCard d-flex flex-column justify-content-between" style={{ background: '#EEF0FE', borderRadius: '10px', padding: '1rem', height: '100%', overflowY: 'scroll' }}>
                    <div>
                      <div className='d-flex justify-content-between' style={{ margin: '1rem 0 0rem 0' }}>
                        <h5 className='card-h3 py-2'>Asking Price</h5>
                      </div>
                      <div className='my-3'>
                        <h1>${item.askingPrice}</h1>
                      </div>

                      <Link to="/message" className='my-3 d-flex align-items-center justify-content-center' style={{ border: '2px solid #3247ff', color: '#3247ff', borderRadius: "15px", padding: '1rem 2rem', textAlign: 'center', width: '100%', textDecoration: 'none' }}>
                        <img src={blueMsg} alt="" />
                        <span className='mx-2'>Message Seller</span>
                      </Link>
                      <Link className='my-3 d-flex align-items-center justify-content-center' style={{ border: '2px solid #3247ff', color: '#3247ff', borderRadius: "15px", padding: '1rem 2rem', textAlign: 'center', width: '100%', textDecoration: 'none' }}>
                        <i class="fa-solid fa-phone-volume" style={{ color: "#005eff" }}></i>
                        <span className='mx-2'>Audio Call</span>
                      </Link>
                      <Link className='my-3 d-flex align-items-center justify-content-center' style={{ border: '2px solid #3247ff', color: '#3247ff', borderRadius: "15px", padding: '1rem 2rem', textAlign: 'center', width: '100%', textDecoration: 'none' }}>
                        <img src={offer} alt="" />
                        <span className='mx-2' >Make Offer</span>
                      </Link>
                      <Link className='my-3 d-flex align-items-center justify-content-center' style={{ border: '2px solid #3247ff', color: '#3247ff', borderRadius: "15px", padding: '1rem 2rem', textAlign: 'center', width: '100%', textDecoration: 'none' }}>
                        <i class="fa-solid fa-video" style={{ color: "#005eff" }}></i>
                        <span className='mx-2' >Watch video Path</span>
                      </Link>
                      <Link className='my-3 d-flex align-items-center justify-content-center' onClick={handleShare} style={{ border: '2px solid #3247ff', color: '#3247ff', borderRadius: "15px", padding: '1rem 2rem', textAlign: 'center', width: '100%', textDecoration: 'none' }}>
                        <i class="fa-solid fa-share-nodes" style={{ color: "#005eff" }}></i>
                        <span className='mx-2' >{text}</span>
                      </Link>
                      <div className='my-3'>
                        <Link style={{ width: '100%' }} className='btn btn-primary' to="/MainDashboard/PaymentDash"><img src={cart} alt="" className='mx-2' /> Buy Now</Link>
                      </div>
                    </div>

                    <div>
                      <div className='d-flex justify-content-between my-3' style={{ margin: '1rem 0 0rem 0' }}>
                        <h5 className='card-h3 py-2'>About the Seller</h5>
                      </div>
                      <div className='d-flex align-items-center'>
                        <img src={item.ownerImage} alt="" style={{ borderRadius: "50px", height: "50px", width: "50px" }} />
                        <div className='mx-2'>
                          <h4>{item.ownerName}</h4>
                          <span><img className='mx-1' src={smallMap} alt="" />{item.location}</span>
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
    }

    {/* <section>
        <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog  modal-dialog-centered">
            <div style={{ background: '#191b1b', color: '#fff', borderRadius: '20px' }} class="modal-content">
              <div class="modal-header" style={{ border: 'none' }}>
                <br />
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <div>
                  <h6 className='text-center mb-4'>How Was the Listing and Pricing?</h6>
                </div>
                <div style={{ fontSize: '1.7rem' }} className='d-flex align-items-center justify-content-center'>
                  {[...Array(5)].map((star, index) => {
                    const currentRating = index + 1
                    return (
                      <label >
                        <input type="radio" value={currentRating} onClick={() => setRating(currentRating)} />
                        <FaStar className='star mx-2'
                          color={currentRating <= (rating || hover) ? "#3247FF" : '#fff'}
                          onMouseEnter={() => setHover(currentRating)}
                          onMouseLeave={() => setHover(null)}
                        />
                      </label>
                    )
                  })}
                </div>
                <div className='mt-2 d-flex justify-content-around'>
                  <div><span style={{ fontSize: '11px' }}>Very bad</span></div>
                  <div><span style={{ fontSize: '11px' }}>Very good</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

  </>
);
};

export default MarketplaceDash2;
