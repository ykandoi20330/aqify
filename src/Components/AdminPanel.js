import React, { useEffect, useState } from "react";
import logo from "./Aqify project/FrameWhiteLogo.svg";
import folder from "./ProfileDashbaord/folder.svg";
import address from "./ProfileDashbaord/addressbook.svg";
import list from "./ProfileDashbaord/listnumbers.svg";
import bell from "./ProfileDashbaord/bell.svg";
import setting from "./ProfileDashbaord/gear.svg";
import tag from "./ProfileDashbaord/tag.svg";
import analytic from "./ProfileDashbaord/VectorAnalytics.svg";
import proof from "./ProfileDashbaord/VectorProof.svg";

//card content
import { Link, Outlet } from "react-router-dom";
import logo1 from "./SignIn/vector.svg";
import TopMessage from "./TopMessage";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import ENV from "../config.js";

import { useNavigate } from "react-router-dom";
const AdminPanel = () => {
    const navigate = useNavigate();

    const logout = () => {
        localStorage.clear();
        navigate("/");
    };

    const [role, setRole] = useState("");
    const[admin,setAdmin]=useState(false);
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
                    setAdmin(response.data.user.admin);
                    if (!response.data.user.admin) {
                        navigate("/");
                    }
                } catch (error) {
                    console.error(error);
                }
            }
            else {
                navigate("/");
            }
        };

        getUsername();
    }, [setRole]);


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
                                    <div
                                        className="text-white"
                                        style={{ textDecoration: "none" }}
                                    >
                                        <h2 className="dash">Admin Panel</h2>
                                    </div>
                                    <ul className="nav flex-column mb-auto">
                                        <li className="nav-item">
                                            <Link
                                                to="/AdminPanel/AdminPanelListing"
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
                                                to="/AdminPanel/AdminApproveList"
                                                className="nav-link1 text-white"
                                                aria-current="page"
                                            >
                                                <img className="dashIcon"
                                                    style={{ marginRight: "1rem" }}
                                                    src={tag}
                                                    alt=""
                                                />
                                                <span>Approve Lists</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/AdminPanel/AdminChatHistoy"
                                                className="nav-link1 text-white"
                                            >
                                                <img className="dashIcon"
                                                    style={{ marginRight: "1rem" }}
                                                    src={analytic}
                                                    alt=""
                                                />
                                                <span>Chat history</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/AdminPanel/AdminFeedback"
                                                className="nav-link1 text-white"
                                            >
                                                <img className="dashIcon"
                                                    style={{ marginRight: "1rem" }}
                                                    src={proof}
                                                    alt=""
                                                />
                                                <span>Feedback</span>
                                            </Link>
                                        </li>


                                    </ul>
                                    <hr />

                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                <section className="sideContent">
                    <TopMessage/>
                    <Outlet/>
                </section>
            </section>
        </>
    );
};

export default AdminPanel