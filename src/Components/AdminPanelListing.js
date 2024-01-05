import React, { useState, useEffect } from 'react'
import DataTable from 'react-data-table-component'
import axios from 'axios';
import ENV from "../config.js";
import { Link } from 'react-router-dom';

const AdminPanelListing = () => {

    const [card, setCard] = useState([]);
    const [filterSearch, setFilterSearch] = useState([]);
    const [searchTerm, setSearchTerm] = useState([]);

    useEffect(() => {
        getCard();
    }, []);

    const getCard = async () => {
        try {
            const response = await axios.get(
                `${ENV.BACKEND_URL}/business/getbusiness`);
            console.log(response.data.business);
            setCard(response.data.business);
            setFilterSearch(response.data.business);

        } catch (error) {
            console.error(error);
        }
    }

    const columns = [
        {
            name: "Project Name",
            selector: (row) => row.projectName,
            sortable: true,
        },
        {
            name: "Category",
            selector: (row) => row.category
        },
        {
            name: "Valuation",
            selector: (row) => row.valuation
        },
        {
            name: "Tech Stack1",
            selector: (row) => row.techStack1
        },
        {
            name: "Tech Stack2",
            selector: (row) => row.techStack2
        },
        {
            name: "Tech Stack3",
            selector: (row) => row.techStack3
        },
        {
            name: "Tech Stack4",
            selector: (row) => row.techStack4
        },
        {
            name: 'Approve Listing',
            cell: row => <button className='btn btn-primary py-1 px-3 rounded-pill' onClick={() => alert(row.projectName)}>Approve</button>
        },
        {
            name: 'Cancel Listing',
            cell: row => <button className='btn btn-danger py-1 px-3 rounded-pill' onClick={() => alert(row.projectName)}>Deny</button>
        },
    ]

    const onSearch = (searchTerm) => {
        setFilterSearch(card.filter(f => f.projectName.toLowerCase().includes(searchTerm.toLowerCase())))
    }

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
        onSearch(e.target.value);
    }



    return (
        <div className='d-flex flex-column align-items-center'>
            <div className='d-flex align-items-center' style={{height:'20vh'}}>
                <h1>Acqify Listing Data</h1>
            </div>
            <DataTable
                title="Listings Details"
                columns={columns}
                data={filterSearch}
                pagination
                responsive
                fixedHeader
                selectableRows
                selectableRowsHighlight
                highlightOnHover
                actions={
                    <Link className='btn btn-primary py-1 px-3 rounded-pill' to="/">export</Link>
                }
                subHeader
                subHeaderComponent={
                    <input style={{ height: '7vh' }} type="text" placeholder='Search Here' className='w-25 form-control' value={searchTerm} onChange={handleSearch} />
                }
            />
        </div>
    )
}

export default AdminPanelListing