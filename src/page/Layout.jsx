import React, { useEffect } from 'react'
import { Outlet, redirect } from 'react-router-dom'
const Layout = () => {
  return (
  <div>
    <Outlet/>
    </div>

  )
}

export default Layout