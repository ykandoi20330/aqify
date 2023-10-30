import React from 'react'
import backgroundImg from "./Aqify project/unsplash_5U_28ojjgms.png"
import arrow from "./Aqify project/Vector (1).png"
import vectorArrow from "./Aqify project/Vector-arrow.png"

//images for card
import cardLogo from "./Aqify project/Frame 33.png"
import cardLogo1 from "./Aqify project/Frame 33 (1).png"
import cardLogo2 from "./Aqify project/Frame 33 (2).png"
import cardLogo3 from "./Aqify project/Frame 34 (1).png"
import cardLogo4 from "./Aqify project/Frame 33 (3).png"
import cardLogo5 from "./Aqify project/Frame 33 (4).png"

//logo
import Logo from "./Aqify project/Frame 7.png"
import roundImg from './Aqify project/Ellipse 7.png'

//fourth-section card images
import FourthCard1 from "./Aqify project/image 2.png"
import FourthCard2 from "./Aqify project/image 2 (1).png"
import FourthCard3 from "./Aqify project/image 2 (2).png"
import FourthCard4 from "./Aqify project/image 2 (3).png"

//fifth section images
import sildeImg from "./Aqify project/Frame 65.png"
import profileImg from "./Aqify project/Ellipse 8 (1).png"

//six section images
import quoteImg from "./Aqify project/Vector.png"
import personImg from "./Aqify project/Ellipse 8.png"

//seven section images 
import sevenImg1 from "./Aqify project/Rectangle 9.png"
import sevenImg2 from "./Aqify project/Rectangle 10.png"
import sevenImg3 from "./Aqify project/Rectangle 11.png"
import sevenImg4 from "./Aqify project/Rectangle 12.png"

//circle images
import circle1 from "./Aqify project/Ellipse 57.png"
import circle2 from "./Aqify project/Ellipse 58.png"

