import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

//
// import Logo from "./Selling/Frame 18.svg"
import back from "./MarketDash/VectorBackArrow.svg";
import TopMessage from "./TopMessage";
import BlackLogo from "./Aqify project/FrameblackLogo.svg";
//
import { useNavigate } from "react-router-dom";
//
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import ENV from "../config.js";

const SellerDash = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);

  const steps = ["Personal Info", "More Details", "Build Advisory"];
  const [complete, setComplete] = useState(false);

  // const [show, setShow] = useState(1)

  //for image Upload
  const [image, setImage] = useState(null);
  const [Logo, setLogo] = useState(null);
  const [document, setDocument] = useState(null);
  const [fileName, setfileName] = useState("");

  const [formData, setformData] = useState({
    ownerName: "",
    ownerImage: "",
    category: "",
    techStack1: "",
    techStack2: "",
    techStack3: "",
    techStack4: "",
    shortBio: "",
    dealSize: "",
    location: "",
    acquisitionType: "",
    valuation: "",
  });

  const [text, setText] = useState("Upload Your Image/photo");

  const submitUpload = (e) => {
    const file = e.target.files[0];

    const logo = new FormData();
    logo.append("image", file);

    axios
      .post(
        "https://api.imgbb.com/1/upload?key=097044605d74fdffac5df09db7352066",
        logo,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((res) => {
        console.log(res.data.data.url);
        setformData({
          ...formData,
          ownerImage: res.data.data.url,
        });
        setText("Uploaded");
        console.log(formData);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  function convertToBase64(file) {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  }

  const handleFileUploadLogo = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    console.log(base64);
    setformData({ ...formData, logoImage: base64 });
    console.log(formData.logoImage);
  };

  const handleFileUploadListingImage = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    console.log(base64);
    setformData({ ...formData, listingImage: base64 });
    console.log(formData.listingImage);
  };

  const handleFileUploadDocumentProof = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    console.log(base64);
    setformData({ ...formData, documentProof: base64 });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformData({
      ...formData,
      [name]: value,
    });
    console.log(formData);
  };

  const input = ({ target: { files } }) => {
    files[0] && setfileName(files[0].name);
    if (files) {
      setImage(URL.createObjectURL(files[0]));
    }
  };

  // for logo upload
  const inputLogo = ({ target: { files } }) => {
    files[0] && setfileName(files[0].name);
    if (files) {
      setLogo(URL.createObjectURL(files[0]));
    }
  };

  // for logo upload
  const inputDocument = ({ target: { files } }) => {
    files[0] && setfileName(files[0].name);
    if (files) {
      setDocument(URL.createObjectURL(files[0]));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const response = await fetch(`${ENV.BACKEND_URL}/advisory/addAdvisory`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(formData),
      });
      console.warn(response);
      if (response.status === 201) {
        const data = await response.json();
        console.warn(data);
        navigate("/advisory");
      } else if (response.status === 400) {
        console.log("Already Exist");
      } else {
        console.error("Error:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <section>
        <div className="d-flex justify-content-around">
          <div
            style={{ background: "#EEF0FE", width: "100%", padding: "1.3rem" }}
          >
            <Link to="/">
              <img src={BlackLogo} alt="" />
            </Link>
          </div>
          <TopMessage />
        </div>
      </section>

      <section
        className="first-sell d-flex justify-content-between align-items-center"
        style={{ padding: "3rem 6rem", background: "#EEF0FE" }}
      >
        {currentStep === 1 && (
          <>
            <div
              className="Onboard-card"
              style={{ overflowY: "hidden", height: "95vh" }}
            >
              <div style={{ overflow: "hidden", overflowY: "scroll" }}>
                <div>
                  <h3 style={{ fontWeight: "700,", fontSize: "30px" }}>
                    What is your speciality
                  </h3>
                  <span
                    style={{ fontSize: "18px", color: "#636363" }}
                    className="d-flex col-5 mt-2 mb-4"
                  >
                    Get your advisory ready to be seen by thousands of buyers &
                    sellers
                  </span>
                </div>
                <div>
                  <label
                    style={{ color: "#636363" }}
                    for="logoInput"
                    className="form-label"
                  >
                    {text}
                  </label>
                  <div className="mb-3 my-2">
                    <input
                      style={{ display: "none" }}
                      type="file"
                      accept="image/*"
                      id="logoInput"
                      onChange={submitUpload}
                    />
                    <label
                      style={{
                        height: "8vh",
                        width: "100%",
                        background: "#EEF0FE",
                        borderRadius: "0.375rem",
                        border: "1px solid #C0C0C0",
                      }}
                      for="logoInput"
                      className="custom-file-upload d-flex justify-content-center align-items-center"
                    >
                      <i
                        className="fas fa-cloud-upload-alt mx-2"
                        style={{ color: "#c0c0c0" }}
                      ></i>
                    </label>
                    <img
                      src="#"
                      alt="Logo Preview"
                      id="logoPreview"
                      style={{ width: "200px", display: "none" }}
                    />
                  </div>
                </div>

                <div>
                  <div className="mb-3 my-3">
                    <label
                      for="exampleFormControlInput1"
                      className="form-label"
                      style={{ color: "#636363" }}
                    >
                      Enter Your Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="ownerName"
                      id="exampleFormControlInput1"
                      placeholder="Acqify"
                      value={formData.ownerName}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div
                  className="d-flex justify-content-between"
                  style={{ margin: "1rem 0 0rem 0" }}
                >
                  <h3 className="card-h3 pb-2 my-4">Category</h3>
                </div>
                <div>
                  <div className="mb-3 my-3">
                    <input
                      type="text"
                      className="form-control"
                      name="category"
                      id="efloatingInputValue"
                      placeholder="Acqify"
                      value={formData.category}
                      onChange={handleChange}
                      style={{ width: "97%" }}
                    />
                  </div>
                </div>

                <div className="my-5">
                  <div>
                    <label
                      style={{
                        color: "#636363",
                        fontWeight: "500",
                        fontWeight: "bold",
                        fontSize: "18px",
                      }}
                      for="inputEmail4"
                      className="form-label"
                    >
                      Tech Stack
                    </label>
                    <div className="d-flex flex-wrap">
                      <input
                        style={{ height: "7vh", width: "48%" }}
                        type="text"
                        id="inputEmail5"
                        className="form-control mx-1 my-2"
                        name="techStack1"
                        placeholder="Ecommerce"
                        value={formData.techStack1}
                        onChange={handleChange}
                      />

                      <input
                        style={{ height: "7vh", width: "48%" }}
                        type="text"
                        id="inputEmail6"
                        className="form-control mx-1 my-2"
                        name="techStack2"
                        placeholder="WooCommerce"
                        value={formData.techStack2}
                        onChange={handleChange}
                      />
                      <input
                        style={{ height: "7vh", width: "48%" }}
                        type="text"
                        id="inputEmail7"
                        className="form-control mx-1 my-2"
                        name="techStack3"
                        placeholder="Saas"
                        value={formData.techStack3}
                        onChange={handleChange}
                      />
                      <input
                        style={{ height: "7vh", width: "48%" }}
                        type="text"
                        id="inputEmail8"
                        className="form-control mx-1 my-2"
                        name="techStack4"
                        placeholder="Wordpress"
                        value={formData.techStack4}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="button d-flex justify-content-between align-items-center">
                  <div className="mt-5">
                    <Link
                      style={{ textDecoration: "none", color: "#636363" }}
                      id="prev"
                      to="/advisory"
                      onClick={() => {
                        setCurrentStep((prev) => prev - 1);
                      }}
                    >
                      <img src={back} alt="" />{" "}
                      <span className="mx-3">Back</span>
                    </Link>
                  </div>
                  <div className="mt-5">
                    {!complete && (
                      <Link
                        id="next"
                        className="btn btn-primary rounded-pill px-5 py-2"
                        onClick={() => {
                          currentStep === 5
                            ? setComplete(true)
                            : setCurrentStep((prev) => prev + 1);
                        }}
                      >
                        {currentStep === 5 ? "Finish" : "Next"}
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {currentStep === 2 && (
          <>
            <div className="Onboard-card2" style={{ overflowY: "hidden" }}>
              <div style={{ overflow: "hidden", overflowY: "scroll" }}>
                <div>
                  <h3 style={{ fontWeight: "700,", fontSize: "30px" }}>
                    We need some more details
                  </h3>
                  <span
                    style={{ fontSize: "18px", color: "#636363" }}
                    className="d-flex col-6 mt-2 mb-4"
                  >
                    Get your advisory ready to be seen by thousands of buyers &
                    Seller
                  </span>
                </div>

                <div>
                  <div className="mb-3 my-5">
                    <label
                      for="exampleFormControlTextarea1"
                      className="form-label"
                      style={{
                        color: "#636363",
                        fontWeight: "500",
                        fontSize: "18px",
                      }}
                    >
                      Short Bio
                    </label>
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                      placeholder="Tell us about your self"
                      name="shortBio"
                      value={formData.shortBio}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                </div>

                <div>
                  <div className="mb-3 my-3">
                    <label
                      for="exampleFormControlInput2"
                      className="form-label"
                      style={{ color: "#636363" }}
                    >
                      Prefered Deal Size?
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="dealSize"
                      id="exampleFormControlInput2"
                      placeholder="More than $5M"
                      value={formData.dealSize}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div>
                  <div className="mb-3 my-3">
                    <label
                      for="exampleFormControlInput1"
                      className="form-label"
                      style={{ color: "#636363" }}
                    >
                      Where is your business located?
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="location"
                      id="exampleFormControlInput1"
                      placeholder="Acqify"
                      value={formData.location}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div>
                  <div className="mb-3 my-3">
                    <label
                      for="exampleFormControlInput1"
                      className="form-label"
                      style={{ color: "#636363" }}
                    >
                      Acquisition Type?
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="acquisitionType"
                      id="exampleFormControlInput1"
                      placeholder="Full"
                      value={formData.acquisitionType}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div style={{ width: "100%" }}>
                  <label for="inputEmail4" className="form-label">
                    Valuation
                  </label>
                  <input
                    style={{ width: "100%" }}
                    type="text"
                    id="inputEmail4"
                    className="form-control"
                    name="valuation"
                    placeholder="$150k"
                    value={formData.valuation}
                    onChange={handleChange}
                  />
                </div>

                <div className="button d-flex justify-content-between align-items-center">
                  <div className="mt-5">
                    <Link
                      id="prev"
                      style={{ textDecoration: "none", color: "#636363" }}
                      onClick={() => {
                        currentStep === steps.length
                          ? setComplete(true)
                          : setCurrentStep((prev) => prev - 1);
                      }}
                    >
                      <img src={back} alt="" />
                      <span className="mx-3">Back</span>
                    </Link>
                  </div>
                  <div className="mt-5">
                    {!complete && (
                      <Link
                        id="next"
                        className="btn btn-primary rounded-pill px-5 py-2"
                        onClick={() => {
                          currentStep === steps.length
                            ? setComplete(true)
                            : setCurrentStep((prev) => prev + 1);
                        }}
                      >
                        {currentStep === steps.length ? "Finish" : "Next"}
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {currentStep === 3 && (
          <>
            <div className="Onboard-card2">
              <div style={{ overflow: "hidden", overflowY: "scroll" }}>
                <div>
                  <h2 className="my-2" style={{ fontWeight: "700" }}>
                    Congratulation! Set your Advisory
                  </h2>
                  <span
                    style={{ fontSize: "18px", color: "#636363" }}
                    className="d-flex col-8 mt-2 mb-4"
                  >
                    Get your advisory ready to be seen by thousands of buyers
                    and sellers.
                  </span>
                </div>

                <div className="my-5" style={{ color: "#636363" }}>
                  <div>
                    Set your asking price, then negotiate with potential buyers.
                    Setting your asking price is crucial and will be the first
                    thing sellers notice when looking at your listing. If you
                    need help deciding  what an appropriate price is based on
                    the status and performance of your business, use this
                    Valuation Tool (by Pieter Levels). <br />
                    <br />
                    Interested buyers can make offers above or below your asking
                    price. You have the ability to approve or reject any
                    offers.Listings over $10k attract a one-time $15 fee
                  </div>
                </div>
              </div>

              <div className="button d-flex justify-content-between align-items-center">
                <div className="mt-5">
                  <Link
                    id="prev"
                    style={{ textDecoration: "none", color: "#636363" }}
                    onClick={() => {
                      currentStep === 4
                        ? setComplete(true)
                        : setCurrentStep((prev) => prev - 1);
                    }}
                  >
                    <img src={back} alt="" />
                    <span className="mx-3">Back</span>
                  </Link>
                </div>
                <div className="mt-5">
                  {!complete && (
                    <Link
                      id="next"
                      className="btn btn-primary rounded-pill px-5 py-2"
                      onClick={() => {
                        currentStep === steps.length
                          ? setComplete(false)
                          : setCurrentStep((prev) => prev + 1);
                      }}
                    >
                      {currentStep === steps.length ? (
                        <button
                          className="btn btn-primary rounded-pill px-5 py-2"
                          onClick={handleSubmit}
                        >
                          Finish
                        </button>
                      ) : (
                        "Next"
                      )}
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </>
        )}

        {/**Side stepper */}

        <div className="StepBar">
          <div className="steps">
            {steps?.map((step, i) => (
              <>
                <div
                  key={i}
                  className={`step-item ${currentStep === i + 1 && "active"}`}
                >
                  <div
                    className={`circle ${currentStep === i + 1 && "active"} ${
                      (i + 1 < currentStep || complete) && "complete"
                    }`}
                  >
                    {i + 1}
                  </div>
                  <p
                    className={`tagname ${currentStep === i + 1 && "active"} ${
                      (i + 1 < currentStep || complete) && "tagComplete"
                    }`}
                  >
                    {step}
                  </p>
                </div>
              </>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default SellerDash;
