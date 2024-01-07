// import React, { useState } from 'react'
// import { Link } from 'react-router-dom'

// //
// // import Logo from "./Selling/Frame 18.svg"
// import clip from "./Selling/VectorClip.svg"
// import back from "./MarketDash/VectorBackArrow.svg"
// import upload from "./Selling/VectorUpload.svg"
// import trueImg from "./Pricing/Frame 147.png"
// import TopMessage from './TopMessage'
// import BlackLogo from "./Aqify project/FrameblackLogo.svg"

// const SellingDash = () => {

//     const [currentStep, setCurrentStep] = useState(1)

//     const steps = ['Basic Info', 'More Details', 'Build Listing', 'Set Price', 'Review']
//     const [complete, setComplete] = useState(false)

//     // const [show, setShow] = useState(1)

//     //for image Upload
//     const [image, setImage] = useState(null)
//     const [Logo, setLogo] = useState(null)
//     const [document, setDocument] = useState(null)
//     const [fileName, setfileName] = useState("")

//     const [formData,setformData]=useState({
//         link:'',
//         category:'',
//         businessName:'',
//         startDate:'',
//         location:'',
//         projectName:'',
//         otherCategories:'',
//         tagline:'',
//         logoImage:'',
//         listingImage:'',
//         description:'',
//         monthlyProfit:'',
//         monthlyRevenue:'',
//         documentProof:'',
//         InstagramHandle:'',
//         InstagramHandleFollowers:'',
//         TwitterHandle:'',
//         TwitterHandleFollowers:'',
//         FacebookHandle:'',
//         FacebookHandleFollowers:'',
//         YoutubeHandle:'',
//         YoutubeHandleFollowers:'',
//         maxPrice:'',
//         minPrice:''
//     });

//     function convertToBase64(file){
//         return new Promise((resolve, reject) => {
//           const fileReader = new FileReader();
//           fileReader.readAsDataURL(file);
//           fileReader.onload = () => {
//             resolve(fileReader.result)
//           };
//           fileReader.onerror = (error) => {
//             reject(error)
//           }
//         })
//     };

//     const handleFileUploadLogo = async (e) => {
//         const file = e.target.files[0];
//         const base64 = await convertToBase64(file);
//         console.log(base64)
//         setformData({ ...formData, logoImage : base64 })
//         console.log(formData.logoImage);
//     }

//     const handleFileUploadListingImage = async (e) => {
//         const file = e.target.files[0];
//         const base64 = await convertToBase64(file);
//         console.log(base64)
//         setformData({ ...formData, listingImage : base64 })
//         console.log(formData.listingImage);
//     }

//     const handleFileUploadDocumentProof = async (e) => {
//         const file = e.target.files[0];
//         const base64 = await convertToBase64(file);
//         console.log(base64)
//         setformData({ ...formData, documentProof : base64 })
//         console.log(formData.documentProof);
//     }

//     const handleChange=(e)=>{
//         const {name,value}=e.target;
//         setformData({
//             ...formData,
//             [name]:value
//         });
//     };

//     const input = ({ target: { files } }) => {
//         files[0] && setfileName(files[0].name)
//         if (files) {
//             setImage(URL.createObjectURL(files[0]))
//         }
//     }

//     // for logo upload
//     const inputLogo = ({ target: { files } }) => {
//         files[0] && setfileName(files[0].name)
//         if (files) {
//             setLogo(URL.createObjectURL(files[0]))
//         }
//     }

//     // for logo upload
//     const inputDocument = ({ target: { files } }) => {
//         files[0] && setfileName(files[0].name)
//         if (files) {
//             setDocument(URL.createObjectURL(files[0]))
//         }
//     }

//     return (
//         <>
//             <section>
//                 <div className='d-flex justify-content-around'>

//                     <div style={{ background: "#EEF0FE", width: "100%", padding: "1.3rem" }}>
//                         <Link to="/"><img src={BlackLogo} alt="" /></Link>
//                     </div>
//                     <TopMessage />
//                 </div>
//             </section >

