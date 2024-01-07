
import React ,{useEffect, useState}from 'react'
import google from "./SignIn/google-svg.svg"
import background from "./SignIn/unsplash5u-28ojjgms@2x2.png"
import vector from "./SignIn/Frame 21.svg"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ENV from '../config.js';

const SignIn = () => {

  const toastOptions = {
    position: "top-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
    color:"blue"
  };

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();


  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      navigate('/MainDashboard/Dashbaord');
    }
  } ,[]);

  

  const validation = () => {

    if (!formData.email) {
      toast.error("Email is required.", toastOptions);
      return false;
    } 

    if (!formData.password) {
      toast.error("Password is required.", toastOptions);
      return false;
    }

    return true;
  };

  const collectData = async (e) => {
    e.preventDefault();
  
    if (validation()) {
      try {
        const response = await fetch(`${ENV.BACKEND_URL}/users/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
          if (response.status === 200) {
          const data = await response.json();
          localStorage.setItem('user',JSON.stringify(data)); 
          setFormData({
            email: '',
            password: '',
          });
          window.location.href = `${ENV.FRONTEND_URL}/#/MainDashboard/Dashbaord`;
          // window.location.href = `${ENV.FRONTEND_URL}/aqify#/MainDashboard/Dashbaord`;
        }
        else if(response.status === 401){
          toast.error("Invalid Email or Password", toastOptions);
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
      <section>
        <div className="Signin-back" style={{ backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', position: 'absolute', width: '100%', height: '100%', padding:'2rem 0' }}>
          <div className="signIn-card">
            <div className="d-flex flex-column align-items-center mb-4">
              <div className='my-2'>
                <Link to="/"><img src={vector} alt="" /></Link>
              </div>
              <div className="d-flex flex-column align-items-center my-2">
                <h2 style={{ color: '#fff', fontWeight: '700' }}>Welcome Back</h2>
                <span style={{ color: '#c0c0c0' }}>Don’t have any account?<Link className='mx-2' style={{ color: '#6C7AFF' }} to="/singup">Join now</Link></span>
              </div>
            </div>

            <div>
              <div className="form-floating mb-3 SignIn-input">
                <input type="text" name='email' className="form-control" id="floatingInput" placeholder="" style={{ background: "#121314", color: '#c0c0c0', border: "1px solid #636363" }} 
                 onChange={handleChange}
                 value={formData.email}/>
                <label for="floatingInput"><i style={{ color: '#fff' }} className="fa-regular fa-envelope mx-2"></i></label>
              </div>
            </div>

            <div>
              <div className="form-floating mb-3 SignIn-input">
                <input type="password" name="password" className="form-control" id="floatingInput" placeholder="" style={{ background: "#121314", color: '#c0c0c0', border: "1px solid #636363" }}
                 onChange={handleChange}
                 value={formData.password}/>
                <label for="floatingInput"><i style={{ color: '#fff' }} className="fa-solid fa-shield-cat mx-2"></i></label>
                <span className="d-flex justify-content-end" style={{ color: '#6C7AFF' }}>Forgot Password?</span>
              </div>
            </div>

            <div className='my-3'>
              <button  style={{ width: '100%' }} className="btn btn-primary" onClick={collectData}>
                Join
              </button>
            </div>

            <div className="d-flex justify-content-center align-items-center my-3">
              <div className="or-line"></div>
              <div style={{ color: '#fff', margin: '0 2rem' }}>OR</div>
              <div className="or-line"></div>
            </div>

            <div>
            <Link to={ENV.GOOGLE}>
                <button style={{ width: '100%', background: '#fff', color: '#282A2B',padding:'0.8rem' }} className="btn">
                <img className='mx-3' src={google} alt="" />
                Sign  up with Google
                </button>
                </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default SignIn