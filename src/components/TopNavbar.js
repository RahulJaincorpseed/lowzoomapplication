import React from "react";
import "./TopNavbar.scss"
import { NavLink } from "react-router-dom";
import RightSideIcons from "../common/RightSideIcons";

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
              to={"/accounts"}
              className={`tab-link  ${({ isActive }) =>
                isActive ? "active" : ""}`}
            >
              My Profile
            </NavLink>
            </li>
        </div>
        <div>
            <RightSideIcons />
        </div>
    </div>
  )
};

export default TopNavbar;
