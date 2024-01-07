// import React, { useState, useEffect } from 'react'

// // import message from "./ProfileDashbaord/chatteardropdots1.svg"
// import { Link } from 'react-router-dom'
// import profileIcon from "./ProfileDashbaord/ellipse-60@2x.png"
// // import threeDots from "./ProfileDashbaord/dotsthreeoutlinevertical.svg"



// // card logo images
// import cardLogo2 from "./Market/Frame 34 (1).png"
// import cardProfile from "./Market/Rectangle 25.png"

// //dash
// import slideImg from "./MarketDash/Doctor.jpg"
// import back from "./MarketDash/VectorBackArrow.svg"
// import chart from "./MarketDash/Vertical.png"

// //side card
// import cart from "./MarketDash/VectorCart.svg"
// import blueMsg from "./MarketDash/VectorBlueMsg.svg"
// import offer from "./MarketDash/VectorOffer.svg"
// import smallMap from "./MarketDash/VectorSmap.svg"
// import Right from "./MarketDash/VectorRight.svg"
// import Left from "./MarketDash/VectorLeft.svg"

// import MarketplaceDash2 from './MarketplaceDash2'
// import axios from 'axios'
// import {jwtDecode} from "jwt-decode"

// import { FaStar } from "react-icons/fa"

// const MarketDashDetail = () => {

//     useEffect(() => {
//         getCard();
//     }, []);



    // const getCard = async () => {
    //         try {
    //             const response = await axios.get(
    //                 `${ENV.BACKEND_URL}/business/getbusiness` ); 
    //             console.log(response.data.business);
    //             setCard(response.data.business);

//             } catch (error) {
//                 console.error(error);
//             }
//         }
    

    
//     const [username, setUsername] = useState("");
//     const [show, setShow] = useState(1)
//     const [card, setCard] = useState([]);
//     const [text, setText] = useState("Share")

//     const [rating, setRating] = useState(null)
//     const [hover, setHover] = useState(null)


    // const handleShare = () => {
    //     console.log("share")
    //     setText("Link Copied")
    //     navigator.clipboard.writeText(`${ENV.FRONTEND_URL}/aqify#/MainDashboard/MarketDash`)
    // }


//     //seller username

//     useEffect(() => {
//       const getUsername = async () => {
//         let token = null;
//         const cookies = document.cookie.split(";");
//         for (let cookie of cookies) {
//           const [cookieName, cookieValue] = cookie.trim().split("=");
//           if (cookieName === "token") {
//             token = cookieValue;
//             localStorage.setItem("token", token);
//           }
//         }
  
//         if (!token) {
//           const user = JSON.parse(localStorage.getItem("user"));
//           token = user.token;
//           localStorage.setItem("token", token);
//         }
  
  

      //   if (token) {
      //     const decoded = jwtDecode(token);
      //     const id = decoded.id;
      //     try {
      //       const response = await axios.get(
      //           `${ENV.BACKEND_URL}/users/getUser`,
      //         {
      //           headers: { "x-auth-token": id },
      //         }
      //       );
      //       setUsername(response.data.user.userName);
      //     } catch (error) {
      //       console.error(error);
      //     }
      //   }
      // };
  
//       getUsername();
//     }, [setUsername]);


//     return (
//         <>
//             {show === 1 && <>
//                 <section>
//                     <div className="sideContent d-flex justify-content-between">
//                         <div>
//                             {/* <Link onClick={show => setShow(2)}><img src={back} alt="" /></Link>
//                                 <span className='mx-3' style={{ color: '#636363' }}>Go back Marketplace</span> */}
//                             <br />
//                         </div>
//                         <div>
//                             <Link className='btn btn-primary rounded-pill px-5 py-2' data-bs-toggle="modal" data-bs-target="#exampleModal1" 
//                             onClick={show => setShow(2)}>Explore More<i className="fa-solid fa-arrow-right mx-2" style={{ color: "#ffffff" }}></i></Link>
//                         </div>
//                     </div>
//                 </section>

//                 <section className='placeDetail-section'>

//                 { card.filter((items) => items.id === card.id ).map((item, index) => {
//                     return (
//                     <div key={item.id} className="detailContent MarketPlace-card  d-flex flex-row justify-content-between" style={{ margin: "1rem 1rem", padding: "2rem", height: '100vh', overflow: 'hidden', width: "100%" }}>

