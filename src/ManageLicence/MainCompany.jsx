import React, { useEffect, useState } from "react"
import ManageSideBar from "../components/ManageSideBar"
import "./MainCompany.scss"
import { Link, Outlet, useNavigate } from "react-router-dom"

const MainCompany = () => {
  const navigate = useNavigate()

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