//             <section className='first-sell d-flex justify-content-between align-items-center' style={{ padding: '3rem 6rem', background: '#EEF0FE' }}>

//                 {currentStep === 1 && <>
//                     <div className="Onboard-card">
//                         <div>
//                             <h3 style={{ fontWeight: '700,', fontSize: '30px' }}>What are you selling</h3>
//                             <span style={{ fontSize: '18px', color: '#636363' }} className='d-flex col-4 mt-2 mb-4'>Get your listing ready to be seen by thousands of buyers</span>
//                         </div>

//                         <div>
//                             <div className="mb-3 my-3 form-floating">
//                                 <input style={{ width: '100%' }} type="text" name='link' id="floatingInputValue" className="form-control" placeholder="Enter Full URL" value={formData.link} onChange={handleChange}/>
//                                 <label for="floatingInputValue"><img src={clip} alt="" /></label>
//                                 <span style={{ fontSize: '15px' }}>Your tiny project should contain a URL</span>
//                             </div>
//                         </div>

//                         <div className='d-flex justify-content-between' style={{ margin: '1rem 0 0rem 0' }}>
//                             <h3 className='card-h3 pb-2 my-4'>Category</h3>
//                         </div>

//                         <div>
//                             <div className='d-flex flex-wrap'>
//                                 <div>
//                                     <input type="radio" className="btn-check rounded-pill" name="category" id="option8" autocomplete="off" value={formData.category} onChange={handleChange} />
//                                     <label className="btn2" for="option8">
//                                         <i className="fa-solid fa-cart-shopping mx-2"></i>
//                                         Ecommerce</label>
//                                 </div>
//                                 <div >
//                                     <input type="radio" className="btn-check  rounded-pill" name="category" id="option9" autocomplete="off" value={formData.category} onChange={handleChange}/>
//                                     <label className="btn2" for="option9">
//                                         <i className="fa-brands fa-soundcloud mx-2"></i>
//                                         Saas</label>
//                                 </div>
//                                 <div>
//                                     <input type="radio" className="btn-check  rounded-pill" name="category" id="option10" autocomplete="off" value={formData.category} onChange={handleChange}/>
//                                     <label className="btn2" for="option10">
//                                         <i className="fa-solid fa-users-line mx-2" ></i>
//                                         Community</label>
//                                 </div>
//                                 <div >
//                                     <input type="radio" className="btn-check  rounded-pill" name="category" id="option11" autocomplete="off" value={formData.category} onChange={handleChange}/>
//                                     <label className="btn2" for="option11">
//                                         <i className="fa-solid fa-shop mx-2" ></i>
//                                         Marketplace</label>
//                                 </div>
//                                 <div >
//                                     <input type="radio" className="btn-check  rounded-pill" name="category" id="option12" autocomplete="off" value={formData.category} onChange={handleChange}/>
//                                     <label className="btn2" for="option12">
//                                         <i className="fa-solid fa-file-contract mx-2"></i>
//                                         Content</label>
//                                 </div>
//                                 <div >
//                                     <input type="radio" className="btn-check  rounded-pill" name="category" id="option13" autocomplete="off" value={formData.category} onChange={handleChange}/>
//                                     <label className="btn2" for="option13">
//                                         <i className="fa-solid fa-cube mx-2"></i>
//                                         Service</label>
//                                 </div>

//                             </div>
//                         </div>


//                         <div className='button d-flex justify-content-between align-items-center'>
//                             <div className='mt-5'>
//                                 <Link style={{ textDecoration: 'none', color: '#636363' }} id="prev" to="/MainDashboard" onClick={() => {
//                                     setCurrentStep((prev) => prev - 1)
//                                 }}><img src={back} alt="" /> <span className='mx-3'>Back</span></Link>
//                             </div>
//                             <div className='mt-5'>
//                                 {!complete &&
//                                     <Link id="next" className='btn btn-primary rounded-pill px-5 py-2'
//                                         onClick={() => {
//                                             currentStep === 5 ? setComplete(true)
//                                                 : setCurrentStep((prev) => prev + 1)
//                                         }}>{currentStep === 5 ? "Finish" : "Next"}</Link>}
//                             </div>
//                         </div>


