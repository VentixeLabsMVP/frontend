import React from 'react'
import logo from '../images/logo_ventixe.svg'
import { NavLink } from 'react-router-dom'
import PrimaryButton from './PrimaryButton'

const Nav = () => {
  return (
    <nav>
      <div className="nav-content">
        <div className="logo-container">
          <img className="logo-img" src={logo} alt="Ventixe logo"/>
          <span className="logo-text">Ventixe</span>
        </div>
        <div className="menu-container">
          <div className="hamb-menu">
            <i className="fa-solid fa-bars"></i>
          </div>
        </div>
      <div className="nav-links">
        <NavLink to="/" end className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
          <i className="fa-solid fa-ticket nav-icon"></i>
          <span className="nav-text">Events</span>
        </NavLink>
        <NavLink to="/dummy" end className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
          <i className="fa-solid fa-ticket nav-icon"></i>
          <span className="nav-text">Not Events</span>
        </NavLink>
        </div>
      </div>
      <div className="log-out-container">
        <PrimaryButton text="Log Out" onClick={() => {}} />
      </div>
    </nav>
  )
}

export default Nav