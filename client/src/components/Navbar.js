import React from 'react'
import '../styles/Navbar.css'
import Logo from '../assets/logo.png'
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className='navbar'>
      <div className='leftSide'>
      <img src={Logo} />
      </div>
      <div className='rightSide'>
      <Link to="/"> Home </Link>
      <Link to="/shop"> Shop </Link>
      <Link to="/aboutus"> Aboutus </Link>
      <Link to="/contactus"> Contactus </Link>
      <Link to="/login"> Login </Link>
      </div>
    </div>
  )
}

export default Navbar