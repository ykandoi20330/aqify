import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import ENV from "../config.js";
import { jwtDecode } from "jwt-decode";
import { Link } from "react-router-dom";

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
      <section className="d-flex justify-content-center align-items-center">
        <div
          style={{ width: "97%", height: "85vh", overflowY:'scroll',color: "#fff" }}
          className="Notifaction-Card d-flex align-items-center"
        >
          {card.map((item, index) => {
            return (
              <>
                <div className="py-3 px-3 w-100 rounded-pill my-2 mx-1 d-flex justify-content-between align-items-center" style={{ background: '#3247FF' }} key={index}>
                  <span>
                    {item.message}
                  </span>
                  <span>
                    <button className="acceptBtn rounded-pill px-3 py-1 mx-1 my-1  bg-gradient border border-0 text-light" style={{background:'#191919'}} >Accept</button>
                    <button className="rejectBtn rounded-pill px-3 py-1 mx-1 my-1 bg-danger bg-gradient border border-0 text-light">Reject</button>
                  </span>
                </div>
              </>
            )
          })}
        </div>
      </section>
    </>
  );
};

export default NotifactionDash;
