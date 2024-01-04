import React, { useState } from "react"
import "./Model.css"
import { priority } from "../../Api/FakeApi"
import { postQuery } from "../../Api/PostQuery"
import { useLocation, useParams } from "react-router-dom"
import { customLocation } from "../../Hooks/LocationHook"
import ModelInput from "../Inputs/ModelInput"
import ModelDropDownInput from "../Inputs/ModelDropDownInput"
import LongButton from "../Button/LongButton"
import { cityData, stateData } from "../../TestData.js/CityData"
import ModelInputName from "../Inputs/ModelInputName"

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
    // priority: 0,
    workStatus: 0,
    enable: true,
  })

  const [complianceLoading, setComplianceLoading] = useState(false)

  // const [businessUnitId, setBusinessUnitId] = useState(0);

  console.log(addComplienceData)

  const location = useLocation()

  const { companyid, userId, businessUnitId } = useParams()

  const params = useParams()

  console.log("ne wparams", params)

  const complienceDateSetter = (e) => {
    setAddComplienceData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  console.log("add complience data", addComplienceData)

  const addNewComplienceFun = (e) => {
    e.preventDefault()
    if (complianceLoading === true) {
      return
    }

    setComplianceLoading(true)

    const complienceAdd = async () => {
      try {
        const addNewComplienceRes = await postQuery(
          `/compliance/company/saveCompliance?companyId=${companyid}&businessUnitId=${businessUnitId}&userId=${userId}`,
          addComplienceData
        )
        console.log("add new complience", addNewComplienceRes)
        console.log("add new complience", addNewComplienceRes.data)
        setComplianceLoading(false)
        window.location.reload()
      } catch (err) {
        console.log("complience err", err)
        setComplianceLoading(false)
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
                      <ModelInput
                        type="text"
                        label="Name*"
                        placeholder="Enter Name"
                        name="name"
                        onChange={(e) => complienceDateSetter(e)}
                      />

                      <ModelDropDownInput
                        label="Priority*"
                        data={priority}
                        name="priority"
                        onChange={(e) => complienceDateSetter(e)}
                      />

                      <ModelInputName
                        label="Select State*"
                        data={stateData}
                        left="true"
                        name="approvalState"
                        onChange={(e) => complienceDateSetter(e)}
                      />

                      <ModelInputName
                        label="Select City*"
                        data={cityData}
                        name="applicableZone"
                        onChange={(e) => complienceDateSetter(e)}
                      />

                      <ModelInput
                        type="date"
                        label="Select Start date*"
                        placeholder="date"
                        name="startDate"
                        onChange={(e) => complienceDateSetter(e)}
                      />

                      {/* <div className="form-group col-md-6">
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
                      </div> */}
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
                        <div>
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
                          <LongButton
                            data={complianceLoading ? "Loading" : "Submit"}
                            onClick={(e) => addNewComplienceFun(e)}
                          />
                          {/* <button
                            onClick={(e) => addNewComplienceFun(e)}
                            className="first-button form-prev-btn"
                          >
                            Submit
                          </button> */}
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
