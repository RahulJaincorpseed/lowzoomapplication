import React from "react"
import "./ManageSideBar.scss"
import Logo from "../images/lowZoom.png"
import { Link, NavLink, useLocation } from "react-router-dom"
import TaskManagement from "../ManageLicence/ManageComplience/TaskManagement"

const ManageSideBar = () => {
  // const companyId = 2;
  // const userId = 2;

  const location = useLocation(); 

  const addPathData = location.pathname.split()
  const data = addPathData[0].split("/")
  console.log("data", data)
  const userId = Number(data[1])
  const companyId = Number(data[3])

  return (
    <div className="manageside-bar">
      <div className="manage-logo">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="side-nav-items">
        <ul className="list-unorder">
          <li className="linkw-icon">
            <NavLink to={`/${userId}/company/${companyId}`} className={`main-link`}>
              <i className="fa-solid fa-gear"></i>
              <span>DashBoard</span>
            </NavLink>
          </li>
          <li className="linkw-icon">
            <NavLink
              to={`/${userId}/company/${companyId}/managecompany`}
              className={`main-link  ${({ isActive }) =>
                isActive ? "linkactive" : ""}`}
            >
              <i className="fa-solid fa-gear"></i>
              <span>Manage Companies</span>
            </NavLink>
          </li>
          <li className="linkw-icon">
            <NavLink
              to={`/${userId}/company/${companyId}/setcompliance`}
              className={`main-link  ${({ isActive }) =>
                isActive ? "linkactive" : ""}`}
            >
              <i className="fa-solid fa-gear"></i>
              <span>Set Compliance Map</span>
            </NavLink>
          </li>
          <li className="linkw-icon">
            <NavLink
              to={`/${userId}/company/${companyId}/managecompliance`}
              className={`main-link  ${({ isActive }) =>
                isActive ? "linkactive" : ""}`}
              data-toggle="collapse"
              data-target="#collapseExample"
            >
              <i className="fa-solid fa-gear"></i>
              <span>Manage Compliance</span>
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
              to={`/${userId}/company/${companyId}/vendor`}
              className={`main-link  ${({ isActive }) =>
                isActive ? "linkactive" : ""}`}
            >
              <i className="fa-solid fa-user"></i>
              <span>Vendor Task</span>
            </NavLink>
          </li>
          <li className="linkw-icon">
            <NavLink
              to={`/${userId}/company/${companyId}/accounts`}
              className={`main-link  ${({ isActive }) =>
                isActive ? "linkactive" : ""}`}
            > 
              <i className="fa-solid fa-gear"></i>
              <span>Accounts</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ManageSideBar
