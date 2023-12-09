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

//app Context
import { useAppContext } from "./Context/appContext";
import { Link } from "react-router-dom";

const MarketplaceDash2 = () => {
  useEffect(() => {
    getCard();
  }, []);

  const [card, setCard] = useState([]);

  const { favourite, addToFavorites, removeFromFavorites } = useAppContext();

  const getCard = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      const decoded = jwtDecode(token);
      const id = decoded.id;
      try {
        const response = await axios.get(
          "http://localhost:5000/business/getbusiness",
          {
            headers: { "x-auth-token": id },
          }
        );
        console.log(response.data.business);
        setCard(response.data.business);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const favoriteChecker = (id) => {
    const boolean = favourite.some((card) => card.id === id);
    return boolean;
  };

  const [show, setShow] = useState(1);
  const [detail, setDetail] = useState(1);

  useEffect(() => {
    Promise.resolve("Promise")
      .then((res) => {
        console.log(res);
        setCard(res);
      })
      .catch((err) => console.log(err));
  }, []);



  return (
    <>
      {detail === 1 && (
        <>
          <section>
            <section className="marketDash2-back" style={{ height: '100%' }} >
              <div className='d-flex'>
                <div className="market-card my-4" >
                  {/* [...Array(4)] */}
                  {[...card].map((num, index) => {
                    const id = index + 1
                    return (
                      <div className="card1" key={index.id} style={{ margin: "1rem 1rem", padding: "1rem", width: "44%" }}>
                        <div className="sideInfo d-flex">
                          <div className="secondPart">
                            <img width={200} src={cardProfile} alt="" />
                          </div>
                          <div className="firstPart" style={{ marginLeft: "2rem" }}>
                            <h3 style={{ fontSize: "30px", fontWeight: "700" }}>
                              UI Medical Website
                            </h3>
                            <button className="btn-card btn btn-outline-primary my-2" style={{ fontSize: "9px" }}>
                              Nesxt Js
                            </button>
                            <button className="btn-card btn btn-outline-primary my-2" style={{ fontSize: "9px" }}>
                              Firebase
                            </button>
                            <button className="btn-card btn btn-outline-primary my-2" style={{ fontSize: "9px" }}>
                              Medical
                            </button>
                            <button className="btn-card btn btn-outline-primary my-2" style={{ fontSize: "9px" }}>
                              SaaS
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
                            Physical retailer in the apparel space looking for
                            prominent DTC brands to buy into and collaborate
                            with...
                          </span>
                        </div>

                        <div className="d-flex justify-content-between" style={{ margin: "2rem 0 2rem 0" }}>
                          <h3 className="card-h3">Metrics</h3>
                          <div className="d-flex">
                            <button style={{ padding: "12px 38px" }} className="btn btn-primary mx-2" onClick={(detail) => setDetail(2)}>
                              View Listing
                              <img
                                className="mx-2"
                                style={{ width: "15px" }}
                                src={arrow}
                                alt=""
                              />{" "}
                            </button>

                            <div className='d-flex justify-content-between' style={{ margin: '2rem 0 2rem 0' }}>
                              <h3 className='card-h3'>Metrics</h3>
                              <div className='d-flex align-items-center'>
                                <Link style={{ padding: '12px 38px' }} onClick={(detail) => setDetail(2)} className='btn btn-primary mx-2'>View Listing<img className='mx-2' style={{ width: '15px' }} src={arrow} alt="" /> </Link>
                                {favoriteChecker(card.id) ?
                                  (<Link onClick={() => removeFromFavorites(card.id)}> <i class="fa-solid fa-heart" style={{ color: 'blue' }}></i></Link>)
                                  :
                                  (<Link onClick={() => addToFavorites(card)}> <i class="fa-solid fa-heart" style={{ color: '#c0c0c0' }}></i></Link>)}
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
                                    E-Commerce
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
                                    Anywhere
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
                                    $150K +
                                  </span>
                                </div>
                              </div>
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
      {detail === 2 && <MarketDashDetail />}
    </>
  );
};

export default MarketplaceDash2;
