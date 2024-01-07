import React from 'react'
import message from "./ProfileDashbaord/chatteardropdots1.svg"
import { Link } from 'react-router-dom'
import profileIcon from "./ProfileDashbaord/ellipse-60@2x.png"
import threeDots from "./ProfileDashbaord/dotsthreeoutlinevertical.svg"
import BlackLogo from "./Aqify project/FrameblackLogo.svg"
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { useEffect } from "react";
import ENV from "../config.js";

const TopMessage = () => {
  const [pic, setPic] = React.useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const getUser = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        const decoded = jwtDecode(token);
        const id = decoded.id;
        try {
          const response = await axios.get(
            `${ENV.BACKEND_URL}/users/getUser`,
            {
              headers: { "x-auth-token": id },
            }
          );
          setPic(response.data.user.pic);
        } catch (error) {
          console.error(error);
        }
      }
    };
    getUser();
  }, []);


  const logout = () => {
    window.location.href = `${ENV.FRONTEND_URL}/#/singin`;
    // window.location.href = `${ENV.FRONTEND_URL}/aqify#/singin`;
    localStorage.clear();
  };

  return (
    <>
      <section>
        <div
          className=""
          style={{ background: "#EEF0FE", width: "100%", padding: "1.3rem" }}
        >
          <div className="d-flex justify-content-between align-items-center">
            <br />
            <div className="d-flex justify-content-end">
              <div className="mx-2">
                <Link to="/MainDashboard/MessageDash">
                  <img src={message} alt="" />
                </Link>
              </div>
              <div className="mx-1">
                <Link to="/MainDashboard/proflie">
                  <img
                    style={{ width: "40px", borderRadius: 50 }}
                    src={pic}
                    alt=""
                  />
                </Link>
              </div>
              <div className="mx-1">
                <div className="dropdown">
                  <Link
                    to="#"
                    className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img src={threeDots} alt="" />
                  </Link>
                  <ul
                    style={{ border: "none" }}
                    className="dropdown-menu dropdown-menu-lg-end shadow"
                  >
                    <li>
                      <Link className="dropdown-item" to="/MainDashboard/proflie">
                        <i
                          className="fa-solid fa-user mx-2"
                          style={{ color: "#005eff" }}
                        ></i>
                        My Profile
                      </Link>
                    </li>
                    <li>
                      <button className="dropdown-item" onClick={logout}>
                        <i
                          className="fa-solid fa-right-from-bracket mx-2"
                          style={{ color: "#005eff" }}
                        ></i>
                        Sign out
                      </button>
                    </li>{" "}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TopMessage;