//                     </div>
//                 </>}

//                 {currentStep === 2 && <>
//                     <div className="Onboard-card2" style={{ overflowY: 'hidden' }}>
//                         <div style={{ overflow: 'hidden', overflowY: 'scroll' }}>
//                             <div>
//                                 <h3 style={{ fontWeight: '700,', fontSize: '30px' }}>We need some more details</h3>
//                                 <span style={{ fontSize: '18px', color: '#636363' }} className='d-flex col-6 mt-2 mb-4'>Get your listing ready to be seen by thousands of buyers</span>
//                             </div>

//                             <div>
//                                 <div className="mb-3 my-3">
//                                     <label for="exampleFormControlInput1" className="form-label" style={{ color: '#636363' }}>Business/Asset Name</label>
//                                     <input type="text" className="form-control" name='businessName' id="exampleFormControlInput1" placeholder="Acqify" value={formData.businessName} onChange={handleChange} />
//                                 </div>
//                             </div>
//                             <div>
//                                 <div className="mb-3 my-3">
//                                     <label for="exampleFormControlInput1" className="form-label" style={{ color: '#636363' }}>When did your business begin operations?</label>
//                                     <input type="date" className="form-control" name='startDate' id="exampleFormControlInput1" placeholder="Month/Year" value={formData.startDate} onChange={handleChange}/>
//                                 </div>
//                             </div>
//                             <div>
//                                 <div className="mb-3 my-3">
//                                     <label for="exampleFormControlInput1" className="form-label" style={{ color: '#636363' }}>Where is your business located?</label>
//                                     <input type="text" className="form-control" name='location' id="exampleFormControlInput1" placeholder="Acqify" value={formData.location} onChange={handleChange}/>
//                                 </div>
//                             </div>
//                             <div>
//                                 <div className="mb-3 my-3">
//                                     <label for="exampleFormControlInput1" className="form-label" style={{ color: '#636363' }}>What is your project name?</label>
//                                     <select style={{ width: '60%', color: '#636363', fontSize: '16px' }} className="form-control form-select form-select-lg" name='projectName' aria-label="Large select example" value={formData.projectName} onChange={handleChange}>
//                                         <option id="floatingInputValue" selected>Select project name</option>
//                                         <option value="UI Design">UI Design</option>
//                                         <option value="UI Development">UI  Development</option>
//                                         <option value="Artificial Intelligence">Artifitial Intelligence</option>
//                                     </select>
//                                 </div>
//                             </div>


//                             <div>
//                                 <span style={{ fontSize: '18px', color: '#636363' }} className='d-flex col-4 mt-2 mb-4'>Choose other categories</span>
//                             </div>

