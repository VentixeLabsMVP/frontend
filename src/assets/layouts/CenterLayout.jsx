import React from 'react'
import { Outlet } from 'react-router-dom'

const CenterLayout = () => {
  return (
    <div className="center-wrapper">
      <main>
        <Outlet />{/* work like render-body in MVC */}
      </main>
    </div>
  )
}

export default CenterLayout