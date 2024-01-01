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
        <nav className='navbar navbar-expand-lg navbar-dark navline py-3' id="middleNav" style={{ zIndex: "5", position: 'relative', top: '0px', background: '#161616' }}>

          <div class="container-fluid">
            <Link className="navbar-brand" to="/"><img src={Logo} alt="Logo" className='Logo' /><span className='beta' style={{ color: '#c0c0c0', fontSize: '12px', position: 'relative', right: '-78px', top: '8px' }}>Beta</span></Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
              <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel"><Link className="navbar-brand" to="/"><img style={{ width: '50%' }} src={Logo} alt="Logo" className='' /></Link></h5>
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div class="offcanvas-body">

                <ul className="ul navbar-nav nav justify-content-between">
                  {/* <li className="nav-item">
                    <Link className="nav-link " aria-current="page" to="/market">Marketplace</Link>
                  </li> */}
                  <li className="nav-item">
                    <Link className="nav-link" to="/acquire">For Acquirers</Link>
                  </li>
                  <li className="nav-item">
                    <Link class="nav-link" to="/owner">For Owners</Link>
                  </li>
                  <li className="nav-item">
                    <Link class="nav-link" to="/TransferService">Transfer service</Link>
                  </li>
                  {/* <li class="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle" to="/"  role="button" data-bs-toggle="dropdown" aria-expanded="false">For Owners</Link>
                    <ul class="dropdown-menu ">
                      <li><Link class="dropdown-item" to="/owner">For Owners</Link></li>
                      <li><Link class="dropdown-item" to="/TransferService">Transfer service</Link></li>
                    </ul>
                  </li> */}
                  <li className="nav-item">
                    <Link className="nav-link" to="/pricing">Pricing</Link>
                  </li>
                </ul>

                <Link>
                  <Link class="btn btn-outline-light mx-3" to="/singin" type="submit">Sign in</Link>
                  <Link class="btn btn-primary" to="/singup" type="submit">Join <img style={{ width: '30%' }} src={arrow} alt="" /></Link>
                </Link>
              </div>
            </div>
          </div>

        </nav>
      </div >
    </>
  )
}

export default Navbar