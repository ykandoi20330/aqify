import React, { useState } from "react";
import { Link } from "react-router-dom";

//
import back from "./MarketDash/VectorBackArrow.svg";
import proof from "./ProfileDashbaord/VectorFund.svg";
import axios from "axios";
import ENV from "../config.js";
import { useNavigate } from "react-router-dom";
import {jwtDecode} from "jwt-decode";

const ProofOfFund = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = ["Basic Info", "More Details"];
  const [complete, setComplete] = useState(false);
  const navigate = useNavigate();

  //for image Upload
  const [document, setDocument] = useState(null);
  const [fileName, setfileName] = useState("");
  const [text, setText] = useState("Upload proof of funds");

  const [formData, setFormData] = useState({
    businessName: "",
    projectName: "",
    location: "",
    document: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  const token = localStorage.getItem("token");
  const decoded = jwtDecode(token);
  const userId = decoded.id;
  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const response = await fetch(
        `${ENV.BACKEND_URL}/proof/addProof`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({ formData , userId }),
        }
      );
        const data = await response.json();
        console.warn(data);
        navigate("/MainDashboard/MarketDash2");
    } catch (error) {
      console.log(error);
    }
  };


  const inputDocument = (e) => {
    const file = e.target.files[0];
    const proof = new FormData();
    proof.append("image", file);
    axios
      .post(
        "https://api.imgbb.com/1/upload?key=097044605d74fdffac5df09db7352066",
        proof,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((res) => {
        console.log(res.data.data.url);
        setFormData({ ...formData, document: res.data.data.url });
        setText("Document Uploaded");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <section
        className="first-sell d-flex justify-content-between align-items-center"
        style={{ padding: "3rem 6rem", background: "#EEF0FE" }}
      >
        {currentStep === 1 && (
          <>
            <div className="Onboard-card" style={{ width: "100%" }}>
              <div>
                <h3 style={{ fontWeight: "700,", fontSize: "30px" }}>
                  Tell us about yourself
                </h3>
                <span
                  style={{ fontSize: "18px", color: "#636363" }}
                  className="d-flex col-8 mt-2 mb-4"
                >
                  We need this information to qualify you as a buyer. Only
                  qualified buyers can get funding for deals and contact
                  sellers.
                </span>
              </div>

              <div>
                <div>
                  <div className="mb-3 my-3">
                    <label
                      for="exampleFormControlInput1"
                      className="form-label"
                      style={{ color: "#636363" }}
                    >
                      Business/Asset Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleFormControlInput1"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleChange}
                      placeholder="Acqify"
                    />
                  </div>
                </div>
              </div>

              <div>
                <div className="mb-3 my-3">
                  <label
                    for="exampleFormControlInput1"
                    className="form-label"
                    style={{ color: "#636363" }}
                  >
                    What is your project name?
                  </label>
                  <select
                    style={{ width: "80%", color: "#636363", fontSize: "16px" }}
                    className="form-control form-select form-select-lg"
                    aria-label="Large select example"
                    name="projectName"
                    value={formData.projectName}
                    onChange={handleChange}
                  >
                    <option id="floatingInputValue" selected>
                      Select project name
                    </option>
                    <option value="UI Design">UI Design</option>
                    <option value="UI Development">UI Development</option>
                    <option value="Artificial Intelligence">
                      Artifitial Intelligence
                    </option>
                  </select>
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
                  <select
                    style={{ width: "80%", color: "#636363", fontSize: "16px" }}
                    className="form-control form-select form-select-lg"
                    aria-label="Large select example"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                  >
                    <option id="floatingInputValue" selected>
                      Select Location name
                    </option>
                    <option value="India">India</option>
                    <option value="USA">USA</option>
                    <option value="Europe">Europe</option>
                  </select>
                </div>
              </div>

              <div className="button d-flex justify-content-between align-items-center">
                <div className="mt-5">
                  <Link
                    style={{ textDecoration: "none", color: "#636363" }}
                    id="prev"
                    to="/MainDashboard/Dashbaord"
                  >
                    <img src={back} alt="" /> <span className="mx-3">Back</span>
                  </Link>
                </div>
                <div className="mt-5">
                  {!complete && (
                    <Link
                      id="next"
                      className="btn btn-primary rounded-pill px-5 py-2"
                      onClick={() => {
                        currentStep === 2
                          ? setComplete(true)
                          : setCurrentStep((prev) => prev + 1);
                      }}
                    >
                      {currentStep === 2 ? "Finish" : "Next"}
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </>
        )}

        {currentStep === 2 && (
          <>
            <div className="Onboard-card2" style={{ width: "100%" }}>
              <div style={{ overflow: "hidden", overflowY: "scroll" }}>
                <div>
                  <h3 style={{ fontWeight: "700,", fontSize: "30px" }}>
                    Provide proof of funds for
                  </h3>
                  <span
                    style={{ fontSize: "18px", color: "#636363" }}
                    className="d-flex col-8 mt-2 mb-4"
                  >
                    Make sure the accounts are in your name. For business
                    accounts, upload additional documents linking your name to
                    the legal entity.
                  </span>
                </div>

                <div>
                  <div className="divInput-document">
                    <div className="d-flex flex-column align-items-center justify-content-center">
                      <div className="img-container" id="display_image">
                        <img src={document} className="" id="img" alt="" />
                      </div>
                      <div>
                        <input
                          type="file"
                          className="form-label"
                          id="image_input2"
                          multiple
                          name="document"
                          onChange={inputDocument}
                        />
                        <label
                          for="image_input2"
                          className="form-label text-center"
                          style={{ color: "#636363" }}
                        >
                          {" "}
                          <img src={proof} alt="" />
                          <br />
                          <br />
                          <h4 style={{ color: "#18191" }}>{text}</h4>
                          <span>
                            Bank statements, bank certificates or liquid
                            investments
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="button d-flex justify-content-between align-items-center">
                  <div className="mt-5">
                    <Link
                      id="prev"
                      style={{ textDecoration: "none", color: "#636363" }}
                      onClick={() => {
                        currentStep === 1
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
            </div>
          </>
        )}
      </section>
    </>
  );
}



export default ProofOfFund;
