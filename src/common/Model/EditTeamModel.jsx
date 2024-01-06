import React, { useEffect } from "react"
import "./Model.css"
import { useLocation, useNavigate } from "react-router-dom"

const EditTeamModel = ({teamId, leadName}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const dataPath = location.pathname.split('/');
  const handleClick = () => {
    navigate(`/company/${dataPath[2]}/addteam/${teamId}/editTeam`)
  }

  return (
    <nav>
      <div className="team-model">
        <button
          type="button"
          className="team-edit-button"
          data-toggle="modal"
          data-target="#EditTeamModel22"
          onClick={handleClick}
        >
          <i className="fa-solid fa-pen-to-square mr-1"></i>
          Edit
        </button>

        {/* MODAL */}
        <div
          className="modal fade"
          id="EditTeamModel22"
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
                  <h4 className="info-text model-heading">Edit Team {leadName}</h4>
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
                          />
                        </div>
                      </div>

                      <div className="all-between-items">
                        <div className="all-center">
                          <i className="fa-solid fa-gear"></i>
                          <h2>Advanced Setting</h2>
                        </div>
                        <div>
                          <button className="first-button form-prev-btn">
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
    </nav>
  )
}

export default EditTeamModel
