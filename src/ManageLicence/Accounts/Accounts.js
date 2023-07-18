import React from "react"
import "./Accounts.scss"
import TopNavbar from "../../components/TopNavbar"
import { Outlet } from "react-router-dom"

const Accounts = () => {
  return (
    <div>
      <div>
      <TopNavbar item1={"Settings"} item2= {"My Profile"} link1={"/accounts/setting"} link2={"/accounts"}/>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default Accounts
