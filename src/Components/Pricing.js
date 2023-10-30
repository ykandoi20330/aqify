import React from 'react'
import backgroundImg from "./Pricing/unsplash_5U_28ojjgms.png"
import trueImg from "./Pricing/Frame 147.png"
import arrow from "./Aqify project/Vector (1).png"

const Pricing = () => {
    return (
        <>
            <section className='pricing-first-section'>
                <div style={{height: "95vh",background: "linear-gradient(359deg, black, #000000f5)"}}>
                <div className="pricing-backgroundImage" style={{ backgroundImage: `url(${backgroundImg})`, width: '100%',height:'80vh', backgroundRepeat: 'no-repeat',backgroundSize:'cover' }}>
                    <h1>Pricing</h1>
                    <span>Free for owners and affordable for acquirers.</span>
                    <div>
                        <div class="btn-group" role="group" aria-label="Basic outlined example">
                            <button style={{padding: "1rem 4rem"}} type="button" class="btn btn-outline-primary">Owners</button>
                            <button style={{padding: "1rem 4rem"}} type="button" class="btn btn-outline-primary">Acquirers</button>
                        </div>
                    </div>
                </div>

                </div>
            </section>

            <section className="ligh-back" >
                <div className="pricing-card" style={{height:'60%',position:'relative',top:'-152px'}}>
                    <span className='span1'>Basic</span>
                    <h1>Free</h1>
                    <span className='col-10' style={{color:'#636363', fontSize:'20px',fontWeight:'500'}}>Free for owners and affordable for accquirers.</span>
                    <div className='my-4'>
                        <img style={{marginRight:'1rem'}} width={40} src={trueImg} alt="" />
                        <span style={{color:'#636363'}}>View verified buyers on the marketplace</span>
                    </div>
                </div>

                <div className="pricing-card" style={{height:'110%',position:'relative',top:'-152px',width:'35%'}}>
                    <span className='span1'>Prime</span>
                    <h1>Free</h1>
                    <span style={{color:'#636363', fontSize:'20px',fontWeight:'500'}}>No hidden fees, zero middlemen.</span>
                    <div className='my-4'>
                    <div className='my-3'>
                        <img style={{marginRight:'1rem'}} width={40} src={trueImg} alt="" />
                        <span style={{color:'#636363'}}>View verified buyers on the marketplace</span>
                    </div>
                    <div className='my-3'>
                        <img style={{marginRight:'1rem'}} width={40} src={trueImg} alt="" />
                        <span style={{color:'#636363'}}>List your business anonymously for free</span>
                    </div>
                    <div className='my-3'>
                        <img style={{marginRight:'1rem'}} width={40} src={trueImg} alt="" />
                        <span style={{color:'#636363'}}>Broadcast safely to 1,000s of acquirers</span>
                    </div>
                    <div className='my-3'>
                        <img style={{marginRight:'1rem'}} width={40} src={trueImg} alt="" />
                        <span style={{color:'#636363'}}>Receive offers from verified acquirers</span>
                    </div>
                    <div className='my-3'>
                        <img style={{marginRight:'1rem'}} width={40} src={trueImg} alt="" />
                        <span style={{color:'#636363'}}>Pay zero commission fees</span>
                    </div>
                    </div>
                    <div className='my-4'>
                            <button style={{ fontSize: '1.5rem' }} className='btn btn-primary'>List your business<img style={{ width: '7%',margin:'0 0 0 3rem' }} src={arrow} alt="" /></button>
                        </div>
                </div>
           </section>
        </>
    )
}

export default Pricing