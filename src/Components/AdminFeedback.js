import React, { useState, useEffect } from 'react'
import axios from 'axios';
import ENV from "../config.js";

const AdminFeedback = () => {

  const [cards, setCards] = useState([]);

  useEffect(() => {
    getCards();
  }, []);

  const getCards = async () => {
    try {
      const response = await axios.get(
        `${ENV.BACKEND_URL}/users/getFeedback`
      );
      console.log(response.data);
      setCards(response.data);
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <>
      <section>
        <div className='d-flex flex-column align-items-start'>
          <div className='d-flex justify-content-center flex-column' style={{ height: '20vh', background: '#eef0fe' }}>
            <h1 className='mx-3' style={{ fontWeight: '700' }}>Feedback data review</h1>
            <span className='mx-3' style={{ color: '#636363' }}>View and edit all feed settings</span>
          </div>
        </div>

        <div>
          {cards.map((item, index) => {
            return (
              <div key={index} className='AdminFeedbackcard'>
                <div className='d-flex align-items-center'>
                  <img width={50} src={item.pic || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" } alt="" />
                  <div>
                    <h4 className='mx-2'>{item.username}</h4>
                  </div>
                </div>
                <div>
                  {item.feed}
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default AdminFeedback