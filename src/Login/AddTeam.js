import React, { useEffect, useState } from "react"
import "./addTeam.scss"
import TeamProfile from "../components/TeamProfile"
import EditPeopleModel from "../common/Model/EditPeopleModel"
import AddPeopleModel from "../common/Model/AddPeopleModel"
import LoginHeader from "../components/LoginHeader"
import LoginFooter from "../components/LoginFooter"
import { Progress } from "rsuite"
import EditTeamModel from "../common/Model/EditTeamModel"
import AddTeamModel from "../common/Model/AddTeamModel"
import axios from "axios"
import { useParams } from "react-router-dom"

const AddTeam = () => {
  const [percent, setPercent] = useState(100)
  const [allTeam, setAllTeam] = useState([])

  const { companyId } = useParams()

  // console.log("params", params)

  const status = percent === 100 ? "success" : null
  const color = percent === 100 ? "#2B62F9" : "#2B62F9"

  useEffect(() => {
    allTeamDisplay()
  }, [])

  const allTeamDisplay = async () => {
    const teamApiData = await axios.get(`http://localhost:8888/company/team/allTeams?companyId=${companyId}`,{
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      }
    })
    console.log("my data", teamApiData.data)
    setAllTeam(teamApiData.data)
  }


  console.log("all team is here", allTeam);
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
            <AddTeamModel />
            {/* <i className="fa-solid fa-plus mr-2"></i>Add Team */}
          </div>
        </div>
        {/* <div className=" info-teams">
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
        </div> */}

        {/* shhdd */}
        {/* accordian */}

        <div id="accordion">
          {allTeam.map((team, index)=>(
            <div className="card team-cards container" key={index}>
            <div className="card-header" id="headingOne">
              <div className="">
                <div className="table-responsive">
                  <table className="table mb-0">
                    <tbody>
                      <tr className="add-teams">
                        <td className="w-300">
                          <TeamProfile teamLeadName={team.teamLeadName} teamName= {team.teamName} leadDesignation={team.leadDesignation}/>
                        </td>
                        <td className="team-type">
                          <h3>{team.teamType}</h3>
                        </td>
                        <td>
                          <div className="team-edit">
                            <div className="add">
                              <AddPeopleModel />
                            </div>
                            <div className="edit">
                              <EditTeamModel />
                            </div>
                            <div>
                              <button className="delete-button">
                                <i className="fa-solid mr-1 fa-trash"></i>Delete
                              </button>
                            </div>
                          </div>
                        </td>
                        <td>
                          <h5 className="mb-0">
                            <button
                              className="btn btn-link"
                              data-toggle="collapse"
                              data-target="#collapseOne"
                              aria-expanded="false"
                              aria-controls="collapseOne"
                            >
                              <i className="fa-solid fa-chevron-up"></i>
                            </button>
                          </h5>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div
              id="collapseOne"
              className="collapse"
              aria-labelledby="headingOne"
              data-parent="#accordion"
            >
              <div className="card-body">
                <div className="card-body">
                  {/* card body */}
                  <div className="table-responsive">
                    <table className="table mb-0">
                      <tbody>
                        <tr className="add-teams">
                          <td className="w-300">
                            <TeamProfile />
                          </td>
                          <td className="team-type">
                            <h3>Inhouse Team</h3>
                          </td>
                          <td>
                            <div className="team-edit">
                              <div className="edit">
                                <EditPeopleModel />
                              </div>
                              <div>
                                <button className="delete-button">
                                  <i className="fa-solid mr-1 fa-trash"></i>
                                  Delete
                                </button>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr className="add-teams">
                          <td>
                            <TeamProfile />
                          </td>
                          <td className="team-type">
                            <h3>Inhouse Team</h3>
                          </td>
                          <td>
                            <div className="team-edit">
                              <div className="edit">
                                <EditPeopleModel />
                              </div>
                              <div>
                                <button className="delete-button">
                                  <i className="fa-solid mr-1 fa-trash"></i>
                                  Delete
                                </button>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  {/* end body */}
                </div>
              </div>
            </div>
          </div>
          ))
          
          }
          {/* second card */}
          <div className="card team-cards container">
            <div className="card-header" id="headingTwo">
              <div className="">
                <div className="table-responsive">
                  <table className="table mb-0">
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
                              <EditTeamModel />
                            </div>
                            <div>
                              <button className="delete-button">
                                <i className="fa-solid mr-1 fa-trash"></i>Delete
                              </button>
                            </div>
                          </div>
                        </td>
                        <td>
                          <h5 className="mb-0">
                            <button
                              className="btn btn-link"
                              data-toggle="collapse"
                              data-target="#collapseTwo"
                              aria-expanded="false"
                              aria-controls="collapseTwo"
                            >
                              <i className="fa-solid fa-chevron-up"></i>
                            </button>
                          </h5>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div
              id="collapseTwo"
              className="collapse"
              aria-labelledby="headingTwo"
              data-parent="#accordion"
            >
              <div className="card-body">
                {/* card body */}
                <div className="table-responsive">
                  <table className="table mb-0">
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
                            <div className="edit">
                              <EditPeopleModel />
                            </div>
                            <div>
                              <button className="delete-button">
                                <i className="fa-solid mr-1 fa-trash"></i>Delete
                              </button>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr className="add-teams">
                        <td>
                          <TeamProfile />
                        </td>
                        <td className="team-type">
                          <h3>Inhouse Team</h3>
                        </td>
                        <td>
                          <div className="team-edit">
                            <div className="edit">
                              <EditPeopleModel />
                            </div>
                            <div>
                              <button className="delete-button">
                                <i className="fa-solid mr-1 fa-trash"></i>Delete
                              </button>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                {/* end body */}
              </div>
            </div>
          </div>
        </div>

        {/* end accordian */}

        {/* wsjnwdw */}
      </div>

      <LoginFooter />
    </>
  )
}

export default AddTeam
