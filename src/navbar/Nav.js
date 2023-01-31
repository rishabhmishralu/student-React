import React from 'react'
import { NavLink } from 'react-router-dom'
import "./nav.css"

const Nav = () => {
  return (
    <div id='nav-Flex'>
        <div className='nav-box'><NavLink to="/">Home</NavLink></div>
        <div className='nav-box'><NavLink to="about">About</NavLink></div>
        <div className='nav-box'><NavLink to="contact">Contact</NavLink></div>
    </div>
  )
}

export default Nav