//                         <div className='Placecontent' style={{ width: '55%', overflowY: 'scroll' }}>
//                             <div className='FirstContent d-flex align-items-center'>
//                                 <div className='secondPart'>
//                                     <img style={{borderRadius:'8px'}} width={200} src={item.link} alt="" />
//                                 </div>
//                                 <div className="firstPart" style={{ marginLeft: "2rem" }}>
//                                     <h3 style={{ fontSize: '20px', fontWeight: '700' }}>{item.projectName}</h3>
//                                     <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '9px' }}>{item.techStack}</button>
//                                     <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '9px' }}>{item.techStack}</button>
//                                     <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '9px' }}>{item.techStack}</button>
//                                     <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '9px' }}>{item.techStack}</button>
//                                 </div>
//                             </div>
//                             <div className='d-flex justify-content-between' style={{ margin: '1rem 0 0rem 0' }}>
//                                 <h3 className='card-h3 py-2'>Description</h3>
//                                 {/* <Link> <i className="fa-solid fa-heart"></i></Link> */}
//                             </div>

//                             <div className='my-4'>
//                                 <span className='col-6' style={{ color: '#636363', fontSize: '16px' }}>
//                                     {/* A design inspiration platform for SaaS apps that helps designers find inspiration for their next project by showcasing over 1,000 pages from over 100 SaaS apps, organized by category and page type. Designers can also
//                                     filter designs by color and fonts, and bookmark their favorites for later.<br /><br />
//                                     Project can be grown by doing proper content marketing through blogs and social media, further paid ads can also be utilized to get more customers for the app. */}
//                                     {item.description}
//                                 </span>
//                             </div>

//                             <div className="imgSlider d-flex justify-content-center align-items-center" style={{ position: 'relative' }}>

//                                 <div id={`carouselExampleAutoplaying${index}`} className="carousel slide" data-bs-ride="carousel"> {/*data-bs-touch="false" */}
//                                     <div className="carousel-inner">
//                                         <div className="carousel-item active">
//                                             <img style={{ borderRadius: '10px', width: '100%' }} src={slideImg} alt="" />
//                                         </div>
//                                         <div className="carousel-item">
//                                             <img style={{ borderRadius: '10px', width: '100%' }} src={slideImg} alt="" />
//                                         </div>
//                                     </div>
//                                 </div>

//                                 <div className='d-flex justify-content-between' style={{ position: 'absolute', width: '100%' }}>
//                                     <Link style={{ background: '#3247ff', borderRadius: '50px', padding: '0.3rem 0.8rem' }} data-bs-target={`#carouselExampleAutoplaying${index}`} data-bs-slide="next" ><img src={Left} alt="" /></Link>
//                                     <Link style={{ background: '#3247ff', borderRadius: '50px', padding: '0.3rem 0.8rem' }} data-bs-target={`#carouselExampleAutoplaying${index}`} data-bs-slide="prev" ><img src={Right} alt="" /></Link>
//                                 </div>
//                             </div>


//                             <div className='d-flex justify-content-between flex-wrap' style={{ width: '100%' }}>
//                                 <div style={{ margin: '1rem 1rem 0 0', background: '#EEF0FE', borderRadius: '10px', padding: '1rem' }}>
//                                     <span style={{ color: '#636363', fontWeight: '500' }}>Financing</span>
//                                     <div className='d-flex justify-content-start align-items-center'>
//                                         <img width={35} src={cardLogo2} alt="" />
//                                         <span className='card-span' style={{ fontSize: '1.4rem' }}>{item.financing}</span>
//                                     </div>
//                                 </div>
//                                 <div style={{ margin: '1rem 1rem 0 0', background: '#EEF0FE', borderRadius: '10px', padding: '1rem' }}>
//                                     <span style={{ color: '#636363', fontWeight: '500' }}>Multiplies</span>
//                                     <div className='d-flex justify-content-start align-items-center'>
//                                         <img width={35} src={cardLogo2} alt="" />
//                                         <span className='card-span' style={{ fontSize: '1.4rem' }}>{item.multiplies}</span>
//                                     </div>
//                                 </div>
//                                 <div style={{ margin: '1rem 1rem 0 0', background: '#EEF0FE', borderRadius: '10px', padding: '1rem' }}>
//                                     <span style={{ color: '#636363', fontWeight: '500' }}>TTM Revenue</span>
//                                     <div className='d-flex justify-content-start align-items-center'>
//                                         <img width={35} src={cardLogo2} alt="" />
//                                         <span className='card-span' style={{ fontSize: '1.4rem' }}>{item.ttmRevenue}</span>
//                                     </div>
//                                 </div>
//                                 <div style={{ margin: '1rem 1rem 0 0', background: '#EEF0FE', borderRadius: '10px', padding: '1rem' }}>
//                                     <span style={{ color: '#636363', fontWeight: '500' }}>TTM Profit</span>
//                                     <div className='d-flex justify-content-start align-items-center'>
//                                         <img width={35} src={cardLogo2} alt="" />
//                                         <span className='card-span' style={{ fontSize: '1.4rem' }}>{item.ttmProfit}</span>
//                                     </div>
//                                 </div>
//                                 <div style={{ margin: '1rem 1rem 0 0', background: '#EEF0FE', borderRadius: '10px', padding: '1rem' }}>
//                                     <span style={{ color: '#636363', fontWeight: '500' }}>Monthly Revenue</span>
//                                     <div className='d-flex justify-content-start align-items-center'>
//                                         <img width={35} src={cardLogo2} alt="" />
//                                         <span className='card-span' style={{ fontSize: '1.4rem' }}>{item.monthlyRevenue}</span>
//                                     </div>
//                                 </div>
//                                 <div style={{ margin: '1rem 1rem 0 0', background: '#EEF0FE', borderRadius: '10px', padding: '1rem' }}>
//                                     <span style={{ color: '#636363', fontWeight: '500' }}>Monthly Profit</span>
//                                     <div className='d-flex justify-content-start align-items-center'>
//                                         <img width={35} src={cardLogo2} alt="" />
//                                         <span className='card-span' style={{ fontSize: '1.4rem' }}>{item.monthlyProfit}</span>
//                                     </div>
//                                 </div>
//                             </div>

