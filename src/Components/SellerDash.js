import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

//
// import Logo from "./Selling/Frame 18.svg"
import clip from "./Selling/VectorClip.svg";
import back from "./MarketDash/VectorBackArrow.svg";
import upload from "./Selling/VectorUpload.svg";
import trueImg from "./Pricing/Frame 147.png";
import TopMessage from "./TopMessage";
import BlackLogo from "./Aqify project/FrameblackLogo.svg";
//
import analytics from "./MarketDash/Vertical.png";
import { useNavigate } from "react-router-dom";
//
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import ENV from "../config.js";

const SellerDash = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    "Basic Info",
    "More Details",
    "Build Listing",
    "Set Price",
    "Review",
  ];
  const [complete, setComplete] = useState(false);

  // const [show, setShow] = useState(1)

  //for image Upload
  const [image, setImage] = useState(null);
  const [Logo, setLogo] = useState(null);
  const [document, setDocument] = useState(null);
  const [fileName, setfileName] = useState("");

  const [formData, setformData] = useState({
    ownerName: "",
    ownerId: "",
    ownerEmail: "",
    ownerImage: "",
    link: "",
    category: "",
    businessName: "",
    startDate: "",
    location: "",
    projectName: "",
    competitors: "",
    tagline: "",
    logoImage: "",
    listingImage: "",
    description: "",
    businessModel: "",
    growthOpportunity: "",
    projectBackground: "",
    sellingReasoning: "",
    askingPrice: "",
    multiplies: "",
    ttmRevenue: "",
    ttmProfit: "",
    monthlyProfit: "",
    monthlyRevenue: "",
    lastMonthRevenue: "",
    lastMonthProfit: "",
    ttmGrossRevenue: "",
    ttmNetProfit: "",
    financing: "",
    teamSize: "",
    lastMonthGrossRevenue: "",
    lastMonthNetProfit: "",
    customers: "",
    annualRecurringRevenue: "",
    annualGrowthRate: "",
    valuation: "",
    documentProof: "",
    InstagramHandle: "",
    InstagramHandleFollowers: "",
    TwitterHandle: "",
    TwitterHandleFollowers: "",
    FacebookHandle: "",
    FacebookHandleFollowers: "",
    YoutubeHandle: "",
    YoutubeHandleFollowers: "",
    maxPrice: "",
    minPrice: "",
    carouselImage1: "",
    carouselImage2: "",
    techStack1: "",
    techStack2: "",
    techStack3: "",
    techStack4: "",
    googleAnalytics: "",
    video: "",
  });

  const [text1, setText1] = useState("Upload Image/Logo");
  const [text2, setText2] = useState("Upload Image");
  const [text3, setText3] = useState("Upload Image");
  const [text4, setText4] = useState("Add google Analytics");
  const [text5, setText5] = useState("Upload Video");


  const submitUpload1 = (e) => {
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
          link: res.data.data.url,
        });
        setText1("Uploaded");
        console.log(formData);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const submitUpload2 = (e) => {
    const file = e.target.files[0];
    const carouselImage1 = new FormData();
    carouselImage1.append("image", file);
    axios
      .post(
        "https://api.imgbb.com/1/upload?key=097044605d74fdffac5df09db7352066",
        carouselImage1,
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
          carouselImage1: res.data.data.url,
        });
        setText2("Uploaded");
        console.log(formData);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const submitUpload3 = (e) => {
    const file = e.target.files[0];
    const carouselImage2 = new FormData();
    carouselImage2.append("image", file);

    axios
      .post(
        "https://api.imgbb.com/1/upload?key=097044605d74fdffac5df09db7352066",
        carouselImage2,
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
          carouselImage2: res.data.data.url,
        });
        setText3("Uploaded");
        console.log(formData);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const submitUpload4 = (e) => {
    const file = e.target.files[0];
    const googleAnalytics = new FormData();
    googleAnalytics.append("image", file);
    axios
      .post(
        "https://api.imgbb.com/1/upload?key=097044605d74fdffac5df09db7352066",
        googleAnalytics,
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
          googleAnalytics: res.data.data.url,
        });
        setText4("Added");
        console.log(formData);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const submitUpload5 = (e) => {
    const file = e.target.files[0];
    const video = new FormData();
    video.append("image", file);
    axios
      .post(
        "https://api.imgbb.com/1/upload?key=097044605d74fdffac5df09db7352066",
        video,
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
          video: res.data.data.url,
        });
        setText5("Uploaded");
        console.log(formData);
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
          setformData({
            ...formData,
            ownerName: response.data.user.userName,
            ownerId: id,
            ownerEmail: response.data.user.email,
            ownerImage:
              response.data.user.pic ||
              "https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI=",
          });
        } catch (error) {
          console.error(error);
        }
      }
    };
    getUser();
  }, []);

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
      const response = await fetch(`${ENV.BACKEND_URL}/business/addBusiness`, {
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
        navigate("/MarketDash2");
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
                    What are you selling
                  </h3>
                  <span
                    style={{ fontSize: "18px", color: "#636363" }}
                    className="d-flex col-4 mt-2 mb-4"
                  >
                    Get your listing ready to be seen by thousands of buyers
                  </span>
                </div>
                <div>
                  <label
                    style={{ color: "#636363" }}
                    for="logoInput"
                    className="form-label"
                  >
                    {text1}
                  </label>
                  <div className="mb-3 my-2">
                    <input
                      style={{ display: "none" }}
                      type="file"
                      accept="image/*"
                      id="logoInput"
                      onChange={submitUpload1}
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

                {/* <div
                  className="d-flex justify-content-between"
                  style={{ margin: "1rem 0 0rem 0" }}
                >
                  <h3 className="card-h3 pb-2 my-4">Category</h3>
                </div> */}
{/* 
                <div>
                  <div className="d-flex flex-wrap">
                    <div>
                      <input
                        type="radio"
                        className="btn-check rounded-pill"
                        name="category"
                        id="option8"
                        autoComplete="off"
                        value="Ecommerce"
                        onChange={handleChange}
                        checked={formData.category === "Ecommerce"}
                      />
                      <label className="btn2" htmlFor="option8">
                        <i className="fa-solid fa-cart-shopping mx-2"></i>
                        Ecommerce
                      </label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        className="btn-check  rounded-pill"
                        name="category"
                        id="option9"
                        autocomplete="off"
                        value="Saas"
                        onChange={handleChange}
                        checked={formData.category === "Saas"}
                      />
                      <label className="btn2" for="option9">
                        <i className="fa-brands fa-soundcloud mx-2"></i>
                        Saas
                      </label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        className="btn-check  rounded-pill"
                        name="category"
                        id="option10"
                        autocomplete="off"
                        value="Community"
                        onChange={handleChange}
                        checked={formData.category === "Community"}
                      />
                      <label className="btn2" for="option10">
                        <i className="fa-solid fa-users-line mx-2"></i>
                        Community
                      </label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        className="btn-check  rounded-pill"
                        name="category"
                        id="option11"
                        autocomplete="off"
                        value="Marketplace"
                        onChange={handleChange}
                        checked={formData.category === "Marketplace"}
                      />
                      <label className="btn2" for="option11">
                        <i className="fa-solid fa-shop mx-2"></i>
                        Marketplace
                      </label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        className="btn-check  rounded-pill"
                        name="category"
                        id="option12"
                        autocomplete="off"
                        value="Content"
                        onChange={handleChange}
                        checked={formData.category === "Content"}
                      />
                      <label className="btn2" for="option12">
                        <i className="fa-solid fa-file-contract mx-2"></i>
                        Content
                      </label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        className="btn-check  rounded-pill"
                        name="category"
                        id="option13"
                        autocomplete="off"
                        value="Service"
                        onChange={handleChange}
                        checked={formData.category === "Service"}
                      />
                      <label className="btn2" for="option13">
                        <i className="fa-solid fa-cube mx-2"></i>
                        Service
                      </label>
                    </div>
                  </div>
                </div> */}
                <div>
                  <div className="mb-3 my-5">
                    <label
                      for="exampleFormControlInput1"
                      className="form-label"
                      style={{ color: "#636363" }}
                    >
                      Category
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="category"
                      id="exampleFormControlInput1"
                      placeholder="Ecommerce"
                      value={formData.category}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                
                <div>
                  <div className="mb-3 my-5">
                    <label
                      for="exampleFormControlInput1"
                      className="form-label"
                      style={{ color: "#636363" }}
                    >
                      Tagline
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="tagline"
                      id="exampleFormControlInput1"
                      placeholder="Acqify"
                      value={formData.tagline}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="my-5">
                  <div className="my-2">
                    <div className="d-flex justify-content-between">
                      <div style={{ width: "100%" }}>
                        <label for="inputEmail4" className="form-label">
                          Asking price
                        </label>
                        <input
                          style={{ height: "7vh", width: "95%" }}
                          type="text"
                          id="inputEmail4"
                          className="form-control"
                          name="askingPrice"
                          placeholder="$79k"
                          value={formData.askingPrice}
                          onChange={handleChange}
                        />
                      </div>
                      <div style={{ width: "100%" }}>
                        <label for="inputEmail4" className="form-label">
                          Multiplies
                        </label>
                        <input
                          style={{ height: "7vh", width: "100%" }}
                          type="text"
                          id="inputEmail4"
                          className="form-control"
                          name="multiplies"
                          placeholder="2.8x profit 1.4x revenue"
                          value={formData.multiplies}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="my-2">
                    <div className="d-flex justify-content-between">
                      <div style={{ width: "100%" }}>
                        <label for="inputEmail4" className="form-label">
                          TTM Revenue
                        </label>
                        <input
                          style={{ height: "7vh", width: "95%" }}
                          type="text"
                          id="inputEmail4"
                          className="form-control"
                          name="ttmRevenue"
                          placeholder="$57k"
                          value={formData.ttmRevenue}
                          onChange={handleChange}
                        />
                      </div>
                      <div style={{ width: "100%" }}>
                        <label for="inputEmail4" className="form-label">
                          TTM Profit
                        </label>
                        <input
                          style={{ height: "7vh", width: "100%" }}
                          type="text"
                          id="inputEmail4"
                          className="form-control"
                          name="ttmProfit"
                          placeholder="$28k"
                          value={formData.ttmProfit}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="my-2">
                    <div className="d-flex justify-content-between">
                      <div style={{ width: "100%" }}>
                        <label for="inputEmail4" className="form-label">
                          Monthly Revenue
                        </label>
                        <input
                          style={{ height: "7vh", width: "95%" }}
                          type="text"
                          id="inputEmail4"
                          className="form-control"
                          name="monthlyRevenue"
                          placeholder="$1k"
                          value={formData.monthlyRevenue}
                          onChange={handleChange}
                        />
                      </div>
                      <div style={{ width: "100%" }}>
                        <label for="inputEmail4" className="form-label">
                          Monthly Profit
                        </label>
                        <input
                          style={{ height: "7vh", width: "100%" }}
                          type="text"
                          id="inputEmail4"
                          className="form-control"
                          name="monthlyProfit"
                          placeholder="$70"
                          value={formData.monthlyProfit}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="my-3">
                    <div className="d-flex justify-content-between">
                      <div style={{ width: "100%" }}>
                        <label for="inputEmail4" className="form-label">
                          Last Month Revenue
                        </label>
                        <input
                          style={{ height: "7vh", width: "95%" }}
                          type="text"
                          id="inputEmail4"
                          className="form-control"
                          name="lastMonthRevenue"
                          placeholder="$1,453"
                          value={formData.lastMonthRevenue}
                          onChange={handleChange}
                        />
                      </div>
                      <div style={{ width: "100%" }}>
                        <label for="inputEmail4" className="form-label">
                          Last Month Profit
                        </label>
                        <input
                          style={{ height: "7vh", width: "100%" }}
                          type="text"
                          id="inputEmail4"
                          className="form-control"
                          name="lastMonthProfit"
                          placeholder="$750"
                          value={formData.lastMonthProfit}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="button d-flex justify-content-between align-items-center">
                  <div className="mt-5">
                    <Link
                      style={{ textDecoration: "none", color: "#636363" }}
                      id="prev"
                      to="/MarketDash2"
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
                    Get your listing ready to be seen by thousands of buyers
                  </span>
                </div>

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
                      name="businessName"
                      id="exampleFormControlInput1"
                      placeholder="Acqify"
                      value={formData.businessName}
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
                      What is your project name?
                    </label>
                    {/* <select
                      style={{
                        width: "50%",
                        color: "#636363",
                        fontSize: "16px",
                      }}
                      className="form-control form-select form-select-lg"
                      name="projectName"
                      aria-label="Large select example"
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
                    </select> */}
                    <input
                      type="text"
                      className="form-control"
                      name="projectName"
                      id="efloatingInputValue"
                      placeholder="Acqify"
                      value={formData.projectName}
                      onChange={handleChange}
                      style={{ width: "50%" }}
                    />
                  </div>
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
                      Description
                    </label>
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                      placeholder="Tell about your project details"
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                </div>
                <div className="mb-3 my-3">
                  <label
                    for="exampleFormControlInput1"
                    className="form-label"
                    style={{ color: "#636363" }}
                  >
                    Competitors
                  </label>
                  <select
                    style={{
                      width: "50%",
                      color: "#636363",
                      fontSize: "16px",
                    }}
                    className="form-control form-select form-select-lg"
                    name="competitors"
                    placeholder="Select Competitors"
                    aria-label="Large select example"
                    value={formData.competitors}
                    onChange={handleChange}
                  >
                    <option id="floatingInputValue" selected>
                      Select competitors name
                    </option>
                    <option value="inspireuplift.com">inspireuplift.com</option>
                    <option value="mexten.com">mexten.com</option>
                    <option value="Community.com">Community.com</option>
                    <option value="Marketplace.co">Marketplace.co</option>
                    <option value="Content.in">Content.in</option>
                    <option value="Service.com">Service.com</option>
                  </select>
                </div>

                <div className="my-5 d-flex">
                  <div
                    className="mb-3 my-3"
                    style={{ width: "48%", marginRight: "5px" }}
                  >
                    <label
                      for="exampleFormControlInput1"
                      className="form-label"
                      style={{
                        color: "#636363",
                        fontWeight: "500",
                        fontSize: "18px",
                      }}
                    >
                      Date Founded?
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      name="startDate"
                      id="exampleFormControlInput1"
                      placeholder="Month/Year"
                      value={formData.startDate}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3 my-3" style={{ width: "50%" }}>
                    <label
                      for="exampleFormControlInput1"
                      className="form-label"
                      style={{
                        color: "#636363",
                        fontWeight: "500",
                        fontSize: "18px",
                      }}
                    >
                      Team Size?
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      name="teamSize"
                      id="exampleFormControlInput1"
                      placeholder="3"
                      value={formData.teamSize}
                      onChange={handleChange}
                    />
                  </div>
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
                      Business Model
                    </label>
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                      placeholder="Tell about your Business Model"
                      name="businessModel"
                      value={formData.businessModel}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                </div>

                <div
                  style={{
                    color: "#636363",
                    fontWeight: "500",
                    fontSize: "18px",
                  }}
                >
                  Carousel Images
                </div>
                <div className="d-flex" style={{ width: "100%" }}>
                  <div className="mb-3 mx-2 my-2" style={{ width: "48%" }}>
                    <input
                      style={{ display: "none" }}
                      type="file"
                      accept="image/*"
                      id="logoInput"
                      onChange={submitUpload2}
                    />
                    {text2}
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
                      id="logoPreview2"
                      style={{ width: "200px", display: "none" }}
                    />
                  </div>
                  <div className="mb-3 mx-2 my-2" style={{ width: "48%" }}>
                    <input
                      style={{ display: "none" }}
                      type="file"
                      accept="image/*"
                      id="logoInput2"
                      onChange={submitUpload3}
                    />
                    {text3}
                    <label
                      style={{
                        height: "8vh",
                        width: "100%",
                        background: "#EEF0FE",
                        borderRadius: "0.375rem",
                        border: "1px solid #C0C0C0",
                      }}
                      for="logoInput2"
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
                      id="logoPreview2"
                      style={{ width: "200px", display: "none" }}
                    />
                  </div>
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
            <div className="Onboard-card3">
              <div style={{ overflow: "hidden", overflowY: "scroll" }}>
                <div>
                  <h3 style={{ fontWeight: "700,", fontSize: "30px" }}>
                    Build your listing
                  </h3>
                  <span
                    style={{ fontSize: "18px", color: "#636363" }}
                    className="d-flex col-6 mt-2 mb-4"
                  >
                    Get your listing ready to be seen by thousands of buyers
                  </span>
                </div>

                {/* <div className="mb-3 my-3">
                  <label
                    for="exampleFormControlInput1"
                    className="form-label"
                    style={{
                      color: "#636363",
                      fontWeight: "bold",
                      fontSize: "20px",
                    }}
                  >
                    Tech Stack
                  </label>
                  <select
                    style={{
                      width: "50%",
                      color: "#636363",
                      fontSize: "16px",
                    }}
                    className="form-control form-select form-select-lg"
                    name="techStack"
                    aria-label="Large select example"
                    value={formData.techStack}
                    onChange={handleChange}
                  >
                    <option id="floatingInputValue" selected>
                      Select Tech Stack
                    </option>
                    <option value="WooCommerce">WooCommerce</option>
                    <option value="Bubble">Bubble</option>
                    <option value="Ecommerce">Ecommerce</option>
                    <option value="Saas">Saas</option>
                    <option value="Wordpress">Wordpress</option>
                    <option value="Community">Community</option>
                  </select>
                </div> */}

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
                      Growth opportunity
                    </label>
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                      placeholder="Tell us about your growth opportunity"
                      name="growthOpportunity"
                      value={formData.growthOpportunity}
                      onChange={handleChange}
                    ></textarea>
                  </div>
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
                      Project Background
                    </label>
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                      placeholder="Tell about your project details"
                      name="projectBackground"
                      value={formData.projectBackground}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                </div>

                <div>
                  <div className="mb-3 my-5">
                    <label
                      for="exampleFormControlTextarea1"
                      className="form-label"
                      style={{
                        color: "#636363",
                        fontWeight: "bold",
                        fontSize: "20px",
                      }}
                    >
                      Selling Reasoning
                    </label>
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                      placeholder="Tell about your Selling purpose"
                      name="sellingReasoning"
                      value={formData.sellinReasoning}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                </div>

                <div className="my-5">
                  <div style={{ width: "100%" }}>
                    <label
                      style={{
                        color: "#636363",
                        fontWeight: "500",
                        fontSize: "18px",
                      }}
                      for="inputEmail4"
                      className="form-label"
                    >
                      Financing
                    </label>
                    <input
                      style={{ height: "7vh" }}
                      type="text"
                      id="inputEmail4"
                      className="form-control"
                      name="financing"
                      placeholder="Bootstrapped"
                      value={formData.financing}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="my-5">
                  <div>
                    <span
                      style={{
                        color: "#636363",
                        fontWeight: "500",
                        fontSize: "18px",
                      }}
                      className="d-flex col-4 mt-2 mb-4"
                    >
                      Financials
                    </span>
                  </div>
                  <div className="">
                    <div className="d-flex justify-content-between">
                      <div style={{ width: "100%" }}>
                        <label for="inputEmail4" className="form-label">
                          TTM Gross Revenue
                        </label>
                        <input
                          style={{ height: "7vh", width: "95%" }}
                          type="text"
                          id="inputEmail4"
                          className="form-control"
                          name="ttmGrossRevenue"
                          placeholder="$57k"
                          value={formData.ttmGrossRevenue}
                          onChange={handleChange}
                        />
                      </div>
                      <div style={{ width: "100%" }}>
                        <label for="inputEmail4" className="form-label">
                          TTM Net Profit
                        </label>
                        <input
                          style={{ height: "7vh", width: "100%" }}
                          type="text"
                          id="inputEmail4"
                          className="form-control"
                          name="ttmNetProfit"
                          placeholder="$28k"
                          value={formData.ttmNetProfit}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="my-3">
                    <div className="d-flex justify-content-between">
                      <div style={{ width: "100%" }}>
                        <label for="inputEmail4" className="form-label">
                          Last Month Gross Revenue
                        </label>
                        <input
                          style={{ height: "7vh", width: "95%" }}
                          type="text"
                          id="inputEmail4"
                          className="form-control"
                          name="lastMonthGrossRevenue"
                          placeholder="$1k"
                          value={formData.lastMonthGrossRevenue}
                          onChange={handleChange}
                        />
                      </div>
                      <div style={{ width: "100%" }}>
                        <label for="inputEmail4" className="form-label">
                          Last Month Net Profit
                        </label>
                        <input
                          style={{ height: "7vh", width: "100%" }}
                          type="text"
                          id="inputEmail4"
                          className="form-control"
                          name="lastMonthNetProfit"
                          placeholder="$750"
                          value={formData.lastMonthNetProfit}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="my-5">
                  <div>
                    <span
                      style={{
                        color: "#636363",
                        fontWeight: "500",
                        fontSize: "18px",
                      }}
                      className="d-flex col-4 mt-2 mb-4"
                    >
                      Metrics
                    </span>
                  </div>
                  <div className="">
                    <div className="d-flex justify-content-between">
                      <div style={{ width: "100%" }}>
                        <label for="inputEmail4" className="form-label">
                          Customers
                        </label>
                        <input
                          style={{ height: "7vh", width: "95%" }}
                          type="text"
                          id="inputEmail4"
                          className="form-control"
                          name="customers"
                          placeholder="more than 100,000"
                          value={formData.customers}
                          onChange={handleChange}
                        />
                      </div>
                      <div style={{ width: "100%" }}>
                        <label for="inputEmail4" className="form-label">
                          Annual recurring revenue
                        </label>
                        <input
                          style={{ height: "7vh", width: "100%" }}
                          type="text"
                          id="inputEmail4"
                          className="form-control"
                          name="annualRecurringRevenue"
                          placeholder="$57k"
                          value={formData.annualRecurringRevenue}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="my-3">
                    <div className="d-flex justify-content-between">
                      <div style={{ width: "100%" }}>
                        <label for="inputEmail4" className="form-label">
                          Annual growth rate
                        </label>
                        <input
                          style={{ height: "7vh", width: "95%" }}
                          type="text"
                          id="inputEmail4"
                          className="form-control"
                          name="annualGrowthRate"
                          placeholder="5%"
                          value={formData.annualGrowthRate}
                          onChange={handleChange}
                        />
                      </div>
                      <div style={{ width: "100%" }}>
                        <label for="inputEmail4" className="form-label">
                          Valuation
                        </label>
                        <input
                          style={{ height: "7vh", width: "100%" }}
                          type="text"
                          id="inputEmail4"
                          className="form-control"
                          name="valuation"
                          placeholder="$150k"
                          value={formData.valuation}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="my-5">
                  <div>
                    <span
                      style={{
                        color: "#636363",
                        fontWeight: "500",
                        fontSize: "18px",
                      }}
                      className="d-flex col-4 mt-2 mb-4"
                    >
                      Google Analytics
                    </span>
                  </div>
                  <input
                    type="file"
                    id="image_input4"
                    className="form-label "
                    onChange={submitUpload4}
                  />
                  <label
                    for="image_input4"
                    className="form-label d-flex align-items-center justify-content-center"
                    style={{
                      background: "#EEF0FE",
                      borderRadius: "20px",
                      height: "8vh",
                      width: "98%",
                      textDecoration: "none",
                    }}
                  >
                    <span >{text4}</span>
                  </label>

                  <div>
                    <img style={{ width: "100%" }} src={analytics} alt="" />
                  </div>
                </div>

                <div>
                  <label
                    for="exampleFormControlTextarea1"
                    className="form-label"
                    style={{ color: "#636363" }}
                  >
                    Build trust with buyers by including Video, Choose a video
                    file to process:
                  </label>
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
                          onChange={submitUpload5}
                        />
                        <label
                          for="image_input2"
                          className="form-label text-center"
                          style={{ color: "#636363" }}
                        >
                          {" "}
                          <img src={upload} alt="" />
                          <br />
                          <br />
                          <span>{text5}</span>
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

        {currentStep === 4 && (
          <>
            <div className="Onboard-card2">
              <div style={{ overflow: "hidden", overflowY: "scroll" }}>
                <div>
                  <h3 style={{ fontWeight: "700,", fontSize: "30px" }}>
                    Set your price
                  </h3>
                  <span
                    style={{ fontSize: "18px", color: "#636363" }}
                    className="d-flex col-8 mt-2 mb-4"
                  >
                    Get your listing ready to be seen by thousands of buyers
                  </span>
                </div>

                <div className="">
                  <div className="d-flex justify-content-between">
                    <div style={{ width: "100%" }}>
                      <label for="inputEmail4" className="form-label">
                        Max Price
                      </label>
                      <input
                        style={{ height: "7vh", width: "95%" }}
                        type="text"
                        id="inputEmail4"
                        className="form-control"
                        name="maxPrice"
                        placeholder="$ less than $100k"
                        value={formData.maxPrice}
                        onChange={handleChange}
                      />
                    </div>
                    <div style={{ width: "100%" }}>
                      <label for="inputEmail4" className="form-label">
                        Min Price
                      </label>
                      <input
                        style={{ height: "7vh", width: "100%" }}
                        type="text"
                        id="inputEmail4"
                        className="form-control"
                        name="minPrice"
                        placeholder="$ less than $100k"
                        value={formData.minPrice}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
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
          </>
        )}

        {currentStep === 5 && (
          <>
            <div className="Onboard-card2">
              <div style={{ overflow: "hidden", overflowY: "scroll" }}>
                <div>
                  <h3 style={{ fontWeight: "700,", fontSize: "30px" }}>
                    Review and activate
                  </h3>
                  <span
                    style={{ fontSize: "18px", color: "#636363" }}
                    className="d-flex col-8 mt-2 mb-4"
                  >
                    Get your listing ready to be seen by thousands of buyers
                  </span>
                </div>

                <div className="">
                  <div className="onboard-Contentcard">
                    <span className="span1" style={{ fontSize: "16px" }}>
                      Listing Fee
                    </span>
                    <h1 style={{ fontWeight: "900" }}>
                      <strike>$15</strike> Free
                    </h1>

                    <span
                      style={{
                        color: "#636363",
                        fontSize: "17px",
                        fontWeight: "500",
                      }}
                    >
                      includes
                    </span>
                    <div className="my-4 d-flex flex-wrap">
                      <div>
                        <div className="my-3 mx-2">
                          <img
                            style={{ marginRight: "1rem" }}
                            width={30}
                            src={trueImg}
                            alt=""
                          />
                          <span style={{ color: "#636363" }}>
                            Marketplace listing
                          </span>
                        </div>
                        <div className="my-3 mx-2">
                          <img
                            style={{ marginRight: "1rem" }}
                            width={30}
                            src={trueImg}
                            alt=""
                          />
                          <span style={{ color: "#636363" }}>
                            Standard Reach
                          </span>
                        </div>
                        <div className="my-3 mx-2">
                          <img
                            style={{ marginRight: "1rem" }}
                            width={30}
                            src={trueImg}
                            alt=""
                          />
                          <span style={{ color: "#636363" }}>Escrow</span>
                        </div>
                      </div>

                      <div className="mx-5">
                        <div className="my-3 mx-2">
                          <img
                            style={{ marginRight: "1rem" }}
                            width={30}
                            src={trueImg}
                            alt=""
                          />
                          <span style={{ color: "#636363" }}>
                            Unlimited Listing Duration
                          </span>
                        </div>
                        <div className="my-3 mx-2">
                          <img
                            style={{ marginRight: "1rem" }}
                            width={30}
                            src={trueImg}
                            alt=""
                          />
                          <span style={{ color: "#636363" }}>
                            Same day support
                          </span>
                        </div>
                      </div>
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
