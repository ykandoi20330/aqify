import React, { useState } from 'react'
//side content
import profilePhoto from "./ProfileDashbaord/group-11.svg"

//card content
import verify from "./ProfileDashbaord/vector1.svg"
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DashboardProfile = () => {

    // const [profileImage,setprofileImage]=useState(pic);

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        userName: '',
        about: '',
        role: ''
    });


    // import logo1 from "./SignIn/vector.svg"
    // const DashboardProfile = () => {
    const toastOptions = {
        position: "top-right",
        autoClose: 8000,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
        color: "blue"
    };
    // }





    const validation = () => {
        if (!formData.firstName) {
            toast.error("First name is required.", toastOptions);
            return false;
        }

        if (!formData.lastName) {
            toast.error("Last name is required.", toastOptions);
            return false;
        }

        if (!formData.userName) {
            toast.error("Username is required.", toastOptions);
            return false;
        }

        if (!formData.about) {
            toast.error("Description is required.", toastOptions);
            return false;
        }

        if (!formData.role) {
            toast.error("Role is required.", toastOptions);
            return false;
        }

        return true;
    };

    const collectData = async (e) => {
        e.preventDefault();
        if (validation()) {
            try {
                let userId = JSON.parse(localStorage.getItem('user'));
                userId = userId._id;
                console.log(userId);
                console.warn(formData);
                const response = await fetch('http://localhost:5000/users/updateProfile', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    credentials: 'include',
                    body: JSON.stringify({ formData, userId }),
                });
                console.warn(response)
                const data = await response.json();
                if (response.status === 200) {
                    //   console.warn(data);
                    setFormData({
                        firstName: '',
                        lastName: '',
                        userName: '',
                        about: '',
                        role: ''
                    });
                    toast.success(data.message, toastOptions);
                }
                else {
                    toast.error(data.message, toastOptions);
                }
            } catch (error) {
                console.error('Error:', error);
            }
        }
    };


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };



    return (
        <>
            <section className='profile-section'>
                {/** Profile content */}

                <div className="sideContent">

                        <div className="sideContent">
                            <ToastContainer />

                            <div>
                                <h1 style={{ fontWeight: '700' }}>Profile</h1>
                                <span style={{ color: '#636363' }}>Update your information below</span>
                            </div>

                            <div className='profile-card d-flex'>
                                <div className='profile-content d-flex justify-content-around align-items-center'>
                                    <div className="profilePhoto d-flex flex-column align-items-center">
                                        <img src={profilePhoto} alt="" />
                                        <Link className='btn btn-primary rounded-pill' style={{ padding: '0.5rem 0.8rem' }}><img src={verify} alt="" />Verify</Link>
                                    </div>

                                    <div style={{ width: '60%' }}>
                                        <div class="mb-3 my-3">
                                            <div class="row">
                                                <div class="col">
                                                    <label for="exampleFormControlInput1" class="form-label" style={{ color: '#636363' }}>First name</label>
                                                    <input style={{ height: '6vh' }} type="text" class="form-control" aria-label="First name" name='firstName'
                                                        value={formData.firstName}
                                                        onChange={handleChange} />
                                                </div>
                                                <div class="col">
                                                    <label for="exampleFormControlInput1" class="form-label" style={{ color: '#636363' }}>Last name</label>
                                                    <input style={{ height: '6vh' }} type="text" class="form-control" aria-label="Last name" name='lastName'
                                                        value={formData.lastName}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="mb-3 my-3">
                                            <label for="exampleFormControlInput1" class="form-label" style={{ color: '#636363' }}>Username</label>
                                            <input style={{ height: '6vh' }} type="email" class="form-control" id="exampleFormControlInput1" name='userName'
                                                value={formData.userName}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div class="mb-3 my-3">
                                            <label for="exampleFormControlTextarea1" class="form-label" style={{ color: '#636363' }}>About me</label>
                                            <textarea style={{ height: '25vh' }} class="form-control" id="exampleFormControlTextarea1" rows="3" name='about'
                                                value={formData.about}
                                                onChange={handleChange}></textarea>
                                        </div>

                                        <div>
                                            <span className='my-5' style={{ color: '#636363' }}>Change your account type</span>
                                            <div className='d-flex flex-wrap'>
                                                <div>
                                                    <input type="radio" class="btn-check  rounded-pill" name="options-base" id="option8" autocomplete="off" value="owner" onChange={handleChange}  />
                                                    <label class="btn1" style={{ padding: "0.5rem", margin: '0.3rem 0.7rem 0 0', background: "#EEF0FE" }} for="option8">
                                                        <i class="fa-solid fa-circle-check mx-2"></i>
                                                        Owner( Seller )</label>
                                                </div>
                                                <div >
                                                    <input type="radio" class="btn-check  rounded-pill" name="options-base" id="option9" autocomplete="off" value="acquirer" onChange={handleChange} />
                                                    <label class="btn1" style={{ padding: "0.5rem", margin: '0.3rem 0.7rem 0 0', background: "#EEF0FE" }} for="option9">
                                                        <i class="fa-solid fa-circle-check mx-2"></i>
                                                        Acquirer( buyer )</label>
                                                </div>
                                                <div>
                                                    <input type="radio" class="btn-check  rounded-pill" name="options-base" id="option10" autocomplete="off" value="owner and acquirer" onChange={handleChange} />
                                                    <label class="btn1" style={{ padding: "0.5rem", margin: '0.3rem 0.7rem 0 0', background: "#EEF0FE" }} for="option10">
                                                        <i class="fa-solid fa-circle-check mx-2"></i>
                                                        Owner and Aquirer</label>
                                                </div>
                                            </div>
                                        </div>

                                        <button class="profile-btn btn btn-primary my-3 rounded-pill" type="submit" style={{ width: '40%', padding: "0.8rem 1.5rem" }} onClick={collectData}>Save changes</button>

                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </section>
        </>)
}
export default DashboardProfile