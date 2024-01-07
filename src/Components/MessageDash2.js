// import React, { useState } from 'react'
// import message from "./ProfileDashbaord/chatteardropdots1.svg"
// // import lightMessage from "./ProfileDashbaord/chatteardropdots1.svg"
// import img2 from "./Message/Ellipse 59 (1).svg"
// import img3 from "./Message/Ellipse 59 (2).svg"
// import img4 from "./Message/Ellipse 59 (3).svg"
// import img5 from "./Message/Ellipse 59 (4).svg"
// import img1 from "./Message/Ellipse 59.svg"
// import Red from "./Message/FrameRed.svg"
// import logo from "./Selling/Frame 18.svg"
// import { Link } from 'react-router-dom'

// const MessageDash2 = () => {

//     const [show, setShow] = useState(true)

//     return (
//         <>
//             <div className="sideContent">

//                 <div>
//                     <Link to="/"><img src={logo} alt="" /></Link>
//                 </div>

//                 <div className="message-card">

//                     {show === true &&
//                         <>
//                             <div>
//                                 <h1 className='my-3' style={{ fontWeight: '700', width: '20%', borderBottom: "4px solid #3247ff", borderRadius: '5px', paddingBottom: '0.5rem' }}> <img src={message} alt="" /> Messages</h1>
//                             </div>

//                             <div>
//                                 <Link onClick={() => setShow(false)} style={{ textDecoration: 'none' }} className='d-flex justify-content-between my-5'>
//                                     <div className='d-flex'>
//                                         <img src={img1} alt="" />
//                                         <div className='mx-3'>
//                                             <h2 className='msg-h2'>Akash Ku. Padhi</h2>
//                                             <span style={{ color: '#c0c0c0' }}>ZyShip.com</span>
//                                         </div>
//                                     </div>
//                                     <div className='d-flex align-items-center'>
//                                         <span style={{ color: '#c0c0c0' }}>Hello, I am owner of ZyShip.com...</span>
//                                         <div className='mx-3'>
//                                             <span className="badge rounded-pill text-bg-danger">5+</span>
//                                         </div>
//                                     </div>
//                                 </Link>
//                                 <div className='d-flex justify-content-between my-5'>
//                                     <div className='d-flex'>
//                                         <img src={img2} alt="" />
//                                         <div className='mx-3'>
//                                             <h2 className='msg-h2'>Akash Ku. Padhi</h2>
//                                             <span style={{ color: '#c0c0c0' }}>ZyShip.com</span>
//                                         </div>
//                                     </div>
//                                     <div className='d-flex align-items-center'>
//                                         <span style={{ color: '#c0c0c0' }}>Hello, I am owner of ZyShip.com...</span>
//                                         <div className='mx-3'>
//                                             <img src={Red} alt="" />
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className='d-flex justify-content-between my-5'>
//                                     <div className='d-flex'>
//                                         <img src={img3} alt="" />
//                                         <div className='mx-3'>
//                                             <h2 className='msg-h2'>Akash Ku. Padhi</h2>
//                                             <span style={{ color: '#c0c0c0' }}>ZyShip.com</span>
//                                         </div>
//                                     </div>
//                                     <div className='d-flex align-items-center'>
//                                         <span style={{ color: '#c0c0c0' }}>Hello, I am owner of ZyShip.com...</span>
//                                         <div className='mx-3'>
//                                             <img src={Red} alt="" />
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className='d-flex justify-content-between my-5'>
//                                     <div className='d-flex'>
//                                         <img src={img4} alt="" />
//                                         <div className='mx-3'>
//                                             <h2 className='msg-h2'>Akash Ku. Padhi</h2>
//                                             <span style={{ color: '#c0c0c0' }}>ZyShip.com</span>
//                                         </div>
//                                     </div>
//                                     <div className='d-flex align-items-center'>
//                                         <span style={{ color: '#c0c0c0' }}>Hello, I am owner of ZyShip.com...</span>
//                                         <div className='mx-3'>
//                                             <img src={Red} alt="" />
//                                         </div>
//                                     </div>
//                                 </div>

