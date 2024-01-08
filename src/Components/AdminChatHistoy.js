import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import ENV from "../config.js";
import Axios from "axios";
import message from "./ProfileDashbaord/chatteardropdots1.svg";
import lightMessage from "./ProfileDashbaord/chatteardropdots1.svg";

const AdminChatHistoy = () => {
  const [cards, setCards] = useState([]);
  const [selectedSenderId, setSelectedSenderId] = useState(null);
  const [allChats, setAllChats] = useState([]);
  const [messages, setMessages] = useState([]);
  const [selectedRecieverId, setSelectedRecieverId] = useState(null);

  const [show, setShow] = useState(true);
  const [id, setId] = useState(null);

  useEffect(() => {
    getCards();
  }, []);

  const getCards = async () => {
    try {
      const response = await axios.get(`${ENV.BACKEND_URL}/users/getAllUsers`);
      setCards(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleUserSelect = (event) => {
    setSelectedSenderId(event.target.value);
    handleMsg(event.target.value);
  };

  const handleMsg = async (selectedSenderId) => {
    getAllChats(selectedSenderId);
  };

  const getChat = async () => {
    if (!selectedRecieverId) return;
    try {
      const { data } = await Axios.get(
        `${ENV.BACKEND_URL}/chat/getchat/${selectedRecieverId}`,
        {
          params: { id: selectedSenderId },
        }
      );
      setMessages(data);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getChat();
  }, [selectedRecieverId]);

  const getAllChats = async (selectedSenderId) => {
    Axios.get(`${ENV.BACKEND_URL}/chat/allChats`, {
      params: { id: selectedSenderId },
    })
      .then(({ data }) => {
        console.log(data);
        setAllChats(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <section>
        <div className="d-flex flex-column align-items-start">
          <div
            className="d-flex justify-content-center flex-column"
            style={{ height: "20vh", background: "#eef0fe" }}
          >
            <h1 className="mx-3" style={{ fontWeight: "700" }}>
              Conversation review
            </h1>
            <span className="mx-3" style={{ color: "#636363" }}>
              View and edit all chat settings and See the conversation.
            </span>
            <div className="mt-3 mx-3">
              <label htmlFor="userDropdown">Select User:</label>
              <select
                id="userDropdown"
                className="mx-2"
                onChange={handleUserSelect}
                style={{
                  color: "#000",
                  background: "#EEF0FE",
                  borderRadius: "5px",
                }}
              >
                <option value="">Select a user</option>
                {cards.map((user, index) => (
                  <option key={index} value={user._id}>
                    {user.userName}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="message-card" style={{ padding: "2rem" }}>
          {show === false && (
            <>
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
                            onClick={() => setSelectedRecieverId(chat._id)}
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
                              onClick={() => setSelectedRecieverId(chat._id)}
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
                        <h4>Acqify</h4>
                      </div>
                      {selectedRecieverId ? (
                        <div
                          className="d-flex justify-content-center flex-column"
                          style={{
                            color: "#c0c0c0",
                            width: "100%",
                            height: "85%",
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
                                  className={`${
                                    message.sender === selectedSenderId
                                      ? "float-end"
                                      : "text-start"
                                  } inline-block p-2 my-2 rounded-md text-sm ${
                                    message.sender === selectedSenderId
                                      ? "bg-primary text-white"
                                      : "bg-light text-primary"
                                  }`}
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
                              onClick={() => setSelectedRecieverId(chat._id)}
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
                              onClick={() => setSelectedRecieverId(chat._id)}
                            >
                              Hello, I am owner of {chat.message}...
                            </span>
                            <div className="mx-3">
                              <span className="badge rounded-pill text-bg-danger">
                                {i}+
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
        <section></section>
      </section>
    </>
  );
};

export default AdminChatHistoy;
