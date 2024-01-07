import React , {useState , useEffect} from 'react'
import { Link } from 'react-router-dom';
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
      <div className='d-flex flex-column align-items-start'>
        <div className='d-flex justify-content-center flex-column' style={{ height: '20vh', background: '#eef0fe' }}>
          <h1 className='mx-3' style={{ fontWeight: '700' }}>Feedback data review</h1>
          <span className='mx-3' style={{ color: '#636363' }}>View and edit all feed settings</span>
        </div>
      </div>
    </>
  )
}

export default AdminFeedback