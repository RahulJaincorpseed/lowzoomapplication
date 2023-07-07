import React from "react"
import "./TeamProfile.scss"
import akImg from "../images/Group 1136.png"

const TeamProfile = () => {
  return (
    <div className="team-profile">
      <div className="image-pro">
        <img src={akImg} alt="AkImage" />
      </div>
      <div className="team-text">
        <h3>Abhishek Kumar</h3>
        <h2>
          Super Admin <span>| CEO</span>
        </h2>
      </div>
    </div>
  )
}

export default TeamProfile
