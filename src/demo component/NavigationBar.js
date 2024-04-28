import React from 'react'
import logo from '../images/logo.png'
import {Navbarlinks} from '../utils/Navbarlinks'

export default function NavigationBar() {
  return (
    <div className='nav'>
        <div className='nav-brand'>
            <img src={logo}></img>
        </div>
        <ul className='nav-nav'>
            {Navbarlinks.map((detail,index)=>(<li key={index}><a>{detail}</a></li>))}
          
        </ul>
        <div className='navbar-option'>
            <span>👁️‍🗨️</span>
            <span>🇬🇸</span>
            <span>💧</span>
        </div>
    </div>
  )
}
