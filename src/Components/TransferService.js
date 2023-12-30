import React from "react";
import { useState } from "react";
import backgroundImg from "./Testimonials/unsplash_5U_28ojjgms_2.png";

import ENV from "../config.js";

//six section images
import quoteImg from "./Aqify project/Vector.png";
import personImg from "./Aqify project/Ellipse 8.png";
import BackSidePhoto from "./Owner/Rectangle16.png";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import arrow from "./Aqify project/Vector (1).png";

const TransferService = () => {
  const [formData, setFormData] = useState({
    startupName: "",
    ownerName: "",
    ownerEmail: "",
    acquirerName: "",
    acquirerEmail: "",
    payerType: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const response = await fetch(
        `${ENV.BACKEND_URL}/transfer/addTransfer`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({ formData }),
        }
      );
        const data = await response.json();
        console.warn(data);
        setFormData({
            startupName: "",
            ownerName: "",
            ownerEmail: "",
            acquirerName: "",
            acquirerEmail: "",
            payerType: "",
        });

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section>
        <Navbar />
      </section>

      <section className="pricing-first-section">
        <div
          className="Ownermain"
          style={{
            backgroundImage: `url(${backgroundImg})`,
            width: "100%",
            height: "80vh",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="owner-content">
            <div>
              <div className="my-5">
                <h1 className="main-h1 col-10">Transfer By Acqify</h1>
              </div>
              <div className="my-4">
                <span className="main-span col-7 d-flex">
                  Safe and fast startup acquisition service — 24/7 support.
                </span>
              </div>
              <div className="">
                <Link
                  style={{ fontSize: "1.5rem" }}
                  className="btn btn-primary"
                  to="/singup"
                >
                  Get Started Now
                  <img
                    style={{ width: "7%", marginLeft: "20px" }}
                    src={arrow}
                    alt=""
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div
          className="Tamplate-secondPart d-flex flex-column align-items-center"
          style={{
            padding: "4rem",
            height: "100%",
            background: "#EEF0FE",
            position: "relative",
          }}
        >
          <h1 className="listing-h1 mb-5">Key Features</h1>

          <div className="tamplate-logoBox d-flex" style={{ width: "100%" }}>
            <div className="mx-2" style={{ width: "100%" }}>
              <div className="card-tamplate ">
                <h3 className="my-3">Fully Transparent</h3>
                <span>
                  Microns act as a trusted middleman between buyer and seller.
                  So they don't worry about stealing money or assets.
                </span>
              </div>
            </div>
            <div className="mx-2" style={{ width: "100%" }}>
              <div className="card-tamplate ">
                <h3 className="my-3">Great Customer Service</h3>
                <span className="largeSpan">
                  We provide support during the transaction for both sides. We
                  help with an agreement, handling payment, and tracking the
                  transaction's status.
                </span>
              </div>
            </div>
            <div className="mx-2" style={{ width: "100%" }}>
              <div className="card-tamplate ">
                <h3 className="my-3">Blazingly Fast</h3>
                <span>
                  No more delays in the process because we optimize payment
                  methods for both sides so that you can receive money within
                  minutes.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="fourth-main">
        <div>
          <div className="d-flex flex-column align-items-center justify-content-center mb-5">
            <h2 className="fourth-h1">How it works </h2>
            <span className="text-center" style={{ color: "#636363" }}>
              From onboarding, we walk you through your acquisition process to
              complete transaction successfully.
            </span>
          </div>
        </div>
        <div className="info-card">
          <div className="card-four align-items-center">
            <div class="emojitextbig" style={{ fontSize: "4rem" }}>
              🤝
            </div>
            <h3 className="my-3"> 1. Agreement</h3>
            <span>All sides sign an agreement.</span>
          </div>
          <div className="card-four align-items-center">
            <div class="emojitextbig" style={{ fontSize: "4rem" }}>
              💵
            </div>
            <h3 className="my-3">2. Payment</h3>
            <span className="largeSpan">Buyer makes secure payment.</span>
          </div>
          <div className="card-four align-items-center">
            <div class="emojitextbig" style={{ fontSize: "4rem" }}>
              📦
            </div>
            <h3 className="my-3">3. Assets transfer</h3>
            <span className="largeSpan">Seller delivers assets to buyer.</span>
          </div>
          <div className="card-four align-items-center">
            <div class="emojitextbig" style={{ fontSize: "4rem" }}>
              👍
            </div>
            <h3 className="my-3">4. Approval</h3>
            <span className="largeSpan">Buyer approves transfer.</span>
          </div>
          <div className="card-four align-items-center">
            <div class="emojitextbig" style={{ fontSize: "4rem" }}>
              💸
            </div>
            <h3 className="my-3">5. Funds release</h3>
            <span className="largeSpan">Seller is paid.</span>
          </div>
          <div className="card-four align-items-center">
            <div class="emojitextbig" style={{ fontSize: "4rem" }}>
              🎉
            </div>
            <h3 className="my-3">6. Success</h3>
            <span className="largeSpan">Enjoy your new business!</span>
          </div>
        </div>
      </section>

      <section className="six-main">
        <div className="six-content">
          <div
            style={{ left: "50px", position: "relative" }}
            className="d-flex justify-content-between align-items-center"
          >
            <div>
              <h1 className="six-h1">Stories From Founders And Buyers</h1>
              <div className="my-5">
                <Link
                  className="six-arrow"
                  data-bs-target="#carouselExampleAutoplaying"
                  data-bs-slide="next"
                >
                  <i class="fa-solid fa-arrow-left"></i>
                </Link>
                <Link
                  className="six-arrow"
                  data-bs-target="#carouselExampleAutoplaying"
                  data-bs-slide="prev"
                >
                  <i class="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </div>
            <div>
              <img className="quoteImg" src={quoteImg} alt="" />
            </div>
          </div>

          <div
            id="carouselExampleAutoplaying"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            {" "}
            {/*data-bs-touch="false" */}
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div className="six-card-main d-flex justify-content-evenly my-4">
                  <div className="six-card">
                    <span className="six-card-content">
                      “Acqify helped us get acquired catalysing our growth
                      exponentially. Quality advice & ready documentation helped
                      us smoothly close our deal in record time. Strongly
                      recommend this platform to other founders!"
                    </span>
                    <div className="d-flex flex-row align-items-center">
                      <img style={{ width: "15%" }} src={personImg} alt="" />
                      <div className="mx-3">
                        <span style={{ fontSize: "1.5rem", color: "#636363" }}>
                          Owner
                        </span>
                        <br />
                        <span
                          className="bitsCool"
                          style={{
                            fontSize: "2rem",
                            color: "#000",
                            fontWeight: "700",
                          }}
                        >
                          BitsCool.com
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="six-card">
                    <span className="six-card-content">
                      “Acqify helped us get acquired catalysing our growth
                      exponentially. Quality advice & ready documentation helped
                      us smoothly close our deal in record time. Strongly
                      recommend this platform to other founders!"
                    </span>
                    <div className="d-flex flex-row align-items-center">
                      <img style={{ width: "15%" }} src={personImg} alt="" />
                      <div className="mx-3">
                        <span style={{ fontSize: "1.5rem", color: "#636363" }}>
                          Owner
                        </span>
                        <br />
                        <span
                          className="bitsCool"
                          style={{
                            fontSize: "2rem",
                            color: "#000",
                            fontWeight: "700",
                          }}
                        >
                          BitsCool.com
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="carousel-item">
                <div className="six-card-main d-flex justify-content-evenly my-4">
                  <div className="six-card">
                    <span className="six-card-content">
                      “Acqify helped us get acquired catalysing our growth
                      exponentially. Quality advice & ready documentation helped
                      us smoothly close our deal in record time. Strongly
                      recommend this platform to other founders!"
                    </span>
                    <div className="d-flex flex-row align-items-center">
                      <img style={{ width: "15%" }} src={personImg} alt="" />
                      <div className="mx-3">
                        <span style={{ fontSize: "1.5rem", color: "#636363" }}>
                          Owner
                        </span>
                        <br />
                        <span
                          className="bitsCool"
                          style={{
                            fontSize: "2rem",
                            color: "#000",
                            fontWeight: "700",
                          }}
                        >
                          BitsCool.com
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="six-card">
                    <span className="six-card-content">
                      “Acqify helped us get acquired catalysing our growth
                      exponentially. Quality advice & ready documentation helped
                      us smoothly close our deal in record time. Strongly
                      recommend this platform to other founders!"
                    </span>
                    <div className="d-flex flex-row align-items-center">
                      <img style={{ width: "15%" }} src={personImg} alt="" />
                      <div className="mx-3">
                        <span style={{ fontSize: "1.5rem", color: "#636363" }}>
                          Owner
                        </span>
                        <br />
                        <span
                          className="bitsCool"
                          style={{
                            fontSize: "2rem",
                            color: "#000",
                            fontWeight: "700",
                          }}
                        >
                          BitsCool.com
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="FAQ-back">
        <div>
          <div className="d-flex flex-column align-items-start justify-content-start mb-5">
            <h2 className="listing-h1" style={{ marginTop: "10vh" }}>
              FAQ →{" "}
            </h2>
          </div>
          <div class="accordion accordion-flush" id="accordionFlushExample">
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  What's Transfer by Acqfiy?
                </button>
                <img src="" alt="" />
              </h2>
              <div
                id="flush-collapseOne"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  <span>
                    It's a service offered by Microns, a marketplace
                    specializing in buying and selling small online startups.
                    Transfer by Microns helps users securely close their deals
                    by providing a service to ensure a smooth ownership
                    transition.
                  </span>{" "}
                  <br />
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
                  Who can use this service?
                </button>
                <img src="" alt="" />
              </h2>
              <div
                id="flush-collapseTwo"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  <span className="my-3">
                    Only Microns buyers or sellers can use the transfer service.
                    The service is designed to help both parties in the
                    transaction to complete the deal securely and fast.
                  </span>
                  <br />
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                >
                  Has Acqify done any due diligence on the startup metrics?
                </button>
                <img src="" alt="" />
              </h2>
              <div
                id="flush-collapseThree"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  <span className="my-3">
                    We conduct basic due diligence on the startups listed on our
                    marketplace. They review basic metrics like revenue,
                    traffic, and other relevant data points to ensure that the
                    startups listed on our platform meet our quality standards.
                    However, you must always arrange proper due diligence before
                    buying any assets.{" "}
                  </span>
                  <br />
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseFour"
                  aria-expanded="false"
                  aria-controls="flush-collapseFour"
                >
                  What does Acqify handle after the agreement is signed?
                </button>
                <img src="" alt="" />
              </h2>
              <div
                id="flush-collapseFour"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  <span className="my-3">
                    After the agreement is signed, we handle payments and the
                    transfer of assets. We also provide 24/7 email support to
                    help the buyer and seller successfully close the deal.
                  </span>
                  <br />
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseFive"
                  aria-expanded="false"
                  aria-controls="flush-collapseFive"
                >
                  Who drafted the agreement, a contracts lawyer, or is it a
                  generic one from somewhere online?
                </button>
                <img src="" alt="" />
              </h2>
              <div
                id="flush-collapseFive"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  <span className="my-3">
                    We work with contract lawyers and financiers to draft
                    agreements tailored to each transaction's specific needs.
                    These agreements are not generic templates sourced from the
                    internet.
                  </span>
                  <br />
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseSix"
                  aria-expanded="false"
                  aria-controls="flush-collapseSix"
                >
                  How to proceed with asset transfer?
                </button>
                <img src="" alt="" />
              </h2>
              <div
                id="flush-collapseSix"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  <span className="my-3">
                    Once we receive the payment from the buyer, we notify the
                    seller to send all assets upon agreement to the buyer. The
                    buyer needs to review everything and do their due diligence.
                  </span>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div
          className="d-flex flex-column align-items-center pb-4 pt-5"
          style={{ background: "#EEF0FE" }}
        >
          <h2 className="fourth-h1">Start your transfer today </h2>
          <span style={{ color: "rgb(99, 99, 99)" }}>
            Acqify transfer service guarantees safe and comfy startup assets
            exchange — 24/7 support.
          </span>
        </div>
        <div className="SignUp-back" style={{ background: "#EEF0FE" }}>
          <div className="SignUp-second mx-2">
            <div
              className="transferCard signUp-card my-5"
              style={{ width: "100%" }}
            >
              <div>
                <div class=" mb-3 SignIn-input">
                  <input
                    type="text"
                    class="form-control"
                    id="floatingInput"
                    value={formData.startupName}
                    onChange={handleChange}
                    placeholder="Startup Name"
                    name="startupName"
                  />
                </div>
              </div>
              <div>
                <div class=" mb-3 SignIn-input">
                  <input
                    type="text"
                    class="form-control"
                    id="floatingInput"
                    placeholder="Owner Full Name"
                    value={formData.ownerName}
                    onChange={handleChange}
                    name="ownerName"
                  />
                </div>
              </div>

              <div>
                <div class=" mb-3 SignIn-input">
                  <input
                    type="email"
                    class="form-control"
                    id="floatingInput"
                    value={formData.ownerEmail}
                    onChange={handleChange}
                    placeholder="Owner Email Address"
                    name="ownerEmail"
                  />
                </div>
              </div>

              <div>
                <div class=" mb-3 SignIn-input">
                  <input
                    type="text"
                    class="form-control"
                    value={formData.acquirerName}
                    onChange={handleChange}
                    id="floatingInput"
                    placeholder="Acquirer Full Name"
                    name="acquirerName"
                  />
                </div>
              </div>

              <div>
                <div class=" mb-3 SignIn-input">
                  <input
                    type="email"
                    class="form-control"
                    id="floatingInput"
                    value={formData.acquirerEmail}
                    onChange={handleChange}
                    placeholder="Acquirer Email Address"
                    name="acquirerEmail"
                  />
                </div>
              </div>

              <div className="d-flex flex-column align-items-center my-3">
                <span style={{ color: "#fff" }}>
                  Who will pay the transfer fee?*
                </span>
                <div className="d-flex my-2">
                  <div>
                    <input
                      type="radio"
                      class="btn-check  rounded-pill"
                      name="payerType"
                      id="option11"
                      autocomplete="off"
                      value="owner"
                      onChange={handleChange}
                      checked={formData.payerType === "owner"}
                    />
                    <label
                      class="btn1"
                      style={{
                        padding: "0.5rem",
                        margin: "0.3rem 0.7rem 0 0",
                        background: "#EEF0FE",
                      }}
                      for="option11"
                    >
                      <i class="fa-solid fa-circle-check mx-2"></i>
                      Owner ( Seller )
                    </label>
                  </div>

                  <div>
                    <input
                      type="radio"
                      class="btn-check  rounded-pill"
                      name="payerType"
                      onChange={handleChange}
                      checked={formData.payerType === "acquirer"}
                      id="option12"
                      autocomplete="off"
                      value="acquirer"
                    />
                    <label
                      class="btn1"
                      style={{
                        padding: "0.5rem",
                        margin: "0.3rem 0.7rem 0 0",
                        background: "#EEF0FE",
                      }}
                      for="option12"
                    >
                      <i class="fa-solid fa-circle-check mx-2"></i>
                      Acquirer (buyer)
                    </label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      class="btn-check  rounded-pill"
                      name="payerType"
                      value="50/50"
                      onChange={handleChange}
                      checked={formData.payerType === "50/50"}
                      id="option13"
                      autocomplete="off"
                    />
                    <label
                      class="btn1"
                      style={{
                        padding: "0.5rem",
                        margin: "0.3rem 0.7rem 0 0",
                        background: "#EEF0FE",
                      }}
                      for="option13"
                    >
                      <i class="fa-solid fa-circle-check mx-2"></i>
                      50/50
                    </label>
                  </div>
                </div>
              </div>

              <div className="my-2">
                <button
                  style={{ width: "100%" }}
                  className="btn btn-primary"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <Footer />
      </section>
    </>
  );
};

export default TransferService;
