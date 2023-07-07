import React from "react"
import "./Model.css"

const AddNewComplienceModel = () => {
  return (
    <nav>
      <div className="team-model">
        <button
          type="button"
          className="add-team-modal"
          data-toggle="modal"
          data-target="#EditModelOne3"
        >
          <i className="fa-solid fa-pen-to-square mr-1"></i>
          Edit
        </button>
        {/* MODAL */}
        <div
          className="modal fade"
          id="EditModelOne3"
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
                  <h4 className="info-text">Add Team</h4>
                  <div className="first-form form-row">
                    <div className="form-group col-md-6">
                      <div className="pr-ten">
                        <label className="label-heading" htmlFor="fullName">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          className="form-control input-focus"
                          id="fullName"
                          placeholder="Full Name"
                        />
                      </div>
                    </div>
                    <div className="form-group col-md-6">
                      <div className="pl-ten">
                        <label className="label-heading" htmlFor="accessTypes">
                          Access Types*
                        </label>
                        <input
                          type="text"
                          className="form-control input-focus"
                          id="accessTypes"
                          placeholder="Access Types"
                        />
                      </div>
                    </div>
                    <div className="form-group col-md-6">
                      <div className="pr-ten">
                        <label className="label-heading" htmlFor="email">
                          Email ID *
                        </label>
                        <input
                          type="text"
                          className="form-control input-focus"
                          id="email"
                          placeholder="Email ID"
                        />
                      </div>
                    </div>
                    <div className="form-group col-md-6">
                      <div className="pl-ten">
                        <label className="label-heading" htmlFor="mobileNumber">
                          Mobile Number*
                        </label>
                        <input
                          type="text"
                          className="form-control input-focus"
                          id="mobileNumber"
                          placeholder="Mobile Number"
                        />
                      </div>
                    </div>
                    <div className="form-group col-md-6">
                      <div className="pr-ten">
                        <label className="label-heading" htmlFor="resources">
                          Types of Resources*
                        </label>
                        <input
                          type="text"
                          className="form-control input-focus"
                          id="resources"
                          placeholder="Types of Resources"
                        />
                      </div>
                    </div>
                    <div className="form-group col-md-6">
                      <div className="pl-ten">
                        <label className="label-heading" htmlFor="addpeople">
                          Add People*
                        </label>
                        <input
                          type="text"
                          className="form-control input-focus"
                          id="addpeople"
                          placeholder="Add People"
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default AddNewComplienceModel
