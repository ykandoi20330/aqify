import React,{useState}from 'react'
// import logo from "./ProfileDashbaord/vector.svg"
import logo from "./Aqify project/FrameWhiteLogo.svg"
import folder from "./ProfileDashbaord/folder.svg"
// import address from "./ProfileDashbaord/addressbook.svg"
import list from "./ProfileDashbaord/listnumbers.svg"
// import bell from "./ProfileDashbaord/bell.svg"
// import setting from "./ProfileDashbaord/gear.svg"
// import tag from "./ProfileDashbaord/tag.svg"
// import analytic from "./ProfileDashbaord/VectorAnalytics.svg"
import heart from "./ProfileDashbaord/VectorHeart.svg"
// import proof from "./ProfileDashbaord/VectorProof.svg"

//side content
import profilePhoto from "./ProfileDashbaord/group-11.svg"

//card content
import verify from "./ProfileDashbaord/vector1.svg"
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


// import pic from '../images/profile-images/group-11.svg'

//card content
// import ContactDashboard from './ContactDashboard'
// import MessageDash from './MessageDash'
// import message from "./ProfileDashbaord/chatteardropdots.svg"
// import PaymentDash from './PaymentDash'
// import ChangePassword from './ChangePassword'
// import Dashboard from './Dashboard'
// import PricingDash from './PricingDash'
// import MarketplaceDash from './MarketplaceDash'
// import MarketplaceDash2 from './MarketplaceDash2'
// import MarketDashDetail from './MarketDashDetail'
// import ProjectBuying from './ProjectBuying'
// import MyProject from './MyProject'
// import MyAnalytics from "./MyAnylatics"

// import profileIcon from "./ProfileDashbaord/ellipse-60@2x.png"
// import threeDots from "./ProfileDashbaord/dotsthreeoutlinevertical.svg"
// import message1 from "./ProfileDashbaord/chatteardropdots1.svg"

import logo1 from "./SignIn/vector.svg"
// import DashboardValuation from './DashboardValuation'
// import ProofOfFund from './ProofOfFund'

