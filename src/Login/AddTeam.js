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
toast.configure()


const AddTeam = () => {
  const [percent, setPercent] = useState(100)
  const [allTeam, setAllTeam] = useState([])
  const [editTeamData, setEditTeamData] = useState({});

  const navigate = useNavigate();
  const { companyId } = useParams()

  // console.log("params", params)

  const status = percent === 100 ? "success" : null
  const color = percent === 100 ? "#2B62F9" : "#2B62F9"





  useEffect(() => {
    allTeamDisplay()
    // navigate(`/${30}/addteam`)
    // window.location.reload();
  //  console.log("location reload", data);
  console.log("calling page");
  }, [])


  const teamEditSetData = (e) => {
    setEditTeamData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }




  const allTeamDisplay = async () => {
    const teamApiData = await axios.get(
      `http://localhost:8888/api/v1/company/team/allTeams?companyId=${companyId}`,
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      }
    )
    // console.log("my data", teamApiData.data)
    setAllTeam(teamApiData.data)
  }

  const handleEdit = async (team) =>{
      console.log("edit team", team)
      setEditTeamData((data)=> ({...data, ...team}))
      
    }
    console.log("edit data", editTeamData);


  
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

  const deleteTeam = async (id) => {
    window.confirm("Are you want to delete Team")
    try {
      const teamData = await axios.delete(
        `http://localhost:8888/api/v1/company/team/deleteTeam?teamId=${id}`
      )
      console.log("team dleel", teamData)
      toast.success("Team Deleted Succesfully")
      console.log("Team delete succesfully")
      setTimeout(()=>{

        window.location.reload()
      }, 500)
     
      
    } catch (err) {
      console.log("succesfully added")
    }
  }

  console.log("all team data", allTeam)

  // console.log("all team is here", allTeam);
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
                            <h3>
                              {team.teamType}
                            </h3>
                          </td>
                          <td>
                            <div className="team-edit">
                              <div className="add">
                                {/* add people model */}
                                <AddPeopleModel teamId = {team.id}/>
                              </div>


                              <div className="edit">
                                <button
                                  type="button"
                                  className="team-edit-button"
                                  data-toggle="modal"
                                  data-target="#EditModelOne3334"
                                  onClick={()=> handleEdit(team)}
                                >
                                  <i className="fa-solid fa-pen-to-square mr-1"></i>
                                  Edit
                                </button>
                                <EditTeamModel />
                                <div className="team-model">
        
        {/* Edit Team MODAL */}
        <div
          className="modal fade"
          id="EditModelOne3334"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div
            className="modal-dialog mod-center modal-dialog-centered"
            role="document"
          >
            <div className="modal-content all-center">
              <div className="add-team-body">
                {/* START */}
                <div className="personal-info container">
                  <h4 className="info-text model-heading">Edit Team</h4>
                  <div className="cross-icon">
                  <i
                    data-dismiss="modal"
                    className="fa-sharp fa-solid fa-circle-xmark"
                  ></i>
                </div>
                  <form>
                  <div className="first-form form-row">
                    <div className="form-group col-md-6">
                      <div className="pr-ten">
                        <label
                          className="label-heading mb-1"
                          htmlFor="teamName"
                        >
                          Team Name *
                        </label>
                        <input
                          type="text"
                          className="form-control input-focus"
                          id="teamName"
                          placeholder="Enter Team Name"
                          name="teamName"
                          value={editTeamData.teamName}
                          onChange={(e)=> teamEditSetData(e)}
                        />
                      </div>
                    </div>
                    <div className="form-group col-md-6">
                      <div className="pl-ten">
                        <label
                          className="label-heading mb-1"
                          htmlFor="teamLeadName"
                        >
                          Team Lead Name*
                        </label>
                        <input
                          type="text"
                          className="form-control input-focus"
                          id="teamLeadName"
                          placeholder="Enter Team Lead Name"
                          name="teamLeadName"
                          value={editTeamData.teamLeadName}
                          onChange={(e)=> teamEditSetData(e)}
                        />
                      </div>
                    </div>
                    <div className="form-group col-md-6">
                      <div className="pr-ten">
                        <label
                          className="label-heading mb-1"
                          htmlFor="teamDesignation"
                        >
                          Team Designation *
                        </label>
                        <input
                          type="text"
                          className="form-control input-focus"
                          id="teamDesignation"
                          name="leadDesignation"
                          placeholder="Enter Team Designation"
                          value={editTeamData.leadDesignation}
                          onChange={(e)=> teamEditSetData(e)}
                        />
                      </div>
                    </div>
                    <div className="form-group col-md-6">
                      <div className="pl-ten">
                        <label
                          className="label-heading mb-1"
                          htmlFor="teamType"
                        >
                          Team Type*
                        </label>
                        <input
                          type="text"
                          className="form-control input-focus"
                          id="teamType"
                          name="teamType"
                          placeholder="Enter Team Type"
                          value={editTeamData.teamType}
                          onChange={(e)=> teamEditSetData(e)}
                        />
                      </div>
                    </div>

                    <div className="all-between-items">
                      <div className="all-center">
                        <i className="fa-solid fa-gear"></i>
                        <h2>Advanced Setting</h2>
                      </div>
                      <div>
                        <button 
                          className="first-button form-prev-btn"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
                id={`collapse${index}`}
                className="collapse"
                aria-labelledby={`heading${index}`}
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
          ))}
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

            <div className="card-header" id="headingThree">
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
                              data-target="#collapseThree"
                              aria-expanded="false"
                              aria-controls="collapseThree"
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
              id="collapseThree"
              className="collapse"
              aria-labelledby="headingThree"
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