//                             <div>
//                                 <div className='d-flex flex-wrap'>
//                                     <div>
//                                         <input type="radio" className="btn-check  rounded-pill" name="otherCategories" id="option8" autocomplete="off" value={formData.otherCategories} onChange={handleChange}/>
//                                         <label className="btn2" for="option8">Ecommerce</label>
//                                     </div>
//                                     <div >
//                                         <input type="radio" className="btn-check  rounded-pill" name="otherCategories" id="option9" autocomplete="off" value={formData.otherCategories} onChange={handleChange}/>
//                                         <label className="btn2" for="option9"> Saas</label>
//                                     </div>
//                                     <div>
//                                         <input type="radio" className="btn-check  rounded-pill" name="otherCategories" id="option10" autocomplete="off" value={formData.otherCategories} onChange={handleChange}/>
//                                         <label className="btn2" for="option10">Community</label>
//                                     </div>
//                                     <div >
//                                         <input type="radio" className="btn-check  rounded-pill" name="otherCategories" id="option11" autocomplete="off" value={formData.otherCategories} onChange={handleChange}/>
//                                         <label className="btn2" for="option11">Marketplace</label>
//                                     </div>
//                                     <div >
//                                         <input type="radio" className="btn-check  rounded-pill" name="otherCategories" id="option12" autocomplete="off" value={formData.otherCategories} onChange={handleChange}/>
//                                         <label className="btn2" for="option12">Content</label>
//                                     </div>
//                                     <div >
//                                         <input type="radio" className="btn-check  rounded-pill" name="otherCategories" id="option13" autocomplete="off" value={formData.otherCategories} onChange={handleChange}/>
//                                         <label className="btn2" for="option13">Service</label>
//                                     </div>
//                                     <div >
//                                         <input type="radio" className="btn-check  rounded-pill" name="otherCategories" id="option14" autocomplete="off" value={formData.otherCategories} onChange={handleChange}/>
//                                         <label className="btn2" for="option14">Wordpress</label>
//                                     </div>
//                                     <div >
//                                         <input type="radio" className="btn-check  rounded-pill" name="otherCategories" id="option15" autocomplete="off" value={formData.otherCategories} onChange={handleChange}/>
//                                         <label className="btn2" for="option15">Add-on</label>
//                                     </div>
//                                     <div >
//                                         <input type="radio" className="btn-check  rounded-pill" name="otherCategories" id="option16" autocomplete="off" value={formData.otherCategories} onChange={handleChange}/>
//                                         <label className="btn2" for="option16">Chrome-extension</label>
//                                     </div>
//                                     <div >
//                                         <input type="radio" className="btn-check  rounded-pill" name="otherCategories" id="option17" autocomplete="off" value={formData.otherCategories} onChange={handleChange}/>
//                                         <label className="btn2" for="option17">Crypto</label>
//                                     </div>

//                                 </div>
//                             </div>

//                             <div className='button d-flex justify-content-between align-items-center'>
//                                 <div className='mt-5'>
//                                     <Link id="prev" style={{ textDecoration: 'none', color: '#636363' }}
//                                         onClick={() => {
//                                             currentStep === steps.length ? setComplete(true)
//                                                 : setCurrentStep((prev) => prev - 1)
//                                         }}
//                                     ><img src={back} alt="" /><span className='mx-3'>Back</span></Link>
//                                 </div>
//                                 <div className='mt-5'>
//                                     {!complete &&
//                                         <Link id="next" className='btn btn-primary rounded-pill px-5 py-2'
//                                             onClick={() => {
//                                                 currentStep === steps.length ? setComplete(true)
//                                                     : setCurrentStep((prev) => prev + 1)
//                                             }}>{currentStep === steps.length ? "Finish" : "Next"}</Link>}
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </>}

//                 {currentStep === 3 && <>
//                     <div className="Onboard-card3">
//                         <div style={{ overflow: 'hidden', overflowY: 'scroll' }}>
//                             <div>
//                                 <h3 style={{ fontWeight: '700,', fontSize: '30px' }}>Build your listing</h3>
//                                 <span style={{ fontSize: '18px', color: '#636363' }} className='d-flex col-6 mt-2 mb-4'>Get your listing ready to be seen by thousands of buyers</span>
//                             </div>

//                             <div>
//                                 <div className="mb-3 my-3">
//                                     <label for="exampleFormControlInput1" className="form-label" style={{ color: '#636363' }}>Tagline</label>
//                                     <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Acqify" name='tagline' value={formData.tagline} onChange={handleChange}/>
//                                 </div>
//                             </div>
//                             <div className='my-5'>
//                                 <div className="mb-3 my-3">
//                                     <label for="exampleFormControlInput1" className="form-label" style={{ color: '#636363' }}>When did your business begin operations?</label>
//                                     <div className='d-flex justify-content-evenly'>
//                                         <div className='divInput'>
//                                             <div className='d-flex flex-column align-items-center justify-content-center'>
//                                                 <div className="img-container" id="display_image">
//                                                     <img src={Logo} className="" id="img" alt="" />

