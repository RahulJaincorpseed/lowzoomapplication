import React from "react"
import "./addTeam.scss"
import TeamProfile from "../components/TeamProfile"
import EditPeopleModel from "../common/Model/EditPeopleModel"
import AddPeopleModel from "../common/Model/AddPeopleModel"

const AddTeam = () => {
  return (
    <>
      <div className="table-responsive">
        <table className="table">
          <tbody>
            <tr className="add-teams">
              <td>
                <TeamProfile />
              </td>
              <td className="team-type">
                <h3>Inhouse Team</h3>
              </td>
              <td>
                <div className="team-edit">
                  <div className="add">
                    <AddPeopleModel />
                  </div>
                  <div className="edit">
                    <EditPeopleModel />
                  </div>
                </div>
              </td>
            </tr>
            <tr className="add-teams">
              <td>
                <TeamProfile />
              </td>
              <td>
                <div className="team-type">
                  <h3>Inhouse Team</h3>
                </div>
              </td>
              <td>
                <div className="team-edit">
                  <div className="add">
                    <AddPeopleModel />
                  </div>
                  <div className="edit">
                    <EditPeopleModel />
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default AddTeam
