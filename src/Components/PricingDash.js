import React, { useState } from "react";
// import { Link } from 'react-router-dom'
import trueImg from "./Pricing/Frame 147.png";
import arrow from "./Aqify project/Vector (1).png";
import ENV from "../config.js";

const PricingDash = () => {
  const [show, setShow] = useState(1);
  const handlePay = async () => {
    try {
      const res = await fetch(`${ENV.BACKEND_URL}/users/payment`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "cors",
        body: JSON.stringify({
          amount: 100,
          currency: "usd",
          payment_method_types: ["card"],
        }),
      });
      const data = await res.json();
      window.location = data.url;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section className="dashPricing">
        <div className="sideContent">
          <div>
            <h1 className="my-3" style={{ fontWeight: "700" }}>
              Pricing
            </h1>
            <span style={{ color: "#636363" }}>
              Free for owners and affordable for acquirers.
            </span>
            <div className="my-3">
              <div
                className="btn-group"
                role="group"
                aria-label="Basic outlined example"
                style={{ background: "transparent" }}
              >
                <button
                  style={{ padding: "1rem 4rem" }}
                  type="button"
                  className="btn btn-outline-primary"
                  onClick={(show) => setShow(1)}
                >
                  Owners
                </button>
                <button
                  style={{ padding: "1rem 4rem" }}
                  type="button"
                  className="btn btn-outline-primary"
                  onClick={(show) => setShow(2)}
                >
                  Acquirers
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pricing-back" style={{ height: "" }}>
        {show === 1 && (
          <>
            <div
              className="pricing-card pricing-free"
              style={{ height: "fit-content", position: "relative" , width:'50%'}}
            >
              <span className="span1">Basic</span>
              <h1>Free</h1>
              <span
                className="col-10"
                style={{
                  color: "#636363",
                  fontSize: "20px",
                  fontWeight: "500",
                }}
              >
                Free for owners and affordable for accquirers.
              </span>
              <div className="my-4">
                <img
                  style={{ marginRight: "1rem" }}
                  width={40}
                  src={trueImg}
                  alt=""
                />
                <span style={{ color: "#636363" }}>
                  View verified buyers on the marketplace
                </span>
              </div>
            </div>

            <div
              className="pricing-card pricingCard2"
              style={{ height: "fit-content", position: "relative", width: "60%" }}
            >
              <span className="span1">Prime</span>
              <h1>Free</h1>
              <span
                style={{
                  color: "#636363",
                  fontSize: "20px",
                  fontWeight: "500",
                }}
              >
                No hidden fees, zero middlemen.
              </span>
              <div className="my-3">
                <div className="my-2">
                  <img
                    style={{ marginRight: "1rem" }}
                    width={40}
                    src={trueImg}
                    alt=""
                  />
                  <span style={{ color: "#636363" }}>
                    View verified buyers on the marketplace
                  </span>
                </div>
                <div className="my-2">
                  <img
                    style={{ marginRight: "1rem" }}
                    width={40}
                    src={trueImg}
                    alt=""
                  />
                  <span style={{ color: "#636363" }}>
                    List your business anonymously for free
                  </span>
                </div>
                <div className="my-2">
                  <img
                    style={{ marginRight: "1rem" }}
                    width={40}
                    src={trueImg}
                    alt=""
                  />
                  <span style={{ color: "#636363" }}>
                    Broadcast safely to 1,000s of acquirers
                  </span>
                </div>
                <div className="my-2">
                  <img
                    style={{ marginRight: "1rem" }}
                    width={40}
                    src={trueImg}
                    alt=""
                  />
                  <span style={{ color: "#636363" }}>
                    Receive offers from verified acquirers
                  </span>
                </div>
                <div className="my-2">
                  <img
                    style={{ marginRight: "1rem" }}
                    width={40}
                    src={trueImg}
                    alt=""
                  />
                  <span style={{ color: "#636363" }}>
                    Pay zero commission fees
                  </span>
                </div>
              </div>
              <div className="mt-2">
                <button
                  style={{ fontSize: "1.5rem" }}
                  className="pricing-btn btn btn-primary"
                >
                  List your business
                  <img
                    style={{ width: "7%", margin: "0 0 0 3rem" }}
                    src={arrow}
                    alt=""
                  />
                </button>
              </div>
            </div>
          </>
        )}

        {show === 2 && (
          <>
            <div className="pricing-card pricing-free" style={{ position: "relative", width:'50%' }}>
              <span className="span1">Basic</span>
              <h1>Free</h1>
              <span
                className="col-10"
                style={{
                  color: "#636363",
                  fontSize: "20px",
                  fontWeight: "500",
                }}
              >
                Free for owners and affordable for accquirers.
              </span>
              <div className="my-4">
                <img
                  style={{ marginRight: "1rem" }}
                  width={40}
                  src={trueImg}
                  alt=""
                />
                <span style={{ color: "#636363" }}>
                  View verified buyers on the marketplace
                </span>
              </div>
            </div>

            <div
              className="pricing-card pricingCard2"
              style={{ height: "fit-content", position: "relative", width: "60%" }}
            >
              <span className="span1">Premium</span>
              <h1>
                $99<span style={{ fontSize: "20px" }}>/year</span>
              </h1>
              <span
                style={{
                  color: "#636363",
                  fontSize: "20px",
                  fontWeight: "500",
                }}
              >
                Go premium, never miss a deal.
              </span>
              <div className="my-3">
                <div className="my-3">
                  <img
                    style={{ marginRight: "1rem" }}
                    width={40}
                    src={trueImg}
                    alt=""
                  />
                  <span style={{ color: "#636363" }}>2% Success Fee</span>
                </div>
                <div className="my-3">
                  <img
                    style={{ marginRight: "1rem" }}
                    width={40}
                    src={trueImg}
                    alt=""
                  />
                  <span style={{ color: "#636363" }}>
                    View all $100k+ revenue listings
                  </span>
                </div>
                <div className="my-3">
                  <img
                    style={{ marginRight: "1rem" }}
                    width={40}
                    src={trueImg}
                    alt=""
                  />
                  <span style={{ color: "#636363" }}>
                    Message sellers directly
                  </span>
                </div>
                <div className="my-3">
                  <img
                    style={{ marginRight: "1rem" }}
                    width={40}
                    src={trueImg}
                    alt=""
                  />
                  <span style={{ color: "#636363" }}>
                    Verified acquirer profile
                  </span>
                </div>
                <div className="my-3">
                  <img
                    style={{ marginRight: "1rem" }}
                    width={40}
                    src={trueImg}
                    alt=""
                  />
                  <span style={{ color: "#636363" }}>
                    Private acquirer Discord invite
                  </span>
                </div>
              </div>
              <div className="mt-2">
                <button
                  style={{ fontSize: "1.5rem" }}
                  className="pricing-btn2 btn btn-primary"
                  onClick={handlePay}
                >
                  Select Plan{" "}
                  <img
                    style={{ width: "7%", margin: "0 0 0 3rem" }}
                    src={arrow}
                    alt=""
                  />
                </button>
              </div>
            </div>

            {/* <div className="pricing-card" style={{ height: '110%', position: 'relative', width: '35%' }}>
                        <span className='span1'>Pro</span>
                        <h1>$1,000<span style={{ fontSize: '20px', }}>/year</span></h1>
                        <span style={{ color: '#636363', fontSize: '20px', fontWeight: '500' }}>Go pro, close deals for free</span>
                        <div className='my-4'>
                            <div className='my-3'>
                                <img style={{ marginRight: '1rem' }} width={40} src={trueImg} alt="" />
                                <span style={{ color: '#636363' }}>No Success Fee</span>
                            </div>
                            <div className='my-3'>
                                <img style={{ marginRight: '1rem' }} width={40} src={trueImg} alt="" />
                                <span style={{ color: '#636363' }}>View all $100k+ revenue listings</span>
                            </div>
                            <div className='my-3'>
                                <img style={{ marginRight: '1rem' }} width={40} src={trueImg} alt="" />
                                <span style={{ color: '#636363' }}>Message sellers directly</span>
                            </div>
                            <div className='my-3'>
                                <img style={{ marginRight: '1rem' }} width={40} src={trueImg} alt="" />
                                <span style={{ color: '#636363' }}>Verified acquirer profile</span>
                            </div>
                            <div className='my-3'>
                                <img style={{ marginRight: '1rem' }} width={40} src={trueImg} alt="" />
                                <span style={{ color: '#636363' }}>Private acquirer Discord invite</span>
                            </div>
                        </div>
                        <div className='my-4'>
                            <button style={{ fontSize: '1.5rem' }} className='btn btn-primary'>Select Plan<img style={{ width: '7%', margin: '0 0 0 3rem' }} src={arrow} alt="" /></button>
                        </div>
                    </div> */}
          </>
        )}
      </section>
    </>
  );
};

export default PricingDash;
