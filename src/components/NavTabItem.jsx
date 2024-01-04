import React from "react"
import "./NavTabItem.scss"
import { Link } from "react-router-dom"

const NavTabItem = ({ heading, description, icon }) => {
  return (
    <div className="tab-item">
      {icon}
      <div>
        <Link className="tab-heading">{heading}</Link>
        <p className="tab-para">{description}</p>
      </div>
    </div>
  )
}

export default NavTabItem