//                                 <div className='d-flex justify-content-between my-5'>
//                                     <div className='d-flex'>
//                                         <img src={img5} alt="" />
//                                         <div className='mx-3'>
//                                             <h2 className='msg-h2'>Akash Ku. Padhi</h2>
//                                             <span style={{ color: '#c0c0c0' }}>ZyShip.com</span>
//                                         </div>
//                                     </div>
//                                     <div className='d-flex align-items-center'>
//                                         <span style={{ color: '#c0c0c0' }}>Hello, I am owner of ZyShip.com...</span>
//                                         <div className='mx-3'>
//                                             <img src={Red} alt="" />
//                                         </div>
//                                     </div>
//                                 </div>

//                             </div>


//                             <div>
//                                 <div className='' style={{ color: '#636363', width: "100%" }}>
//                                     <div className="d-flex mb-3 my-3 ">
//                                         <div className='d-flex justify-content-center align-items-center'>
//                                             <i style={{ color: '#3247FF', fontSize: '1.5rem' }} className="fa-solid fa-camera mx-2"></i>
//                                             <i style={{ color: '#3247FF', fontSize: '1.5rem' }} className="fa-solid fa-microphone mx-2"></i>
//                                             <i style={{ color: '#3247FF', fontSize: '1.5rem' }} className="fa-solid fa-face-smile mx-2"></i>
//                                         </div>
//                                         <input style={{ width: '100', background: '#fff', borderRadius: '50px' }} type="text" id="floatingInputValue" className="Search-from form-control mx-2" placeholder="Write message..." />
//                                         <Link className='messageSendBtn text-center mx-2 d-flex  justify-content-center align-items-center'
//                                             style={{ color: '#3247FF', right: '5%', position: 'relative', textDecoration: 'none' }}>
//                                             <><i style={{ fontSize: '1.5rem' }} className="messageSend fa-regular fa-paper-plane py-3"></i></>
//                                         </Link>
//                                     </div>
//                                 </div>
//                             </div>
//                         </>}


//                     {show === false && <>
//                         <div className='detailmessage d-flex'>
//                             <div className="showProfile" style={{ width: '30%' }}>
//                                 <div className='d-flex py-2' style={{ borderBottom: '1px solid #c0c0c0', width: '90%' }}>
//                                     <img width={50} src={img1} alt="" />
//                                     <div className='mx-3'>
//                                         <h6 className='msg-h2'>Akash Ku. Padhi</h6>
//                                         <span style={{ color: '#c0c0c0' }}>Text Message</span>
//                                     </div>
//                                     <div className='d-flex flex-column'>
//                                         <span>12/12/2022</span>
//                                         <span style={{ width: '35%' }} className="badge rounded-pill text-bg-danger">5+</span>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="showMessage" style={{ background: '#EEF0FE', width: '100%', borderRadius: '10px' }}>
//                                 <div className='MsgheadBox d-flex justify-content-center align-items-center' style={{ background: '#3247FF', color: '#fff', borderRadius: '10px 10px 0 0', height: '7vh' }}>
//                                     <h4 className='msg-h2'>Akash Ku. Padhi</h4>
//                                 </div>
//                                 <div style={{ height: '50vh', overflowY: 'scroll' }}>
//                                 </div>

//                                 <div>
//                                     <div className='mx-3' style={{ color: '#636363', width: "100%" }}>
//                                         <div className="d-flex mb-3 my-3 ">
//                                             <div className='d-flex justify-content-center align-items-center'>
//                                                 <i style={{ color: '#3247FF', fontSize: '1.5rem' }} className="fa-solid fa-camera mx-2"></i>
//                                                 <i style={{ color: '#3247FF', fontSize: '1.5rem' }} className="fa-solid fa-microphone mx-2"></i>
//                                                 <i style={{ color: '#3247FF', fontSize: '1.5rem' }} className="fa-solid fa-face-smile mx-2"></i>
//                                             </div>
//                                             <input style={{ width: '100', background: '#fff', borderRadius: '50px', height: '8vh' }} type="text" id="floatingInputValue" className="Search-from form-control mx-2" placeholder="Write message..." />
//                                             <Link className='messageSendBtn text-center mx-2 d-flex  justify-content-center align-items-center'
//                                                 style={{ color: '#3247FF', right: '5%', position: 'relative', textDecoration: 'none' }}>
//                                                 <><i style={{ fontSize: '1.5rem' }} className="messageSend fa-regular fa-paper-plane py-3"></i></>
//                                             </Link>
//                                         </div>
//                                     </div>
//                                 </div>

//                             </div>
//                         </div>
//                     </>}
//                 </div>
//             </div>
//         </>
//     )
// }

// export default MessageDash2