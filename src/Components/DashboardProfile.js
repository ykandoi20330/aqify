import React, { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import ENV from "../config.js";

//side content
import profilePhoto from "./ProfileDashbaord/group-11.svg";

//card content
import verify from "./ProfileDashbaord/vector1.svg";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MainDashboard from "./MainDashboard";

const DashboardProfile = () => {
  const [visible, setVisible] = useState(true);
  // const [own, setOwn] = useState(true);
  // const [Show, setShow] = useState(6);

  const [form, setform] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    about: "",
    role: "",
    pic: "",
    statusOfFund: "",
  });

  useEffect(() => {
    const getUser = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        const decoded = jwtDecode(token);
        const id = decoded.id;
        try {
          const response = await axios.get(`${ENV.BACKEND_URL}/users/getUser`, {
            headers: { "x-auth-token": id },
          });
          setform({
            firstName: response.data.user.firstName,
            lastName: response.data.user.lastName,
            userName: response.data.user.userName,
            about: response.data.user.about,
            role: response.data.user.role,
            pic: response.data.user.pic,
            statusOfFund: response.data.status
              ? response.data.status.status || ""
              : "",
          });
        } catch (error) {
          console.error(error);
        }
      }
    };
    getUser();
  }, []);

  // const [profileImage,setprofileImage]=useState(pic);

  // import logo1 from "./SignIn/vector.svg"
  // const DashboardProfile = () => {
  const toastOptions = {
    position: "top-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
    color: "blue",
  };

  const validation = () => {
    console.log(form);
    if (!form.firstName) {
      toast.error("First name is required.", toastOptions);
      return false;
    }

    if (!form.lastName) {
      toast.error("Last name is required.", toastOptions);
      return false;
    }

    if (!form.userName) {
      toast.error("Username is required.", toastOptions);
      return false;
    }

    if (!form.about) {
      toast.error("Description is required.", toastOptions);
      return false;
    }

    if (!form.role) {
      toast.error("Role is required.", toastOptions);
      return false;
    }

    return true;
  };

  const collectData = async (e) => {
    e.preventDefault();
    if (validation()) {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          const user = JSON.parse(localStorage.getItem("user"));
          const token = user.token;
        }

        if (token) {
          const decoded = jwtDecode(token);
          const userId = decoded.id;
          const response = await fetch(
            `${ENV.BACKEND_URL}/users/updateProfile`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
              credentials: "include",
              body: JSON.stringify({ form, userId }),
            }
          );
          console.warn(response);
          const data = await response.json();
          if (response.status === 200) {
            toast.success(data.message, toastOptions);
            window.location.reload();
          } else {
            toast.error(data.message, toastOptions);
          }
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setform({
      ...form,
      [name]: value,
    });
  };

  const ChangeBoth = () => {
    if (visible === true) {
      setVisible(false);
    } else {
      setVisible(true);
    }
    setform({
      ...form,
      role: "owner and acquirer",
    });
  };

  const upload = (e) => {
    const file = e.target.files[0];

    const formData = new FormData();
    formData.append("image", file);

    axios
      .post(
        "https://api.imgbb.com/1/upload?key=097044605d74fdffac5df09db7352066",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((res) => {
        console.log(res.data.data.url);
        setform({
          ...form,
          pic: res.data.data.url,
        });

        console.log(form);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const changeRoleowner = () => {
    setVisible(true);
    setform({
      ...form,
      role: "owner",
    });
  };

  const changeRoleacquire = () => {
    setVisible(false);
    setform({
      ...form,
      role: "acquirer",
    });
  };

  return (
    <>
      <section className="profile-section">
        {/** Profile content */}

        <div className="sideContent">
          <ToastContainer />

          <div>
            <h1 style={{ fontWeight: "700" }}>Profile</h1>
            <span style={{ color: "#636363" }}>
              Update your information below
            </span>
          </div>

          <div className="profile-card d-flex">
            <div className="profile-content d-flex justify-content-around align-items-center">
              <div className="profilePhoto d-flex flex-column align-items-center">
                <img
                  style={{
                    width: "12rem",
                    height: "12rem",
                    borderRadius: "50%",
                  }}
                  src={
                    form.pic ||
                    "https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"
                  }
                  alt=""
                />
                <span>
                  <form>
                    <input
                      type="file"
                      id="image_input"
                      name="pic"
                      onChange={upload}
                    />
                    <label htmlFor="image_input">
                      <i
                        className="fa-solid fa-circle-plus mx-2"
                        style={{
                          color: "blue",
                          fontSize: "2rem",
                          top: "-35px",
                          right: "-45px",
                          background: "#fff",
                          position: "relative",
                          borderRadius: "50px",
                        }}
                      ></i>
                    </label>
                  </form>
                </span>
                {form.statusOfFund === "verify" ? (
                  <Link
                    className="btn btn-primary rounded-pill"
                    style={{ padding: "0.5rem 0.8rem" }}
                  >
                    <img src={verify} alt="" />
                    Verify
                  </Link>
                ) : (
                  <Link
                    className="btn btn-primary rounded-pill"
                    style={{ padding: "0.5rem 0.8rem" }}
                  >
                    {/* <img src={verify} alt="" /> */}
                    Not Verify
                  </Link>
                )}
              </div>

              <div style={{ width: "60%" }}>
                <div className="mb-3 my-3">
                  <div className="row">
                    <div className="col">
                      <label
                        for="exampleFormControlInput1"
                        className="form-label"
                        style={{ color: "#636363" }}
                      >
                        First name
                      </label>
                      <input
                        style={{ height: "6vh" }}
                        type="text"
                        className="form-control"
                        aria-label="First name"
                        name="firstName"
                        value={form.firstName}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col">
                      <label
                        for="exampleFormControlInput1"
                        className="form-label"
                        style={{ color: "#636363" }}
                      >
                        Last name
                      </label>
                      <input
                        style={{ height: "6vh" }}
                        type="text"
                        className="form-control"
                        aria-label="Last name"
                        name="lastName"
                        value={form.lastName}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="mb-3 my-3">
                  <label
                    for="exampleFormControlInput1"
                    className="form-label"
                    style={{ color: "#636363" }}
                  >
                    Username
                  </label>
                  <input
                    style={{ height: "6vh" }}
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    name="userName"
                    value={form.userName}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3 my-3">
                  <label
                    for="exampleFormControlTextarea1"
                    className="form-label"
                    style={{ color: "#636363" }}
                  >
                    About me
                  </label>
                  <textarea
                    style={{ height: "25vh" }}
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    name="about"
                    value={form.about}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <div>
                  <span className="my-5" style={{ color: "#636363" }}>
                    Change your account type
                  </span>
                  <div className="d-flex flex-wrap">
                    <div>
                      <input
                        type="radio"
                        className="btn-check  rounded-pill"
                        name="options-base"
                        id="option8"
                        autocomplete="off"
                        value="owner"
                        onClick={changeRoleowner}
                      />
                      <label
                        className="btn1"
                        style={{
                          padding: "0.5rem",
                          margin: "0.3rem 0.7rem 0 0",
                          background: "#EEF0FE",
                        }}
                        for="option8"
                      >
                        <i className="fa-solid fa-circle-check mx-2"></i>
                        Owner( Seller )
                      </label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        className="btn-check  rounded-pill"
                        name="options-base"
                        id="option9"
                        autocomplete="off"
                        value="acquirer"
                        onClick={changeRoleacquire}
                      />
                      <label
                        className="btn1"
                        style={{
                          padding: "0.5rem",
                          margin: "0.3rem 0.7rem 0 0",
                          background: "#EEF0FE",
                        }}
                        for="option9"
                      >
                        <i className="fa-solid fa-circle-check mx-2"></i>
                        Acquirer( buyer )
                      </label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        className="btn-check  rounded-pill"
                        name="options-base"
                        id="option10"
                        autocomplete="off"
                        value="owner and acquirer"
                        onClick={ChangeBoth}
                      />
                      <label
                        className="btn1"
                        style={{
                          padding: "0.5rem",
                          margin: "0.3rem 0.7rem 0 0",
                          background: "#EEF0FE",
                        }}
                        for="option10"
                      >
                        <i className="fa-solid fa-circle-check mx-2"></i>
                        Owner and Aquirer
                      </label>
                    </div>
                  </div>
                </div>

                <button
                  className="profile-btn btn btn-primary my-3 rounded-pill"
                  type="submit"
                  style={{ width: "40%", padding: "0.8rem 1.5rem" }}
                  onClick={collectData}
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default DashboardProfile;
