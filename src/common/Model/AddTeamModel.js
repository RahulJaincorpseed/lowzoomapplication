import React, { useState } from "react"
import "./Model.css"
import { useParams } from "react-router-dom"
import axios from "axios"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
toast.configure()


const AddTeamModel = () => {
  const [teamData, setTeamData] = useState({
    teamName: "",
    teamLeadName: "",
    leadDesignation: "",
    teamType: "",
  })
  const { companyId } = useParams()

  console.log("params is ", companyId)

  const TeamSetData = (e) => {
    setTeamData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const addNewTeam = (e) => {
    e.preventDefault()

    console.log("function calling")

    const addTeamData = async () => {
      try {
        const addNewTeamData = await axios.post(
          `/api/v1/company/team/addTeam?companyId=${companyId}`,
          {
            ...teamData,
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Content-Type": "application/json",
            },
          }
        )

        console.log("add team ", addNewTeamData.data)
        toast.success("Team added Succesfully")
        window.location.reload();
      } catch (err) {
        console.log(err)
      }
    }

    addTeamData()
  }

  console.log("team data api", teamData)

  return (
    <div className="team-model">
      <button
        type="button"
        className="add-team-modal edit-people color-blue"
        data-toggle="modal"
        data-target="#AddTeamModel22"
      >
        <i className="fa-solid fa-plus mr-1"></i> Add Team
      </button>

      <div
        className="modal fade"
        id="AddTeamModel22"
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
                <h4 className="info-text model-heading">Add Team</h4>
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
                          onChange={(e) => TeamSetData(e)}
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
                          onChange={(e) => TeamSetData(e)}
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
                          onChange={(e) => TeamSetData(e)}
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
                          onChange={(e) => TeamSetData(e)}
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
                          onClick={(e) => addNewTeam(e)}
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
  )
}

export default AddTeamModel
