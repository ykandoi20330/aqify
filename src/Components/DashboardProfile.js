import React, { useState, useEffect } from "react";
import logo from "./ProfileDashbaord/vector.svg";
// import logo from "./Aqify project/FrameWhiteLogo.svg"
import folder from "./ProfileDashbaord/folder.svg";
import address from "./ProfileDashbaord/addressbook.svg";
import list from "./ProfileDashbaord/listnumbers.svg";
import bell from "./ProfileDashbaord/bell.svg";
import setting from "./ProfileDashbaord/gear.svg";
import tag from "./ProfileDashbaord/tag.svg";
import analytic from "./ProfileDashbaord/VectorAnalytics.svg";
import heart from "./ProfileDashbaord/VectorHeart.svg";
import proof from "./ProfileDashbaord/VectorProof.svg";
import { jwtDecode } from "jwt-decode";
import axios from "axios";

//side content
import profilePhoto from "./ProfileDashbaord/group-11.svg";

//card content
import verify from "./ProfileDashbaord/vector1.svg";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import pic from '../images/profile-images/group-11.svg'

//card content
import ContactDashboard from "./ContactDashboard";
import MessageDash from "./MessageDash";
import message from "./ProfileDashbaord/chatteardropdots.svg";
import PaymentDash from "./PaymentDash";
import ChangePassword from "./ChangePassword";
import Dashboard from "./Dashboard";
import PricingDash from "./PricingDash";
import MarketplaceDash from "./MarketplaceDash";
import MarketplaceDash2 from "./MarketplaceDash2";
import MarketDashDetail from "./MarketDashDetail";
import ProjectBuying from "./ProjectBuying";
import MyProject from "./MyProject";
import MyAnalytics from "./MyAnylatics";

import logo1 from "./SignIn/vector.svg";
import DashboardValuation from "./DashboardValuation";
import ProofOfFund from "./ProofOfFund";
import NotifactionDash from "./NotifactionDash";
import TopMessage from "./TopMessage";
import Favourite from "./Favourite";

