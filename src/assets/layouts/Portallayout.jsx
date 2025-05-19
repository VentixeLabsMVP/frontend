import React from 'react'
import Nav from '../components/Nav'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

const Portallayout = () => {
  return (
    <div className="portal-wrapper">
      <Nav />
      <Header />
      <main>
        <Outlet />{/* work like render-body in MVC */}
      </main>
      <Footer />
    </div>
  )
}

export default Portallayout