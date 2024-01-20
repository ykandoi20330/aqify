import google from "./SignUp/google-svg.svg"
import background from "./SignUp/unsplash5u-28ojjgms@2x2.png"
import { Link } from "react-router-dom";
import vector from "./SignIn/Frame 21.svg"
import React,{useState} from 'react';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ENV from '../config.js';

const SignUp = () => {

  const toastOptions = {
    position: "top-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
    color:"blue"
  };

  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    password: '',
  });
  const [role,setrole]=useState(null);
  const navigate = useNavigate();

  const handleOptionChange = (event) => {
    setrole(event.target.value);
  };

  const handleClick = () => {
    if (role === 'owner' || role === 'acquirer') {
      window.location.href = `${ENV.BACKEND_URL}/auth/google`;
    }
    else{
      toast.error("Firstly Select the Role", toastOptions);
    }
  };
  const validation = () => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;

    if (!formData.userName) {
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

    if (!formData.password) {
      toast.error("Password is required.", toastOptions);
      return false;
    } else if (!passwordPattern.test(formData.password)) {
      toast.error("Password should have at least one lowercase letter, one uppercase letter, and one special character", toastOptions);
      return false;
    }

    if(!role){
      toast.error("Role is required.", toastOptions);
      return false;
    }

    return true;
  };

  const collectData = async (e) => {
    e.preventDefault();
  
    if (validation()) {
      try {
        console.warn(formData,role);
        const response = await fetch(`${ENV.BACKEND_URL}/users/register`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
          body: JSON.stringify({formData,role}),
        });
  

        console.warn(response)
        if (response.status === 201) {
          const data = await response.json();
          localStorage.setItem('user',JSON.stringify(data));
          localStorage.setItem("token",data.token);
          setFormData({
            userName: '',
            email: '',
            password: '',
            role:'',
          });
          navigate('/MainDashboard/Dashbaord')
        }
        else if(response.status === 404){
          toast.error("Username or Email Already Taken", toastOptions);
        } 
        else if(response.status === 400){
          toast.error("Please enter correct data", toastOptions);
        }
        else {
          toast.error('Error:', response.statusText);
        }
      } catch (error) {
        toast.error('Username already taken', error);
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
        <div className="SignUp-back" style={{ backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', position: 'absolute', width: '100%', height: '100%', padding:'2rem 0' }}>
          <div className="SignUp-first col-4 mx-2">
            <Link to="/"><img src={vector} alt="" /></Link>
            <h1 className="my-4" style={{ color: '#fff', fontWeight: '700' }}>Sign up for a free account to access the Marketplace</h1>
            <span style={{ color: '#c0c0c0' }}>Make your profile to negotiate directly with founders of vetted $100K+ revenue startups, scale-ups and SMBs.</span>
          </div>

          <div className="SignUp-second mx-2">
            <div className="signUp-card">

              <div className="d-flex flex-column align-items-center mb-4">
                <h2 style={{ color: '#fff', fontWeight: '700' }}>Join now on Acqify</h2>
                <span style={{ color: '#c0c0c0' }}>Already have an account?<Link className='mx-2' style={{ color: '#6C7AFF' }} to="/singin">Log in</Link></span>
              </div>

              <div onClick={handleClick}>
                <Link to="#">
                <button style={{ width: '100%', background: '#fff', color: '#282A2B',padding:'0.8rem' }} className="btn">
                <img className='mx-3' src={google} alt="" />
                Sign  up with Google
                </button>
                </Link>

                
              </div>

              <div className="d-flex justify-content-center align-items-center my-4">
                <div className="or-line"></div>
                <div style={{ color: '#fff', margin: '0 2rem' }}>OR</div>
                <div className="or-line"></div>
              </div>

              <div>
                <div className="form-floating mb-3 SignIn-input">
                  <input type="text" className="form-control" id="floatingInput" placeholder="Enter Your Name" style={{ background: "#121314", color: '#c0c0c0', border: "1px solid #636363" }} 
                  name="userName"
                  onChange={handleChange}
                  value={formData.userName}/>
                  <label for="floatingInput"><i style={{ color: '#fff' }} className="fa-regular fa-user mx-2"></i></label>
                </div>
              </div>

              <div>
                <div className="form-floating mb-3 SignIn-input">
                  <input type="email" className="form-control" id="floatingInput" placeholder="Enter your Email" style={{ background: "#121314", color: '#c0c0c0', border: "1px solid #636363" }} 
                  name="email"
                  onChange={handleChange}
                  value={formData.email}/>
                  <label for="floatingInput"><i style={{ color: '#fff' }} className="fa-regular fa-envelope mx-2"></i></label>
                </div>
              </div>

              <div>
                <div className="form-floating mb-3 SignIn-input">
                  <input type="password" className="form-control" id="floatingInput" placeholder="Enter Password" style={{ background: "#121314", color: '#c0c0c0', border: "1px solid #636363" }} 
                  name="password"
                  onChange={handleChange}
                  value={formData.password}/>
                  <label for="floatingInput"><i style={{ color: '#fff' }} className="fa-solid fa-shield-cat mx-2"></i></label>
                  <span className="d-flex justify-content-end" style={{ color: '#fff' }}>Minimum 8 characters</span>
                </div>
              </div>

              <div className="d-flex flex-column align-items-center my-3">
                <span style={{ color: '#fff' }}>Indicate your main account type</span>
                <div className="d-flex my-2">
                  <div>
                    <input type="radio" className="btn-check  rounded-pill" name="options-base" id="option11" autocomplete="off"  
                    onChange={handleOptionChange}
                    value="owner" />
                    <label className="btn1" style={{ padding: "0.5rem", margin: '0.3rem 0.7rem 0 0', background: "#EEF0FE" }} for="option11">
                      <i className="fa-solid fa-circle-check mx-2"></i>
                      Owner ( Seller )</label>
                  </div>

                  <div >
                    <input type="radio" className="btn-check  rounded-pill" name="options-base" id="option12" autocomplete="off" 
                    onChange={handleOptionChange}
                    value="acquirer" />
                    <label className="btn1" style={{ padding: "0.5rem", margin: '0.3rem 0.7rem 0 0', background: "#EEF0FE" }} for="option12">
                      <i className="fa-solid fa-circle-check mx-2"></i>
                      Acquirer (buyer)</label>
                  </div>
                </div>
              </div>

              <div className='my-2'>
                <button style={{ width: '100%' }} className="btn btn-primary" onClick={collectData} >
                     Join
                </button>
              
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default SignUp