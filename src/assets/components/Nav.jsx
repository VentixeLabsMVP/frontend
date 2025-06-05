import React from 'react'
import logo from '../images/logo_ventixe.svg'
import PrimaryButton from './PrimaryButton'
import { NavLink, Link, useLocation } from 'react-router-dom';//same as in header




//send in modal as props inside () with {}
const Nav = ({onHamburgerClick}) => {
  const location = useLocation();
  const showBack = location.pathname.startsWith('/events/') && location.pathname !== '/events';
  
  return (

    
    <nav>
      <div className="nav-content">
        <div className="logo-container">
          <img className="logo-img" src={logo} alt="Ventixe logo"/>
          <span className="logo-text">Ventixe</span>
        {/* can change this later to a more specifik arrow */}
        <div className="current-page-info">
            {showBack && (
              <Link to="/events" className="back-link">
                <i className="fa-duotone fa-light fa-arrow-left"></i>
                <span className="return-link-text">Event Details</span>
              </Link>
            )}
          <span className="current-page-text">
          </span>
        </div>
        </div>
        <div className="menu-container">
          <div className="hamb-menu" onClick={onHamburgerClick}>
            <i className="fa-solid fa-bars"></i>
          </div>
        </div>
      <div className="nav-links">
        <NavLink to="/" end className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
          <i className="fa-solid fa-ticket nav-icon"></i>
          <span className="nav-text">Events</span>
        </NavLink>
        <NavLink to="/not-events" end className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
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