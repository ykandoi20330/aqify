import React from 'react'
import { Link } from 'react-router-dom'

const AdminApproveList = () => {
    return (
        <>
            <div className='d-flex flex-column align-items-start'>
                <div className='d-flex justify-content-center flex-column' style={{ height: '20vh', background: '#eef0fe' }}>
                    <h1 className='mx-3' style={{ fontWeight: '700' }}>Approved Listings</h1>
                    <span className='mx-3' style={{ color: '#636363' }}>View and edit all listing settings</span>
                </div>

                <div className='w-100'>
                    <div className="Approvedcard py-5" style={{width:'95%'}}>
                        <div className='d-flex justify-content-between align-items-center py-2 px-5 rounded-pill my-2' style={{background:'#EEF0FE'}}>
                            <ul className='my-0'>
                                <li>Ecommece</li>
                            </ul>
                            <div>
                                <Link to="#" style={{textDecoration:'none'}} className='btn btn-danger rounded-pill py-1'>Delete</Link>
                            </div>
                        </div>
                        <div className='d-flex justify-content-between align-items-center py-2 px-5 rounded-pill my-2' style={{background:'#EEF0FE'}}>
                            <ul className='my-0'>
                                <li>Ecommece</li>
                            </ul>
                            <div>
                                <Link to="#" style={{textDecoration:'none'}} className='btn btn-danger rounded-pill py-1'>Delete</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminApproveList