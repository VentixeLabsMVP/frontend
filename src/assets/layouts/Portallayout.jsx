import React from 'react'
import Nav from '../components/Nav'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
import {useState} from 'react'
import DropDownMenuModal from '../components/DropDownModal'

const Portallayout = () => {

  // adding the modal here to start with
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="portal-wrapper">
      <Nav onHamburgerClick={() => setIsMenuOpen(true)} />
        <DropDownMenuModal isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <Header />
      <main>
        <Outlet />{/* work like render-body in MVC */}
      </main>
      <Footer />
    </div>
  )
}

export default Portallayout