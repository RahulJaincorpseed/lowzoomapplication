import React from "react";
import "./TopNavbar.scss"
import { NavLink } from "react-router-dom";
import RightSideIcons from "../common/RightSideIcons";

const TopNavbar = ({item1, item2, link1, link2}) => {
  return (
    <div className="top-navbar">
        <div className="left-side-tab">
            <li>
            <NavLink
              to={link1}
              className={`tab-link  ${({ isActive }) =>
                isActive ? "active" : ""}`}
            >
            {item1}
            </NavLink>
            </li>
            <li>
            <NavLink
              to={link2}
              className={`tab-link  ${({ isActive }) =>
                isActive ? "active" : ""}`}
            >
              {item2}
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