//                                                     //<p id="img-name">{fileName}</p>//

//                                                 </div>
//                                                 <div>
//                                                     <input type="file" className="form-label" id="image_input" multiple accept='image/*' onChange={(e) => { inputLogo(e); handleFileUploadLogo(e); }}/>
//                                                     <label for="image_input" className="form-label" style={{ color: '#636363' }}> <img src={upload} alt="" /><br /><br /><span >Upload Logo</span></label>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <div className='divInput'>
//                                             <div className='d-flex flex-column align-items-center justify-content-center'>
//                                                 <div className="img-container" id="display_image">
//                                                     <img src={image} className="" id="img" alt="" />
//                                                 </div>
//                                                 <div>
//                                                     <input type="file" className="form-label" id="image_input1" multiple accept='images/*' onChange={(e)=>{input(e);handleFileUploadListingImage(e);}} />
//                                                     <label for="image_input1" className="form-label text-center" style={{ color: '#636363' }}> <img src={upload} alt="" /><br /><br /><span >Upload Listing images</span></label>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>

//                             <div>
//                                 <div className="mb-3 my-5">
//                                     <label for="exampleFormControlTextarea1" className="form-label" style={{ color: '#636363' }}>Description</label>
//                                     <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Tell about your project details' name='description' value={formData.description} onChange={handleChange}></textarea>
//                                 </div>
//                             </div>

//                             <div className='my-5'>
//                                 <div className="">
//                                     <div className='d-flex justify-content-between'>
//                                         <div style={{ width: '100%' }}>
//                                             <label for="inputEmail4" className="form-label">Monthly Net Profit</label>
//                                             <input style={{ height: '7vh', width: '95%' }} type="text" id="inputEmail4" className="form-control" name='montlyProfit'  placeholder="$000" value={formData.monthlyProfit} onChange={handleChange}/>
//                                         </div>
//                                         <div style={{ width: '100%' }}>
//                                             <label for="inputEmail4" className="form-label">Monthly Revenue</label>
//                                             <input style={{ height: '7vh', width: '100%' }} type="text" id="inputEmail4" className="form-control" name='monthlyRevenue' placeholder="$000" value={formData.monthlyRevenue} onChange={handleChange}/>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>

//                             <div>
//                                 <label for="exampleFormControlTextarea1" className="form-label" style={{ color: '#636363' }}>Build trust with buyers by including files, screenshots or walkthroughs that clearly show evidence of stated financials</label>
//                                 <div className='divInput-document'>
//                                     <div className='d-flex flex-column align-items-center justify-content-center'>
//                                         <div className="img-container" id="display_image">
//                                             <img src={document} className="" id="img" alt="" />
//                                         </div>
//                                         <div>
//                                             <input type="file" className="form-label" id="image_input2" multiple accept='.jpeg, .png,.jpg,.pdf' onChange={(e)=>{inputDocument(e);handleFileUploadDocumentProof(e);}} />
//                                             <label for="image_input2" className="form-label text-center" style={{ color: '#636363' }}> <img src={upload} alt="" /><br /><br /><span >Upload Documents ( s )</span></label>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>


//                             <div className='my-5'>
//                                 <div>
//                                     <span style={{ fontSize: '20px', fontWeight: '500', color: '#636363' }} className='d-flex col-4 mt-2 mb-4'>Community Size & Social Media</span>
//                                 </div>

//                                 <div className=' d-flex flex-wrap'>
//                                     <div className='social-input d-flex'>

