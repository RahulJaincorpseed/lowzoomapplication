import React from "react"
import "./OfferingBox.scss"
import { Link } from "react-router-dom"

const OfferingBox = ({ heading, icon }) => {
  return (
    <div className="offer-box">
      {icon}
      <h3 className="offer-heading">{heading}</h3>
      <Link className="offre-more">Learn More</Link>
    </div>
  )
}

export default OfferingBox