//                             <div className="chart my-3">
//                                 <img style={{ width: '100%' }} src={chart} alt="" />
//                             </div>

//                             <div className="description">
//                                 <div className='d-flex justify-content-between' style={{ margin: '1rem 0 0rem 0' }}>
//                                     <h3 className='card-h3 py-2'>Metrics</h3>
//                                 </div>

//                                 <div className='d-flex flex-wrap justify-content-between'>
//                                     <div style={{ margin: '1rem 1rem 0 0' }}>
//                                         <span style={{ color: '#636363' }}>TTM Gross Revenue</span>
//                                         <h5>{item.ttmGrossRevenue}</h5>
//                                     </div>
//                                     <div style={{ margin: '1rem 1rem 0 0' }}>
//                                         <span style={{ color: '#636363' }}>TTM Net Profit</span>
//                                         <h5>{item.ttmNetProfit}</h5>
//                                     </div>
//                                     <div style={{ margin: '1rem 1rem 0 0' }}>
//                                         <span style={{ color: '#636363' }}>Last months gross Revenue</span>
//                                         <h5>{item.lastMonthGrossRevenue}</h5>
//                                     </div>
//                                     <div style={{ margin: '1rem 1rem 0 0' }}>
//                                         <span style={{ color: '#636363' }}>Last months net Profit</span>
//                                         <h5>{item.lastMonthNetProfit}</h5>
//                                     </div>
//                                     <div style={{ margin: '1rem 3rem 0 0' }}>
//                                         <span style={{ color: '#636363' }}>Customers</span>
//                                         <h5>{item.customers}</h5>
//                                     </div>
//                                     <div style={{ margin: '1rem 1rem 0 0' }}>
//                                         <span style={{ color: '#636363' }}>Annual Recurring Revenue</span>
//                                         <h5>{item.annualRecurringRevenue}</h5>
//                                     </div>
//                                     <div style={{ margin: '1rem 1rem 0 0' }}>
//                                         <span style={{ color: '#636363' }}>Annual Growth Rate</span>
//                                         <h5>{item.annualGrowthRate}</h5>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className='AskingPlace' style={{ width: '40%', position: "sticky" }}>
//                             <div className="sideCard d-flex flex-column justify-content-between" style={{ background: '#EEF0FE', borderRadius: '10px', padding: '1rem', height: '100%', overflowY: 'scroll' }}>
//                                 <div>
//                                     <div className='d-flex justify-content-between' style={{ margin: '1rem 0 0rem 0' }}>
//                                         <h5 className='card-h3 py-2'>Asking Price</h5>
//                                     </div>
//                                     <div className='my-3'>
//                                         <h1>{item.askingPrice}</h1>
//                                     </div>

