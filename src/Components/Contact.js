import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import backgroundImg from "./Pricing/unsplash_5U_28ojjgms.png";
import arrow from "./Aqify project/Vector (1).png";
import Navbar from "./Navbar";
import Footer from "./Footer";
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

  
  const [state, handleSubmit] = useForm("xdoqnobg");
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
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

    if (!formData.message) {
      toast.error("Message is required.", toastOptions);
      return false;
    }

    return true;
  };

  const collectData = async (e) => {
    e.preventDefault();
    if (validation()) {
      await handleSubmit(e);
        setFormData({
          name: '',
          email: '',
          message: '',
        });
        toast.success("Message sent successfully!", toastOptions);
      } else {
        toast.error("Failed to send message. Please try again later.", toastOptions);
      }
    }

  

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
        <Navbar />
      </section>

      {/** */}
      <ToastContainer />
      <section className="pricing-first-section">
        <div
          className="pricing-backgroundImage" style={{background:'#161616', padding:'4rem 0 8rem 0'}}
          >
          {/* style={{
            backgroundImage: `url(${backgroundImg})`,
            width: "100%",
            height: "80vh",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }} */}
          <h1 className="col-6 text-center">ASK US QUESTIONS, WE ARE ALL EARS!</h1>
          <span className="col-4 text-center" style={{ margin: "0rem" }}>
          Take a step ahead, tell us who you are, and the rest is on us.
          </span>
        </div>
      </section>

      <section className="contact-back" style={{height:'fit-content'}} >
        <div className="contact-card">
          <form onSubmit={collectData}>
            <div className="mb-3 my-3">
              <label
                for="exampleFormControlInput1"
                className="form-label"
                style={{ color: "#636363" }}
              >
                Please enter your full name
              </label>
              <input
                type="text"
                name="name"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Your Full Name"
                onChange={handleChange}
                value={formData.name}
              />
            </div>
            <div className="mb-3 my-3">
              <label
                for="exampleFormControlInput1"
                className="form-label"
                style={{ color: "#636363" }}
              >
                Please enter your email address
              </label>
              <input
                type="email"
                name="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Your Email Address"
                onChange={handleChange}
                value={formData.email}
              />
            </div>
            <div className="mb-3 my-3">
              <label
                for="exampleFormControlTextarea1"
                className="form-label"
                style={{ color: "#636363" }}
              >
                Please enter your message below
              </label>
              <textarea
                className="form-control"
                name="message"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="Your Query For Us!"
                onChange={handleChange}
                value={formData.message}
              ></textarea>
            </div>
            <button
              className="contact-btn btn btn-primary my-3"
              type="submit"
              disabled={state.submitting}
              style={{ width: "30%", padding: "1.5rem 2.5rem" }}
            >
              SEND TO ACQIFY! <img style={{ width: "10%" }} src={arrow} alt="" />
            </button>
          </form>
        </div>
      </section>

      <section>
        <Footer />
      </section>
    </>
  );
};


export default Contact;