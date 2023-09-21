import React from "react"
import "./headFoot.scss"
import ZoomLogo from "../images/lowZoom.png"
import { Link } from "react-router-dom"

const LoginHeader = () => {
  return (
    <div className="header">
      <div className="zoom-header container">
        <div className="zoom-logo">
          <img src={ZoomLogo} alt="zoom logo" />
        </div>
        <div className="log-out-btn">
          <Link to={""} className="logout-link">
            Logout
          </Link>
        </div>
      </div>
    </div>
  )
}

export default LoginHeader