const DashboardProfile = () => {
  const [visible, setVisible] = useState(true);
  const [own, setOwn] = useState(true);
  const [Show, setShow] = useState(6);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    about: "",
    role: "",
  });
  useEffect(() => {
    const getUser = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        const decoded = jwtDecode(token);
        const id = decoded.id;
        try {
          const response = await axios.get(
            "http://localhost:5000/users/getUser",
            {
              headers: { "x-auth-token": id },
            }
          );
          setFormData({
            firstName: response.data.user.firstName,
            lastName: response.data.user.lastName,
            userName: response.data.user.userName,
            about: response.data.user.about,
            role: response.data.user.role,
          });
        } catch (error) {
          console.error(error);
        }
      }
    };
    getUser();
  }, []);

  // const [profileImage,setprofileImage]=useState(pic);

  // import logo1 from "./SignIn/vector.svg"
  // const DashboardProfile = () => {
  const toastOptions = {
    position: "top-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
    color: "blue",
  };
  // }

  const validation = () => {
    if (!formData.firstName) {
      toast.error("First name is required.", toastOptions);
      return false;
    }

    if (!formData.lastName) {
      toast.error("Last name is required.", toastOptions);
      return false;
    }

    if (!formData.userName) {
      toast.error("Username is required.", toastOptions);
      return false;
    }

    if (!formData.about) {
      toast.error("Description is required.", toastOptions);
      return false;
    }

    if (!formData.role) {
      toast.error("Role is required.", toastOptions);
      return false;
    }

    return true;
  };

  const collectData = async (e) => {
    e.preventDefault();
    if (validation()) {
      try {
        let token = null;
        const cookies = document.cookie.split(";");
        for (let cookie of cookies) {
          const [cookieName, cookieValue] = cookie.trim().split("=");
          if (cookieName === "token") {
            token = cookieValue;
            break;
          }
        }
  
        if (!token) {
          const user = JSON.parse(localStorage.getItem("user"));
          token = user.token;
        }
  
        if (token) {
          const decoded = jwtDecode(token);
          const userId = decoded.id;
        const response = await fetch(
          "http://localhost:5000/users/updateProfile",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify({ formData, userId }),
          }
        );
        console.warn(response);
        const data = await response.json();
        if (response.status === 200) {
          toast.success(data.message, toastOptions);
          window.location.reload();
        } else {
          toast.error(data.message, toastOptions);
        }}
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

  const ChangeBoth = () => {
    if (visible === true) {
      setVisible(false);
    } else {
      setVisible(true);
    }
    setFormData({
      ...formData,
      role: "owner and acquirer",
    });
  };

  const changeRoleowner = () => {
    setVisible(true);
    setFormData({
      ...formData,
      role: "owner",
    });
  };

  const changeRoleacquire = () => {
    setVisible(false);
    setFormData({
      ...formData,
      role: "acquirer",
    });
  };

  return (
    <>
      <section className="profile-section">
        {/** side Navbar */}
        <nav
          className="navbar navbar-expand-lg dashboard"
          style={{ top: "0px" }}
        >
          <div class="container-fluid" style={{ padding: "0rem" }}>
            <button
              style={{ margin: "0 1.5rem" }}
              class="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasDarkNavbar"
              aria-controls="offcanvasDarkNavbar"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div
              style={{ left: "0", transform: "translateX(-100%)" }}
              class="offcanvas offcanvas-end text-bg-dark"
              tabindex="-1"
              id="offcanvasDarkNavbar"
              aria-labelledby="offcanvasDarkNavbarLabel"
            >
              <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">
                  <Link className="navbar-brand" to="/">
                    <img
                      src={logo1}
                      alt="Logo"
                      style={{ left: "0px" }}
                      className="Logo"
                    />
                  </Link>
                  <br />
                </h5>
                <button
                  type="button"
                  class="btn-close btn-close-white"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div class="offcanvas-body" style={{ left: "0px" }}>
                {/** */}
                <div class="Navdashboard d-flex flex-column flex-shrink-0 p-3 text-bg-dark">
                  <Link
                    to="/"
                    class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
                  >
                    <img src={logo} alt="" />
                    <br />
                    <br />
                    <br />
                  </Link>
                  <hr />
                  <Link
                    to="#"
                    className="text-white"
                    style={{ textDecoration: "none" }}
                    onClick={(Show) => setShow(1)}
                  >
                    <h2> Dashboard</h2>
                  </Link>
                  <ul class="nav flex-column mb-auto">
                    <li class="nav-item">
                      {visible === true && (
                        <Link
                          to="#"
                          class="nav-link1 text-white"
                          aria-current="page"
                          onClick={(Show) => setShow(8)}
                        >
                          <img
                            style={{ marginRight: "1rem" }}
                            src={list}
                            alt=""
                          />
                          Lists
                        </Link>
                      )}
                    </li>
                    <li class="nav-item">
                      <Link
                        to="#"
                        class="nav-link1 text-white"
                        aria-current="page"
                        onClick={(Show) => setShow(16)}
                      >
                        <img
                          style={{ marginRight: "1rem" }}
                          src={heart}
                          alt=""
                        />
                        Favourite Lists
                      </Link>
                    </li>
                    <li class="nav-item dropdown">
                      <Link
                        class="nav-link1 text-white dropdown-toggle"
                        to="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <img
                          style={{ marginRight: "1rem" }}
                          src={folder}
                          alt=""
                        />
                        My Projects
                      </Link>
                      <ul class="dropdown-menu dropdown-menu-dark">
                        {visible === false && (
                          <li>
                            <Link
                              class="dropdown-item"
                              onClick={(Show) => setShow(12)}
                            >
                              Project Lists
                            </Link>
                          </li>
                        )}
                        {visible === true && (
                          <li>
                            <Link
                              class="dropdown-item"
                              onClick={(Show) => setShow(11)}
                            >
                              Projects Buying
                            </Link>
                          </li>
                        )}
                      </ul>
                    </li>
                    <li>
                      <Link
                        onClick={(Show) => setShow(13)}
                        class="nav-link1 text-white"
                      >
                        <img
                          style={{ marginRight: "1rem" }}
                          src={analytic}
                          alt=""
                        />
                        Analytics
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={(Show) => setShow(3)}
                        class="nav-link1 text-white"
                      >
                        <img
                          style={{ marginRight: "1rem" }}
                          src={message}
                          alt=""
                        />
                        Messages
                      </Link>
                    </li>
                    <li>
                      <Link
                        class="nav-link1 text-white"
                        onClick={(Show) => setShow(17)}
                      >
                        <img
                          style={{ marginRight: "1rem" }}
                          src={bell}
                          alt=""
                        />
                        Notifications
                      </Link>
                    </li>
                    <li class="nav-item dropdown">
                      <Link
                        class="nav-link1 text-white dropdown-toggle"
                        to="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <img
                          style={{ marginRight: "1rem" }}
                          src={setting}
                          alt=""
                        />
                        Settings
                      </Link>
                      <ul class="dropdown-menu dropdown-menu-dark">
                        <li>
                          <Link
                            class="dropdown-item"
                            onClick={(Show) => setShow(6)}
                          >
                            Profile
                          </Link>
                        </li>
                        <li>
                          <Link
                            class="dropdown-item"
                            onClick={(Show) => setShow(5)}
                          >
                            Change Password
                          </Link>
                        </li>
                        <li>
                          <Link
                            class="dropdown-item"
                            onClick={(Show) => setShow(4)}
                          >
                            Payments
                          </Link>
                        </li>
                        <li>
                          <Link class="dropdown-item">Connect</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link
                        to="#"
                        class="nav-link1 text-white"
                        onClick={(Show) => setShow(15)}
                      >
                        <img
                          style={{ marginRight: "1rem" }}
                          src={proof}
                          alt=""
                        />
                        Proof of Funds
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        class="nav-link1 text-white"
                        onClick={(Show) => setShow(7)}
                      >
                        <img style={{ marginRight: "1rem" }} src={tag} alt="" />
                        pricings
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={(Show) => setShow(2)}
                        class="nav-link1 text-white"
                      >
                        <img
                          style={{ marginRight: "1rem" }}
                          src={address}
                          alt=""
                        />
                        Contact us
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={(Show) => setShow(14)}
                        class="nav-link1 text-white"
                      >
                        {/* <img style={{ marginRight: "1rem" }} src={""} alt="" /> */}
                        <i
                          class="fa-solid fa-calculator"
                          style={{
                            color: "#f5f5f5",
                            fontSize: "1.5rem",
                            margin: "0 1rem 0 0.5rem",
                          }}
                        ></i>
                        Valuation Tools
                      </Link>
                    </li>
                  </ul>
                  <hr />
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/** Profile content */}

        <div className="sideContent">
          <TopMessage />

          {Show === 1 && <Dashboard />}
          {Show === 2 && <ContactDashboard />}
          {Show === 3 && <MessageDash />}
          {Show === 4 && <PaymentDash />}
          {Show === 5 && <ChangePassword />}
          {Show === 7 && <PricingDash />}
          {Show === 8 && <MarketplaceDash />}
          {Show === 9 && <MarketplaceDash2 />}
          {Show === 10 && <MarketDashDetail />}
          {Show === 11 && <ProjectBuying />}
          {Show === 12 && <MyProject />}
          {Show === 13 && <MyAnalytics />}
          {Show === 14 && <DashboardValuation />}
          {Show === 15 && <ProofOfFund />}
          {Show === 16 && <Favourite />}
          {Show === 17 && <NotifactionDash />}

          {Show === 6 && (
            <div className="sideContent">
              <ToastContainer />

              <div>
                <h1 style={{ fontWeight: "700" }}>Profile</h1>
                <span style={{ color: "#636363" }}>
                  Update your information below
                </span>
              </div>

              <div className="profile-card d-flex">
                <div className="profile-content d-flex justify-content-around align-items-center">
                  <div className="profilePhoto d-flex flex-column align-items-center">
                    <img src={profilePhoto} alt="" />
                    <Link
                      className="btn btn-primary rounded-pill"
                      style={{ padding: "0.5rem 0.8rem" }}
                    >
                      <img src={verify} alt="" />
                      Verify
                    </Link>
                  </div>

                  <div style={{ width: "60%" }}>
                    <div class="mb-3 my-3">
                      <div class="row">
                        <div class="col">
                          <label
                            for="exampleFormControlInput1"
                            class="form-label"
                            style={{ color: "#636363" }}
                          >
                            First name
                          </label>
                          <input
                            style={{ height: "6vh" }}
                            type="text"
                            class="form-control"
                            aria-label="First name"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                          />
                        </div>
                        <div class="col">
                          <label
                            for="exampleFormControlInput1"
                            class="form-label"
                            style={{ color: "#636363" }}
                          >
                            Last name
                          </label>
                          <input
                            style={{ height: "6vh" }}
                            type="text"
                            class="form-control"
                            aria-label="Last name"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>
                    <div class="mb-3 my-3">
                      <label
                        for="exampleFormControlInput1"
                        class="form-label"
                        style={{ color: "#636363" }}
                      >
                        Username
                      </label>
                      <input
                        style={{ height: "6vh" }}
                        type="email"
                        class="form-control"
                        id="exampleFormControlInput1"
                        name="userName"
                        value={formData.userName}
                        onChange={handleChange}
                      />
                    </div>
                    <div class="mb-3 my-3">
                      <label
                        for="exampleFormControlTextarea1"
                        class="form-label"
                        style={{ color: "#636363" }}
                      >
                        About me
                      </label>
                      <textarea
                        style={{ height: "25vh" }}
                        class="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                        name="about"
                        value={formData.about}
                        onChange={handleChange}
                      ></textarea>
                    </div>

                    <div>
                      <span className="my-5" style={{ color: "#636363" }}>
                        Change your account type
                      </span>
                      <div className="d-flex flex-wrap">
                        <div>
                          <input
                            type="radio"
                            class="btn-check  rounded-pill"
                            name="options-base"
                            id="option8"
                            autocomplete="off"
                            value="owner"
                            onClick={changeRoleowner}
                          />
                          <label
                            class="btn1"
                            style={{
                              padding: "0.5rem",
                              margin: "0.3rem 0.7rem 0 0",
                              background: "#EEF0FE",
                            }}
                            for="option8"
                          >
                            <i class="fa-solid fa-circle-check mx-2"></i>
                            Owner( Seller )
                          </label>
                        </div>
                        <div>
                          <input
                            type="radio"
                            class="btn-check  rounded-pill"
                            name="options-base"
                            id="option9"
                            autocomplete="off"
                            value="acquirer"
                            onClick={changeRoleacquire}
                          />
                          <label
                            class="btn1"
                            style={{
                              padding: "0.5rem",
                              margin: "0.3rem 0.7rem 0 0",
                              background: "#EEF0FE",
                            }}
                            for="option9"
                          >
                            <i class="fa-solid fa-circle-check mx-2"></i>
                            Acquirer( buyer )
                          </label>
                        </div>
                        <div>
                          <input
                            type="radio"
                            class="btn-check  rounded-pill"
                            name="options-base"
                            id="option10"
                            autocomplete="off"
                            value="owner and acquirer"
                            onClick={ChangeBoth}
                          />
                          <label
                            class="btn1"
                            style={{
                              padding: "0.5rem",
                              margin: "0.3rem 0.7rem 0 0",
                              background: "#EEF0FE",
                            }}
                            for="option10"
                          >
                            <i class="fa-solid fa-circle-check mx-2"></i>
                            Owner and Aquirer
                          </label>
                        </div>
                      </div>
                    </div>

                    <button
                      class="profile-btn btn btn-primary my-3 rounded-pill"
                      type="submit"
                      style={{ width: "40%", padding: "0.8rem 1.5rem" }}
                      onClick={collectData}
                    >
                      Save changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};
export default DashboardProfile;