const Home = () => {
  return (
    <>
      <section>
        <div className='main' style={{ backgroundImage: `url(${backgroundImg})`, width: '100%', backgroundRepeat: 'no-repeat' }}>
          <div className="content">
            <div>
              <div className='my-5'>
                <h1 className='main-h1 col-7'>Future Lift: Elevate with
                  Acqify's Effortless Start.
                </h1>
              </div>
              <div className='my-4'>
                <span className='main-span col-6 d-flex'>
                  Future Entrepreneurship: Simple Founder Exits. Join the
                  Exclusive Marketplace - Free, Direct, Private!
                </span>
              </div>
              <div className=''>
                <button style={{ fontSize: '1.5rem' }} className='btn btn-primary'>Access Marketplace<img style={{ width: '10%' }} src={arrow} alt="" /></button>
              </div>
            </div>
            <div style={{ marginLeft: '-0px', position: 'relative' }}>
              <ul className='main-ul'>
                <li>2,000+<br /><span style={{ fontSize: '20px', fontWeight: '100' }}>Startup</span></li>
                <li>345<br /> <span style={{ fontSize: '20px', fontWeight: '100' }}>Founders</span> </li>
                <li>150<br /> <span style={{ fontSize: '20px', fontWeight: '100' }}>Deal Done</span></li>
              </ul>
            </div>
          </div>

          <div style={{bottom: '0',right: '0',position: 'absolute'}}>
            <img className='bottomCircle1' src={circle1} alt="" />
            <img className='bottomCircle2' src={circle2} alt="" />
          </div>
        </div>
      </section>

      {/*second section */}
      <section>
        <div className='Home-listing'>
          <h1 className='listing-h1'>Our Latest Listings</h1>
          <span className='listing-span'>Every Monday we publish new businesses for sale on our marketplace</span>

          <div className="card">

            <div className='d-flex'>
              <div className="firstPart">
                <h3 style={{ fontSize: '2.5rem', fontWeight: '700' }}>Fintech Startup</h3>
                <button className='btn-card btn btn-outline-primary'>Businesses</button>
                <button className='btn-card btn btn-outline-primary'>Banking</button>
              </div>
              <div className='secondPart'>
                <span className='d-flex' style={{ color: '#636363', fontSize: '1.2rem' }}>
                  We lend capital to businesses of all sizes, including startups that normally wouldn't qualify for a loan, by collateralising debt financing using recurring revenue backed securities. We are acquiring a banking...
                </span>
              </div>
            </div>

            <div className='d-flex justify-content-between' style={{ margin: '2rem 0 2rem 0' }}>
              <h3 className='card-h3'>Metrics</h3>
              <button style={{ padding: '18px 48px' }} className='btn btn-primary'>More Details <img style={{ width: '20px' }} src={arrow} alt="" /> </button>
            </div>

            <div className='d-flex justify-content-between flex-wrap' style={{ width: '80%' }}>
              <div style={{ margin: '0 3rem 0 0' }}>
                <span style={{ color: '#636363', fontWeight: '600' }}>Team Members</span>
                <div className='d-flex justify-content-start align-items-center'>
                  <img width={40} src={cardLogo} alt="" />
                  <span className='card-span'>3-5</span>
                </div>
              </div>
              <div style={{ margin: '0 3rem 0 0' }}>
                <span style={{ color: '#636363', fontWeight: '600' }}>TTM Net Profit</span>
                <div className='d-flex justify-content-start align-items-center'>
                  <img width={40} src={cardLogo1} alt="" />
                  <span className='card-span'>$342 K</span>
                </div>
              </div>
              <div style={{ margin: '0 3rem 0 0' }}>
                <span style={{ color: '#636363', fontWeight: '600' }}>TTM Gross revenue</span>
                <div className='d-flex justify-content-start align-items-center'>
                  <img width={40} src={cardLogo2} alt="" />
                  <span className='card-span'>$342 K</span>
                </div>
              </div>
              <div style={{ margin: '0 3rem 0 0' }}>
                <span style={{ color: '#636363', fontWeight: '600' }}>Based in</span>
                <div className='d-flex justify-content-start align-items-center'>
                  <img width={40} src={cardLogo3} alt="" />
                  <span className='card-span'>AMER</span>
                </div>
              </div>
              <div style={{ margin: '0 3rem 0 0' }}>
                <span style={{ color: '#636363', fontWeight: '600' }}>Acquisition type</span>
                <div className='d-flex justify-content-start align-items-center'>
                  <img width={40} src={cardLogo4} alt="" />
                  <span className='card-span'>Full</span>
                </div>
              </div>
              <div style={{ margin: '3rem 3rem 0 0' }}>
                <span style={{ color: '#636363', fontWeight: '600' }}>Desired valuation</span>
                <div className='d-flex justify-content-start align-items-center'>
                  <img width={40} src={cardLogo5} alt="" />
                  <span className='card-span'>Open to offers</span>
                </div>
              </div>
            </div>

          </div>
          {/**card-2 */}
          <div className="card">

            <div className='d-flex'>
              <div className="firstPart">
                <h3 style={{ fontSize: '2.5rem', fontWeight: '700' }}>Strategic incumbent</h3>
                <button className='btn-card btn btn-outline-primary'>Acquirers</button>
                <button className='btn-card btn btn-outline-primary'>Consumer Staples</button>
              </div>
              <div className='secondPart'>
                <span className='d-flex' style={{ color: '#636363', fontSize: '1.2rem' }}>
                  Physical retailer in the apparel space looking for prominent DTC brands to buy into and collaborate with. Our supply-chain offers strong operational efficiencies which coupled with the right online
                </span>
              </div>
            </div>

            <div className='d-flex justify-content-between' style={{ margin: '2rem 0 2rem 0' }}>
              <h3 className='card-h3'>Metrics</h3>
              <button style={{ padding: '18px 48px' }} className='btn btn-primary'>More Details <img style={{ width: '20px' }} src={arrow} alt="" /> </button>
            </div>

            <div className='d-flex justify-content-between flex-wrap' style={{ width: '80%' }}>
              <div style={{ margin: '0 3rem 0 0' }}>
                <span style={{ color: '#636363', fontWeight: '600' }}>Businesses Type</span>
                <div className='d-flex justify-content-start align-items-center'>
                  <img width={40} src={cardLogo} alt="" />
                  <span className='card-span'>3-5</span>
                </div>
              </div>
              <div style={{ margin: '0 3rem 0 0' }}>
                <span style={{ color: '#636363', fontWeight: '600' }}>Based in</span>
                <div className='d-flex justify-content-start align-items-center'>
                  <img width={40} src={cardLogo3} alt="" />
                  <span className='card-span'>Anywhere</span>
                </div>
              </div>
              <div style={{ margin: '0 3rem 0 0' }}>
                <span style={{ color: '#636363', fontWeight: '600' }}>Acquisition type</span>
                <div className='d-flex justify-content-start align-items-center'>
                  <img width={40} src={cardLogo4} alt="" />
                  <span className='card-span'>Full</span>
                </div>
              </div>
              <div style={{ margin: '0 3rem 0 0' }}>
                <span style={{ color: '#636363', fontWeight: '600' }}>Valuation</span>
                <div className='d-flex justify-content-start align-items-center'>
                  <img width={40} src={cardLogo5} alt="" />
                  <span className='card-span'>$150 k</span>
                </div>
              </div>
            </div>

          </div>
          <button style={{ padding: '18px 48px', fontSize: '1.4rem' }} className='btn btn-primary'>View All Listings</button>
        </div>
      </section>

      {/**Third home section */}
      <section className='Third-main'>
        <section className='data-section'>
          <div className="d-flex justify-content-evenly">
            <div className="data-content">
              <div className="data">
                <h1 className='data-h1'>Connecting Buyers & Sellers Of Online Businesses</h1>
                <span className='data-span'>Unite buyers and sellers in the dynamic realm of online businesses. Our platform fosters seamless connections, facilitating successful transactions and empowering entrepreneurs to navigate the digital marketplace with confidence.</span>
              </div>
              <div>
                <ul className='data-ul'>
                  <li>2,000+<br /><span style={{ fontSize: '20px', fontWeight: '100' }}>Startup</span></li>
                  <li>345<br /> <span style={{ fontSize: '20px', fontWeight: '100' }}>Founders</span> </li>
                  <li>150<br /> <span style={{ fontSize: '20px', fontWeight: '100' }}>Deal Done</span></li>
                </ul>
              </div>
            </div>
            <div>
              <img src={Logo} alt="" className='Logo' />
            </div>
          </div>
        </section>
        <div>
          <img className='round-middle-img' src={roundImg} alt="" />
        </div>
        <section className='data-2-section'>
          <div>
            <div className='data-2-content'>
              <button className='btn-card btn btn-outline-primary my-5' style={{ fontSize: '1.5rem', padding: "10px 30px" }}>FOR OWNERS</button>
              <h1 className='data-2-h1'>Get Offers from Professional Acquirers</h1>
              <span className='data-2-span'>For funded founders and bootstrapped owners of SaaS, eCommerce, marketplace, fintech, content, mobile, agency, web3 and other internet startups with annual revenues of $100,000 and above.</span>
              <button style={{ padding: '18px 48px', fontSize: '1.4rem' }} className='btn btn-primary'>List your business <img style={{ width: '20px' }} src={arrow} alt="" /> </button>
            </div>
          </div>
        </section>
      </section>

      {/**Fourth section home*/}
      <section className='fourth-main'>
        <div>
          <div className='d-flex flex-column align-items-center justify-content-center'>
            <h1 className='fourth-h1'>The Fatest And Simplest Way To Get Acquired</h1>
            <button style={{ padding: '18px 48px', fontSize: '1.4rem' }} className='btn btn-outline-primary my-5'>Find your valuation<img style={{ width: '20px' }} src={vectorArrow} alt="" /></button>
          </div>
        </div>
        <div className='info-card'>
          <div className="card-four">
            <img width={150} src={FourthCard1} alt="" />
            <h3 className='my-3'>List Anonymously</h3>
            <span>Sell or buy online businesses confidentially. List anonymously, connect securely, and close deals with confidence.</span>
          </div>
          <div className="card-four">
            <img width={150} src={FourthCard2} alt="" />
            <h3 className='my-3'>Largest Buyers Ecosystem</h3>
            <span>Explore unparalleled opportunities with the largest buyer ecosystem. Maximize your options, elevate your transactions, and achieve success on a grand scale.</span>
          </div>
          <div className="card-four">
            <img width={150} src={FourthCard3} alt="" />
            <h3 className='my-3'>Faster Timelines</h3>
            <span>Accelerate success with faster timelines. Achieve your goals swiftly and efficiently, leaving no room for delays.</span>
          </div>
          <div className="card-four">
            <img width={150} src={FourthCard4} alt="" />
            <h3 className='my-3'>Access to best counsel</h3>
            <span>Gain an edge with access to the best counsel. Elevate your decisions with expert guidance and strategic insights for unparalleled success.</span>
          </div>
        </div>
      </section>

      {/**Fifth home section */}

      <section className='fifth-main'>
        <div className='d-flex' style={{ left: '50px', position: 'relative' }}>
          <div className="slider-img">
            <img style={{ width: "100%", position: "relative" }} src={sildeImg} />
            <div className="overlay-slide">
              <div className='d-flex flex-row align-items-center'>
                <img style={{ width: "30%" }} src={profileImg} alt="" />
                <div className='mx-3'>
                  <span style={{ fontSize: '1.5rem', color: '#fff' }}>Owner</span><br />
                  <span style={{ fontSize: '2rem', color: '#fff', fontWeight: '700' }}>BitsCool.com</span>
                </div>
              </div>
              <div>
                <a className='SlideCard-arrow' href=""><i class="fa-solid fa-arrow-left"></i></a>
                <a className='SlideCard-arrow' href=""><i class="fa-solid fa-arrow-right"></i></a>
              </div>
            </div>
          </div>

          <div className="slider-detail">
            <div>
              <div className='data-2-content'>
                <button className='btn-card btn btn-outline-primary my-3' style={{ fontSize: '1.5rem', padding: "10px 30px" }}>FOR ACQUIRERS</button>
                <h1 className='detail-h1'>Get In Touch With Business Owners Today</h1>
                <span className='detail-span'>For professional buyers including acquisition entrepreneurs, search funds, private equity firms, high net worth individuals, family offices, angels and strategic investors.</span>
                <button style={{ padding: '18px 48px', fontSize: '1.4rem' }} className='btn btn-primary'>Make your Profile<img style={{ width: '20px' }} src={arrow} alt="" /> </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/**Six home section */}
      <section className='six-main'>
        <div className="six-content">
          <div style={{left:'50px',position:'relative'}} className='d-flex justify-content-between align-items-center'>
            <div>
              <h1 className='six-h1'>Stories From Founders And Buyers</h1>
              <div className='my-5'>
                <a className='six-arrow' href=""><i class="fa-solid fa-arrow-left"></i></a>
                <a className='six-arrow' href=""><i class="fa-solid fa-arrow-right"></i></a>
              </div>
            </div>
            <div>
              <img className='quoteImg' src={quoteImg} alt="" />
            </div>
          </div>

          <div className='d-flex justify-content-evenly my-4'>
            <div className="six-card">
              <span className="six-card-content">“Acqify helped us get acquired catalysing our growth exponentially. Quality advice & ready documentation helped us smoothly close our deal in record time. Strongly recommend this platform to other founders!"</span>
              <div className='d-flex flex-row align-items-center'>
                <img style={{ width: "15%" }} src={personImg} alt="" />
                <div className='mx-3'>
                  <span style={{ fontSize: '1.5rem', color: '#636363' }}>Owner</span><br />
                  <span style={{ fontSize: '2rem', color: '#000', fontWeight: '700' }}>BitsCool.com</span>
                </div>
              </div>
            </div>

            <div className="six-card">
              <span className="six-card-content">“Acqify helped us get acquired catalysing our growth exponentially. Quality advice & ready documentation helped us smoothly close our deal in record time. Strongly recommend this platform to other founders!"</span>
              <div className='d-flex flex-row align-items-center'>
                <img style={{ width: "15%" }} src={personImg} alt="" />
                <div className='mx-3'>
                  <span style={{ fontSize: '1.5rem', color: '#636363' }}>Owner</span><br />
                  <span style={{ fontSize: '2rem', color: '#000', fontWeight: '700' }}>BitsCool.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/**seven home section */}

      <section className='seven-section'>
      <div>
          <div className='d-flex flex-column align-items-center justify-content-center'>
            <h1 className='fourth-h1'>Your First Step To An Acquisition Starts Here</h1>
            <button style={{ padding: '18px 48px', fontSize: '1.4rem' }} className='btn btn-primary my-5'>Join Now <img style={{ width: '20px' }} src={arrow} alt="" /></button>
          </div>
        </div>
        <div className='d-flex justify-content-center'>
          <img className='sevenImg' src={sevenImg1} alt="" />
          <img className='sevenImg' src={sevenImg2} alt="" />
          <img className='sevenImg' src={sevenImg3} alt="" />
          <img className='sevenImg' src={sevenImg4} alt="" />
        </div>
      </section>
    </>
  )
}

export default Home