//                                         <div className=''>
//                                             <label for="inputEmail4" className="form-label">Instagram</label>
//                                             <div className='d-flex'>
//                                                 <div className="mb-3 my-3 form-floating" style={{ width: '60%' }}>
//                                                     <input style={{ width: '100%' }} type="email" id="floatingInputValue" className="form-control mx-2" name='InstagramHandle' placeholder="Instagram" value={formData.InstagramHandle} onChange={handleChange}/>
//                                                     <label for="floatingInputValue"><i className="fa-brands fa-instagram" style={{ color: " #005eff" }}></i></label>
//                                                 </div>
//                                                 <div className="mb-3 mx-2 my-3 form-floating" style={{ width: '10%' }}>
//                                                     <input style={{ width: '100%' }} type="email" id="floatingInputValue" className="form-control mx-2" name='InstagramHandleFollowers' placeholder="Users" value={formData.InstagramHandleFollowers} onChange={handleChange} />
//                                                     <label for="floatingInputValue"><i className="fa-solid fa-users" style={{ color: " #005eff" }}></i></label>
//                                                 </div>
//                                             </div>

//                                             <label for="inputEmail4" className="form-label">Facebook</label>
//                                             <div className='d-flex'>
//                                                 <div className="mb-3 my-3 form-floating" style={{ width: '60%' }}>
//                                                     <input style={{ width: '100%' }} type="email" id="floatingInputValue" className="form-control mx-2" name='FacebookHandle' placeholder="Facebook" value={formData.FacebookHandle} onChange={handleChange}/>
//                                                     <label for="floatingInputValue"><i className="fa-brands fa-facebook" style={{ color: " #005eff" }}></i></label>
//                                                 </div>
//                                                 <div className="mb-3 mx-2 my-3 form-floating" style={{ width: '10%' }}>
//                                                     <input style={{ width: '100%' }} type="email" id="floatingInputValue" className="form-control mx-2" placeholder="Users" name='FacebookHandleFollowers' value={formData.FacebookHandleFollowers} onChange={handleChange} />
//                                                     <label for="floatingInputValue"><i className="fa-solid fa-users" style={{ color: " #005eff" }}></i></label>
//                                                 </div>
//                                             </div>
//                                         </div>

//                                         <div className=''>
//                                             <label for="inputEmail4" className="form-label">Twitter</label>
//                                             <div className='d-flex'>
//                                                 <div className="mb-3 my-3 form-floating" style={{ width: '60%' }}>
//                                                     <input style={{ width: '100%' }} type="email" id="floatingInputValue" className="form-control mx-2" placeholder="Twitter" name='TwitterHandle' value={formData.TwitterHandle} onChange={handleChange} />
//                                                     <label for="floatingInputValue"><i className="fa-brands fa-twitter" style={{ color: " #005eff" }}></i></label>
//                                                 </div>
//                                                 <div className="mb-3 mx-2 my-3 form-floating" style={{ width: '10%' }}>
//                                                     <input style={{ width: '100%' }} type="email" id="floatingInputValue" className="form-control mx-2" placeholder="Users" name='TwitterHandleFollowers' value={formData.TwitterHandleFollowers} onChange={handleChange} />
//                                                     <label for="floatingInputValue"><i className="fa-solid fa-users" style={{ color: " #005eff" }}></i></label>
//                                                 </div>
//                                             </div>

//                                             <label for="inputEmail4" className="form-label">Youtube</label>
//                                             <div className='d-flex'>
//                                                 <div className="mb-3 my-3 form-floating" style={{ width: '60%' }} >
//                                                     <input style={{ width: '100%' }} type="email" id="floatingInputValue" className="form-control mx-2" placeholder="Youtube" name='YoutubeHandle' value={formData.YoutubeHandle} onChange={handleChange} />
//                                                     <label for="floatingInputValue"><i className="fa-brands fa-youtube" style={{ color: " #005eff" }}></i></label>
//                                                 </div>
//                                                 <div className="mb-3 mx-2 my-3 form-floating" style={{ width: '10%' }}>
//                                                     <input style={{ width: '100%' }} type="email" id="floatingInputValue" className="form-control mx-2" placeholder="Users" name='YoutubeHandleFollowers' value={formData.YoutubeHandleFollowers} onChange={handleChange} />
//                                                     <label for="floatingInputValue"><i className="fa-solid fa-users" style={{ color: " #005eff" }}></i></label>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>

