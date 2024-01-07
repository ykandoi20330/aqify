import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ENV from "../config.js";
import { jwtDecode } from "jwt-decode";

const ChangePassword = () => {
  const toastOptions = {
    position: "top-right",
    autoClose: 6000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };
  const [formData, setFormData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmnewPassword: "",
  });

  const validation = () => {
    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;

    if (!formData.oldPassword) {
      toast.error("Old Password is required.", toastOptions);
      return false;
    }

    if (!formData.newPassword) {
      toast.error("New Password is required.", toastOptions);
      return false;
    } else if (!passwordPattern.test(formData.newPassword)) {
      toast.error(
        "Password should have at least one lowercase letter, one uppercase letter, and one special character",
        toastOptions
      );
      return false;
    }

    if (formData.confirmnewPassword !== formData.newPassword) {
      toast.error(
        "Confirm Password and New Password should be same",
        toastOptions
      );
      return false;
    }

    return true;
  };

  const collectData = async (e) => {
    e.preventDefault();

    if (validation()) {
      try {
        console.warn(formData);
        let token = localStorage.getItem("token");
        const userId = jwtDecode(token);
        console.log(userId.id);
        const id = userId.id;
        const response = await fetch(
          `${ENV.BACKEND_URL}/users/updatePassword`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            credentials: "include",
            body: JSON.stringify({ formData, id }),
          }
        );

        console.warn(response);
        const data = await response.json();
        if (response.status === 200) {
          setFormData({
            oldPassword: "",
            newPassword: "",
            confirmnewPassword: "",
          });
          toast.success(data.message, toastOptions);
        } else if (response.status === 500) {
          toast.error(data.message, toastOptions);
        } else {
          console.error("Error:", response.statusText);
        }
      } catch (error) {
        console.error("Error:", error);
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
      <ToastContainer />
      <div className="sideContent">
        <div>
          <h1 style={{ fontWeight: "700", paddingBottom: "0.5rem" }}>
            Change Password
          </h1>
          <span style={{ color: "#636363" }}>
            Update your email or password below
          </span>
        </div>

        <div className="password-card">
          {/* <div className="mb-3 my-3">
                        <label for="exampleFormControlInput1" className="form-label" style={{color:'#636363'}}>Current Email</label>
                        <input type="email" name='email' className="form-control" id="exampleFormControlInput1" placeholder="akashkumar0007@gmail.com"
                        value={formData.email}
                        onChange={handleChange}/>
                    </div> */}
          <div className="mb-3 my-3">
            <label
              for="exampleFormControlInput1"
              className="form-label"
              style={{ color: "#636363" }}
            >
              Current Password
            </label>
            <input
              type="password"
              name="oldPassword"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="**********"
              value={formData.oldPassword}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3 my-3">
            <label
              for="exampleFormControlInput1"
              className="form-label"
              style={{ color: "#636363" }}
            >
              New Password
            </label>
            <input
              type="password"
              name="newPassword"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="**********"
              value={formData.newPassword}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3 my-3">
            <label
              for="exampleFormControlInput1"
              className="form-label"
              style={{ color: "#636363" }}
            >
              Confirm New Password
            </label>
            <input
              type="password"
              name="confirmnewPassword"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="**********"
              value={formData.confirmnewPassword}
              onChange={handleChange}
            />
          </div>
          <button
            className="password-btn btn btn-primary my-3 rounded-pill"
            type="submit"
            style={{ width: "30%", padding: "0.9rem 1.5rem" }}
            onClick={collectData}
          >
            Save changes
          </button>
        </div>
      </div>
    </>
  );
};

export default ChangePassword;
