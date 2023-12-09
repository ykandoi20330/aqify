import React, { useState, useEffect } from "react";
import message from "./ProfileDashbaord/chatteardropdots1.svg";
import lightMessage from "./ProfileDashbaord/chatteardropdots1.svg";
import Arrow from "./ProfileDashbaord/ArrowUp.svg";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import PricingDash from "./PricingDash"

const Dashboard = () => {
    const [username, setUsername] = useState("");
    const [Show, setShow] = useState(1)

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
          const response = await axios.get(
            "http://localhost:5000/users/getUser",
            {
              headers: { "x-auth-token": id },
            }
          );
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
      <div className="sideContent">
        <div
          className="d-flex justify-content-between"
          style={{ marginTop: "6vh" }}
        >
          <div>
            <span style={{ color: "#636363", fontWeight: "500" }}>
              Welcome back,
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
            <a
              href="/"
              style={{ padding: "0.5rem 1.3rem" }}
              className="btn btn-primary rounded-pill"
            >
              Upgrade
              <img src={Arrow} alt="" />
            </a>
          </div>
        </div>
        <br />

        <div className="message-card">
          <div>
            <h2
              style={{
                fontWeight: "700",
                width: "28%",
                borderBottom: "4px solid #3247ff",
                borderRadius: "5px",
                paddingBottom: "0.5rem",
              }}
            >
              {" "}
              <img src={message} alt="" /> Messages
            </h2>
          </div>

          <div
            className="d-flex justify-content-center align-items-center flex-column"
            style={{ height: "70vh", color: "#c0c0c0" }}
          >
            <img width={50} src={lightMessage} alt="" />
            <span style={{ fontSize: "25px" }}>No conversations yet</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
