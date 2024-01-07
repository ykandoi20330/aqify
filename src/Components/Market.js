import React, { useState, useEffect } from "react";
import backgroundImg from "./Market/unsplash_5U_28ojjgms.png";
import arrow from "./Aqify project/Vector (1).png";
import ENV from "../config.js";
import axios from "axios";

import { TypeAnimation } from "react-type-animation";

//
import search from "./MarketDash/VectorSearch.svg";
// import img from "./Market/market.png";

import { Link, useNavigate, useParams } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar"
//logo
// import Logo from "./Aqify project/Frame 7.png";
// import upload from "./Selling/VectorUpload.svg";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MarketplaceDetail from "./MarketplaceDetail.js";

/////////////
import cardLogo2 from "./Market/Frame 34 (1).png"
import cardProfile from "./Market/Rectangle 25.png"

//dash
import slideImg from "./MarketDash/Doctor.jpg"
// import back from "./MarketDash/VectorBackArrow.svg"
import chart from "./MarketDash/Vertical.png"

//side card
import cart from "./MarketDash/VectorCart.svg"
import blueMsg from "./MarketDash/VectorBlueMsg.svg"
import offer from "./MarketDash/VectorOffer.svg"
import smallMap from "./MarketDash/VectorSmap.svg"
import Right from "./MarketDash/VectorRight.svg"
import Left from "./MarketDash/VectorLeft.svg"
import profileIcon from "./ProfileDashbaord/ellipse-60@2x.png"
////////////

