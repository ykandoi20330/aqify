//side content
import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import arrow from "./Aqify project/Vector (1).png"

const ContactDashboard = () => {
    const toastOptions = {
        position: "top-right",
        autoClose: 6000,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      };
      const navigate=useNavigate();
      const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
      });
    
      const validation = () => {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
        if (!formData.name) {
          toast.error("Name is required.", toastOptions);
          return false;
        }
    
        if (!formData.email) {
          toast.error("Email is required.", toastOptions);
          return false;
        } else if (!emailPattern.test(formData.email)) {
          toast.error("Please Enter Correct Email.", toastOptions);
          return false;
        }
    
        if(!formData.message){
          toast.error("Message is required.", toastOptions);
          return false;
        }
    
        return true;
      };
    
      const collectData = async (e) => {
        e.preventDefault();
      
        if (validation()) {
          try {
            console.warn(formData);
            const response = await fetch('http://localhost:5000/contact/send', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              credentials: 'include',
              body: JSON.stringify({formData}),
            });
      
    
            console.warn(response)
            const data = await response.json();
            if (response.status === 200) {
              setFormData({
                name: '',
                email: '',
                message: '',
              });
              toast.success(data.message, toastOptions);
            }
            else if(response.status===500){
                toast.error(data.message, toastOptions);
            }
            else {
              console.error('Error:', response.statusText);
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
        <ToastContainer/>
            <section className='profile-section'>
                <div className="sideContent">

                    <div className='contactDashboard-card d-flex'>
                        <div>
                            <h1 style={{ fontWeight: '700', width: '28%', borderBottom: "4px solid #3247ff", borderRadius: '5px' }}>Contact us</h1>
                        </div>
                        <div class="mb-3 my-3">
                            <label for="exampleFormControlInput1" class="form-label" style={{ color: '#636363' }}>Please enter your full name</label>
                            <input type="text" class="form-control" name='name' id="exampleFormControlInput1" placeholder="&#128100; Name"
                            onChange={handleChange} value={formData.name} />
                        </div>
                        <div class="mb-3 my-3">
                            <label for="exampleFormControlInput1" class="form-label" style={{ color: '#636363' }}>Please enter your email address</label>
                            <input type="email" class="form-control" name='email' id="exampleFormControlInput1" placeholder="&#128386; Email Address" 
                            onChange={handleChange} value={formData.email}/>
                        </div>
                        <div class="mb-3 my-3">
                            <label for="exampleFormControlTextarea1" class="form-label" style={{ color: '#636363' }}>Please enter your message below</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" name='message' rows="3" placeholder='&#128386; Message'
                            onChange={handleChange} value={formData.message}></textarea>
                        </div>
                        <button class="contact-btn btn btn-primary my-3" type="submit" style={{ width: '30%', padding: "1.5rem 2.5rem" }} onClick={collectData}>Send Us <img style={{ width: '10%' }} src={arrow} alt="" /></button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactDashboard