import React from "react"
import HomeNavbar from "../common/HomeNavbar"
import HomeFooter from "../common/HomeFooter"
import { Outlet } from "react-router-dom"

const HomePage = () => {
  return (
    <div>
      <HomeNavbar />
      <Outlet />
      <HomeFooter />
    </div>
  )
 }

export default HomePage