//                                     <Link to="/message" className='my-3 d-flex align-items-center justify-content-center' style={{ border: '2px solid #3247ff', color: '#3247ff', borderRadius: "15px", padding: '1rem 2rem', textAlign: 'center', width: '100%', textDecoration: 'none' }}>
//                                         <img src={blueMsg} alt="" />
//                                         <span className='mx-2'>Message Seller</span>
//                                     </Link>
//                                     <Link className='my-3 d-flex align-items-center justify-content-center' style={{ border: '2px solid #3247ff', color: '#3247ff', borderRadius: "15px", padding: '1rem 2rem', textAlign: 'center', width: '100%', textDecoration: 'none' }}>
//                                         <i className="fa-solid fa-phone-volume" style={{ color: "#005eff" }}></i>
//                                         <span className='mx-2'>Audio Call</span>
//                                     </Link>
//                                     <Link className='my-3 d-flex align-items-center justify-content-center' style={{ border: '2px solid #3247ff', color: '#3247ff', borderRadius: "15px", padding: '1rem 2rem', textAlign: 'center', width: '100%', textDecoration: 'none' }}>
//                                         <img src={offer} alt="" />
//                                         <span className='mx-2' >Make Offer</span>
//                                     </Link>
//                                     <Link className='my-3 d-flex align-items-center justify-content-center' style={{ border: '2px solid #3247ff', color: '#3247ff', borderRadius: "15px", padding: '1rem 2rem', textAlign: 'center', width: '100%', textDecoration: 'none' }}>
//                                         <i className="fa-solid fa-video" style={{ color: "#005eff" }}></i>
//                                         <span className='mx-2' >Watch video Path</span>
//                                     </Link>
//                                     <Link className='my-3 d-flex align-items-center justify-content-center' onClick={handleShare} style={{ border: '2px solid #3247ff', color: '#3247ff', borderRadius: "15px", padding: '1rem 2rem', textAlign: 'center', width: '100%', textDecoration: 'none' }}>
//                                         <i className="fa-solid fa-share-nodes" style={{ color: "#005eff" }}></i>
//                                         <span className='mx-2' >{text}</span>
//                                     </Link>
//                                     <div className='my-3'>
//                                         <Link style={{ width: '100%' }} className='btn btn-primary' to="/MainDashboard/PaymentDash"><img src={cart} alt="" className='mx-2' /> Buy Now</Link>
//                                     </div>
//                                 </div>

//                                 <div>
//                                     <div className='d-flex justify-content-between my-3' style={{ margin: '1rem 0 0rem 0' }}>
//                                         <h5 className='card-h3 py-2'>About the Seller</h5>
//                                     </div>
//                                     <div className='d-flex align-items-center'>
//                                         <img src={item.ownerImage} alt="" style={{borderRadius : "50px" , height:"50px" , width:"50px"}}/>
//                                         <div className='mx-2'>
//                                             <h4>{item.ownerName}</h4> 
//                                             <span><img className='mx-1' src={smallMap} alt="" />{item.location}</span>
//                                         </div>
//                                     </div>
//                                 </div>

//                             </div>
//                         </div>

//                     </div>
//                      );
//                     })}

//                 </section>

//             </>}

//             {show === 2 && <MarketplaceDash2 />}

//             <section>
//                 <div className="modal fade" id="exampleModal1" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//                     <div className="modal-dialog  modal-dialog-centered">
//                         <div style={{ background: '#191b1b', color: '#fff', borderRadius: '20px' }} className="modal-content">
//                             <div className="modal-header" style={{ border: 'none' }}>
//                                 <br />
//                                 <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
//                             </div>
//                             <div className="modal-body">
//                                 <div>
//                                     <h6 className='text-center mb-4'>How Was the Listing and Pricing?</h6>
//                                 </div>
//                                 <div style={{ fontSize: '1.7rem' }} className='d-flex align-items-center justify-content-center'>
//                                     {[...Array(5)].map((star, index) => {
//                                         const currentRating = index + 1
//                                         return (
//                                             <label >
//                                                 <input type="radio" value={currentRating} onClick={() => setRating(currentRating)} />
//                                                 <FaStar className='star mx-2'
//                                                     color={currentRating <= (rating || hover) ? "#3247FF" : '#fff'}
//                                                     onMouseEnter={() => setHover(currentRating)}
//                                                     onMouseLeave={() => setHover(null)}
//                                                 />
//                                             </label>
//                                         )
//                                     })}
//                                 </div>
//                                 <div className='mt-2 d-flex justify-content-around'>
//                                     <div><span style={{ fontSize: '11px' }}>Very bad</span></div>
//                                     <div><span style={{ fontSize: '11px' }}>Very good</span></div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//         </>
//     )
// }

// export default MarketDashDetail