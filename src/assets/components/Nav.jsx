import React from 'react'
import logo from '../images/logo_ventixe.svg'


const Nav = () => {
  return (
    <nav>
      <div className="logo-container">
        <img className="logo-img" src={logo} alt="Ventixe logo"/>
        <span className="logo-text">Ventixe</span>
      </div>
    </nav>
  )
}

export default Nav