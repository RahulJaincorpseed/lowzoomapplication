import React from "react"
import "./ManageSideBar.scss"
import Logo from "../images/lowZoom.png"
import { Link, NavLink } from "react-router-dom"
import TaskManagement from "../ManageLicence/ManageComplience/TaskManagement"

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
              data-toggle="collapse"
              data-target="#collapseExample"
            >
              <i className="fa-solid fa-gear"></i>Manage Compliance
              <i className="fa-solid fa-chevron-right ml-1"></i>
            </NavLink>
            {/* collapse  */}
            <div className="collapse" id="collapseExample">
              <div>
                <ul className="toggle-under-list">
                  <li>
                    <i className="fa-solid fa-chevron-right mr-1"></i>{" "}
                    <button
                      type="button"
                      className="toggle-list-item p-0 bg-white"
                      data-toggle="modal"
                      data-target="#TaskManagementModel"
                    >
                      Task Management
                    </button>
                    <TaskManagement />
                  </li>
                  <li>
                    <NavLink
                      className={"toggle-list-item"}
                      to={"/managecompliance"}
                    >
                      <i className="fa-solid fa-chevron-right mr-1"></i> In
                      Progress
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={"toggle-list-item"}
                      to={"/managecompliance"}
                    >
                      <i className="fa-solid fa-chevron-right mr-1"></i>Over Due
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={"toggle-list-item"}
                      to={"/managecompliance"}
                    >
                      <i className="fa-solid fa-chevron-right mr-1"></i> Not
                      Started
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={"toggle-list-item"}
                      to={"/managecompliance"}
                    >
                      <i className="fa-solid fa-chevron-right mr-1"></i>{" "}
                      Critical
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={"toggle-list-item"}
                      to={"/managecompliance"}
                    >
                      <i className="fa-solid fa-chevron-right mr-1"></i>{" "}
                      Completed
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
            {/* collapse */}
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
