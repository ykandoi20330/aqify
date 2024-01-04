import React, {useState, useEffect} from 'react'
import DataTable from 'react-data-table-component'
import axios from 'axios';
import ENV from "../config.js";

const AdminPanel = () => {

    const [card, setCard] = useState([]);

    useEffect(() => {
        getCard();
    }, []);

    const getCard = async () => {
        try {
            const response = await axios.get(
                `${ENV.BACKEND_URL}/business/getbusiness`);
            console.log(response.data.business);
            setCard(response.data.business);

        } catch (error) {
            console.error(error);
        }
    }


    return (
        <div className='d-flex flex-column align-items-center'>
            <h1>Listing DataTable</h1>
            <DataTable />
        </div>
    )
}

export default AdminPanel