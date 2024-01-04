import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import ENV from "../config.js";
import { jwtDecode } from "jwt-decode";

const NotifactionDash = () => {
  const [card, setCard] = useState([]);
  const [button, setButton] = useState(false);

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

  const handleReject = async (notificationId, buyerId) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(`${ENV.BACKEND_URL}/agora/reject`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
        notificationId: notificationId,
        buyerId: buyerId,
      });
      console.log(response.data);
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  const handleAccept = async (buyerId , notificationId , time) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(`${ENV.BACKEND_URL}/agora/accept`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
        channelName: buyerId,
        notificationId: notificationId,
        otherId: buyerId,
        time : time,
      });
      console.log(response.data);
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  const handleReschedule = async (e) => {
    try {
      const token = localStorage.getItem("token");
      const decoded = jwtDecode(token);
      const id = decoded.id;

      const response = await axios.post(
        `${ENV.BACKEND_URL}/agora/notifications/reschedule`,
        {
          user: id,
        }
      );
      console.log(response.data.notifications);
      setCard(response.data.notifications);
    }
    catch (error) {
      console.error(error);
    }
  }
  

  return (
    <>
      <section className="d-flex justify-content-center align-items-center">
        <div
          style={{
            width: "97%",
            height: "85vh",
            overflowY: "scroll",
            color: "#fff",
          }}
          className="Notifaction-Card d-flex align-items-center"
        >
          {card
            .slice()
            .reverse()
            .map((item, index) => {
              return (
                <div
                  className="py-3 px-3 w-100 rounded-pill my-2 mx-1 d-flex justify-content-between align-items-center"
                  style={{ background: "#3247FF" }}
                  key={index}
                >
                  <span>{item.message}</span>
                  {item.button === true ? (
                    <span>
                      <button
                        className="acceptBtn rounded-pill px-3 py-1 mx-1 my-1 bg-gradient border border-0 text-light"
                        style={{ background: "#191919" }}
                        onClick={() => handleAccept(item.buyerId , item._id , item.time)}
                      >
                        Accept
                      </button>
                      <button
                        className="acceptBtn rounded-pill px-3 py-1 mx-1 my-1 bg-gradient border border-0 text-light"
                        style={{ background: "#191919" }}
                        onClick={handleReschedule}
                      >
                        Reschedule
                      </button>
                      <button
                        className="rejectBtn rounded-pill px-3 py-1 mx-1 my-1 bg-danger bg-gradient border border-0 text-light"
                        onClick={() => handleReject(item._id, item.buyerId)}
                      >
                        Reject
                      </button>
                    </span>
                  ) : (
                    <h1></h1>
                  )}
                </div>
              );
            })}
        </div>
      </section>
    </>
  );
  
};

export default NotifactionDash;
