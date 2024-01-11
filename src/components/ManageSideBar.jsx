import React from "react"
import "./ManageSideBar.scss"
import Logo from "../images/lowZoom.png"
import { Link, NavLink, useLocation, useParams } from "react-router-dom"
import TaskManagement from "../ManageLicence/ManageComplience/TaskManagement"
import { customLocation } from "../Hooks/LocationHook"

const ManageSideBar = () => {
  const { userId, companyid } = useParams()

  return (
    <div className="manageside-bar">
      <div className="manage-logo">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="side-nav-items">
        <ul className="list-unorder">
          <li className="linkw-icon">
            <NavLink
              to={`/${userId}/company/dashboard`}
              className={`main-link`}
            >
              <i class="fa-solid fa-border-all"></i>
              <span>DashBoard</span>
            </NavLink>
          </li>
          <li className="linkw-icon">
            <NavLink
              to={`/${userId}/company/managecompany`}
              className={`main-link  ${({ isActive }) =>
                isActive ? "linkactive" : ""}`}
            >
              <i class="fa-solid fa-people-roof"></i>
              <span>Manage Companies</span>
            </NavLink>
          </li>
          <li className="linkw-icon">
            <NavLink
              to={`/${userId}/company/setcompliance`}
              className={`main-link  ${({ isActive }) =>
                isActive ? "linkactive" : ""}`}
            >
              <i class="fa-solid fa-layer-group"></i>
              <span>Set Compliance Map</span>
            </NavLink>
          </li>
          <li className="linkw-icon">
            <NavLink
              to={`/${userId}/company/managecompliance`}
              className={`main-link  ${({ isActive }) =>
                isActive ? "linkactive" : ""}`}
              data-toggle="collapse"
              data-target="#collapseExample"
            >
              <i class="fa-solid fa-list-check"></i>
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
              to={`/${userId}/company/vendor`}
              className={`main-link  ${({ isActive }) =>
                isActive ? "linkactive" : ""}`}
            >
              <i class="fa-regular fa-rectangle-list"></i>
              <span>Vendor Task</span>
            </NavLink>
          </li>
          <li className="linkw-icon">
            <NavLink
              to={`/${userId}/company/accounts`}
              className={`main-link  ${({ isActive }) =>
                isActive ? "linkactive" : ""}`}
            >
              <i class="fa-solid fa-receipt"></i>
              <span>Accounts</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ManageSideBar
