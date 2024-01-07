// import React from 'react'
// import BlackLogo from "./Aqify project/FrameblackLogo.svg"
// import { Link } from 'react-router-dom'
// import trueImg from "./Pricing/Frame 147.png"
// import arrow from "./Aqify project/Vector (1).png"

// const PaymentCardDash = () => {
//     return (
//         <>
//             <section>
//                 <div className="" style={{ background: "#EEF0FE", width: "100%", padding: "1.3rem" }}>
//                     <div className="d-flex justify-content-between align-items-center">
//                         <div>
//                             <Link to="/"><img src={BlackLogo} alt="" /></Link>
//                         </div>
//                     </div>

//                     <div className='cart-main d-flex justify-content-around'>

//                         <div className='cartPart1 my-4' style={{ overflowY: 'scroll', height: '87vh', width: '50%', padding:'2rem' }}>
//                             <div>
//                                 <h1 className='mx-3 my-5'>Shopping Cart</h1>
//                                 <div className="cart-card" style={{ height: '100%', width: '98%' }}>
//                                     <div className='shopping-cart d-flex justify-content-between'>
//                                         <div>
//                                             <span className='span1'>Premium Plan</span>
//                                         </div>
//                                         <div>
//                                             <span className='span1' style={{ fontSize: '2.5rem' }}>$129/year</span>
//                                         </div>
//                                     </div>
//                                     <div className='my-4'>
//                                         <div className='my-3'>
//                                             <img style={{ marginRight: '1rem' }} width={40} src={trueImg} alt="" />
//                                             <span style={{ color: '#636363', fontSize: '1.2rem' }}>2% Success Fee</span>
//                                         </div>
//                                         <div className='my-3'>
//                                             <img style={{ marginRight: '1rem' }} width={40} src={trueImg} alt="" />
//                                             <span style={{ color: '#636363', fontSize: '1.2rem' }}>View all $100k+ revenue listings</span>
//                                         </div>
//                                         <div className='my-3'>
//                                             <img style={{ marginRight: '1rem' }} width={40} src={trueImg} alt="" />
//                                             <span style={{ color: '#636363', fontSize: '1.2rem' }}>Message sellers directly</span>
//                                         </div>
//                                         <div className='my-3'>
//                                             <img style={{ marginRight: '1rem' }} width={40} src={trueImg} alt="" />
//                                             <span style={{ color: '#636363', fontSize: '1.2rem' }}>Verified acquirer profile</span>
//                                         </div>
//                                         <div className='my-3'>
//                                             <img style={{ marginRight: '1rem' }} width={40} src={trueImg} alt="" />
//                                             <span style={{ color: '#636363', fontSize: '1.2rem' }}>Private acquirer Discord invite</span>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>

//                             <div>
//                                 <h1 className='mx-3 my-5'>Personal Details</h1>
//                                 <div className="cart-card" style={{ width: '98%' }}>
//                                     <div>
//                                         <div>
//                                             <div className="mb-3 my-3">
//                                                 <label for="exampleFormControlInput1" className="form-label" style={{ color: '#636363' }}>Business/Asset Name</label>
//                                                 <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Acqify" />
//                                             </div>
//                                         </div>
//                                         <div>
//                                             <div className="mb-3 my-3">
//                                                 <label for="exampleFormControlInput1" className="form-label" style={{ color: '#636363' }}>Business/Asset Name</label>
//                                                 <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Acqify" />
//                                             </div>
//                                         </div>
//                                         <div>
//                                             <div className="mb-3 my-3">
//                                                 <label for="exampleFormControlInput1" className="form-label" style={{ color: '#636363' }}>Business/Asset Name</label>
//                                                 <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Acqify" />
//                                             </div>
//                                         </div>
//                                         <div>
//                                             <div className="mb-3 my-3">
//                                                 <label for="exampleFormControlInput1" className="form-label" style={{ color: '#636363' }}>Business/Asset Name</label>
//                                                 <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Acqify" />
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className='cartPart2' style={{ width: '50%', padding:'2rem' }}>
//                             <div className="cart-card" style={{ width: '98%' }}>
//                                 <div className='my-3'>
//                                     <span className='span1' style={{fontSize:'2.2rem'}}>Order Details</span>
//                                 </div>
//                                 <div className='d-flex justify-content-between my-2'>
//                                     <div>
//                                         <span style={{ color: '#636363', fontSize: '1.2rem' }}>Total Price</span>
//                                     </div>
//                                     <div>
//                                         <span className='span1'>$255.00</span>
//                                     </div>
//                                 </div>
//                                 <div className='d-flex justify-content-between my-2'>
//                                     <div>
//                                         <span style={{ color: '#636363', fontSize: '1.2rem' }}>Total Price</span>
//                                     </div>
//                                     <div>
//                                         <span className='span1' >$255.00</span>
//                                     </div>
//                                 </div>
//                                 <div className='d-flex justify-content-between my-2'>
//                                     <div>
//                                         <span style={{ color: '#636363', fontSize: '1.2rem' }}>Total Price</span>
//                                     </div>
//                                     <div>
//                                         <span className='span1' >$255.00</span>
//                                     </div>
//                                 </div>
//                                 <div className='d-flex justify-content-between my-2'>
//                                     <div>
//                                         <span style={{ color: '#636363', fontSize: '1.2rem' }}>Total Price</span>
//                                     </div>
//                                     <div>
//                                         <span className='span1' >$255.00</span>
//                                     </div>
//                                 </div>
//                                 <div className='mt-4'>
//                                     <button className='btn btn-primary' style={{ width: '100%' }}>Payment <img style={{width:'13px'}} src={arrow} alt="" /></button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                 </div>
//             </section>
//         </>
//     )
// }

// export default PaymentCardDash