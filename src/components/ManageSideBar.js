import React from "react"
import "./ManageSideBar.scss"
import Logo from "../images/lowZoom.png"
import {  NavLink } from "react-router-dom"

const ManageSideBar = () => {

  return (
    <div className="manageside-bar">
      <div className="manage-logo">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="side-nav-items">
        <ul className="list-unorder">
          <li className="linkw-icon">
            <NavLink to={"/"} className={`main-link`}>
              <i className="fa-solid fa-gear"></i>DashBoard
            </NavLink>
          </li>
          <li className="linkw-icon">
            <NavLink
              to={"/managecompany"}
              className={`main-link  ${({ isActive }) =>
                isActive ? "linkactive" : ""}`}
            >
              <i className="fa-solid fa-gear"></i>Manage Companies
            </NavLink>
          </li>
          <li className="linkw-icon">
            <NavLink
              to={"/setcompliance"}
              className={`main-link  ${({ isActive }) =>
                isActive ? "linkactive" : ""}`}
            >
              <i className="fa-solid fa-gear"></i>Set Compliance Map
            </NavLink>
          </li>
          <li className="linkw-icon">
            <NavLink
              to={"/managecompliance"}
              className={`main-link  ${({ isActive }) =>
                isActive ? "linkactive" : ""}`}
            >
              <i className="fa-solid fa-gear"></i>Manage Compliance
            </NavLink>
          </li>
          <li className="linkw-icon">
            <NavLink
              to={"/vendor"}
              className={`main-link  ${({ isActive }) =>
                isActive ? "linkactive" : ""}`}
            >
              <i className="fa-solid fa-user"></i>Vendor Task
            </NavLink>
          </li>
          <li className="linkw-icon">
            <NavLink
              to={"/accounts"}
              className={`main-link  ${({ isActive }) =>
                isActive ? "linkactive" : ""}`}
            >
              <i className="fa-solid fa-gear"></i>Accounts
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ManageSideBar