const DashboardProfile = () => {
    const toastOptions = {
        position: "top-right",
        autoClose: 8000,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
        color:"blue"
      };
    
    // const [profileImage,setprofileImage]=useState(pic);
    const [own, setOwn] = useState(1)
    const [Show, setShow] = useState(6)
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        userName:'',
        about:'',
        role:''
      });

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
    
        if(!formData.about){
            toast.error("Description is required.", toastOptions);
            return false;
        }

        if(!formData.role){
          toast.error("Role is required.", toastOptions);
          return false;
        }
    
        return true;
      };

      const collectData = async (e) => {
        e.preventDefault();
        if (validation()) {
          try {
            let userId=JSON.parse(localStorage.getItem('user'));
            userId = userId._id;
            console.log(userId);
            console.warn(formData);
            const response = await fetch('http://localhost:5000/users/updateProfile', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              credentials: 'include',
              body: JSON.stringify({formData,userId}),
            });
            console.warn(response)
              const data = await response.json();
            if (response.status === 200) {
            //   console.warn(data);
              setFormData({
                firstName: '',
                lastName: '',
                userName:'',
                about:'',
                role:''
              });
            toast.success(data.message,toastOptions);
            }
            else{
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
        <ToastContainer/>
            <section className='profile-section'>
                {own === 1 &&
                    <nav className='navbar navbar-expand-lg dashboard' style={{ top: '0px' }}>
                        <div class="container-fluid" style={{ padding: "0rem" }}>
                            <button style={{ margin: '0 1.5rem' }} class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div div style={{ left: '0', transform: 'translateX(-100%)' }} class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                                <div class="offcanvas-header">
                                    <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">
                                        <Link className="navbar-brand" to="/"><img src={logo1} alt="Logo" style={{ left: "0px" }} className='Logo' /></Link>
                                        <br />
                                    </h5>
                                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                </div>
                                <div class="offcanvas-body" style={{ left: '0px' }}>
                                    {/** */}
                                    <div class="Navdashboard d-flex flex-column flex-shrink-0 p-3 text-bg-dark" >
                                        <Link to="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                                            <img src={logo} alt="" />
                                            <br />
                                            <br />
                                            <br />
                                        </Link>
                                        <hr />
                                        <Link className='text-white' style={{ textDecoration: 'none' }} onClick={Show => setShow(1)}>
                                            <h2> Dashboard</h2>
                                        </Link>
                                        <ul class="nav flex-column mb-auto"/> {/**nav-pills */}
                                            <li class="nav-item">
                                                <Link to="#" class="nav-link1 text-white" aria-current="page" onClick={Show => setShow(8)}>
                                                    <img style={{ marginRight: "1rem" }} src={list} alt="" />
                                                    Lists
                                                </Link>
                                            </li>
                                            <li class="nav-item">
                                                <Link to="#" class="nav-link1 text-white" aria-current="page" onClick={Show => setShow("")}>
                                                    <img style={{ marginRight: "1rem" }} src={heart} alt="" />
                                                    Favourite Lists
                                                </Link>
                                            </li>
                                            <li class="nav-item dropdown">
                                                <Link class="nav-link1 text-white dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <img style={{ marginRight: "1rem" }} src={folder} alt="" />
                                                    My Projects
                                                </Link>
                                                <ul class="dropdown-menu dropdown-menu-dark">
                                                    <li><Link class="dropdown-item" onClick={Show => setShow(12)}>Project Lists</Link></li>
                                                    <li><Link class="dropdown-item" onClick={Show => setShow(11)}>Projects Buying</Link></li>
                                                </ul>
                                            </li>
                                            </div>
                                        </div>
                                            </div>
                                            
                <div className="sideContent">
                    
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
                                            <input style={{ height: '6vh' }} type="text" name='firstName' class="form-control" aria-label="First name"
                                            value={formData.firstName}
                                            onChange={handleChange} />
                                        </div>
                                        <div class="col">
                                            <label for="exampleFormControlInput1" class="form-label" style={{ color: '#636363' }}>Last name</label>
                                            <input style={{ height: '6vh' }} type="text" name='lastName' class="form-control" aria-label="Last name" 
                                            value={formData.lastName}
                                            onChange={handleChange}/>
                                        </div>
                                    </div>
                                </div>
                                <div class="mb-3 my-3">
                                    <label for="exampleFormControlInput1" class="form-label" style={{ color: '#636363' }}>Username</label>
                                    <input style={{ height: '6vh' }} type="text" name='userName' class="form-control" id="exampleFormControlInput1" 
                                    value={formData.userName}
                                    onChange={handleChange}/>
                                </div>
                                <div class="mb-3 my-3">
                                    <label for="exampleFormControlTextarea1" class="form-label" style={{ color: '#636363' }}>About me</label>
                                    <textarea style={{ height: '25vh' }} class="form-control" name='about' id="exampleFormControlTextarea1" rows="3" 
                                    value={formData.about}
                                    onChange={handleChange}></textarea>
                                </div>

                                

                                <div>
                                    <span className='my-5' style={{ color: '#636363' }}>Change your account type</span>
                                    <div className='d-flex flex-wrap'>
                                        <div>
                                            <input type="radio" class="btn-check rounded-pill" name='role' id="option8" autocomplete="off" value="owner" onChange={handleChange}/>
                                            <label  class="btn1" style={{ padding: "0.5rem", margin:'0.3rem 0.7rem 0 0',background: "#EEF0FE"}} for="option8">
                                                <i class="fa-solid fa-circle-check mx-2"></i>
                                                Owner( Seller )</label>
                                        </div>
                                        <div >
                                            <input type="radio" class="btn-check  rounded-pill" name='role' id="option9" autocomplete="off" value="acquirer" onChange={handleChange}/>
                                            <label  class="btn1" style={{ padding: "0.5rem", margin:'0.3rem 0.7rem 0 0',background: "#EEF0FE"}}  for="option9">
                                                <i class="fa-solid fa-circle-check mx-2"></i>
                                                Acquirer( buyer )</label>
                                        </div>
                                        <div>
                                            <input type="radio" class="btn-check  rounded-pill" name='role' id="option10" autocomplete="off" value="owner and acquirer" onChange={handleChange} />
                                            <label class="btn1" style={{ padding: "0.5rem", margin:'0.3rem 0.7rem 0 0',background: "#EEF0FE"}}  for="option10">
                                                <i class="fa-solid fa-circle-check mx-2"></i>
                                                Owner and Aquirer</label>
                                        </div>
                                        <div >
                                            <input type="radio" class="btn-check  rounded-pill" name='role' id="option11" autocomplete="off" value="fundriser" onChange={handleChange} />
                                            <label class="btn1" style={{ padding: "0.5rem", margin:'0.3rem 0.7rem 0 0',background: "#EEF0FE"}}  for="option11">
                                                <i class="fa-solid fa-circle-check mx-2"></i>
                                                Fundriser</label>
                                        </div>

                                        </div>
                                    </div>
                                    <button class="profile-btn btn btn-primary my-3 rounded-pill" type="submit" style={{ width: '40%', padding: "0.8rem 1.5rem" }} >Save changes</button>
                                </div>
                                <button class="profile-btn btn btn-primary my-3 rounded-pill" type="submit" style={{ width: '40%', padding: "0.8rem 1.5rem" }} onClick={collectData}>Save changes</button>
                            </div>
                        </div>
                    </div> 
                </div>
                </nav>}
            </section>
        </>
    );
};

export default DashboardProfile;