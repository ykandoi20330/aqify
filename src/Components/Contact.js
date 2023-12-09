import React,{useState} from 'react'
import backgroundImg from "./Pricing/unsplash_5U_28ojjgms.png"
import arrow from "./Aqify project/Vector (1).png"
import Navbar from "./Navbar"
import Footer from './Footer'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
    const toastOptions = {
        position: "top-right",
        autoClose: 6000,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      };
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
            else if(response.status === 500){
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
        <section>
            <Navbar/>
        </section>

        {/** */}
        <ToastContainer/>
            <section className='pricing-first-section'>
                <div className="pricing-backgroundImage" style={{ backgroundImage: `url(${backgroundImg})`, width: '100%', height: '80vh', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                    <h1 className='col-6 text-center'>Contact Us</h1>
                    <span className="col-4 text-center" style={{margin:'0rem'}}>We'd really like to hear any feedback or issue that you might have.</span>
                </div>
            </section>

            <section className="contact-back" style={{ height: '120vh' }} >
                <div className="contact-card">
                    <div class="mb-3 my-3">
                        <label for="exampleFormControlInput1" class="form-label" style={{color:'#636363'}}>Please enter your full name</label>
                        <input type="text" name='name' class="form-control" id="exampleFormControlInput1" placeholder="&#128100; Name"
                         onChange={handleChange}
                         value={formData.name}/>
                    </div>
                    <div class="mb-3 my-3">
                        <label for="exampleFormControlInput1" class="form-label" style={{color:'#636363'}}>Please enter your email address</label>
                        <input type="email" name='email' class="form-control"  id="exampleFormControlInput1" placeholder="&#128386; Email Address"  
                        onChange={handleChange}
                         value={formData.email}/>
                    </div>
                    <div class="mb-3 my-3">
                        <label for="exampleFormControlTextarea1" class="form-label" style={{color:'#636363'}}>Please enter your message below</label>
                        <textarea class="form-control" name='message' id="exampleFormControlTextarea1" rows="3" placeholder='&#128386; Message'
                         onChange={handleChange}
                         value={formData.message}>
                         </textarea>
                    </div>
                    <button class="contact-btn btn btn-primary my-3" type="submit" style={{width:'30%', padding:"1.5rem 2.5rem"}} onClick={collectData}>Send Us <img style={{ width: '10%' }} src={arrow} alt="" /></button>
                </div>
            </section>

            <section>
                <Footer/>
            </section>
        </>
    )
}

export default Contact