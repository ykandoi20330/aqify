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
          className="pricing-backgroundImage"
          style={{
            backgroundImage: `url(${backgroundImg})`,
            width: "100%",
            height: "80vh",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <h1 className="col-6 text-center">Contact Us</h1>
          <span className="col-4 text-center" style={{ margin: "0rem" }}>
            We'd really like to hear any feedback or issue that you might have.
          </span>
        </div>
      </section>

      <section className="contact-back" style={{ height: "120vh" }}>
        <div className="contact-card">
          <form onSubmit={collectData}>
            <div class="mb-3 my-3">
              <label
                for="exampleFormControlInput1"
                class="form-label"
                style={{ color: "#636363" }}
              >
                Please enter your full name
              </label>
              <input
                type="text"
                name="name"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="&#128100; Name"
                onChange={handleChange}
                value={formData.name}
              />
            </div>
            <div class="mb-3 my-3">
              <label
                for="exampleFormControlInput1"
                class="form-label"
                style={{ color: "#636363" }}
              >
                Please enter your email address
              </label>
              <input
                type="email"
                name="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="&#128386; Email Address"
                onChange={handleChange}
                value={formData.email}
              />
            </div>
            <div class="mb-3 my-3">
              <label
                for="exampleFormControlTextarea1"
                class="form-label"
                style={{ color: "#636363" }}
              >
                Please enter your message below
              </label>
              <textarea
                class="form-control"
                name="message"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="&#128386; Message"
                onChange={handleChange}
                value={formData.message}
              ></textarea>
            </div>
            <button
              class="contact-btn btn btn-primary my-3"
              type="submit"
              disabled={state.submitting}
              style={{ width: "30%", padding: "1.5rem 2.5rem" }}
            >
              Send Us <img style={{ width: "10%" }} src={arrow} alt="" />
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