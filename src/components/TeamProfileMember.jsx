import React from "react"
import "./TeamProfile.scss"
import akImg from "../images/Group 1136.png"

const TeamProfileMember = ({memberName, memberMobile, memberMail}) => {
  return (
    <div className="team-profile">
      <div className="image-pro">
        <img src={akImg} alt="AkImage" />
      </div>
      <div className="team-text">
        <h3>{memberName || "Team Name"}</h3>
        <h2>
          {memberMobile || "Team Lead Name"} <span>| {memberMail || "Designation"}</span>
        </h2>
      </div>
    </div>
  )
}

export default TeamProfileMember
