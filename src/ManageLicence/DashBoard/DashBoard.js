import React from "react"
import "./DashBoard.scss"
import BreadCrum from "../../components/BreadCrum"

const DashBoard = () => {
  return (
    <div>
      <BreadCrum />
      <div>
        <h2 className="heading-primary">DashBoard</h2>
      </div>
    </div>
  )
}

export default DashBoard
