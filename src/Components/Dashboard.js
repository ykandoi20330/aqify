import React, { useState, useEffect } from "react";
import message from "./ProfileDashbaord/chatteardropdots1.svg";
import lightMessage from "./ProfileDashbaord/chatteardropdots1.svg";
import Arrow from "./ProfileDashbaord/ArrowUp.svg";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import ENV from "../config.js";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [username, setUsername] = useState("");
  const [Show, setShow] = useState(1);

  useEffect(() => {
    const getUsername = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        const currentURL = window.location.href;
        const [baseUrl, queryString] = currentURL.split("?");
        const token = new URLSearchParams(queryString).get("token");
        localStorage.setItem("token", token);

        if (!token) {
          const user = JSON.parse(localStorage.getItem("user"));
          const token = user.token;
          localStorage.setItem("token", token);
        }
        window.location.reload();
      }
      if (token) {
        const decoded = jwtDecode(token);
        const id = decoded.id;
        try {
          const response = await axios.get(`${ENV.BACKEND_URL}/users/getUser`, {
            headers: { "x-auth-token": id },
          });
          setUsername(response.data.user.userName);
        } catch (error) {
          console.error(error);
        }
      }
    };

    getUsername();
  }, [setUsername]);



  return (
    <>
      {Show === 1 &&
        <>
          <div className="sideContent">
            <div
              className="d-flex justify-content-between"
              style={{ marginTop: "6vh" }}
            >
              <div>
                <span style={{ color: "#636363", fontWeight: "500" }}>
                  Hello,
                </span>
                <h1
                  style={{
                    fontWeight: "700",
                    paddingBottom: "0.5rem",
                    color: "#3247ff",
                  }}
                >
                  {username}
                </h1>{" "}
              </div>
              <div>
                <Link
                  to="/MainDashboard/PricingDash"
                  style={{ padding: "0.5rem 1.3rem" }}
                  className="btn btn-primary rounded-pill"
                >
                  Upgrade
                  <img src={Arrow} alt="" />
                </Link>
              </div>
            </div>
            <br />

            <div className="message-card">
              <div
                className="d-flex justify-content-center align-items-center flex-column"
                style={{ height: "70vh", color: "#c0c0c0" }}
              >
                <div className="text-center my-5">
                  <h1 style={{ color: "#636363", fontWeight: "500" }}><span class="waving-hand">👋</span>Welcome back!</h1>
                  <span style={{ fontSize: "1.5rem", fontWeight: "500" }}>Acqify is a full-fledge marketplace platform.</span>
                </div>
                <div>
                  <Link className="btn btn-primary py-2 px-4 rounded-pill my-5" to="/MarketDash2">Explore Acqify</Link>
                </div>
              </div>
            </div>
          </div>
        </>}
    </>
  );
};

export default Dashboard;
