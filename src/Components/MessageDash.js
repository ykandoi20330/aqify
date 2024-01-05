import React, { useEffect, useState, useRef } from "react";
import message from "./ProfileDashbaord/chatteardropdots1.svg";
import lightMessage from "./ProfileDashbaord/chatteardropdots1.svg";
import { Link } from "react-router-dom";
import Axios from "axios";
import ENV from "../config.js";
import { jwtDecode } from "jwt-decode";
import EmojiPicker from "emoji-picker-react";

const MessageDash = () => {
  const [ws, setWs] = useState(null);
  const [allChats, setAllChats] = useState([]); // this is the list of all the chats that the user has brougt by the function get AllChats
  const [selectedUserId, setSelectedUserId] = useState(null); // this is the id of the user that the user is currently chatting with
  const [messages, setMessages] = useState([]); // this is the list of all the messages that the user has sent to the selected user
  const [newMessageText, setNewMessageText] = useState(""); // this is the text that the user is currently typing in the input field
  const [id, setId] = useState(null); // this is the id of the user that is currently logged in

  const [emoji, setEmoji] = useState(false);
  const [chosenEmoji, setChosenEmoji] = useState("");
  const [show, setShow] = useState(true);

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
      setMessages(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getChat();
  }, [selectedUserId]);

  const sendMessage = (ev) => {
    if (ev) ev.preventDefault();
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
                            <div class="d-flex mb-3 my-3 ">
                              <div className="d-flex justify-content-center align-items-center">
                                <Link onClick={emojiDropdown}>
                                  <i
                                    style={{
                                      color: "#3247FF",
                                      fontSize: "1.5rem",
                                    }}
                                    class="fa-solid fa-face-smile mx-2"
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
                                    class="messageSend fa-regular fa-paper-plane py-3"
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
                              <span class="badge rounded-pill text-bg-danger">
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

              <div>
                <div className="" style={{ color: "#636363", width: "100%" }}>
                  <div class="d-flex mb-3 my-3 ">
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
                      onChange={(ev) => setNewMessageText(ev.target.value)}
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
                          class="messageSend fa-regular fa-paper-plane py-3"
                        ></i>
                      </>
                    </div>
                  </div>
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
