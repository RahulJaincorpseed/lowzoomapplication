import React from "react"
import ManageSideBar from "../components/ManageSideBar"
import "./MainCompany.scss"
import { Outlet } from "react-router-dom"

const MainCompany = () => {
  return (
    <>
      <div className="manage-license">
        <>
          <ManageSideBar />
        </>
        <div className="right-sidebar">
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default MainCompany
