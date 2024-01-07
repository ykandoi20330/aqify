import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ENV from "../config.js";

const AdminApproveList = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        getCards();
    }, []);

    const getCards = async () => {
        try {
            const response = await axios.get(
                `${ENV.BACKEND_URL}/business/getApprovedbusiness`
            );
            console.log(response.data.business);
            setCards(response.data.business);
        } catch (error) {
            console.error(error);
        }
    };

    const handleDelete = async (id) => {
        try {
            const response = await axios.post(
                `${ENV.BACKEND_URL}/business/deny`, { id: id });
            console.log(response.data.business);
            getCards();
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <div className='d-flex flex-column align-items-start'>
                <div className='d-flex justify-content-center flex-column' style={{ height: '20vh', background: '#eef0fe' }}>
                    <h1 className='mx-3' style={{ fontWeight: '700' }}>Approved Listings</h1>
                    <span className='mx-3' style={{ color: '#636363' }}>View and edit all listing settings</span>
                </div>

                <div className='w-100'>
                    <div className="Approvedcard py-5" style={{ width: '95%' }}>
                        {cards.map((card, index) => (
                            <div key={index} className='d-flex justify-content-between align-items-center py-2 px-5 rounded-pill my-2' style={{ background: '#EEF0FE' }}>
                                <ul className='my-0'>
                                    <li>{card.businessName}</li> 
                                </ul>
                                <div>
                                    <Link to="#" style={{ textDecoration: 'none' }} className='btn btn-danger rounded-pill py-1' onClick={() => handleDelete(card._id)}>Delete</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminApproveList;