const Market = () => {
  const [fetchedtemplates, setfetchedtemplates] = useState([]);
  const [card, setCard] = useState([]);
  const [show, setShow] = useState(true);
  const [detail, setDetail] = useState([]);
  const [filterSearch, setFilterSearch] = useState([]);
  const [searchTerm, setSearchTerm] = useState([]);

  const navigate = useNavigate();
  // const [templates, settemplates] = useState(fetchedtemplates);
  const [file, setFile] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const [formData, setFormData] = useState({
    websiteName: "",
    amount: "",
    link: "",
    description: "",
  });

  const [filter, setFilter] = useState({
    category: "",
    tools: [],
    technology: ''
  });

  const toastOptions = {
    position: "top-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  const validation = () => {
    if (!formData.websiteName) {
      toast.error("Name of the Template is Required.", toastOptions);
      return false;
    }

    if (!formData.amount) {
      toast.error("Amount is required.", toastOptions);
      return false;
    }

    if (!formData.link) {
      toast.error("Template Link is required.", toastOptions);
      return false;
    }

    if (!formData.description) {
      toast.error("DEscription of the Template is required.", toastOptions);
      return false;
    }

    return true;
  };

  const collectData = async (e) => {
    e.preventDefault();
    if (!file) return;
    const form = new FormData();
    form.append("templateImage", file);
    form.append("websiteName", formData.websiteName);
    form.append("amount", formData.amount);
    form.append("link", formData.link);
    form.append("description", formData.description);
    if (validation()) {
      try {
        console.warn(form);
        const response = await fetch(
          `${ENV.BACKEND_URL}/template/addTemplate`,
          {
            method: "POST",
            body: form,
          }
        );
        console.warn(response);
        const data = await response.json();
        if (response.status === 200) {
          setFormData({
            websiteName: "",
            amount: "",
            link: "",
            description: "",
          });
          toast.success(data.message, toastOptions);
        } else {
          toast.error(data.message, toastOptions);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // const handleCategoryChange = (e) => {
  //   const selectedCategory = e.target.value;
  //   console.log(selectedCategory);
  //   setFilter({ ...filter, category: selectedCategory });
  // };

  // const handleTechnologyChange = (e) => {
  //   const selectedTechnology = e.target.value;
  //   console.log(selectedTechnology);
  //   setFilter({ ...filter, technology: selectedTechnology });
  // };

  // const handleToolChange = (selectedOption) => {
  //   const isSelected = filter.tools.includes(selectedOption);

  //   if (!isSelected) {
  //     setFilter({ ...filter, tools: [...filter.tools, selectedOption] });
  //   } else {
  //     setFilter({
  //       ...filter,
  //       tools: filter.tools.filter((tool) => tool !== selectedOption),
  //     });
  //   }
  // };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // useEffect(() => {
  //   gettemplates();
  // }, []);

  // const gettemplates = async () => {
  //   try {
  //     let response = await fetch(`${ENV.BACKEND_URL}/template/getTemplate`, {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       credentials: "include",
  //       // body: JSON.stringify(),
  //     });

  //     if (response.status === 200) {
  //       response = await response.json();
  //       console.log(response);
  //       setfetchedtemplates(response);
  //       settemplates(response)
  //     } else {
  //       console.error("Error fetching products:", response.statusText);
  //     }
  //   } catch (error) {
  //     console.error("Error fetching products:", error);
  //   }
  // };

  useEffect(() => {
    gettemplates();
  }, []);

  const gettemplates = async () => {
    try {
      const response = await axios.get(
        `${ENV.BACKEND_URL}/business/getApprovedBusiness`);
      console.log(response.data.business);
      setCard(response.data.business);
      setFilterSearch(response.data.business);

    } catch (error) {
      console.error(error);
    }
  }

  const onSearch = (searchTerm) => {
    setFilterSearch(card.filter(f => f.projectName.toLowerCase().includes(searchTerm.toLowerCase())))
  }

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  }

  const detailPage = (Product) => {
    let detailItems = [{ ...Product }];
    setDetail(detailItems)
    setShow(false)
  }

  //category filters

  const filterCategory = (cate) => {
    const updatedCate = card?.filter((c) => c.category === cate)

    setFilterSearch(updatedCate);
    console.log("category filters", updatedCate);
  }

  const handleCategoryChange = (e) => {
    filterCategory(e.target.value);
  };


  //TechStack filters

  const filterTech = (tech) => {
    const updatedTech = card?.filter((t) => t.techStack2 === tech)

    setFilterSearch(updatedTech);
  }

  const handleToolChange = (el) => {
    filterTech(el.target.value)
  }

  //Sort by Price
  const filterPrice = (el) => {
    const price = card?.filter((p) => p.askingPrice === el)

    setFilterSearch(price)
  }

  const handleTechnologyChange = (el) => {
    filterPrice(el.target.value)
  }

  const [templates, settemplates] = useState(fetchedtemplates);

  const searchhandle = async (e) => {
    const key = e.target.value;
    console.log(key);
    if (key) {
      try {
        const response = await fetch(
          `${ENV.BACKEND_URL}/template/searchTemplate/${key}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include",
          }
        );

        if (response.status === 200) {
          const data = await response.json();
          settemplates(data);
        } else {
          console.error("Error fetching search results:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    } else {
      await gettemplates();
    }
  };

  const applyFilters = () => {

    let Filteredtemplates = [...fetchedtemplates];

    if (filter.category) {
      Filteredtemplates = Filteredtemplates.filter(template => template.category === filter.category);
    }

    if (filter.tools.length > 0) {
      Filteredtemplates = Filteredtemplates.filter(template => filter.tools.every(tool => template.tools.includes(tool)));
    }

    if (filter.technology) {
      Filteredtemplates = Filteredtemplates.filter(template => template.technology === filter.technology);
    }

    settemplates(Filteredtemplates);
    console.log(Filteredtemplates);
  };

  return (
    <>
      {/**Nav section */}

      <section>
        <Navbar />
      </section>

      {/** */}
      {show === true && <>
        <section className="pricing-first-section">
          <div
            className="pricing-backgroundImage" style={{background:'#161616', padding:'4rem 0 8rem 0'}}
            >
            {/* style={{
              backgroundImage: `url(${backgroundImg})`,
              width: "100%",
              height: "100vh",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }} */}
            <div className="owner-content">
              <div>
                <div className="my-5">
                  <h1 className="main-h1 text-start col-6">
                    Our Marketplace Holds Flagship Online Businesses To Acquire! <br />
                    <TypeAnimation
                      className="typeAnimation marketTypeAnimation"
                      style={{ fontSize: "3rem" }}
                      sequence={[
                        "Ecommerce", // Types 'One'
                        1000, // Waits 1s
                        "Saas", // Deletes 'One' and types 'Two'
                        2000, // Waits
                        "Community",
                        2000,
                        "Crypto",
                        2000,
                        "Wordpress",
                        2000,
                        "Content",
                        2000,
                        "Services",
                        2000,
                      ]}
                      wrapper="span"
                      cursor={false}
                      repeat={Infinity}
                    />
                    .
                  </h1>
                </div>
                <div className="my-4">
                  <span className="main-span col-6 d-flex">
                    Collaborate with new founders and make the best deals!
                  </span>
                </div>
                {/* <div className=''>
                                <Link style={{ fontSize: '1.5rem' }} className='btn btn-primary' to="/singin">List your business<img style={{ width: '10%' }} src={arrow} alt="" /></Link>
                            </div> */}
              </div>
            </div>
          </div>
        </section>

        <section
          className="d-flex justify-content-center"
          style={{ background: "#EEF0FE" }}
        >
          <div className="MarketTool-card">
            <div className="second-line d-flex">
              <div className="form-floating mb-2" style={{ width: "100%" }}>
                <input
                  style={{ width: "100%" }}
                  type="email"
                  id="floatingInputValue"
                  className="form-control"
                  placeholder="Search"
                  onChange={handleSearch}
                />
                {/* onChange={searchhandle} */}
                <label for="floatingInputValue">
                  <img src={search} alt="" />
                </label>
              </div>
            </div>

            <div className="first-line d-flex">
              <div className="form-floating" style={{ width: "100%" }}>
                <select
                  style={{ width: "97%", color: "#3247ff" }}
                  className="form-control form-select form-select-lg mb-2"
                  onChange={handleCategoryChange}
                  aria-label="Large select example"
                >
                  <option id="floatingInputValue" selected>Categories</option>
                  {card.map((cate) => {
                    return (
                      <option key={cate.id} value={cate.category}>{cate.category}</option>
                    )
                  })}
                </select>
                <label for="floatingInputValue">
                  <img src="" alt="" />
                  <i
                    className="fa-brands fa-squarespace"
                    style={{ color: "#005eff" }}
                  ></i>
                </label>
              </div>
              <div className="form-floating mr-2" style={{ width: "100%" }}>
                <select style={{ width: '97%', color: '#3247ff' }} className="form-control form-select form-select-lg mb-3" onChange={handleToolChange} aria-label="Large select example">
                  {/* value={filter.tools[0] || ''} */}
                  <option id="floatingInputValue" selected>Tool</option>
                  {[...new Set(card)].map((tech) => {
                    return (
                      <option key={tech.id} value={tech.techStack2}>{tech.techStack2}</option>
                    )
                  })}
                </select>
                {/* <div style={{ position: "relative" }}>
                  <div className="form-control mb-2 px-5 d-flex align-items-center"
                    style={{
                      width: '95%', color: '#3247ff',
                      border: "1px solid #ccc",
                      // padding: "5px",
                      cursor: "pointer",
                      height: '8vh',
                    }}
                    onClick={toggleDropdown}
                  >
                    Tools
                  </div>
                  {isOpen && (
                    <div
                      style={{
                        position: "absolute",
                        width: "200px",
                        border: "1px solid #ccc",
                        padding: "5px",
                        background: "#fff",
                        zIndex: "1",
                        marginTop: "5px",
                      }}
                    >
                      <label>
                        <input
                          type="checkbox"
                          value="ReactJs"
                          checked={filter.tools.includes("ReactJs")}
                          onChange={() => handleToolChange("ReactJs")}
                        />
                        ReactJs
                      </label>
                      <br />
                      <label>
                        <input
                          type="checkbox"
                          value="NodeJs"
                          checked={filter.tools.includes("NodeJs")}
                          onChange={() => handleToolChange("NodeJs")}
                        />
                        NodeJs
                      </label>
                      <br />
                      <label>
                        <input
                          type="checkbox"
                          value="HTML,CSS"
                          checked={filter.tools.includes("HTML,CSS")}
                          onChange={() => handleToolChange("HTML,CSS")}
                        />
                        HTML,CSS
                      </label>
                    </div>
                  )}
                  {/* Rest of your component //
                </div> */}
                <label className="" for="floatingInputValue">
                  <img src="" alt="" />
                  <i
                    className="fa-solid fa-screwdriver-wrench"
                    style={{ color: "#005eff", marginRight: '5px' }}
                  ></i>
                </label>
              </div>
              <div className="form-floating mr-2" style={{ width: "100%" }}>
                <select
                  style={{ width: "100%", color: "#3247ff" }}
                  className="form-control form-select form-select-lg mb-3"
                  aria-label="Large select example"
                  // value={filter.technology} 
                  onChange={handleTechnologyChange}
                >
                  <option id="floatingInputValue" selected >
                    Sort by
                  </option>
                  {card.map((price) => {
                    return (
                      <option key={price.id} value={price.askingPrice}>{price.askingPrice}</option>
                    )
                  })}

                </select>
                <label for="floatingInputValue">
                  <img src="" alt="" />
                  <i className="fa-solid fa-list" style={{ color: "#005eff" }}></i>
                </label>
              </div>

            </div>
            {/* <button style={{ width: "20%" }} className="btn btn-primary market-btns" onClick={applyFilters}>Apply Filter
              <img style={{ width: "20px", marginLeft: "1rem" }} src={arrow} alt="" />{" "}
            </button> */}
          </div>

        </section>

        <section
          className="marketMain"
          style={{ background: "#EEF0FE ", padding: "3rem" }}
        >
          <section className="ligh-back my-5" style={{ height: "fit-content" }}>
            <div
              className="card-container"
              style={{
                display: "flex",
                // flexWrap: "wrap",
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                width: "100%",
              }}
            >
              {/* templates */}
              {filterSearch.length > 0 ? (
                filterSearch.map((item, index) => (
                  <div
                    className="marketInner-card my-3"
                    key={index}
                    style={{
                      // width: "30%",
                      // height: "100%",
                      borderRadius: "20px",
                      boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <div className="firstMarket">
                      <img
                        src={item.link}
                        // src={require(`../images/template-images/${item.websiteName}.jpg`)}
                        alt=""
                        className="marketLogoImage"
                        style={{
                          position: "relative",
                          width: "18vw",
                          height: "200px",
                          objectFit: "cover",
                          borderRadius: "20px 20px 20px 20px",
                        }}
                      />
                      <div
                        className="firstSide-top"
                        style={{
                          position: "absolute",
                          top: "0",
                          right: "0px",
                          width: "65%",
                          textAlign: "end",
                        }}
                      >
                        <button
                          className="btn-card btn btn-outline-primary my-2"
                          style={{
                            fontSize: "0.7rem",
                            background: "#fff",
                            color: "#3247FF ",
                          }}
                        >
                          {item.techStack1}
                        </button>
                        <button
                          className="btn-card btn btn-outline-primary my-2"
                          style={{
                            fontSize: "0.7rem",
                            background: "#fff",
                            color: "#3247FF ",
                          }}
                        >
                          {item.techStack2}
                        </button>
                        <button
                          className="btn-card btn btn-outline-primary my-2"
                          style={{
                            fontSize: "0.7rem",
                            background: "#fff",
                            color: "#3247FF ",
                          }}
                        >
                          {item.techStack3}
                        </button>
                        <button
                          className="btn-card btn btn-outline-primary my-2"
                          style={{
                            fontSize: "0.7rem",
                            background: "#fff",
                            color: "#3247FF ",
                          }}
                        >
                          {item.techStack4}
                        </button>
                      </div>
                    </div>
                    <div style={{ padding: "2rem" }}>
                      <div>
                        <div>
                          <h3>{item.projectName}</h3>
                          <Link
                            style={{
                              padding: "0.5rem 1.5rem",
                              background: "#EEF0FE",
                              color: "#3247FF",
                              border: "none",
                            }}
                            to="#"
                            className="btn btn-primary rounded-pill"
                          >
                            Template
                          </Link>
                        </div>
                        <div className="d-flex justify-content-between my-4">
                          <div>
                            <span className="mx-2">Favorites</span>
                            <i
                              className="fa-regular fa-heart"
                              style={{ color: "#005eff" }}
                            ></i>
                          </div>
                          <div>
                            <span className="mx-2">Net Profit</span>
                            <i
                              className="fa-solid fa-lock"
                              style={{ color: "#005eff" }}
                            ></i>
                          </div>
                          <div>
                            <span className="mx-2">{item.location}</span>
                            <i
                              className="fa-solid fa-location-dot"
                              style={{ color: "#005eff" }}
                            ></i>
                          </div>
                        </div>
                      </div>
                      <div
                        className="priceTag-div d-flex justify-content-between"
                        style={{ margin: "2rem 0 2rem 0" }}
                      >
                        <h3
                          className=""
                          style={{ fontWeight: "bolder", fontSize: "3rem" }}
                        >
                          ${item.askingPrice}
                        </h3>
                        <Link
                          style={{ padding: "1.1rem 3rem" }}
                          className="btn btn-primary"
                          // to={`/placeDetail/${item.id}`}
                          onClick={() => detailPage(item)}
                        >
                          View details
                          <img
                            style={{ width: "1.2rem" }}
                            src={arrow}
                            alt=""
                          />{" "}
                        </Link>
                      </div>
                      <span>{item.description}</span>
                    </div>
                  </div>
                ))
              ) : (
                <h1 className="col-span-1 text-center text-3xl font-extrabold">
                  No Result Found!..
                </h1>
              )}
            </div>
          </section>

          {/* <section style={{ background: "#EEF0FE " }}>
            <div>
              <div className="d-flex justify-content-center">
                <Link
                  style={{ padding: "18px 48px" }}
                  className="btn btn-primary"
                  to="/singup"
                >
                  View more
                  <img
                    style={{ width: "20px", marginLeft: "1rem" }}
                    src={arrow}
                    alt=""
                  />{" "}
                </Link>
              </div>
            </div>
          </section> */}
        </section>
      </>}





      {/**Marketplace details section */}
      <section>
        {show === false &&
          //////
          <>
            <section className='pricing-first-section'>
              <div className="pricing-backgroundImage align-items-start" style={{ background:'#161616',padding:'4rem 0 8rem 0' }}>
              {/* backgroundImage: `url(${backgroundImg})`, width: '100%', height: '100vh', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' */}
                <div className="owner-content">
                  <div>
                    {detail.map((dt, index) => {
                      return (<>
                        <div className='my-5'>
                          <h1 key={index} className='main-h1 '>{dt.projectName}</h1>
                        </div>
                        <div className='my-4'>
                          <span className='main-span col-7 d-flex'>
                            {/* Affordable advice on valuations, negotiations, legal, tax, accounting & due diligence. */}
                            {dt.tagline}
                          </span>
                        </div>
                      </>
                      )
                    })}
                    <div className=''>
                      <Link style={{ fontSize: '1.5rem', position:'relative', zIndex:'10' }} className='btn btn-primary' onClick={() => setShow(true)} >Back to your List<img className="mx-2" style={{ width: '8%' }} src={arrow} alt="" /></Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className='d-flex justify-content-center' style={{ background: '#EEF0FE' }}>

              <section className='placeDetail-section' style={{ top: '-170px', position: 'relative', padding: '4rem' }}>
                <>
                  {detail.map((item, index) => {
                    return (
                      <div key={item.id} className="detailContent MarketPlace-card d-flex flex-row justify-content-between" style={{ margin: "1rem 1rem", padding: "2rem", height: '100vh', overflow: 'hidden', width: "100%" }}>

                        <div className='Placecontent' style={{ width: '55%', overflowY: 'scroll' }}>
                          <div className='FirstContent d-flex align-items-center'>
                            <div className='secondPart'>
                              <img className='card-img' width={200} src={item.link} alt="" />
                            </div>
                            <div className="firstPart" style={{ marginLeft: "2rem" }}>
                              <h3 style={{ fontSize: '20px', fontWeight: '700' }}>{item.projectName}</h3>
                              <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '9px' }}>{item.techStack1}</button>
                              <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '9px' }}>{item.techStack2}</button>
                              <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '9px' }}>{item.techStack3}</button>
                              <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '9px' }}>{item.techStack4}</button>
                            </div>
                          </div>
                          <div className='d-flex justify-content-between' style={{ margin: '1rem 0 0rem 0' }}>
                            <h3 className='card-h3'>Metrics</h3>
                          </div>

                          <div className='my-4'>
                            <span className='col-6' style={{ color: '#636363', fontSize: '16px' }}>
                              {item.description}
                              {/* A design inspiration platform for SaaS apps that helps designers find inspiration for their next project by showcasing over 1,000 pages from over 100 SaaS apps, organized by category and page type. Designers can also
                                                filter designs by color and fonts, and bookmark their favorites for later.<br /><br />
                                                Project can be grown by doing proper content marketing through blogs and social media, further paid ads can also be utilized to get more customers for the app. */}
                            </span>
                          </div>

                          <div className="imgSlider d-flex justify-content-center align-items-center" style={{ position: 'relative' }}>

                            <div id={`carouselExampleAutoplaying${index}`} className="carousel slide" data-bs-ride="carousel">
                              <div className="carousel-inner">
                                <div className="carousel-item active">
                                  <img style={{ borderRadius: '10px', width: '100%' }} src={item.carouselImage1} alt="" />
                                </div>
                                <div className="carousel-item">
                                  <img style={{ borderRadius: '10px', width: '100%' }} src={item.carouselImage2} alt="" />
                                </div>
                              </div>
                            </div>

                            <div className='d-flex justify-content-between' style={{ position: 'absolute', width: '100%' }}>
                              <Link style={{ background: '#3247ff', borderRadius: '50px', padding: '0.3rem 0.8rem' }} data-bs-target={`#carouselExampleAutoplaying${index}`} data-bs-slide="next"><img src={Left} alt="" /></Link>
                              <Link style={{ background: '#3247ff', borderRadius: '50px', padding: '0.3rem 0.8rem' }} data-bs-target={`#carouselExampleAutoplaying${index}`} data-bs-slide="prev"><img src={Right} alt="" /></Link>
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
                              <div className='d-flex justify-content-center align-items-center'>
                                {/* <img width={35} src={cardLogo2} alt="" /> */}
                                <span className='card-span' style={{ fontSize: '1.4rem' }}><i className="fa-solid fa-lock" style={{ color: "#005eff" }}></i></span>
                              </div>
                            </div>
                            <div style={{ margin: '1rem 1rem 0 0', background: '#EEF0FE', borderRadius: '10px', padding: '1rem' }}>
                              <span style={{ color: '#636363', fontWeight: '500' }}>TTM Profit</span>
                              <div className='d-flex justify-content-center align-items-center'>
                                {/* <img width={35} src={cardLogo2} alt="" /> */}
                                <span className='card-span' style={{ fontSize: '1.4rem' }}><i className="fa-solid fa-lock" style={{ color: "#005eff" }}></i></span>
                              </div>
                            </div>
                            <div style={{ margin: '1rem 1rem 0 0', background: '#EEF0FE', borderRadius: '10px', padding: '1rem' }}>
                              <span style={{ color: '#636363', fontWeight: '500' }}>Monthly Revenue</span>
                              <div className='d-flex justify-content-center align-items-center'>
                                {/* <img width={35} src={cardLogo2} alt="" /> */}
                                <span className='card-span' style={{ fontSize: '1.4rem' }}><i className="fa-solid fa-lock" style={{ color: "#005eff" }}></i></span>
                              </div>
                            </div>
                            <div style={{ margin: '1rem 1rem 0 0', background: '#EEF0FE', borderRadius: '10px', padding: '1rem' }}>
                              <span style={{ color: '#636363', fontWeight: '500' }}>Monthly Profit</span>
                              <div className='d-flex justify-content-center align-items-center'>
                                {/* <img width={35} src={cardLogo2} alt="" /> */}
                                <span className='card-span' style={{ fontSize: '1.4rem' }}><i className="fa-solid fa-lock" style={{ color: "#005eff" }}></i></span>
                              </div>
                            </div>
                          </div>

                          <div className="chart my-3">
                            {/* <img style={{ width: '100%' }} src={chart} alt="" /> */}
                            <img style={{ width: '100%' }} src={item.googleAnalytics} alt="" />
                          </div>

                          <div className="description">
                            <div className='d-flex justify-content-between' style={{ margin: '1rem 0 0rem 0' }}>
                              <h3 className='card-h3'>Metrics</h3>
                            </div>

                            <div className='d-flex flex-wrap justify-content-between'>
                              <div style={{ margin: '1rem 1rem 0 0' }}>
                                <span style={{ color: '#636363' }}>TTM Gross Revenue</span>
                                <h5><i className="fa-solid fa-lock" style={{ color: "#005eff" }}></i></h5>
                              </div>
                              <div style={{ margin: '1rem 1rem 0 0' }}>
                                <span style={{ color: '#636363' }}>TTM Net Profit</span>
                                <h5><i className="fa-solid fa-lock" style={{ color: "#005eff" }}></i></h5>
                              </div>
                              <div style={{ margin: '1rem 1rem 0 0' }}>
                                <span style={{ color: '#636363' }}>LastMonth Gross Revenue</span>
                                <h5><i className="fa-solid fa-lock" style={{ color: "#005eff" }}></i></h5>
                              </div>
                              <div style={{ margin: '1rem 1rem 0 0' }}>
                                <span style={{ color: '#636363' }}>LastMonth Net Profit</span>
                                <h5 ><i className="fa-solid fa-lock" style={{ color: "#005eff" }}></i></h5>
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
                        </div>

                        <div className='AskingPlace' style={{ width: '40%', position: "sticky" }}>
                          <div className="sideCard d-flex flex-column justify-content-between" style={{ background: '#EEF0FE', borderRadius: '10px', padding: '1rem', height: '100%', overflowY: 'scroll' }}>
                            <div>
                              <div className='d-flex justify-content-between' style={{ margin: '1rem 0 0rem 0' }}>
                                <h5 className='card-h3'>Asking Price</h5>
                              </div>
                              <div className='my-3'>
                                <h1>${item.askingPrice}</h1>
                              </div>
                              <Link to="/singup" className='my-3 d-flex align-items-center justify-content-center' style={{ border: '2px solid #3247ff', color: '#3247ff', borderRadius: "15px", padding: '1rem 2rem', textAlign: 'center', width: '100%', textDecoration: 'none' }}>
                                <img src={blueMsg} alt="" />
                                <span className='mx-2'>Message Seller</span>
                              </Link>
                              <Link className='my-3 d-flex align-items-center justify-content-center' style={{ border: '2px solid #3247ff', color: '#3247ff', borderRadius: "15px", padding: '1rem 2rem', textAlign: 'center', width: '100%', textDecoration: 'none' }}>
                                <i className="fa-solid fa-phone-volume" style={{ color: "#005eff" }}></i>
                                <span className='mx-2'>Audio Call</span>
                              </Link>
                              <Link className='my-3 d-flex align-items-center justify-content-center' style={{ border: '2px solid #3247ff', color: '#3247ff', borderRadius: "15px", padding: '1rem 2rem', textAlign: 'center', width: '100%', textDecoration: 'none' }}>
                                <img src={offer} alt="" />
                                <span className='mx-2' >Make Offer</span>
                              </Link>
                              <Link className='my-3 d-flex align-items-center justify-content-center' style={{ border: '2px solid #3247ff', color: '#3247ff', borderRadius: "15px", padding: '1rem 2rem', textAlign: 'center', width: '100%', textDecoration: 'none' }}>
                                <i className="fa-solid fa-video" style={{ color: "#005eff" }}></i>
                                <span className='mx-2' >Watch video Path</span>
                              </Link>
                              <Link className='my-3 d-flex align-items-center justify-content-center' style={{ border: '2px solid #3247ff', color: '#3247ff', borderRadius: "15px", padding: '1rem 2rem', textAlign: 'center', width: '100%', textDecoration: 'none' }}>
                                <i className="fa-solid fa-share-nodes" style={{ color: "#005eff" }}></i>
                                <span className='mx-2' >Share</span>
                              </Link>
                              <div className='my-3'>
                                <Link style={{ width: '100%' }} className='btn btn-primary' to="/singup"><img src={cart} alt="" className='mx-2' /> Buy Now</Link>
                              </div>
                            </div>

                            <div>
                              <div className='d-flex justify-content-between my-3' style={{ margin: '1rem 0 0rem 0' }}>
                                <h5 className='card-h3'>About the Seller</h5>
                              </div>
                              <div className='d-flex align-items-center'>
                                <img src={item.ownerImage} alt="" style={{ borderRadius: "50px", height: "50px", width: "50px" }} />
                                <div className='mx-2'>
                                  <h4>{item.ownerName}</h4>
                                  <span><img src={smallMap} alt="" />{item.location}</span>
                                </div>
                              </div>
                            </div>

                          </div>
                        </div>

                      </div>)
                  })}
                </>
              </section>
            </section>
          </>
          //////
        }
      </section>

      <section>
        <Footer />
      </section>
    </>
  );
};

export default Market;
