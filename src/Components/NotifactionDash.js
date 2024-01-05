import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import ENV from "../config.js";
import { jwtDecode } from "jwt-decode";

const NotifactionDash = () => {
  const [card, setCard] = useState([]);
  const [button, setButton] = useState(false);
  const [meetingTime, setMeetingTime] = useState("");

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

  const handleReschedule = async (buyerId , notificationId ) => {
    try {
      console.log("Selected Date and Time:", meetingTime);
      const token = localStorage.getItem("token");
      const decoded = jwtDecode(token);
      const id = decoded.id;

      const response = await axios.post(
        `${ENV.BACKEND_URL}/agora/notifications/reschedule`,
        {
          user: id,
          time: meetingTime,
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
                  style={{ background: "#eef0fe"}}
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
                        style={{ background: "#191919"}}
                        data-bs-target="#ScheduleModalToggle" data-bs-toggle="modal"
                        // onClick={() => handleReschedule(item.buyerId , item._id)}
                        
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
        <div class="modal fade" id="ScheduleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header" style={{ border: 'none' }}>
                <h1 class="modal-title fs-5" id="exampleModalToggleLabel" style={{ fontWeight: '700' }}>Select a Date & Time!</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <form>
                  <label style={{ color: '#0005ff' }} for="birthdaytime" >Reschedule Meeting (date and time):</label>
                  <input style={{
                    padding: '1rem',
                    border: 'none',
                    background: '#f4f4f4',
                    color: '#0005ff',
                    borderRadius: '50px',
                  }} className="mx-2 my-2" onChange={handleDateTimeChange} type="datetime-local" id="birthdaytime" name="birthdaytime" />
                </form>
              </div>
              <div class="modal-footer" style={{ border: 'none' }}>
                <button onClick={() => handleSubmitTime()} type="submit" class="btn btn-primary py-1 px-3" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">Book a call</button>
              </div>
            </div>
          </div>
        </div>
        <div class="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header" style={{ border: 'none' }}>
                <h1 class="modal-title fs-5" id="exampleModalToggleLabel2">Re-Scheduling a Video Call</h1>
                {/* <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}
              </div>
              <div class="modal-body">
                Your Request for the Meeting has been re-scheduling with the acquire!
              </div>
              <div class="modal-footer" style={{ border: 'none' }}>
                <button class="btn btn-primary px-3 py-1" data-bs-dismiss="modal" aria-label="Close" onClick={handleReschedule}>Confirm meet!</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
  
};

export default NotifactionDash;
