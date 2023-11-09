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
import { useNavigate, useParams } from "react-router-dom"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { getQuery } from "../Api/getQuery"
import TeamProfileMember from "../components/TeamProfileMember"
toast.configure()

const AddTeam = () => {
  const [percent, setPercent] = useState(100)
  const [allTeam, setAllTeam] = useState([])
  const [editTeamData, setEditTeamData] = useState({})
  const [arrowChange, setarrowChange] = useState(false)
  const [teamMemberState, setTeamMemberState] = useState([])

  const navigate = useNavigate()
  const { companyId } = useParams()

  const status = percent === 100 ? "success" : null
  const color = percent === 100 ? "#2B62F9" : "#2B62F9"


  useEffect(() => {
    allTeamDisplay()
  }, [])

  useEffect(() => {
    getAllTeamMemberFun()
  }, [])

  const rotateArrow = () => {
    console.log("rotate arrow")
    setarrowChange((prev) => !prev)
  }

  console.log("arrow is ", arrowChange)

  const teamEditSetData = (e) => {
    setEditTeamData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const allTeamDisplay = async () => {
    try {
      const teamApiData = await axios.get(
        `/companyServices/company/team/allTeams?companyId=${companyId}`,
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        }
      )
      setAllTeam(teamApiData.data)
    } catch (err) {
      console.log(err)
    }
  }

  const handleEdit = async (team) => {
    console.log("edit team", team)
    setEditTeamData((data) => ({ ...data, ...team }))
  }

  const updateTeam = async (id) => {
    // console.log("update Team ");
    // try{
    //   const updateData = await axios.put(`http://localhost:8888/api/v1/company/team/deleteTeam?teamId=${id}`);
    //   window.location.reload();
    //   console.log("Team update succesfully");
    // }catch(err){
    //   console.log("succesfully added")
    // }
  }

  const getAllTeamMemberFun = async () => {
    try {
      const getAllTeamMember = await getQuery(
        `/companyServices/company/team/members/getAllTeamMembers?teamId=${2}`
      )
      console.log("get all team Member ", getAllTeamMember.data)
      setTeamMemberState(getAllTeamMember.data)
    } catch (err) {
      console.log("err", err)
    }
  }

  const deleteTeam = async (id) => {
    window.confirm("Are you want to delete Team")
    try {
      const teamData = await axios.delete(
        `/companyServices/company/team/deleteTeam?teamId=${id}`,
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        }
      )
      console.log("team dleel", teamData)
      toast.success("Team Deleted Succesfully")
      console.log("Team delete succesfully")
      setTimeout(() => {
        window.location.reload()
      }, 500)
    } catch (err) {
      console.log("succesfully added")
    }
  }

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
          <div>{/* <h4 className="team-text">Team</h4> */}</div>
          <div>
            <AddTeamModel />
          </div>
        </div>

        {/* shhdd */}
        {/* accordian */}

        <div id="accordion">
          {allTeam.map((team, index) => (
            <div className="card team-cards container" key={index}>
              <div className="card-header" id={`heading${index}`}>
                <div className="">
                  <div className="table-responsive">
                    <table className="table mb-0">
                      <tbody>
                        <tr className="add-teams">
                          <td className="w-300">
                            <TeamProfile
                              teamLeadName={team.teamLeadName}
                              teamName={team.teamName}
                              leadDesignation={team.leadDesignation}
                            />
                          </td>
                          <td className="team-type">
                            <h3>{team.teamType}</h3>
                          </td>
                          <td>
                            <div className="team-edit">
                              <div className="add">
                                {/* add people model */}
                                <AddPeopleModel teamId={team.id} />
                              </div>

                              <div className="edit">
                                <EditTeamModel
                                  teamId={team.id}
                                  leadName={team.teamLeadName}
                                />

                                {/* end model */}
                              </div>
                              <div>
                                <button
                                  onClick={() => deleteTeam(team.id)}
                                  className="delete-button"
                                >
                                  <i className="fa-solid mr-1 fa-trash"></i>
                                  Delete
                                </button>
                              </div>
                            </div>
                          </td>
                          <td>
                            <h5 className="mb-0">
                              <button
                                className="btn btn-link"
                                data-toggle="collapse"
                                data-target={`#collapse${index}`}
                                aria-expanded="false"
                                aria-controls={`#collapse${index}`}
                                onClick={rotateArrow}
                              >
                                <span className="click">
                                  <i className="fa-solid fa-chevron-up icon"></i>
                                </span>
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
                id={`collapse${index}`}
                className="collapse collapse-item"
                aria-labelledby={`heading${index}`}
                data-parent="#accordion"
              >
                <div className="card-body">
                  {/* card body */}
                  <div className="table-responsive">
                    <table className="table mb-0">
                      <tbody>
                        {teamMemberState.map((member, index) => (
                          <tr className="add-teams" key={index}>
                            <td className="w-300">
                              <TeamProfileMember memberName={member?.memberName} memberMobile={member?.memberMobile}  memberMail={member?.memberMail}  />
                            </td>
                            <td className="team-type">
                              <h3>{member?.memberName} {member?.memberMail} {member?.memberMobile}</h3>
                            </td>
                            <td>
                              <div className="team-edit">
                                <div className="edit">
                                  <EditPeopleModel />
                                </div>
                                <div>
                                  <button className="delete-button">
                                    <i className="fa-solid mr-1 fa-trash"></i>
                                    Delete4444
                                  </button>
                                </div>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  {/* end body */}
                </div>
              </div>
            </div>
          ))}
          {/* second card */}
        </div>

        {/* end accordian */}

        {/* wsjnwdw */}
      </div>

      <LoginFooter />
    </>
  )
}

export default AddTeam
