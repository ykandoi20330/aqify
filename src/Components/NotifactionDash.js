import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import ENV from "../config.js";
import { jwtDecode } from "jwt-decode";
import emailjs from "@emailjs/browser";

const NotifactionDash = () => {
  const [card, setCard] = useState([]);
  const [button, setButton] = useState(false);
  const [meetingTime, setMeetingTime] = useState("");
  const [buyerId, setBuyerId] = useState("");
  const [notificationId, setNotificationId] = useState("");
  const [unreadCount, setUnreadCount] = useState(0);


  const handleDateTimeChange = (e) => {
    setMeetingTime(e.target.value);
    console.log("Selected Date and Time:", meetingTime);
  };

  const handleSubmitTime = (e) => {
    e.preventDefault();
    console.log("Selected Date and Time:", meetingTime);
  };

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
      setUnreadCount(unreadMessages.length);
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
      getCard();
    } catch (error) {
      console.error(error);
    }
  };

  const handleAccept = async (buyerId, notificationId, time) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(`${ENV.BACKEND_URL}/agora/accept`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
        channelName: buyerId,
        notificationId: notificationId,
        otherId: buyerId,
        time: time,
      });
      console.log(response.data);
      handleEmail1(response);
      handleEmail2(response);
      getCard();
    } catch (error) {
      console.error(error);
    }
  };

  const handleEmail1 = async (response) => {
    emailjs.send(
      "service_vy4h3iu",
      "template_jr2ippq",
      {
        from_name: "Acqify",
        from_email: "aamish@acqify.co",
        to_email: response.data.email1,
        message: `Your meeting with ${response.data.firstName2 +  response.data.lastName2} has been scheduled at ${response.data.time} . Link: https://acqify.co/#/call/${response.data.channelName}`,
      },
      "d0q75IL42sp_4qDf5"
    ).then((res) => {
      console.log(res);
    }).catch((err) => {
      console.log(err);
    })
  }

  const handleEmail2 = async (response) => {
    emailjs.send(
      "service_vy4h3iu",
      "template_jr2ippq",
      {
        from_name: "Acqify",
        from_email: "aamish@acqify.co",
        to_email: response.data.email2,
        message: `Your meeting with ${response.data.firstName1 +  response.data.lastName1} has been scheduled for ${response.data.time} . link: https://acqify.co/#/call/${response.data.channelName}`,
      },
      "d0q75IL42sp_4qDf5"
    ).then((res) => {
      console.log(res);
    }).catch((err) => {
      console.log(err);
    })
  }

  const handleReschedule = async () => {
    try {
      const token = localStorage.getItem("token");
      const decoded = jwtDecode(token);
      const id = decoded.id;

      const response = await axios.post(`${ENV.BACKEND_URL}/agora/reschedule`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
        user: id,
        time: meetingTime,
        notificationId: notificationId,
        otherId: buyerId,
        channelName: buyerId,
      });
      handleEmail1(response);
      handleEmail2(response);
      console.log(response.data);
      getCard();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <section className="d-flex justify-content-center align-items-center">
        <div
          style={{
            width: "97%",
            height: "85vh",
            overflowY: "scroll",
            color: "blue",
          }}
          className="Notifaction-Card d-flex align-items-center"
        >
          {card
            .slice()
            .reverse()
            .map((item, index) => {
              return (
                <div
                  className="py-2 px-3 rounded-pill my-2 mx-1 w-100 d-flex justify-content-between align-items-center"
                  style={{ background: "#eef0fe" }}
                  key={index}
                >
                  <span>{item.message}</span>
                  {item.button === true ? (
                    <span>
                      <button
                        className="acceptBtn rounded-pill px-3 py-1 mx-1 my-1 bg-gradient border border-0 text-light"
                        style={{ background: "#191919" }}
                        onClick={() =>
                          handleAccept(item.buyerId, item._id, item.time)
                        }
                      >
                        Accept
                      </button>
                      <button
                        className="acceptBtn rounded-pill px-3 py-1 mx-1 my-1 bg-gradient border border-0 text-light"
                        style={{ background: "#191919" }}
                        data-bs-target="#ScheduleModalToggle"
                        data-bs-toggle="modal"
                        onClick={() => {
                          setBuyerId(item.buyerId);
                          setNotificationId(item._id);
                        }}
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

      {/* Re-Schedule A vidoe meet time and Date */}
      <section>
        <div
          className="modal fade"
          id="ScheduleModalToggle"
          aria-hidden="true"
          aria-labelledby="exampleModalToggleLabel"
          tabIndex="-1"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header" style={{ border: "none" }}>
                <h1
                  className="modal-title fs-5"
                  id="exampleModalToggleLabel"
                  style={{ fontWeight: "700" }}
                >
                  Select a Date & Time!
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form>
                  <label style={{ color: "#0005ff" }} for="birthdaytime">
                    Reschedule Meeting (date and time):
                  </label>
                  <input
                    style={{
                      padding: "1rem",
                      border: "none",
                      background: "#f4f4f4",
                      color: "#0005ff",
                      borderRadius: "50px",
                    }}
                    className="mx-2 my-2"
                    onChange={handleDateTimeChange}
                    type="datetime-local"
                    id="birthdaytime"
                    name="birthdaytime"
                  />
                </form>
              </div>
              <div className="modal-footer" style={{ border: "none" }}>
                <button
                  onClick={handleSubmitTime}
                  type="submit"
                  className="btn btn-primary py-1 px-3"
                  data-bs-target="#exampleModalToggle2"
                  data-bs-toggle="modal"
                >
                  Book a call
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="exampleModalToggle2"
          aria-hidden="true"
          aria-labelledby="exampleModalToggleLabel2"
          tabIndex="-1"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header" style={{ border: "none" }}>
                <h1 className="modal-title fs-5" id="exampleModalToggleLabel2">
                  Re-Scheduling a Video Call
                </h1>
                {/* <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}
              </div>
              <div className="modal-body">
                Your Request for the Meeting has been re-scheduling with the
                acquire!
              </div>
              <div className="modal-footer" style={{ border: "none" }}>
                <button
                  className="btn btn-primary px-3 py-1"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={handleReschedule}
                >
                  Confirm meet!
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotifactionDash;
