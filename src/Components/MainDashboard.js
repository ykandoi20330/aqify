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
import NotificationBadge from "react-notification-badge";
import { Effect } from "react-notification-badge";
import Axios from "axios";

const MainDashboard = () => {
  const [allChats, setAllChats] = useState([]);
  const [id, setId] = useState(null);
  const [card, setCard] = useState([]);
  const [unreadCount, setUnreadCount] = useState(true);
  const [unreadMessageCount, setUnreadMessageCount] = useState(true);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  const [role, setRole] = useState("");
  const [navCollapse, setNavCollapse] = useState(false);

  useEffect(() => {
    const getUsername = async () => {
      const token = localStorage.getItem("token");
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



  useEffect(() => {
    getCard();
  }, []);

  const getCard = async () => {
    try {
      const token = localStorage.getItem("token");
      const decoded = jwtDecode(token);
      const id = decoded.id;

      const response = await axios.get(
        `${ENV.BACKEND_URL}/agora/notifications`,
        {
          params: { user: id },
        }
      );
      const unreadMessages = response.data.notifications.filter(
        (item) => !item.read
      );
      console.log(response.data.notifications);
      setCard(unreadMessages);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const getAllChats = async () => {
      const token = localStorage.getItem("token");

      if (token) {
        const userData = jwtDecode(token);
        setId(userData.id);

        Axios.get(`${ENV.BACKEND_URL}/chat/all`, {
          headers: {
            authorization: `Bearer ${token}`,
          },
        })
          .then(({ data }) => {
            console.log(data);
            setAllChats(data);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    };
    getAllChats();
  }, []);

  const handleTrue = async () =>{
  try {
    const token = localStorage.getItem("token");
    const decoded = jwtDecode(token);
    const id = decoded.id;

    const response = await axios.get(
      `${ENV.BACKEND_URL}/agora/notificationsTrue`,
      {
        params: { user: id },
      }
    );
    getCard();
  } catch (error) {
    console.error(error);
  }
}

const handleBadge = () => {
  setUnreadCount(false)
}
const handleMessageBadge = () => {
  setUnreadMessageCount(false)
}


  return (
    <>
      <section className="profile-section">
        <nav
          className={`navbar navbar-expand-lg dashboard ${navCollapse ? "navCollaspe" : ''}`}
          style={{ top: "0px" }}
        >
          <div className="container-fluid" style={{ padding: "0rem" }}>
            <button
              style={{ margin: "0 1.5rem" }}
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasDarkNavbar"
              aria-controls="offcanvasDarkNavbar"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              style={{ left: "0", transform: "translateX(-100%)" }}
              className="offcanvas offcanvas-end text-bg-dark"
              tabIndex="-1"
              id="offcanvasDarkNavbar"
              aria-labelledby="offcanvasDarkNavbarLabel"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
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
                  className="btn-close btn-close-white"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body" style={{ left: "0px" }}>
                {/** */}
                <div className="Navdashboard d-flex flex-column flex-shrink-0 p-3 text-bg-dark">
                  {/** */}
                  <div className="d-flex justify-content-bewteen align-items-center">
                    <Link
                      to="/"
                      className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
                    >
                      <img className="dashLogo" src={logo} alt="" />
                      <br />
                      <br />
                      <br />
                    </Link>
                    <div>
                      <Link className="d-flex align-items-center" style={{ background: '#000', padding: '0.6rem', borderRadius: '200px' }} onClick={() => setNavCollapse(!navCollapse)}>
                        <img src={logo1} alt="Logo" style={{ width: "20px" }} className="" />
                      </Link>
                    </div>
                  </div>
                  {/** */}
                  <hr />
                  <Link
                    className="text-white"
                    style={{ textDecoration: "none" }}
                    to="/MainDashboard/Dashbaord"
                  >
                    <h2 className="dash"> Dashboard</h2>
                  </Link>
                  <ul className="nav flex-column mb-auto">
                    <li className="nav-item">
                      <Link
                        to="/MarketDash2"
                        className="nav-link1 text-white"
                        aria-current="page"
                      >
                        <img className="dashIcon"
                          style={{ marginRight: "1rem" }}
                          src={list}
                          alt=""
                        />
                        <span>Lists</span>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        to="/MainDashboard/favorites"
                        className="nav-link1 text-white"
                        aria-current="page"
                      >
                        <img className="dashIcon"
                          style={{ marginRight: "1rem" }}
                          src={heart}
                          alt=""
                        />
                        <span>Favourite Lists</span>
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
                        <div className="d-flex justify-content-between align-items-center">
                          <div>
                            <img className="dashIcon"
                              style={{ marginRight: "1rem" }}
                              src={folder}
                              alt=""
                            />
                            <span>My Projects</span>
                          </div>
                          <span><i className="fa-solid fa-circle-notch"></i></span>
                        </div>
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
                        className="nav-link1 text-white"
                      >
                        <img className="dashIcon"
                          style={{ marginRight: "1rem" }}
                          src={analytic}
                          alt=""
                        />
                        <span>Analytics</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/MainDashboard/MessageDash"
                        className="nav-link1 text-white"
                        onClick={handleMessageBadge}
                      >
                        <img className="dashIcon"
                          style={{ marginRight: "1rem" }}
                          src={message}
                          alt=""
                        />
                        <span>Messages</span>
                        {unreadMessageCount === true  &&
                        <NotificationBadge
                          className="notificationBadge"
                          count={allChats.length}
                          effect={Effect.SCALE}
                        />}
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/MainDashboard/Notification"
                        className="nav-link1 text-white "
                        onClick={handleBadge}
                      >
                        <img className="dashIcon"
                          style={{ marginRight: "1rem" }}
                          src={bell}
                          alt=""
                        />
                        <span onClick={handleTrue}>Notifications</span>
                        {unreadCount === true  &&
                        <NotificationBadge
                          className="notificationBadge"
                          count={card.length}
                          effect={Effect.SCALE}
                        />}
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
                        <div className="d-flex justify-content-between align-items-center">
                          <div>
                            <img className="dashIcon"
                              style={{ marginRight: "1rem" }}
                              src={setting}
                              alt=""
                            />
                            <span>Settings</span>
                          </div>
                          <span><i className="fa-solid fa-circle-notch"></i></span>
                        </div>
                      </Link>
                      <ul className="dropdown-menu dropdown-menu-dark">
                        <li>
                          <Link
                            className="dropdown-item"
                            to="/MainDashboard/proflie"
                          >
                            Profile
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            to="/MainDashboard/ChangePassword"
                          >
                            Change Password
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            to="/MainDashboard/PaymentDash"
                          >
                            Payments
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item">Connect</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link
                        to="/MainDashboard/ProofFund"
                        className="nav-link1 text-white"
                      >
                        <img className="dashIcon"
                          style={{ marginRight: "1rem" }}
                          src={proof}
                          alt=""
                        />
                        <span>Proof of Funds</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/MainDashboard/PricingDash"
                        className="nav-link1 text-white"
                      >
                        <img className="dashIcon" style={{ marginRight: "1rem" }} src={tag} alt="" />
                        <span>pricings</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/MainDashboard/contactDashboard"
                        className="nav-link1 text-white"
                      >
                        <img className="dashIcon"
                          style={{ marginRight: "1rem" }}
                          src={address}
                          alt=""
                        />
                        <span>Contact us</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/MainDashboard/DashValuation"
                        className="nav-link1 text-white"
                      >
                        <i
                          className="dashIcon fa-solid fa-calculator"
                          style={{
                            color: "#f5f5f5",
                            fontSize: "1.5rem",
                            margin: "0 1rem 0 0.5rem",
                          }}
                        ></i>
                        <span>Valuation Tools</span>
                      </Link>
                    </li>
                  </ul>
                  <hr />
                  {/* <div className="dropdown">
                            <Link to="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                 <img className="dashIcon"   src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
                                <strong>mdo</strong>
                            </Link>
                            <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                                <li><Link className="dropdown-item" to="#">Settings</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item" to="#">Sign out</Link></li>
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
