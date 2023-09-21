import React, { useState } from "react"
import "./addTeam.scss"
import TeamProfile from "../components/TeamProfile"
import EditPeopleModel from "../common/Model/EditPeopleModel"
import AddPeopleModel from "../common/Model/AddPeopleModel"
import LoginHeader from "../components/LoginHeader"
import LoginFooter from "../components/LoginFooter"
import { Progress } from "rsuite"

const AddTeam = () => {
  const [percent, setPercent] = useState(100)

  const status = percent === 100 ? "success" : null
  const color = percent === 100 ? "#2B62F9" : "#2B62F9"
  return (
    <>
      <LoginHeader />
      <div className="min-200 container">
      <div className="progressbar">
            <div>
              <Progress.Line
                percent={percent}
                strokeColor={color}
                status={status}
              />
            </div>
          </div>
      <h4 className="info-text px-4">OK, Now add people to the project</h4>
      <div className="all-between team-add">
        <div>
          <h4 className="team-text">Team</h4>
        </div>
        <div>
          <button className="team-button"><i class="fa-solid fa-plus mr-2"></i>Add Team</button>
        </div>
      </div>
      <div className=" info-teams">
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
        </div>
      </div>
      <LoginFooter />
    </>
  )
}

export default AddTeam
