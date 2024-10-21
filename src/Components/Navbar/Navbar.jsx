import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import lemon from '../../assets/lemon.png'

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={lemon} alt="Logo" />
      <div className="navbar-logo">Little Lemon</div>
      <div className="navbar-links">
        <Link to="/" className="navbar-link">Home</Link>
        <Link to="/Aboutus" className="navbar-link">About</Link>
      
      </div>
      <button type='submit' className='order-online'>Order online</button>
    </div>
  )
}

export default Navbar
