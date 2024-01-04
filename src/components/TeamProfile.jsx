import React from "react"
import "./TeamProfile.scss"
import akImg from "../images/Group 1136.png"

const TeamProfile = ({teamLeadName, teamName, leadDesignation}) => {
  // console.log(teamLeadName);
  return (
    <div className="team-profile">
      <div className="image-pro">
        <img src={akImg} alt="AkImage" />
      </div>
      <div className="team-text">
        <h3>{teamName || "Team Name"}</h3>
        <h2>
          {teamLeadName || "Team Lead Name"} <span>| {leadDesignation || "Designation"}</span>
        </h2>
      </div>
    </div>
  )
}

export default TeamProfile
