import React from "react"
import "./addPeople.scss"
import AddTeam from "./AddTeam"
import AddTeamModel from "../common/Model/AddTeamModel"

const AddPeople = () => {
  return (
    <div>
      <div className="personal-info container">
        <h4 className="info-text">OK, Now add people to the project</h4>
        <div className="add-people-box">
          <div className="add-team">
            <div className="team-text">
              <h4>Team</h4>
            </div>
            <AddTeamModel />
          </div>
          <div>
            <AddTeam />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddPeople
