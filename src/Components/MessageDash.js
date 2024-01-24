import React, { useEffect, useState, useRef } from "react";
import message from "./ProfileDashbaord/chatteardropdots1.svg";
import lightMessage from "./ProfileDashbaord/chatteardropdots1.svg";
import { Link } from "react-router-dom";
import Axios from "axios";
import ENV from "../config.js";
import { jwtDecode } from "jwt-decode";
import EmojiPicker from "emoji-picker-react";
import NotificationBadge from "react-notification-badge";
import { Effect } from "react-notification-badge";
import axios from "axios";
import emailjs from "@emailjs/browser";


const MessageDash = () => {
  const [ws, setWs] = useState(null);
  const [allChats, setAllChats] = useState([]); // this is the list of all the chats that the user has brougt by the function get AllChats
  const [selectedUserId, setSelectedUserId] = useState(null); // this is the id of the user that the user is currently chatting with
  const [messages, setMessages] = useState([]); // this is the list of all the messages that the user has sent to the selected user
  const [newMessageCount, setNewMessageCount] = useState(0); // this is the number of new messages that the user has recieved from the selected user
  const [newMessageText, setNewMessageText] = useState(""); // this is the text that the user is currently typing in the input field
  const [id, setId] = useState(null); // this is the id of the user that is currently logged in

  const [emoji, setEmoji] = useState(false);
  const [video, setVideo] = useState(false);
  const [chosenEmoji, setChosenEmoji] = useState("");
  const [show, setShow] = useState(true);

  const [meetingTime, setMeetingTime] = useState("");
  const [buyerId, setBuyerId] = useState("");
  const [notificationId, setNotificationId] = useState("");
  const [card, setCard] = useState([])

  const emojiDropdown = () => {
    setEmoji(!emoji);
  };

  const connectToWs = () => {
    const ws = new WebSocket(`${ENV.WEBSOCKET_URL}`)
    setWs(ws);
    ws.addEventListener("message", handleMessage);
    ws.addEventListener("close", () => {
      setTimeout(() => {
        console.log("Disconnected. Trying to reconnect.");
        connectToWs();
      }, 10000);
    });
  };

  useEffect(() => {
    connectToWs();
  }, [selectedUserId]);

  const handleMessage = (ev) => {
    const messageData = JSON.parse(ev.data);
    console.log({ ev, messageData });
    if ("message" in messageData) {
      if (messageData.sender === selectedUserId) {
        setMessages((prev) => [...prev, { ...messageData }]);
      }
    }
    console.log("Running");
  };

  const getChat = async () => {
    const token = localStorage.getItem("token");
    if (!selectedUserId) return;
    try {
      const { data } = await Axios.get(
        `${ENV.BACKEND_URL}/chat/get-chat/${selectedUserId}`,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("data", data);
      const unreadMessages = data.filter(
        (item) => !item.read
      );
      setMessages(data);
      setNewMessageCount(unreadMessages.length);
      console.log("this is unread count of message", unreadMessages);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getChat();
  }, [selectedUserId]);

  const mobileNumberRegex = /(\+\d{1,2}\s?)?(\d{10}|\d{3}\s?\d{7}|\d{4}\s?\d{6}|\d{5}\s?\d{5}|\d{6}\s?\d{4})/;
  const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/;

  const sendMessage = (ev) => {
    if (ev) ev.preventDefault();
      if (emailRegex.test(newMessageText) || mobileNumberRegex.test(newMessageText)) {
      alert("Sending email or mobile number is not allowed");
      return;
    }
    ws.send(
      JSON.stringify({
        sender: id,
        reciever: selectedUserId,
        messageString: newMessageText,
      })
    );
    setNewMessageText("");
    setMessages((prev) => [
      ...prev,
      {
        message: newMessageText,
        sender: id,
        reciever: selectedUserId,
        _id: Date.now(),
      },
    ]);
  };

  const divUnderMessages = useRef();

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


  //videos section
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

  const handleDateTimeChange = (e) => {
    setMeetingTime(e.target.value);
    console.log("Selected Date and Time:", meetingTime);
  };

  const handleSubmitTime = (e) => {
    e.preventDefault();
    console.log("Selected Date and Time:", meetingTime);
  };

  const handleEmail1 = async (response) => {
    emailjs.send(
      "service_vy4h3iu",
      "template_jr2ippq",
      {
        from_name: "Acqify",
        from_email: "aamish@acqify.co",
        to_email: response.data.email1,
        message: `Your meeting with ${response.data.firstName2 +  response.data.lastName2} has been scheduled at ${meetingTime} . Link: https://acqify.co/#/call/${selectedUserId}`,
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
        message: `Your meeting with ${response.data.firstName1 +  response.data.lastName1} has been scheduled for ${meetingTime} . link: https://acqify.co/#/call/${selectedUserId}`,
      },
      "d0q75IL42sp_4qDf5"
    ).then((res) => {
      console.log(res);
    }).catch((err) => {
      console.log(err);
    })
  }

  const handleReschedule = async () => {
    console.log("Selected Date and Time:", selectedUserId , id , meetingTime);
    try {
      const response = await axios.post(
        `${ENV.BACKEND_URL}/agora/chatSchedule`,
        {
          user1: id,
          user2: selectedUserId,
        }
      );

      console.log(response.data);
      handleEmail1(response);
      handleEmail2(response);

    } catch (error) {
      console.error(error);
    }
   }
  


  useEffect(() => {
    getCard();
  }, []);

  return (
    <>
      <div className="sideContent">
        <div className="message-card" style={{ padding: "2rem" }}>
          {show === false && (
            <>
              {/* <div>
                            <h1 style={{ fontWeight: '700', borderBottom: "2px solid #3247ff", borderRadius: '5px', paddingBottom: '0.5rem' }}> <img src={message} alt="" /> Messages</h1>
                        </div> */}

              {allChats.length > 0 ? (
                <>
                  <div
                    className="detailmessage d-flex "
                    style={{ height: "80vh", color: "#c0c0c0", width: "100%" }}
                  >
                    <div
                      className="showProfile"
                      style={{
                        width: "30%",
                        height: "100%",
                        overflowY: "scroll",
                      }}
                    >
                      {allChats.map((chat, i) => {
                        return (
                          <div
                            key={i}
                            className="d-flex flex-row align-items-center gap-2 p-2"
                            style={{
                              cursor: "pointer",
                              borderBottom: "1px solid #c0c0c0",
                              width: "90%",
                            }}
                            onClick={() => setSelectedUserId(chat._id)}
                          >
                            <img
                              src={chat.pic}
                              alt=""
                              style={{
                                width: "30px",
                                height: "30px",
                                borderRadius: "50%",
                                objectFit: "cover",
                              }}
                              onClick={() => setSelectedUserId(chat._id)}
                            />
                            <h3
                              style={{
                                fontSize: "1.3rem",
                              }}
                            >
                              {chat.userName}
                             

                            </h3>
                          </div>
                        );
                      })}
                    </div>

                    <div
                      className="showMessage"
                      style={{
                        background: "#EEF0FE",
                        width: "100%",
                        height: "100%",
                        borderRadius: "10px",
                      }}
                    >
                      <div
                        className="MsgheadBox d-flex justify-content-center align-items-center"
                        style={{
                          background: "#3247FF",
                          color: "#fff",
                          borderRadius: "10px 10px 0 0",
                          height: "7vh",
                        }}
                      >
                        {/* {allChats.map((msg, index) => {
                          return (
                            <h4 key={index} className="msg-h2">
                              {msg.userName}
                            </h4>
                          );
                        })} */}
                        <h4>Acqify</h4>
                      </div>
                      {emoji && (
                        <EmojiPicker
                          onEmojiClick={(emoji) => {
                            setChosenEmoji(emoji.emoji); // Assuming `emoji.native` holds the emoji character
                            setNewMessageText(
                              (prevText) => prevText + emoji.emoji
                            ); // Append emoji to the message input field
                          }}
                          style={{ position: "absolute" }}
                        />
                      )}
                      <>
                        {/* Schedule A vidoe meet time and Date */}
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
                                    Scheduling a Video Call
                                  </h1>
                                  {/* <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}
                                </div>
                                <div className="modal-body">
                                  Your Request for the Meeting has been scheduling with the
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
                      {selectedUserId ? (
                        <>
                          <div
                            className="d-flex justify-content-center flex-column"
                            style={{
                              color: "#c0c0c0",
                              width: "100%",
                              height: "75%",
                              overflowY: "scroll",
                              padding: "0 25px",
                            }}
                          >
                            <div
                              className="d-flex flex-column"
                              style={{ height: "100%" }}
                            >
                              {messages.map((message) => (
                                <div key={message._id}>
                                  <div
                                    className={
                                      (message.sender === id
                                        ? "float-end"
                                        : "text-start") +
                                      " text-left inline-block p-2 my-2 rounded-md text-sm " +
                                      (message.sender === id
                                        ? "bg-primary text-white"
                                        : "bg-light text-primary")
                                    }
                                    style={{
                                      borderRadius: "50px",
                                      width: "fit-content",
                                    }}
                                  >
                                    {message.message}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div
                            className=""
                            style={{ color: "#636363", width: "100%" }}
                          >
                            <div className="d-flex mb-3 my-3 ">
                              <div className="d-flex justify-content-center align-items-center">
                                <Link onClick={emojiDropdown}>
                                  <i
                                    style={{
                                      color: "#3247FF",
                                      fontSize: "1.5rem",
                                    }}
                                    className="fa-solid fa-face-smile mx-2"
                                  ></i>
                                </Link>
                                <Link data-bs-target="#ScheduleModalToggle"
                                  data-bs-toggle="modal">
                                  <i
                                    style={{
                                      color: "#3247FF",
                                      fontSize: "1.5rem",
                                    }}
                                    className="fa-solid fa-video mx-2"
                                  ></i>
                                </Link>
                              </div>
                              <input
                                style={{
                                  width: "100",
                                  background: "#fff",
                                  height: "8vh",
                                  borderRadius: "50px",
                                }}
                                type="text"
                                id="floatingInputValue"
                                className="Search-from form-control mx-2"
                                placeholder="Write message..."
                                value={newMessageText}
                                onChange={(ev) =>
                                  setNewMessageText(ev.target.value)
                                }
                              />
                              <div
                                className="messageSendBtn text-center mx-2 d-flex  justify-content-center align-items-center"
                                style={{
                                  color: "#3247FF",
                                  right: "7%",
                                  position: "absolute",
                                  textDecoration: "none",
                                  cursor: "pointer",
                                }}
                                onClick={() => sendMessage()}
                              >
                                <>
                                  <i
                                    style={{ fontSize: "1.5rem" }}
                                    className="messageSend fa-regular fa-paper-plane py-3"
                                  ></i>
                                </>
                              </div>
                            </div>
                          </div>
                        </>
                      ) : (
                        <div
                          className="d-flex justify-content-center align-items-center flex-column"
                          style={{
                            height: "70vh",
                            color: "#c0c0c0",
                            width: "100%",
                          }}
                        >
                          <img width={50} src={lightMessage} alt="" />
                          <span style={{ fontSize: "25px" }}>
                            No conversation selected!
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </>
              ) : (
                <div
                  className="d-flex justify-content-center align-items-center flex-column"
                  style={{ height: "70vh", color: "#c0c0c0" }}
                >
                  <img width={50} src={lightMessage} alt="" />
                  <span style={{ fontSize: "25px" }}>No conversations yet</span>
                </div>
              )}
            </>
          )}

          {show === true && (
            <>
              <div>
                <h1
                  className="my-3"
                  style={{
                    fontWeight: "700",
                    width: "25%",
                    borderBottom: "4px solid #3247ff",
                    borderRadius: "5px",
                    paddingBottom: "0.5rem",
                  }}
                >
                  {" "}
                  <img src={message} alt="" /> Messages
                </h1>
              </div>

              <div>
                <div
                  onClick={() => setShow(false)}
                  style={{ textDecoration: "none" }}
                  className=" my-5"
                >
                  {allChats.map((chat, i) => {
                    return (
                      <>
                        <div className="d-flex justify-content-between my-2">
                          <div className="d-flex ">
                            <div
                              key={i}
                              className="d-flex align-items-center"
                              onClick={() => setSelectedUserId(chat._id)}
                            >
                              <img
                                src={chat.pic}
                                alt=""
                                style={{
                                  width: "70px",
                                  height: "70px",
                                  borderRadius: "50%",
                                  objectFit: "cover",
                                }}
                              />
                              <div className="d-flex align-items-center flex-column">
                                <h2
                                  className="msg-h2 mx-2"
                                  style={{
                                    fontSize: "1.3rem",
                                  }}
                                >
                                  {chat.userName}
                                </h2>
                              </div>
                            </div>
                          </div>

                          <div className="d-flex align-items-center">
                            <span
                              key={chat._id}
                              style={{ color: "#c0c0c0" }}
                              onClick={() => setSelectedUserId(chat._id)}
                            >
                              Hello, I am owner of {chat.message}...
                            </span>
                            <div className="mx-3">
                              <span>
                                <NotificationBadge
                                  className="notificationBadge2"
                                  count={newMessageCount.length}
                                  effect={Effect.SCALE}
                                />
                              </span>
                            </div>
                          </div>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default MessageDash;