//                             <div className='button d-flex justify-content-between align-items-center'>
//                                 <div className='mt-5'>
//                                     <Link id="prev" style={{ textDecoration: 'none', color: '#636363' }}
//                                         onClick={() => {
//                                             currentStep === steps.length ? setComplete(true)
//                                                 : setCurrentStep((prev) => prev - 1)
//                                         }}
//                                     ><img src={back} alt="" /><span className='mx-3'>Back</span></Link>
//                                 </div>
//                                 <div className='mt-5'>
//                                     {!complete &&
//                                         <Link id="next" className='btn btn-primary rounded-pill px-5 py-2'
//                                             onClick={() => {
//                                                 currentStep === steps.length ? setComplete(true)
//                                                     : setCurrentStep((prev) => prev + 1)
//                                             }}>{currentStep === steps.length ? "Finish" : "Next"}</Link>}
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </>}

//                 {currentStep === 4 && <>
//                     <div className="Onboard-card2">
//                         <div style={{ overflow: 'hidden', overflowY: 'scroll' }}>
//                             <div>
//                                 <h3 style={{ fontWeight: '700,', fontSize: '30px' }}>Set your price</h3>
//                                 <span style={{ fontSize: '18px', color: '#636363' }} className='d-flex col-8 mt-2 mb-4'>Get your listing ready to be seen by thousands of buyers</span>
//                             </div>

//                             <div className="">
//                                 <div className='d-flex justify-content-between'>
//                                     <div style={{ width: '100%' }}>
//                                         <label for="inputEmail4" className="form-label">Max Price</label>
//                                         <input style={{ height: '7vh', width: '95%' }} type="text" id="inputEmail4" className="form-control" name='maxPrice' placeholder="$ less than $100k" value={formData.maxPrice} onChange={handleChange} />
//                                     </div>
//                                     <div style={{ width: '100%' }}>
//                                         <label for="inputEmail4" className="form-label">Min Price</label>
//                                         <input style={{ height: '7vh', width: '100%' }} type="text" id="inputEmail4" className="form-control" name='minPrice' placeholder="$ less than $100k" value={formData.minPrice} onChange={handleChange} />
//                                     </div>
//                                 </div>
//                             </div>

//                             <div className='my-5' style={{ color: '#636363' }}>
//                                 <div>
//                                     Set your asking price, then negotiate with potential buyers.
//                                     Setting your asking price is crucial and will be the first thing sellers notice when looking at your listing.
//                                     If you need help deciding  what an appropriate price is based on the status and performance of your business,
//                                     use this Valuation Tool (by Pieter Levels). <br /><br />
//                                     Interested buyers can make offers above or below your asking price.
//                                     You have the ability to approve or reject any offers.Listings over $10k attract a one-time $15 fee
//                                 </div>
//                             </div>



//                         </div>

//                         <div className='button d-flex justify-content-between align-items-center'>
//                             <div className='mt-5'>
//                                 <Link id="prev" style={{ textDecoration: 'none', color: '#636363' }}
//                                     onClick={() => {
//                                         currentStep === steps.length ? setComplete(true)
//                                             : setCurrentStep((prev) => prev - 1)
//                                     }}
//                                 ><img src={back} alt="" /><span className='mx-3'>Back</span></Link>
//                             </div>
//                             <div className='mt-5'>
//                                 {!complete &&
//                                     <Link id="next" className='btn btn-primary rounded-pill px-5 py-2'
//                                         onClick={() => {
//                                             currentStep === steps.length ? setComplete(true)
//                                                 : setCurrentStep((prev) => prev + 1)
//                                         }}>{currentStep === steps.length ? "Finish" : "Next"}</Link>}
//                             </div>
//                         </div>
//                     </div>
//                 </>}

