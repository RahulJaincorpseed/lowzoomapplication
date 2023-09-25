import React, { useEffect } from "react"
import "./Model.css"
import { useLocation } from "react-router-dom"

const EditTeamModel = ({id}) => {
  const location = useLocation();
  
      // console.log("team id is ", teamId, teamName);
  const handleClick = () => {
    console.log("click me ", location);
  }
  
  return (
    <nav>
      <div className="team-model">
        
        {/* MODAL */}
        <div
          className="modal fade"
          id="EditModelOne33"
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
    </nav>
  )
}

export default EditTeamModel
