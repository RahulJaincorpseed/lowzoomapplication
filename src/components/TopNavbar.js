import React from "react";
import "./TopNavbar.scss"
import { NavLink } from "react-router-dom";

const TopNavbar = () => {
  return (
    <div className="top-navbar">
        <div className="left-side-tab">
            <li>
            <NavLink
              to={"/accounts/setting"}
              className={`tab-link  ${({ isActive }) =>
                isActive ? "active" : ""}`}
            >
            Setting
            </NavLink>
            </li>
            <li>
            <NavLink
              to={"/accounts/profile"}
              className={`tab-link  ${({ isActive }) =>
                isActive ? "active" : ""}`}
            >
              My Profile
            </NavLink>
            </li>
 
        </div>
        <div>
            <h3>i am data</h3>
        </div>
    </div>
  )
};

export default TopNavbar;
