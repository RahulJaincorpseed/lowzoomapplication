import React, { useState } from "react"
import "./Model.css"
import { priority } from "../../Api/FakeApi"
import { postQuery } from "../../Api/PostQuery"

const AddNewComplienceModel = () => {
  const [addComplienceData, setAddComplienceData] = useState({
    name: "",
    description: "",
    approvalState: "",
    applicableZone: "",
    startDate: "",
    dueDate: "",
    completedDate: "",
    duration: "",
    priority: 0,
    enable: true,
    workStatus: 0,
  })

  const complienceDateSetter = (e) => {
    setAddComplienceData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  console.log("add complience data", addComplienceData)

  const addNewComplienceFun = (e) => {
    e.preventDefault()

    const complienceAdd = async () => {
      try {
        const addNewComplienceRes = await postQuery(
          `/compliance/company/saveCompliance?companyId=${2}`,addComplienceData
        )
        console.log("add new complience", addNewComplienceRes)
      } catch (err) {
        console.log("complience err", err)
      }
    }
    complienceAdd()
  }

  return (
    <nav>
      <div className="team-model">
        <button
          type="button"
          className="add-button"
          data-toggle="modal"
          data-target="#EditModelOne3"
        >
          {/* <i className="fa-solid fa-pen-to-square mr-1"></i>
          Edit */}
          <i className="fa-solid fa-plus"></i> Add New Complience
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
                  <h4 className="info-text">Add New Complience</h4>
                  <form>
                    <div className="first-form form-row">
                      <div className="form-group col-md-6">
                        <div className="pr-ten">
                          <label className="label-heading" htmlFor="fullName">
                            Name *
                          </label>
                          <input
                            type="text"
                            className="form-control input-focus"
                            id="fullName"
                            name="name"
                            onChange={(e) => complienceDateSetter(e)}
                            placeholder="Enter Name"
                          />
                        </div>
                      </div>
                      <div className="form-group col-md-6">
                        <div className="pl-ten">
                          <label
                            className="label-heading"
                            htmlFor="accessTypes"
                          >
                            Priority*
                          </label>
                          <select
                            className="form-control input-focus"
                            name="priority"
                            id="priority"
                            onChange={(e) => complienceDateSetter(e)}
                          >
                            {priority.map((pri, index) => (
                              <option key={index} value={pri}>
                                {pri}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className="form-group col-md-6">
                        <div className="pr-ten">
                          <label className="label-heading" htmlFor="state">
                            Select State*
                          </label>
                          <input
                            type="text"
                            className="form-control input-focus"
                            id="state"
                            placeholder="Enter State"
                            name="approvalState"
                            onChange={(e) => complienceDateSetter(e)}
                          />
                        </div>
                      </div>
                      <div className="form-group col-md-6">
                        <div className="pl-ten">
                          <label className="label-heading" htmlFor="City">
                            Select City*
                          </label>
                          <input
                            type="text"
                            className="form-control input-focus"
                            id="City"
                            placeholder="Enter City"
                            name="applicableZone"
                            onChange={(e) => complienceDateSetter(e)}
                          />
                        </div>
                      </div>
                      <div className="form-group col-md-6">
                        <div className="pr-ten">
                          <label className="label-heading" htmlFor="startDate">
                            Select Start date*
                          </label>
                          <input
                            type="date"
                            className="form-control input-focus"
                            id="startDate"
                            placeholder="Types of Resources"
                            name="startDate"
                            onChange={(e) => complienceDateSetter(e)}
                          />
                        </div>
                      </div>
                      <div className="form-group col-md-6">
                        <div className="pl-ten">
                          <label className="label-heading" htmlFor="endDate">
                            Select End date*
                          </label>
                          <input
                            type="date"
                            className="form-control input-focus"
                            id="endDate"
                            placeholder="Add People"
                            name="completedDate"
                            onChange={(e) => complienceDateSetter(e)}
                          />
                        </div>
                      </div>
                      <div className="form-group col-md-12">
                        <div className="pl-ten">
                          <label className="label-heading" htmlFor="endDate">
                            Description*
                          </label>
                          <textarea
                            placeholder="Enter Description..."
                            className="form-control h-twenty input-focus"
                            name="description"
                            onChange={(e) => complienceDateSetter(e)}
                          ></textarea>
                        </div>
                      </div>
                      <div className="all-between-items">
                        <div className="all-center">
                          <i className="fa-solid fa-gear"></i>
                          <h2>Advanced Setting</h2>
                        </div>
                        <div>
                          <button
                            onClick={(e) => addNewComplienceFun(e)}
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

export default AddNewComplienceModel
