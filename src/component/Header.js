import React from 'react'
import logo from '../images/logo.png'
export default function Header() {
  return (
    <div className='background position-sticky top-0' style={{zIndex:"10"}}>
        <nav className='navbar navbar-expand-md justify-content-between px-5 .poppins-extralight'>
            <div className='navbar-brand d-flex '>
                <img src={logo} alt='logo'></img>
            </div>
            {/* <button className='navbar-toggler' data-bs-collapse="collapse" data-bs-target="#navbarSupportedContent">
                <span className='navbar-toggler-icon'></span>
            </button> */}
            <div className='myNav' id='navbarSupportedContent'>
                <ul className="navbar-nav me-auto">
                    <li className='nav-item'>
                        <a href='#' className='nav-link '>Home</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#' className='nav-link '>Features</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#' className='nav-link'>Discover</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#' className='nav-link'>About Us</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#' className='nav-link'>Blogs</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#' className='nav-link'>Contact Us</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#' className='nav-link'>Help</a>
                    </li>
                </ul>
            </div>
            <div>
                <ul className='nav'>
                    <li className='nav-item'>
                        <a className=' nav-link'>
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link'>
                            <i class="fa-regular fa-face-smile"></i>
                        </a>
                    </li>
                    <li className='bars nav-item'>
                        <a className='nav-link'>
                            <i className="fa-solid fa-bars"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
  )
}
