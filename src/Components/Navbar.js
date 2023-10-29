import React from 'react'
import {
  Link
} from "react-router-dom";
import Logo from "./Aqify project/Frame 7.png"
import arrow from "./Aqify project/Vector (1).png"


const Navbar = () => {
  return (
    <>
      <div className='hero1'>
        <nav className='navbar navbar-dark navline' id="middleNav" style={{ top: '10px', zIndex: "5" }}>
         
            <Link className="navbar-brand" to="/"><img src={Logo} alt="Logo" className='Logo' /></Link>
         
            <ul className="ul nav justify-content-between">
              <li className="nav-item">
                <Link className="link active" aria-current="page" to="/">Fundriser</Link>
              </li>
              <li className="nav-item">
                <Link className="link" to="/acquire">For Acquirers</Link>
              </li>
              <li className="nav-item">
                <Link className="link" to="/owner">For Owners</Link>
              </li>
              <li className="nav-item">
                <Link className="link" to="/pricing">Pricing</Link>
              </li>
            </ul>
          
          <Link>
              <button class="btn btn-outline-light mx-3" type="submit">Sign in</button>
              <button class="btn btn-primary" type="submit">Join <img style={{ width: '30%' }} src={arrow} alt="" /></button>
              </Link>
        </nav>
    </div >
    </>
  )
}

export default Navbar