//                 {currentStep === 5 && <>
//                     <div className="Onboard-card2">
//                         <div style={{ overflow: 'hidden', overflowY: 'scroll' }}>
//                             <div>
//                                 <h3 style={{ fontWeight: '700,', fontSize: '30px' }}>Review and activate</h3>
//                                 <span style={{ fontSize: '18px', color: '#636363' }} className='d-flex col-8 mt-2 mb-4'>Get your listing ready to be seen by thousands of buyers</span>
//                             </div>

//                             <div className="">
//                                 <div className="onboard-Contentcard">
//                                     <span className='span1' style={{ fontSize: '16px' }}>Listing Fee</span>
//                                     <h1 style={{ fontWeight: '900' }}>$15<span style={{ fontSize: '22px', fontWeight: '700' }}>USD</span></h1>
//                                     <span style={{ color: '#636363', fontSize: '17px', fontWeight: '500' }}>includes</span>
//                                     <div className='my-4 d-flex flex-wrap'>
//                                         <div>
//                                             <div className='my-3 mx-2'>
//                                                 <img style={{ marginRight: '1rem' }} width={30} src={trueImg} alt="" />
//                                                 <span style={{ color: '#636363' }}>Marketplace listing</span>
//                                             </div>
//                                             <div className='my-3 mx-2'>
//                                                 <img style={{ marginRight: '1rem' }} width={30} src={trueImg} alt="" />
//                                                 <span style={{ color: '#636363' }}>Standard Reach</span>
//                                             </div>
//                                             <div className='my-3 mx-2'>
//                                                 <img style={{ marginRight: '1rem' }} width={30} src={trueImg} alt="" />
//                                                 <span style={{ color: '#636363' }}>Escrow</span>
//                                             </div>
//                                         </div>

//                                         <div className='mx-5'>
//                                             <div className='my-3 mx-2'>
//                                                 <img style={{ marginRight: '1rem' }} width={30} src={trueImg} alt="" />
//                                                 <span style={{ color: '#636363' }}>Unlimited Listing Duration</span>
//                                             </div>
//                                             <div className='my-3 mx-2'>
//                                                 <img style={{ marginRight: '1rem' }} width={30} src={trueImg} alt="" />
//                                                 <span style={{ color: '#636363' }}>Same day support</span>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>

//                         </div>

//                         <div className='button d-flex justify-content-between align-items-center'>
//                             <div className='mt-5'>
//                                 <Link id="prev" style={{ textDecoration: 'none', color: '#636363' }}
//                                     onClick={() => {
//                                         currentStep === 4 ? setComplete(true)
//                                             : setCurrentStep((prev) => prev - 1)
//                                     }}
//                                 ><img src={back} alt="" /><span className='mx-3'>Back</span></Link>
//                             </div>
//                             <div className='mt-5'>
//                                 {!complete &&
//                                     <Link id="next" className='btn btn-primary rounded-pill px-5 py-2'
//                                         onClick={() => {
//                                             currentStep === steps.length ? setComplete(true)
//                                                 : setCurrentStep((prev) => prev + 1)
//                                         }}>{currentStep === steps.length ? "Finish" : "Next"}</Link>}
//                             </div>
//                         </div>
//                     </div>
//                 </>}


//                 //*Side stepper

//                 <div className="StepBar">
//                     <div className='steps'>
//                         {steps?.map((step, i) => (
//                             <>
//                                 <div key={i} className={`step-item ${currentStep === i + 1 && 'active'}`}>
//                                     <div className={`circle ${currentStep === i + 1 && 'active'} ${(i + 1 < currentStep || complete) && "complete"}`}>{i + 1}</div>
//                                     <p className={`tagname ${currentStep === i + 1 && "active"} ${(i + 1 < currentStep || complete) && "tagComplete"}`}>{step}</p>
//                                 </div>
//                             </>
//                         ))}

//                     </div>
//                 </div>
//             </section>
//         </>
//     )
// }

// export default SellingDash