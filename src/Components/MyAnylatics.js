import React,{useState} from 'react'
import message from "./ProfileDashbaord/chatteardropdots1.svg"
import { Link } from 'react-router-dom'
import profileIcon from "./ProfileDashbaord/ellipse-60@2x.png"
import threeDots from "./ProfileDashbaord/dotsthreeoutlinevertical.svg"

//
// import back from "./MarketDash/VectorBackArrow.svg"
// import MyProject from './MyProject'

const MyAnylatics = () => {

    // const [show, setShow] = useState(1)

    return (
        <>

        {/* {show === 1 &&} */}
        <>
            <div className="sideContent">
                <div className="d-flex justify-content-end">
                    <div><Link to="/"><img src={message} alt="" /></Link></div>
                    <div><Link to="/"><img style={{ width: '2.8vw' }} src={profileIcon} alt="" /></Link></div>
                    <div><Link to="/"><img src={threeDots} alt="" /></Link></div>
                </div>

                <div className='d-flex flex-column justify-content-between' style={{ marginTop: '5vh' }}>
                    {/* <div className='my-5'>
                        <Link onClick={show => setShow(2)}><img src={back} alt="" /></Link>
                        <span className='mx-3' style={{ color: '#636363' }}>Go back My Project</span>
                    </div> */}
                    <div>
                        <h1 style={{ fontWeight: '700', paddingBottom: '0.5rem' }}>My Analytics </h1>
                        <span style={{ color: '#636363' }}>0 active purchases, Buy your first Project.</span>
                    </div>
                    <div className='my-5'>
                        <span style={{ color: '#636363' }}>Select Your Project</span>
                        <div class="form-floating my-3">
                            <select style={{ width: '35vw', color: '#3247ff', background: '#fff' }} class="form-control form-select form-select-lg mb-3 mx-2" aria-label="Large select example">
                                <option id="floatingInputValue" selected>Select project name</option>
                                <option value="1">UI Design</option>
                                <option value="2">UI Development</option>
                                <option value="3">AI</option>
                            </select>
                            <label for="floatingInputValue"><i class="fa-solid fa-check-double" style={{ color: "#005eff" }}></i></label>
                        </div>
                    </div>
                </div>


                <div className="analytic-card d-felx justify-content-center align-items-center">
                    <div style={{ fontSize: '25px', color: '#636363', fontWeight: 'bolder' }}>Content Chart</div>
                </div>
            </div>
            </> 

            {/* {show === 2 && <MyProject/>} */}
        </>
    )
}

export default MyAnylatics