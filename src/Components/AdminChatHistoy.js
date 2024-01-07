import React, { useEffect, useState } from "react";
import axios from "axios";
import ENV from "../config.js";
import Axios from "axios";

const AdminChatHistoy = () => {
  const [cards, setCards] = useState([]);
  const [selectedSenderId, setSelectedSenderId] = useState(null);
  const [allChats, setAllChats] = useState([]);
  const [messages, setMessages] = useState([]);
  const [selectedRecieverId, setSelectedRecieverId] = useState(null);

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
    getAllChats();
  };

  const getChat = async () => {
    const token = localStorage.getItem("token");
    if (!selectedRecieverId) return;
    try {
      const { data } = await Axios.get(
        `${ENV.BACKEND_URL}/chat/get-chat/${selectedRecieverId}`,
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
  }, [selectedRecieverId]);

  const getAllChats = async () => {
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
          <div className="mt-3">
            <label htmlFor="userDropdown">Select User:</label>
            <select
              id="userDropdown"
              onChange={handleUserSelect}
              style={{ color: "#000", background: "#fff" }}
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
    </>
  );
};

export default AdminChatHistoy;
