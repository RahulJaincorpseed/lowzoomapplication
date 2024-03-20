import React from "react"
import "./ManageSideBar.scss"
import Logo from "../images/lowZoom.png"
import { Link, NavLink, useNavigate, useParams } from "react-router-dom"
import TaskManagement from "../ManageLicence/ManageComplience/TaskManagement"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { useDispatch, useSelector } from "react-redux"
import { logoutAction } from "../toolkit/Slices/AuthSlice"
toast.configure()

const ManageSideBar = () => {
  const { userId, companyid } = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const loginUser = useSelector((state) => state.auth.isAuth)

  console.log(loginUser)

  const logoutFun = () => {
    if (window.confirm("Are you sure for Logout?") == true) {
      const key = localStorage.getItem("persist:root")
      dispatch(logoutAction())
      // console.log(key);
      const token = localStorage.removeItem(key)
      navigate("/login")
      toast.success("Logout Succesfully")
    }
  }

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
              <i className="fa-solid fa-border-all"></i>
              <span>DashBoard</span>
            </NavLink>
          </li>
          <li className="linkw-icon">
            <NavLink
              to={`/${userId}/company/managecompany`}
              className={`main-link  ${({ isActive }) =>
                isActive ? "linkactive" : ""}`}
            >
              <i className="fa-solid fa-people-roof"></i>
              <span>Manage Companies</span>
            </NavLink>
          </li>
          <li className="linkw-icon">
            <NavLink
              to={`/${userId}/company/setcompliance`}
              className={`main-link  ${({ isActive }) =>
                isActive ? "linkactive" : ""}`}
            >
              <i className="fa-solid fa-layer-group"></i>
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
              <i className="fa-solid fa-list-check"></i>
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
              <i className="fa-regular fa-rectangle-list"></i>
              <span>Vendor Task</span>
            </NavLink>
          </li>
          <li className="linkw-icon">
            <NavLink
              to={`/${userId}/company/accounts`}
              className={`main-link  ${({ isActive }) =>
                isActive ? "linkactive" : ""}`}
            >
              <i className="fa-solid fa-receipt"></i>
              <span>Accounts</span>
            </NavLink>
          </li>
          <li className="linkw-icon">
            <button
              className="main-link bg-transparent"
              onClick={() => logoutFun()}
            >
              <i class="fa-solid fa-arrow-right-from-bracket"></i>
              <span>Logout</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ManageSideBar
