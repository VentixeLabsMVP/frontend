import React from 'react'
import logo from '../images/logo_ventixe.svg'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
      <div className="logo-container">
        <img className="logo-img" src={logo} alt="Ventixe logo"/>
        <span className="logo-text">Ventixe</span>
      </div>
      <NavLink to="/" end className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
        <i className="fa-solid fa-ticket nav-icon"></i>
        <span className="nav-text">Events</span>
      </NavLink>
      <NavLink to="/dummy" end className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
        <i className="fa-solid fa-ticket nav-icon"></i>
        <span className="nav-text">Not Events</span>
      </NavLink>
    </nav>
  )
}

export default Nav