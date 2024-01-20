import React, { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";

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
import slideImg from "./MarketDash/Doctor.jpg";
import back from "./MarketDash/VectorBackArrow.svg";
import chart from "./MarketDash/Vertical.png";

//side card
import cart from "./MarketDash/VectorCart.svg";
import blueMsg from "./MarketDash/VectorBlueMsg.svg";
import offer from "./MarketDash/VectorOffer.svg";
import smallMap from "./MarketDash/VectorSmap.svg";
import Right from "./MarketDash/VectorRight.svg";
import Left from "./MarketDash/VectorLeft.svg";

// import { FaStar } from "react-icons/fa"
import MarketplaceDash from "./MarketplaceDash.js";

import { useNavigate } from "react-router-dom";
///////////////

const MarketplaceDash2 = () => {
  const [card, setCard] = useState([]);
  const [detail, setDetail] = useState([]);
  const [show, setShow] = useState(true);
  const [filterSearch, setFilterSearch] = useState([]);

  // Chat
  const [listingMessage, setListingMessage] = useState("");
  const [ws, setWs] = useState(null);
  const [selectedUserId, setSelectedUserId] = useState("");
  const [messages, setMessages] = useState([]);

  //////MarketPlaceDetail
  const [text, setText] = useState("Share");
  const [username, setUsername] = useState("");
  const [pic, setPic] = useState("");

  // const [rating, setRating] = useState(null)
  // const [hover, setHover] = useState(null)
  const [meetingTime, setMeetingTime] = useState("");

  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);

  const steps = [
    "Basic Feedback",
    "More Details",
    "Build Feedback",
    "Other Feedback",
  ];

  const [feedback, setFeedback] = useState({
    basicFeedback: "",
    moreDetails: "",
    buildFeedback: "",
    otherFeedback: "",
    username: "",
    pic: "",
    listingName: "",
  });

  const handleShare = () => {
    console.log("share");
    setText("Link Copied");
    navigator.clipboard.writeText(window.location.href);
  };

  const handleDateTimeChange = (e) => {
    setMeetingTime(e.target.value);
  };

  const handleSubmitTime = (e) => {
    e.preventDefault();
    console.log("Selected Date and Time:", meetingTime);
  };

  const navigate = useNavigate();
  const [id, setId] = useState("");

  //seller username

  useEffect(() => {
    const getUsername = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        const user = JSON.parse(localStorage.getItem("user"));
        const token = user.token;
        localStorage.setItem("token", token);
      }

      if (token) {
        const decoded = jwtDecode(token);
        const id = decoded.id;
        setId(id);
        try {
          const response = await axios.get(`${ENV.BACKEND_URL}/users/getUser`, {
            headers: { "x-auth-token": id },
          });
          setUsername(response.data.user.userName);
          setPic(response.data.user.pic);
          setFeedback({
            ...feedback,
            username: response.data.user.userName,
            pic: response.data.user.pic,
          });
        } catch (error) {
          console.error(error);
        }
      }
    };

    getUsername();
  }, [setUsername]);

  const handleList = async (projectName) => {
    try {
      const data = {
        ...feedback,
        listingName: projectName,
      };
      const response = await axios.post(
        `${ENV.BACKEND_URL}/users/feedback`,
        data
      );
      console.log(response.data);
      setFeedback("");
    } catch (error) {
      console.error(error);
    }
  };

  const handleEmail = async (response) => {
    emailjs.send(
      "service_vy4h3iu",
      "template_jr2ippq",
      {
        from_name: "Acqify",
        from_email: "aamish@acqify.co",
        to_email: response.data.email,
        message: `You have a invitation for meeting with ${response.data.firstName + response.data.lastName} at ${meetingTime}. To accept the invitation please click on the link https://acqify.co//#/MainDashboard/Notification`,
      },
      "d0q75IL42sp_4qDf5"
    ).then((res) => {
      console.log(res);
    }).catch((err) => {
      console.log(err);
    })
  }


  const handleSchedule = async () => {
    try {
      const token = localStorage.getItem("token");
      console.log(token);
      const response = await axios.post(`${ENV.BACKEND_URL}/agora/schedule`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
        user: detail[0].ownerId,
        time: meetingTime,
        listing: detail[0].projectName,
      });
      handleEmail(response);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const exploreMore = (pro) => {
    const filterExplore = card?.filter((ex) => ex.projectName === pro);
    setShow(true);
    setFilterSearch(filterExplore);
  };

  ////////
  const detailPage = (Product) => {
    setDetail([{ ...Product }]);
    setShow(false);
  };

  useEffect(() => {
    getCard();
  }, []);

  // const connectToWs = () => {
  //   const ws = new WebSocket('ws://localhost:5000');
  //   setWs(ws);
  //   ws.addEventListener('message', handleMessage);
  //   ws.addEventListener('close', () => {
  //     setTimeout(() => {
  //       console.log('Disconnected. Trying to reconnect.');
  //       connectToWs();
  //     }, 10000);
  //   });
  // }

  // const sendMessage = () => {
  //   if (ws && ws.readyState === WebSocket.OPEN) {
  //     ws.send(JSON.stringify({
  //       receiver: detail[0].ownerId,
  //       messageString: listingMessage,
  //     }));
  //     setListingMessage('');
  //     // navigate('/MainDashboard/MessageDash');
  //   } else {
  //     console.error('WebSocket not open');
  //   }
  // };

  // const handleMessage = (ev) => {
  //   console.log('Message received:', ev);
  //   const messageData = JSON.parse(ev.data);
  //   console.log({ ev, messageData });
  //   if ('message' in messageData) {
  //     if (messageData.sender === selectedUserId) {
  //       // Assuming you have a state for messages
  //       setMessages(prev => ([...prev, { ...messageData }]));
  //     }
  //   }
  //   console.log('Running');
  // };

  // useEffect(() => {
  //   connectToWs();
  // }, []);

  const connectToWs = () => {
    const ws = new WebSocket(`${ENV.WEBSOCKET_URL}`);
    setWs(ws);
    ws.addEventListener("message", handleMessage);
    ws.addEventListener("close", () => {
      setTimeout(() => {
        console.log("Disconnected. Trying to reconnect.");
        connectToWs();
      }, 10000);
    });
  };

  const sendMessage = (ev) => {
    if (ev) ev.preventDefault();
    ws.send(
      JSON.stringify({
        sender: id,
        reciever: detail[0].ownerId,
        messageString: listingMessage,
      })
    );
    setListingMessage("");
    navigate("/MainDashboard/MessageDash");
  };

  const handleMessage = (ev) => {
    // const messageData = JSON.parse(ev.data);
    // console.log({ ev, messageData });
    // if ('message' in messageData) {
    //     if (messageData.sender === selectedUserId) {
    //         setMessages(prev => ([...prev, { ...messageData }]));
    //     }
    // }
    console.log("Running");
  };

  useEffect(() => {
    connectToWs();
  }, []);

  const { favourite, addToFavorites, removeFromFavorites } = useAppContext();

  const getCard = async () => {
    try {
      const response = await axios.get(
        `${ENV.BACKEND_URL}/business/getApprovedBusiness`
      );
      console.log(response.data.business);
      setCard(response.data.business);
      setFilterSearch(response.data.business);
    } catch (error) {
      console.error(error);
    }
  };

  const favoriteChecker = (cate) => {
    const boolean = favourite.some((items) => items.category === cate);
    return boolean;
  };

  const onSearch = (searchTerm) => {
    setFilterSearch(
      card.filter((f) =>
        f.projectName.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  };

  const filterCategory = (cate) => {
    const updatedCate = card?.filter((c) => c.category === cate);

    setFilterSearch(updatedCate);
    console.log("category filters", updatedCate);
  };

  const filterLocation = (e) => {
    const Loc = card?.filter((x) => x.location === e);
    // console.log(Loc);

    setFilterSearch(Loc);
  };

  const filterPrice = (el) => {
    const price = card?.filter((p) => p.askingPrice === el);

    setFilterSearch(price);
  };

  const filterTech = (t) => {
    const tech = card?.filter((p) => p.techStack1 === t);

    setFilterSearch(tech);
  };

  const filterLowToHigh = () => {
    const Lower = card
      ?.sort((a, b) => a.askingPrice - b.askingPrice)
      .filter((fl) => fl);
    //  console.log(Lower)
    setFilterSearch(Lower);
  };

  const MostView = (view) => {
    // const View = card?.sort((a, b) => b.askingPrice - a.askingPrice)
    const View = card?.filter((v) => v.category === view);
    // console.log(View);
    setFilterSearch(View);
  };

  const Newest = (n) => {
    const added = card?.reverse(n).filter((em) => em);
    setFilterSearch(added);
  };

  const MostFav = (fav) => {
    const Fav = card?.filter((fv) => favoriteChecker(fv.category) === fav);
    setFilterSearch(Fav);
  };

  //apply filters
  const CommunitySize = (cm) => {
    const com = card?.filter((m) => m.customers === cm);
    setFilterSearch(com);
  };

  const NetProfit = (Np) => {
    const net = card?.filter((pf) => pf.lastMonthNetProfit === Np);
    setFilterSearch(net);
  };

  const MonthProfit = (Mp) => {
    const Month = card?.filter((month) => month.monthlyProfit === Mp);
    setFilterSearch(Month);
  };

  const rangeFilter = (r) => {
    const range = card?.filter((rg) => rg.teamSize === r);
    setFilterSearch(range);
  };

  return (
    <>
      {show === true && (
        <>
          <section>
            <MarketplaceDash
              onSearching={onSearch}
              filterCategory={filterCategory}
              filterLocation={filterLocation}
              filterPrice={filterPrice}
              filterTech={filterTech}
              filterLowToHigh={filterLowToHigh}
              MostView={MostView}
              Newest={Newest}
              MostFav={MostFav}
              CommunitySize={CommunitySize}
              NetProfit={NetProfit}
              MonthProfit={MonthProfit}
              rangeFilter={rangeFilter}
            />
          </section>

          <section style={{ background: "#EEF0FE" }}>
            <section className="marketDash2-back" style={{ height: "100%" }}>
              <div className="d-flex">
                <div className="market-card my-4">
                  {filterSearch.map((item, index) => {
                    const id = index + 1;
                    return (
                      <div
                        className="card1"
                        key={item.id}
                        style={{
                          margin: "1rem 0.5rem",
                          padding: "1rem",
                          width: "85%",
                        }}
                      >
                        <div className="sideInfo d-flex align-items-center">
                          <div className="secondPart">
                            <img
                              style={{ borderRadius: "8px" }}
                              width={200}
                              src={item.link}
                              alt=""
                            />
                          </div>
                          <div
                            className="firstPart"
                            style={{ marginLeft: "2rem" }}
                          >
                            <h3 style={{ fontSize: "30px", fontWeight: "700" }}>
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
                          {/* <div>
                            <span className="d-flex align-items-center">
                              <i className="fa-solid fa-eye" style={{ color: "#3247ff" }}></i>
                              1.2K
                            </span>
                          </div> */}
                        </div>
                        <div className="my-4">
                          <span
                            className="col-6"
                            style={{ color: "#636363", fontSize: "18px" }}
                          >
                            {item.description}
                          </span>
                        </div>

                        <div
                          className="d-flex justify-content-between"
                          style={{ margin: "2rem 0 2rem 0" }}
                        >
                          <h3 className="card-h3">Metrics</h3>
                          <div className="d-flex align-items-center">
                            <Link
                              style={{ padding: "12px 38px" }}
                              onClick={() => detailPage(item)}
                              className="btn btn-primary mx-2"
                            >
                              View Listing
                              <img
                                className="mx-2"
                                style={{ width: "15px" }}
                                src={arrow}
                                alt=""
                              />{" "}
                            </Link>
                            {favoriteChecker(item.category) ? (
                              <Link
                                key={item.id}
                                onClick={() =>
                                  removeFromFavorites(item.category)
                                }
                              >
                                <i
                                  className="fa-solid fa-heart"
                                  style={{ color: "" }}
                                ></i>
                              </Link>
                            ) : (
                              <Link
                                key={item.id}
                                onClick={() => addToFavorites(item)}
                              >
                                <i
                                  className="fa-solid fa-heart"
                                  style={{ color: "#c0c0c0" }}
                                ></i>
                              </Link>
                            )}
                          </div>
                        </div>

                        <div
                          className="d-flex justify-content-between flex-wrap"
                          style={{ width: "100%" }}
                        >
                          <div style={{ margin: "1rem 3rem 0 0" }}>
                            <span
                              style={{ color: "#636363", fontWeight: "600" }}
                            >
                              Businesses Type
                            </span>
                            <div className="d-flex justify-content-start align-items-center">
                              <img width={40} src={cardLogo1} alt="" />
                              <span
                                className="card-span"
                                style={{ fontSize: "1.5rem" }}
                              >
                                {item.category}
                              </span>
                            </div>
                          </div>
                          <div style={{ margin: "1rem 3rem 0 0" }}>
                            <span
                              style={{ color: "#636363", fontWeight: "600" }}
                            >
                              Based in
                            </span>
                            <div className="d-flex justify-content-start align-items-center">
                              <img width={40} src={cardLogo2} alt="" />
                              <span
                                className="card-span"
                                style={{ fontSize: "1.5rem" }}
                              >
                                {item.location}
                              </span>
                            </div>
                          </div>
                          <div style={{ margin: "1rem 3rem 0 0" }}>
                            <span
                              style={{ color: "#636363", fontWeight: "600" }}
                            >
                              Acquisition type
                            </span>
                            <div className="d-flex justify-content-start align-items-center">
                              <img width={40} src={cardLogo3} alt="" />
                              <span
                                className="card-span"
                                style={{ fontSize: "1.5rem" }}
                              >
                                Full
                              </span>
                            </div>
                          </div>
                          <div style={{ margin: "1rem 3rem 0 0" }}>
                            <span
                              style={{ color: "#636363", fontWeight: "600" }}
                            >
                              Valuation
                            </span>
                            <div className="d-flex justify-content-start align-items-center">
                              <img width={40} src={cardLogo4} alt="" />
                              <span
                                className="card-span"
                                style={{ fontSize: "1.5rem" }}
                              >
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
          </section>
        </>
      )}

      {/* MarketPlace Detail Dashbaord */}
      {show === false && (
        <>
          <section>
            <div className="sideContent d-flex justify-content-between">
              <div>
                {/* <Link onClick={show => setShow(2)}><img src={back} alt="" /></Link>
                <span className='mx-3' style={{ color: '#636363' }}>Go back Marketplace</span> */}
                <br />
              </div>
              <div>
                {detail.map((it, i) => {
                  return (
                    <Link
                      key={i}
                      className="btn btn-primary rounded-pill px-5 py-2"
                      onClick={() => exploreMore(it.projectName)}
                    >
                      Explore More
                      <i
                        className="fa-solid fa-arrow-right mx-2"
                        style={{ color: "#ffffff" }}
                      ></i>
                    </Link>
                  );
                })}
              </div>
            </div>
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
                        <Link
                          style={{
                            background: "#3247ff",
                            borderRadius: "50px",
                            padding: "0.3rem 0.8rem",
                          }}
                          data-bs-target={`#carouselExampleAutoplaying${index}`}
                          data-bs-slide="next"
                        >
                          <img src={Left} alt="" />
                        </Link>
                        <Link
                          style={{
                            background: "#3247ff",
                            borderRadius: "50px",
                            padding: "0.3rem 0.8rem",
                          }}
                          data-bs-target={`#carouselExampleAutoplaying${index}`}
                          data-bs-slide="prev"
                        >
                          <img src={Right} alt="" />
                        </Link>
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

                    <div>
                      {currentStep === 1 && (
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
                                onClick={() => {
                                  setCurrentStep((prev) => prev + 1);
                                }}
                              />
                              <label htmlFor="next">
                                <span
                                  className="feedbtn me-5 my-2"
                                  onClick={() => {
                                    setFeedback({
                                      ...feedback,
                                      basicFeedback: "No",
                                    });
                                    setCurrentStep((prev) => prev + 1);
                                  }}
                                >
                                  No
                                </span>
                              </label>
                            </div>
                            <div className="mt-4">
                              {!complete && (
                                <>
                                  <input
                                    type="text"
                                    id="next"
                                    className="feedInput"
                                    onClick={() => {
                                      currentStep === 4
                                        ? setComplete(true)
                                        : setCurrentStep((prev) => prev + 1);
                                    }}
                                  />
                                  <label htmlFor="next">
                                    <span
                                      className="feedbtn"
                                      onClick={() => {
                                        setFeedback({
                                          ...feedback,
                                          basicFeedback: "Yes",
                                        });
                                      }}
                                    >
                                      {currentStep === 3 ? "Finish" : "Yes"}
                                    </span>
                                  </label>
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    <div>
                      {currentStep === 2 && (
                        <div className="feedback my-3">
                          <div className="FirstFeedback d-flex flex-column justify-content-center align-items-center text-center">
                            <h3 style={{ color: "#000" }}>
                              How was the Pricing?
                            </h3>
                            <span style={{ color: "#636363" }}></span>
                            <span></span>
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
                                onClick={() => {
                                  setCurrentStep((prev) => prev + 1);
                                }}
                              />
                              <label htmlFor="next">
                                <span
                                  className="feedbtn me-5 my-2"
                                  onClick={() => {
                                    setFeedback({
                                      ...feedback,
                                      moreDetails: "Very bad",
                                    });
                                    setCurrentStep((prev) => prev + 1);
                                  }}
                                >
                                  Very bad
                                </span>
                              </label>
                            </div>
                            <div className="mt-4">
                              {!complete && (
                                <>
                                  <input
                                    type="text"
                                    id="next"
                                    className="feedInput"
                                    onClick={() => {
                                      currentStep === steps.length
                                        ? setComplete(true)
                                        : setCurrentStep((prev) => prev + 1);
                                    }}
                                  />
                                  <label htmlFor="next">
                                    <span
                                      className="feedbtn"
                                      onClick={() => {
                                        setFeedback({
                                          ...feedback,
                                          moreDetails: "Very good",
                                        });
                                      }}
                                    >
                                      {currentStep === steps.length
                                        ? "Finish"
                                        : "Very good"}
                                    </span>
                                  </label>
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    <div>
                      {currentStep === 3 && (
                        <div className="feedback my-3">
                          <div className="FirstFeedback d-flex flex-column justify-content-center align-items-center text-center">
                            <h3 style={{ color: "#000" }}>
                              Acquisition financing?
                            </h3>
                            <span style={{ color: "#636363" }}>
                              ( not having enough money )
                            </span>
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
                                // id="prev"
                                onClick={() => {
                                  setCurrentStep((prev) => prev + 1);
                                }}
                              />
                              <label htmlFor="next">
                                <span
                                  className="feedbtn me-5 my-2"
                                  onClick={() => {
                                    setFeedback({
                                      ...feedback,
                                      buildFeedback: "No",
                                    });
                                    setCurrentStep((prev) => prev + 1);
                                  }}
                                >
                                  No
                                </span>
                              </label>
                            </div>
                            <div className="mt-4">
                              {!complete && (
                                <>
                                  <input
                                    type="text"
                                    id="next"
                                    className="feedInput"
                                    onClick={() => {
                                      currentStep === steps.length
                                        ? setComplete(true)
                                        : setCurrentStep((prev) => prev + 1);
                                    }}
                                  />
                                  <label htmlFor="next">
                                    <span
                                      className="feedbtn"
                                      onClick={() => {
                                        setFeedback({
                                          ...feedback,
                                          buildFeedback: "Yes",
                                        });
                                      }}
                                    >
                                      {" "}
                                      {currentStep === steps.length
                                        ? "Yes"
                                        : "Yes"}
                                    </span>
                                  </label>
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    <div>
                      {currentStep === 4 && (
                        <div className="feedback my-3">
                          <div className="FirstFeedback d-flex flex-column justify-content-center align-items-center text-center">
                            <h3 style={{ color: "#000" }}>
                              Other feedback you’re giving?
                            </h3>
                            <div style={{ color: "#636363", width: "100%" }}>
                              <input
                                style={{ height: "6vh", width: "100%" }}
                                type="text"
                                id="inputEmail10"
                                className="form-control"
                                name="otherFeedback"
                                placeholder="Enter comment..."
                                value={feedback.otherFeedback}
                                onChange={(e) =>
                                  setFeedback({
                                    ...feedback,
                                    otherFeedback: e.target.value,
                                  })
                                }
                              />
                            </div>
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
                                // id="prev"
                                onClick={() => {
                                  setCurrentStep((prev) => prev + 1);
                                }}
                              />
                              <label htmlFor="next">
                                <span className="feedbtn me-5 my-2">
                                  Cancel
                                </span>
                              </label>
                            </div>
                            <div className="mt-4">
                              {!complete && (
                                <>
                                  <input
                                    type="text"
                                    id="next"
                                    className="feedInput"
                                    onClick={() => {
                                      currentStep === 3
                                        ? setComplete(true)
                                        : setCurrentStep((prev) => prev + 1);
                                    }}
                                  />
                                  <label htmlFor="next">
                                    <span className="feedbtn">
                                      {currentStep === steps.length ? (
                                        <Link
                                          style={{
                                            textDecoration: "none",
                                            color: "white",
                                          }}
                                          onClick={() => {
                                            handleList(item.projectName);
                                          }}
                                        >
                                          Send
                                        </Link>
                                      ) : (
                                        "Send"
                                      )}
                                    </span>
                                  </label>
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
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

                        <Link
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
                        {/* <div onClick={() => {
                            navigate(`/call/${item.ownerId}`);
                          }} className='my-3 d-flex align-items-center justify-content-center' style={{ cursor: 'pointer', border: '2px solid #3247ff', color: '#3247ff', borderRadius: "15px", padding: '1rem 2rem', textAlign: 'center', width: '100%', textDecoration: 'none' }}>
                            <i class="fa-solid fa-phone-volume" style={{ color: "#005eff" }}></i>
                            <span className='mx-2'>Video Call</span>
                          </div> */}
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
                        </Link>
                        <Link
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
                        </div>
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

      <section>
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-body">
                <div className="mb-3">
                  {detail.map((i) => {
                    return (
                      <>
                        <div className="d-flex">
                          <img
                            key={i.id}
                            src={i.ownerImage}
                            alt=""
                            style={{
                              borderRadius: "50px",
                              height: "50px",
                              width: "50px",
                            }}
                          />
                          <div className="mx-2">
                            <h4 style={{ margin: "0px" }}>{i.ownerName}</h4>
                            <span>
                              <img className="mx-1" src={smallMap} alt="" />
                              {i.location}
                            </span>
                          </div>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
              <div>
                <div
                  className="mx-3"
                  style={{ color: "#636363", width: "100%" }}
                >
                  <div className="d-flex mb-3 my-3 ">
                    <div className="d-flex justify-content-center align-items-center">
                      <i
                        style={{ color: "#3247FF", fontSize: "1.5rem" }}
                        className="fa-solid fa-face-smile mx-2"
                      ></i>
                    </div>
                    <input
                      style={{
                        width: "100",
                        background: "#fff",
                        borderRadius: "50px",
                        height: "8vh",
                      }}
                      type="text"
                      id="floatingInputValue"
                      className="Search-from form-control mx-2"
                      placeholder="Write message..."
                      value={listingMessage}
                      onChange={(e) => setListingMessage(e.target.value)}
                    />
                    <div
                      className="messageSendBtn text-center mx-2 d-flex  justify-content-center align-items-center"
                      style={{
                        color: "#3247FF",
                        right: "15%",
                        position: "relative",
                        textDecoration: "none",
                        cursor: "pointer",
                      }}
                      onClick={() => sendMessage()}
                    >
                      <>
                        <i
                          style={{ fontSize: "1.5rem" }}
                          className="messageSend fa-regular fa-paper-plane py-3"
                        ></i>
                      </>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div
          className="modal fade"
          id="staticBackdrop1"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-xl">
            <div className="modal-content" style={{ background: "#000" }}>
              <div className="modal-header" style={{ border: "none" }}>
                {detail.map((item, i) => {
                  return (
                    <h1
                      key={i}
                      className="modal-title fs-5"
                      style={{ color: "#fff" }}
                      id="staticBackdropLabel"
                    >
                      {item.projectName}
                    </h1>
                  );
                })}
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                {detail.map((items, i) => {
                  return (
                    <video key={i} style={{ width: "100%" }} controls autoplay>
                      <source src={items.video} type="video/mp4" />
                    </video>
                  );
                })}
              </div>
              <div className="modal-footer" style={{ border: "none" }}>
                <button
                  type="button"
                  className="btn btn-secondary"
                  style={{ padding: "0.5rem 1.5rem", borderRadius: "50px" }}
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section>
        <div className="modal fade" id="exampleModal1" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog  modal-dialog-centered">
            <div style={{ background: '#191b1b', color: '#fff', borderRadius: '20px' }} className="modal-content">
              <div className="modal-header" style={{ border: 'none' }}>
                <br />
                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
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

      <section
        className="d-flex align-items-center justify-content-center"
        style={{ padding: "50px 0", background: "#EEF0FE" }}
      >
        <div
          className="modal fade"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content" style={{ borderRadius: "20px" }}>
              <div className="modal-header" style={{ border: "none" }}>
                <div>
                  <h1
                    className="modal-title fs-5"
                    id="staticBackdropLabel"
                    style={{ fontWeight: "700" }}
                  >
                    Pricing plans
                  </h1>
                  <span>Choose a plan that's right for you.</span>
                </div>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div
                  className=""
                  style={{
                    border: "1px solid lightgray",
                    borderRadius: "20px",
                    padding: "2rem",
                  }}
                >
                  <div className="form-check d-flex justify-content-between">
                    <div>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label
                        style={{ fontWeight: "800", fontSize: "1rem" }}
                        className="form-check-label"
                        for="flexRadioDefault1"
                      >
                        Premium Annually
                      </label>
                      <br />
                      <span>Get full access every 6 months.</span>
                      <br />
                      <br />
                      <ul>
                        <li>Project metrics</li>
                        <li>Send Message</li>
                        <li>Make Offers</li>
                        <li>One Click Purchase</li>
                        <li>Community Access</li>
                      </ul>
                    </div>
                    <div>
                      <h3>
                        $149
                        <span style={{ fontSize: "15px", color: "#636363" }}>
                          /6mths
                        </span>
                      </h3>
                    </div>
                  </div>
                </div>
                <div
                  className="my-3"
                  style={{
                    border: "1px solid lightgray",
                    borderRadius: "20px",
                    padding: "2rem",
                  }}
                >
                  <div className="form-check d-flex justify-content-between">
                    <div>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="flexRadioDefault"
                        id="flexRadioDefault2"
                      />
                      <label
                        style={{ fontWeight: "800", fontSize: "1rem" }}
                        className="form-check-label"
                        for="flexRadioDefault2"
                      >
                        Pro Annually
                      </label>
                      <br />
                      <span>Get full access on an annual basis.</span>
                      <br />
                      <br />
                      <ul>
                        <li>Project metrics</li>
                        <li>Send Message</li>
                        <li>Make Offers</li>
                        <li>One Click Purchase</li>
                        <li>Community Access</li>
                      </ul>
                    </div>
                    <div>
                      <h3>
                        $199
                        <span style={{ fontSize: "15px", color: "#636363" }}>
                          /year
                        </span>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer" style={{ border: "none" }}>
                <button
                  type="button"
                  className="btn btn-primary rounded-pill py-2 px-5"
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schdeule A vidoe meet time and Date */}
      <section>
        <div
          className="modal fade"
          id="ScheduleModalToggle"
          aria-hidden="true"
          aria-labelledby="exampleModalToggleLabel"
          tabIndex="-1"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header" style={{ border: "none" }}>
                <h1
                  className="modal-title fs-5"
                  id="exampleModalToggleLabel"
                  style={{ fontWeight: "700" }}
                >
                  Select a Date & Time!
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form>
                  <label style={{ color: "#0005ff" }} for="birthdaytime">
                    Meeting (date and time):
                  </label>
                  <input
                    style={{
                      padding: "1rem",
                      border: "none",
                      background: "#f4f4f4",
                      color: "#0005ff",
                      borderRadius: "50px",
                    }}
                    className="mx-3"
                    onChange={handleDateTimeChange}
                    type="datetime-local"
                    id="birthdaytime"
                    name="birthdaytime"
                  />
                </form>
              </div>
              <div className="modal-footer" style={{ border: "none" }}>
                <button
                  onClick={handleSubmitTime}
                  type="submit"
                  className="btn btn-primary py-1 px-3"
                  data-bs-target="#exampleModalToggle2"
                  data-bs-toggle="modal"
                >
                  Book a call
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="exampleModalToggle2"
          aria-hidden="true"
          aria-labelledby="exampleModalToggleLabel2"
          tabIndex="-1"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header" style={{ border: "none" }}>
                <h1 className="modal-title fs-5" id="exampleModalToggleLabel2">
                  Scheduling a Video Call
                </h1>
                {/* <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}
              </div>
              <div className="modal-body">
                Your Request for the Meeting has been sent to the Seller!
              </div>
              <div className="modal-footer" style={{ border: "none" }}>
                <button
                  className="btn btn-primary px-3 py-1"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={handleSchedule}
                >
                  Confirm meet!
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MarketplaceDash2;
