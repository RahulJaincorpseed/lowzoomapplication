import React from "react"
import "./Accounts.scss"
import TopNavbar from "../../components/TopNavbar"
import { Outlet } from "react-router-dom"

const Accounts = () => {
  return (
    <div>
      <div>
      <TopNavbar />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default Accounts
