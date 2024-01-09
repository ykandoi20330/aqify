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

        <div className='d-flex flex-wrap align-items-center justify-content-center'>
          {cards.map((item, index) => {
            return (
              <div key={index} className='AdminFeedbackcard'>
                <div className='d-flex align-items-center justify-content-between py-2 px-3'>
                  <div className='d-flex align-items-center'>
                    <img style={{ borderRadius: '5px' }} width={50} src={item.pic || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"} alt="" />
                    <div>
                      <h4 className='mx-2'>{item.username}</h4>
                    </div>
                  </div>
                  <div>
                    <h6 style={{fontWeight:'700'}}>{item.listingName}</h6>
                  </div>
                </div>
                <hr />
                <div className='py-2 px-3'>
                  <div className='my-2'>
                    <h5>1).Did you Like it?</h5>
                    <span style={{ color: '#3247FF', fontWeight: '700' }}>{item.basicFeedback}</span>
                  </div>
                  <div className='my-2'>
                    <h5>2).How was the Pricing?</h5>
                    <span style={{ color: '#3247FF', fontWeight: '700' }}>{item.moreDetails}</span>
                  </div>
                  <div className='my-2'>
                    <h5>3).Acquisition financing?</h5>
                    <span>( not having enough money )</span><br />
                    <span style={{ color: '#3247FF', fontWeight: '700' }}>{item.buildFeedback}</span>
                  </div>
                  <div className='my-2'>
                    <h5>4).Other feedback you’re giving?</h5>
                    <span style={{ color: '#3247FF', fontWeight: '700' }}>{item.otherFeedback}</span>
                  </div>
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