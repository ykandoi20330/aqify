import React, { useEffect, useState } from "react";
import logo from "./Aqify project/FrameWhiteLogo.svg";
import folder from "./ProfileDashbaord/folder.svg";
import address from "./ProfileDashbaord/addressbook.svg";
import list from "./ProfileDashbaord/listnumbers.svg";
import bell from "./ProfileDashbaord/bell.svg";
import setting from "./ProfileDashbaord/gear.svg";
import tag from "./ProfileDashbaord/tag.svg";
import analytic from "./ProfileDashbaord/VectorAnalytics.svg";
import heart from "./ProfileDashbaord/VectorHeart.svg";
import proof from "./ProfileDashbaord/VectorProof.svg";

//card content
import { Link, Outlet } from "react-router-dom";
import message from "./ProfileDashbaord/chatteardropdots.svg";
import logo1 from "./SignIn/vector.svg";
import TopMessage from "./TopMessage";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import ENV from "../config.js";

import { useNavigate } from "react-router-dom";
const MainDashboard = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  const [role, setRole] = useState("");

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
          const response = await axios.get(`${ENV.BACKEND_URL}/users/getUser`, {
            headers: { "x-auth-token": id },
          });
          setRole(response.data.user.role);
        } catch (error) {
          console.error(error);
        }
      }
    };

    getUsername();
  }, [setRole]);

  return (
    <>
      <section className="profile-section">
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
                    className="text-white"
                    style={{ textDecoration: "none" }}
                    to="/MainDashboard/Dashbaord"
                  >
                    <h2> Dashboard</h2>
                  </Link>
                  <ul class="nav flex-column mb-auto">
                    <li class="nav-item">
                      <Link
                        to="/MainDashboard/MarketDash2"
                        class="nav-link1 text-white"
                        aria-current="page"
                      >
                        <img
                          style={{ marginRight: "1rem" }}
                          src={list}
                          alt=""
                        />
                        Lists
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link
                        to="/MainDashboard/favorites"
                        class="nav-link1 text-white"
                        aria-current="page"
                      >
                        <img
                          style={{ marginRight: "1rem" }}
                          src={heart}
                          alt=""
                        />
                        Favourite Lists
                      </Link>
                    </li>
                    <li className="nav-item dropdown">
                      <Link
                        className="nav-link1 text-white dropdown-toggle"
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
                      {role === "acquirer" && (
                        <ul className="dropdown-menu dropdown-menu-dark">
                          <li>
                            <Link
                              className="dropdown-item"
                              to="/MainDashboard/MyProject"
                            >
                              Project Buying
                            </Link>
                          </li>
                        </ul>
                      )}
                      {role === "owner" && (
                        <ul className="dropdown-menu dropdown-menu-dark">
                          <li>
                            <Link
                              className="dropdown-item"
                              to="/MainDashboard/ProjectBuying"
                            >
                              Projects Lists
                            </Link>
                          </li>
                        </ul>
                      )}
                      {role !== "acquirer" && role !== "owner" && (
                        <ul className="dropdown-menu dropdown-menu-dark">
                          <li>
                            <Link
                              className="dropdown-item"
                              to="/MainDashboard/MyProject"
                            >
                              Project Lists
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              to="/MainDashboard/ProjectBuying"
                            >
                              Projects Buying
                            </Link>
                          </li>
                        </ul>
                      )}
                    </li>

                    <li>
                      <Link
                        to="/MainDashboard/MyAnalytics"
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
                        to="/MainDashboard/MessageDash"
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
                        to="/MainDashboard/Notification"
                        class="nav-link1 text-white"
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
                            to="/MainDashboard/proflie"
                          >
                            Profile
                          </Link>
                        </li>
                        <li>
                          <Link
                            class="dropdown-item"
                            to="/MainDashboard/ChangePassword"
                          >
                            Change Password
                          </Link>
                        </li>
                        <li>
                          <Link
                            class="dropdown-item"
                            to="/MainDashboard/PaymentDash"
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
                        to="/MainDashboard/ProofFund"
                        class="nav-link1 text-white"
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
                        to="/MainDashboard/PricingDash"
                        class="nav-link1 text-white"
                      >
                        <img style={{ marginRight: "1rem" }} src={tag} alt="" />
                        pricings
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/MainDashboard/contactDashboard"
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
                        to="/MainDashboard/DashValuation"
                        class="nav-link1 text-white"
                      >
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
                  {/* <div class="dropdown">
                            <Link to="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src="https://github.com/mdo.png" alt="" width="32" height="32" class="rounded-circle me-2" />
                                <strong>mdo</strong>
                            </Link>
                            <ul class="dropdown-menu dropdown-menu-dark text-small shadow">
                                <li><Link class="dropdown-item" to="#">Settings</Link></li>
                                <li><hr class="dropdown-divider" /></li>
                                <li><Link class="dropdown-item" to="#">Sign out</Link></li>
                            </ul>
                        </div> */}
                </div>
              </div>
            </div>
          </div>
        </nav>
        <div className="sideContent">
          <TopMessage />
          {/* <Dashbaord /> */}

          <section>
            <Outlet />
          </section>
        </div>
      </section>
    </>
  );
};

export default MainDashboard;
