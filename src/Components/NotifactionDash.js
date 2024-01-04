import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import ENV from "../config.js";
import { jwtDecode } from "jwt-decode";

const NotifactionDash = () => {
  const [card, setCard] = useState([]);

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
      console.log(response.data.notifications);
      setCard(response.data.notifications);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <section>
        <div
          style={{ width: "97%", height: "85vh", color: "#c0c0c0" }}
          className="Notifaction-Card d-flex justify-content-center align-items-center"
        >
          <h1 style={{ color: "#c0c0c0" }}>No notification yet!</h1>
        </div>
      </section>
    </>
  );
};

export default NotifactionDash;
