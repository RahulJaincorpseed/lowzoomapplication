import React from "react"
import "./SideSectionItem.scss"

const SideSectionItem = ({ icon, para, heading }) => {
  return (
    <div className="section-item">
      {icon}
      <div>
        <h2 className="section-head">{heading}</h2>
        <p className="section-para">{para}</p>
      </div>
    </div>
  )
}

export default SideSectionItem
