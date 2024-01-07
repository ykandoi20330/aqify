import React, { useState, useEffect } from 'react'

// card logo images
import cardLogo1 from "./Market/Frame 33.png"
import cardLogo2 from "./Market/Frame 34 (1).png"
import cardLogo3 from "./Market/Frame 33 (6).png"
import cardLogo4 from "./Market/Frame 33 (7).png"
import cardProfile from "./Market/Rectangle 25.png"
import arrow from "./Aqify project/Vector (1).png"

//app Context
import { useAppContext } from './Context/appContext'
import { Link } from 'react-router-dom'

const Favourite = () => {

  const { favourite, addToFavorites, removeFromFavorites } = useAppContext();

  console.log('favorites are', favourite)

  const [card, setCard] = useState([])
  const [detail, setDetail] = useState(1)

  const favoriteChecker = (cate) => {
    const boolean = favourite.some((items) => items.category === cate);
    return boolean;
  }


  return (
    <>
      <section className="marketDash2-back" style={{ height: '100%' }} >
        <div className='d-flex flex-wrap'>
          <div className=" d-flex flex-wrap" > {/**market-card */}
            {favourite.length > 0 ? favourite.map((item, index) => {
              const id = index + 1
              return (
                <div className="card1" key={item.id} style={{ margin: "1rem 0.5rem", padding: "1rem", width: "34vw" }}>

                  <div className='sideInfo d-flex'>
                    <div className='secondPart'>
                      <img style={{ borderRadius: '8px' }} width={200} src={item.link} alt="" />
                    </div>
                    <div className="firstPart" style={{ marginLeft: "2rem" }}>
                      <h3 style={{ fontSize: '30px', fontWeight: '700' }}>{item.projectName}</h3>
                      <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '9px' }}>{item.techStack}</button>
                      <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '9px' }}>{item.techStack}</button>
                      <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '9px' }}>{item.techStack}</button>
                      <button className='btn-card btn btn-outline-primary my-2' style={{ fontSize: '9px' }}>{item.techStack}</button>
                    </div>
                    <div >
                      <span className='d-flex align-items-center'><i className="fa-solid fa-eye" style={{ color: '#3247ff' }}></i>1.2K</span>
                    </div>
                  </div>
                  <div className='my-4'>
                    <span className='col-6' style={{ color: '#636363', fontSize: '18px' }}>{item.description}</span>
                  </div>

                  <div className='d-flex justify-content-between' style={{ margin: '2rem 0 2rem 0' }}>
                    <h3 className='card-h3'>Metrics</h3>
                    <div className='d-flex justify-content-center align-items-center'>
                      <Link style={{ padding: '12px 38px' }} className='btn btn-primary mx-2' to="/MarketDash2">View Listing<img className='mx-2' style={{ width: '15px' }} src={arrow} alt="" /> </Link>
                      {/* <Link onClick={() => removeFromFavorites(item.id)}><i className="fa-solid fa-heart" style={{ color: '' }}></i></Link> */}
                      {favoriteChecker(item.category) ?
                        (<Link key={item.id} onClick={() => removeFromFavorites(item.category)}> <i className="fa-solid fa-heart" style={{ color: '' }}></i></Link>)
                        :
                        (<Link key={item.id} onClick={() => addToFavorites(item)}> <i className="fa-solid fa-heart" style={{ color: '#c0c0c0' }}></i></Link>)}
                    </div>
                  </div>

                  <div className='d-flex justify-content-between flex-wrap' style={{ width: '100%' }}>
                    <div style={{ margin: '1rem 3rem 0 0' }}>
                      <span style={{ color: '#636363', fontWeight: '600' }}>Businesses Type</span>
                      <div className='d-flex justify-content-start align-items-center'>
                        <img width={40} src={cardLogo1} alt="" />
                        <span className='card-span' style={{ fontSize: '1.5rem' }}>{item.category}</span>
                      </div>
                    </div>
                    <div style={{ margin: '1rem 3rem 0 0' }}>
                      <span style={{ color: '#636363', fontWeight: '600' }}>Based in</span>
                      <div className='d-flex justify-content-start align-items-center'>
                        <img width={40} src={cardLogo2} alt="" />
                        <span className='card-span' style={{ fontSize: '1.5rem' }}>{item.location}</span>
                      </div>
                    </div>
                    <div style={{ margin: '1rem 3rem 0 0' }}>
                      <span style={{ color: '#636363', fontWeight: '600' }}>Acquisition type</span>
                      <div className='d-flex justify-content-start align-items-center'>
                        <img width={40} src={cardLogo3} alt="" />
                        <span className='card-span' style={{ fontSize: '1.5rem' }}>Full</span>
                      </div>
                    </div>
                    <div style={{ margin: '1rem 3rem 0 0' }}>
                      <span style={{ color: '#636363', fontWeight: '600' }}>Valuation</span>
                      <div className='d-flex justify-content-start align-items-center'>
                        <img width={40} src={cardLogo4} alt="" />
                        <span className='card-span' style={{ fontSize: '1.5rem' }}> ${item.valuation}k +</span>
                      </div>
                    </div>
                  </div>

                </div>
              )
            }) : <h1 className='' style={{ color: '#c0c0c0' }}>You Don't have Any Favorites Yet!</h1>}
          </div>
        </div>
      </section>
    </>
  )
}

export default Favourite