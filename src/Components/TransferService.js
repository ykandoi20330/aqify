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

  const handleSubmit = async (e) => {
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

      <section className='pricing-first-section'>
        <div className="Ownermain" style={{ background: '#161616' }}>
          {/* style={{ backgroundImage: `url(${backgroundImg})`, width: '100%', height: '80vh', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} */}
          <div className="owner-content">
            <div>
              <div className='my-5'>
                <h1 className='main-h1 col-10'>Transfer By Acqify
                </h1>
              </div>
              <div className='my-4'>
                <span className='main-span col-7 d-flex'>
                  Acqify redefines swift and secure acquisitions for you so that you stick with us for longer!
                </span>
              </div>
              <div className=''>
                <Link style={{ fontSize: '1.5rem' }} className='btn btn-primary' to="/singup">Tell me more!<img style={{ width: '7%', marginLeft: '20px' }} src={arrow} alt="" /></Link>
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
                <h3 className="my-3">Honest and Credible Interactions</h3>
                <span>
                  We stringently supervise the acquisitions and pave a path for trusted and
                  infallible interaction on both ends which results in successful deals.
                </span>
              </div>
            </div>
            <div className="mx-2" style={{ width: "100%" }}>
              <div className="card-tamplate ">
                <h3 className="my-3">Tailored Customer Support from Backend</h3>
                <span className="largeSpan">
                  Our helpline never meets any glitches or delays as we constantly address your concerns and
                  provide satisfactory answers in time.
                </span>
              </div>
            </div>
            <div className="mx-2" style={{ width: "100%" }}>
              <div className="card-tamplate ">
                <h3 className="my-3">Rapid and Guaranteed Transactions</h3>
                <span>
                  We are relying on fully secured platforms for seamless transactions
                  for the ease of our buyers and sellers.
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
              We are here to hold your hand at every step of an acquisiton and provide our
              unwavering support from start to the end.
            </span>
          </div>
        </div>
        <div className="info-card">
          <div className="card-four align-items-center">
            <div className="emojitextbig" style={{ fontSize: "4rem" }}>
              🤝
            </div>
            <h3 className="my-3"> 1. Provision of a Licensed Agreement</h3>
            <span>Both the parties show faith in a set of terms and conditions by signing an agreement.</span>
          </div>
          <div className="card-four align-items-center">
            <div className="emojitextbig" style={{ fontSize: "4rem" }}>
              💵
            </div>
            <h3 className="my-3">2. Safe and Encrypted Transactions</h3>
            <span className="largeSpan"> Once a deal is done, the buyer transfer the asset’s amount to the seller.</span>
          </div>
          <div className="card-four align-items-center">
            <div className="emojitextbig" style={{ fontSize: "4rem" }}>
              📦
            </div>
            <h3 className="my-3">3. Declaring the Asset</h3>
            <span className="largeSpan">The sellers transfer the legal rights to the buyers during the asset declaration.</span>
          </div>
          <div className="card-four align-items-center">
            <div className="emojitextbig" style={{ fontSize: "4rem" }}>
              👍
            </div>
            <h3 className="my-3">4. Official Asset Approval</h3>
            <span className="largeSpan"> The buyers cross-check the nitty grittys of the asset and submit their approval.</span>
          </div>
          <div className="card-four align-items-center">
            <div className="emojitextbig" style={{ fontSize: "4rem" }}>
              💸
            </div>
            <h3 className="my-3">5. Deal Accomplishment</h3>
            <span className="largeSpan">At this point, the deal has been successfully closed for both the ends.</span>
          </div>
          <div className="card-four align-items-center">
            <div className="emojitextbig" style={{ fontSize: "4rem" }}>
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
                  <i className="fa-solid fa-arrow-left"></i>
                </Link>
                <Link
                  className="six-arrow"
                  data-bs-target="#carouselExampleAutoplaying"
                  data-bs-slide="prev"
                >
                  <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </div>
            <div>
              <img className="quoteImg" src={quoteImg} alt="" />
            </div>
          </div>

          <div
            id="carouselExampleAutoplaying"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            {" "}
            {/*data-bs-touch="false" */}
            <div className="carousel-inner">
              <div className="carousel-item active">
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

              <div className="carousel-item">
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
          <div className="accordion accordion-flush" id="accordionFlushExample">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
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
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <span>
                    Transfer by Acqify helps users securely close their deals by providing a
                    service to ensure a smooth ownership transition.
                  </span>{" "}
                  <br />
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
                  Who is eligible to use Transfer by Acqify?
                </button>
                <img src="" alt="" />
              </h2>
              <div
                id="flush-collapseTwo"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <span className="my-3">
                    Only Acqify buyers or sellers can use the transfer service. The service is designed to help both parties in
                    the transaction to complete the deal securely and fast.
                  </span>
                  <br />
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                >
                  How does Acqify performs Due Diligence on the startups?
                </button>
                <img src="" alt="" />
              </h2>
              <div
                id="flush-collapseThree"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <span className="my-3">
                    We conduct basic due diligence on the startups listed on our marketplace.
                    The acquirers review basic metrics like revenue, traffic, and other relevant data points to ensure that
                    the startups listed on our platform meet our quality standards.{" "}
                  </span>
                  <br />
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseFour"
                  aria-expanded="false"
                  aria-controls="flush-collapseFour"
                >
                  What is the next obligation of Acqify once the parties have signed the agreement?
                </button>
                <img src="" alt="" />
              </h2>
              <div
                id="flush-collapseFour"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <span className="my-3">
                    After the agreement is signed, we handle payments and the transfer of assets.
                    We also provide 24/7 email support to help the buyer and
                    seller successfully close the deal.
                  </span>
                  <br />
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseFive"
                  aria-expanded="false"
                  aria-controls="flush-collapseFive"
                >
                  What are the legal obligations of Acqify to
                  ensure successful acquisitions?
                </button>
                <img src="" alt="" />
              </h2>
              <div
                id="flush-collapseFive"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <span className="my-3">
                    We work with contract lawyers and financiers to draft agreements tailored to each transaction's specific needs.
                    These agreements are not generic templates sourced from the internet.
                  </span>
                  <br />
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseSix"
                  aria-expanded="false"
                  aria-controls="flush-collapseSix"
                >
                  What happens with the asset transfer?
                </button>
                <img src="" alt="" />
              </h2>
              <div
                id="flush-collapseSix"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <span className="my-3">
                    Once we receive the payment from the buyer,
                    we notify the seller to send all assets upon agreement to the buyer.
                    The buyer needs to review everything and do their due diligence.
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
          <h2 className="fourth-h1">Your First Step Towards Fast & Secure Transfer</h2>
          <span style={{ color: "rgb(99, 99, 99)" }}>
            It’s time to leave scammy and slow payment methods for acquisitions because
            we have brought you the ultimate solution.
          </span>
        </div>
        <div className="SignUp-back" style={{ background: "#EEF0FE" }}>
          <div className="SignUp-second mx-2">
            <div
              className="transferCard signUp-card my-5"
              style={{ width: "100%" }}
            >
              <div>
                <div className=" mb-3 SignIn-input">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput"
                    value={formData.startupName}
                    onChange={handleChange}
                    placeholder="Startup Name"
                    name="startupName"
                  />
                </div>
              </div>
              <div>
                <div className=" mb-3 SignIn-input">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput"
                    placeholder="Owner Full Name"
                    value={formData.ownerName}
                    onChange={handleChange}
                    name="ownerName"
                  />
                </div>
              </div>

              <div>
                <div className=" mb-3 SignIn-input">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingInput"
                    value={formData.ownerEmail}
                    onChange={handleChange}
                    placeholder="Owner Email Address"
                    name="ownerEmail"
                  />
                </div>
              </div>

              <div>
                <div className=" mb-3 SignIn-input">
                  <input
                    type="text"
                    className="form-control"
                    value={formData.acquirerName}
                    onChange={handleChange}
                    id="floatingInput"
                    placeholder="Acquirer Full Name"
                    name="acquirerName"
                  />
                </div>
              </div>

              <div>
                <div className=" mb-3 SignIn-input">
                  <input
                    type="email"
                    className="form-control"
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
                      className="btn-check  rounded-pill"
                      name="payerType"
                      id="option11"
                      autocomplete="off"
                      value="owner"
                      onChange={handleChange}
                      checked={formData.payerType === "owner"}
                    />
                    <label
                      className="btn1"
                      style={{
                        padding: "0.5rem",
                        margin: "0.3rem 0.7rem 0 0",
                        background: "#EEF0FE",
                      }}
                      for="option11"
                    >
                      <i className="fa-solid fa-circle-check mx-2"></i>
                      Owner ( Seller )
                    </label>
                  </div>

                  <div>
                    <input
                      type="radio"
                      className="btn-check  rounded-pill"
                      name="payerType"
                      onChange={handleChange}
                      checked={formData.payerType === "acquirer"}
                      id="option12"
                      autocomplete="off"
                      value="acquirer"
                    />
                    <label
                      className="btn1"
                      style={{
                        padding: "0.5rem",
                        margin: "0.3rem 0.7rem 0 0",
                        background: "#EEF0FE",
                      }}
                      for="option12"
                    >
                      <i className="fa-solid fa-circle-check mx-2"></i>
                      Acquirer (buyer)
                    </label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      className="btn-check  rounded-pill"
                      name="payerType"
                      value="50/50"
                      onChange={handleChange}
                      checked={formData.payerType === "50/50"}
                      id="option13"
                      autocomplete="off"
                    />
                    <label
                      className="btn1"
                      style={{
                        padding: "0.5rem",
                        margin: "0.3rem 0.7rem 0 0",
                        background: "#EEF0FE",
                      }}
                      for="option13"
                    >
                      <i className="fa-solid fa-circle-check mx-2"></i>
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
