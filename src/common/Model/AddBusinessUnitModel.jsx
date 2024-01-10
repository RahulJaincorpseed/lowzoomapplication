import React, { useEffect, useState } from "react"
import { postQuery } from "../../Api/PostQuery"
import { customLocation } from "../../Hooks/LocationHook"
import { useLocation, useParams } from "react-router-dom"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { getQuery } from "../../Api/getQuery"
toast.configure()

const AddBusinessUnitModel = () => {
  const [addBusinessUnit, setAddBusinessUnit] = useState({
    businessActivity: "",
    city: "",
    locatedAt: "",
    permanentEmployee: "",
    contractEmployee: "",
    address: "",
    dateRegistration: "",
    gstNumber: "",
    states: "",
    enable: true,
  })

  const [buttonLoading, setButtonLoading] = useState(false)

  const { companyid } = useParams()

  const location = useLocation()

  const BusinessUnitDataCollect = (e) => {
    setAddBusinessUnit((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const addNewBusinessUnit = (e) => {
    e.preventDefault()
    setButtonLoading(true)
    const addNewUnit = async () => {
      try {
        const unitData = await postQuery(
          `/companyServices/business-unit/saveBusinessUnit?companyId=${companyid}`,
          addBusinessUnit
        )
        console.log("new business unit", unitData)
        toast.success("Business Unit Add Sucessfully")
        setButtonLoading(false)
        window.location.reload()
      } catch (err) {
        console.log("err", err)
        setButtonLoading(false)
      }
    }
    addNewUnit()
  }

  console.log("business unit", addBusinessUnit)

  return (
    <nav>
      <div className="add-new-company">
        <button
          type="button"
          className="add-team-modal add-button"
          data-toggle="modal"
          data-target="#AddNewCompany"
        >
          <i className="fa-solid fa-plus"></i>
          Add Business Unit
        </button>
        {/* MODAL */}
        <div
          className="modal fade"
          id="AddNewCompany"
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
                  <h4 className="info-text">Add New Business Unit</h4>
                  <div className="first-form form-row">
                    <div className="form-group col-md-6">
                      <div className="pr-ten">
                        <label
                          className="label-heading"
                          htmlFor="businessActivity"
                        >
                          Business Activity
                        </label>
                        <input
                          type="text"
                          className="form-control input-focus"
                          id="businessActivity"
                          name="businessActivity"
                          onChange={(e) => BusinessUnitDataCollect(e)}
                          placeholder="Business Activity"
                        />
                      </div>
                    </div>
                    <div className="form-group col-md-6">
                      <div className="pl-ten">
                        <label className="label-heading" htmlFor="gstNumber">
                          Gst Number*
                        </label>
                        <input
                          type="text"
                          className="form-control input-focus"
                          id="gstNumber"
                          name="gstNumber"
                          onChange={(e) => BusinessUnitDataCollect(e)}
                          placeholder="Gst Number"
                        />
                      </div>
                    </div>
                    <div className="form-group col-md-6">
                      <div className="pr-ten">
                        <label
                          className="label-heading"
                          htmlFor="permanentEmployee"
                        >
                          Permanent Employee*
                        </label>
                        <input
                          type="text"
                          className="form-control input-focus"
                          id="permanentEmployee"
                          name="permanentEmployee"
                          onChange={(e) => BusinessUnitDataCollect(e)}
                          placeholder="Permanent Employee"
                        />
                      </div>
                    </div>
                    <div className="form-group col-md-6">
                      <div className="pl-ten">
                        <label
                          className="label-heading"
                          htmlFor="contractEmployee"
                        >
                          Contract Employee
                        </label>
                        <input
                          type="text"
                          className="form-control input-focus"
                          id="contractEmployee"
                          name="contractEmployee"
                          onChange={(e) => BusinessUnitDataCollect(e)}
                          placeholder="Contract Employee"
                        />
                      </div>
                    </div>
                    <div className="form-group col-md-6">
                      <div className="pr-ten">
                        <label className="label-heading" htmlFor="states">
                          States*
                        </label>
                        <input
                          type="text"
                          className="form-control input-focus"
                          id="states"
                          name="states"
                          onChange={(e) => BusinessUnitDataCollect(e)}
                          placeholder="State"
                        />
                      </div>
                    </div>
                    <div className="form-group col-md-6">
                      <div className="pl-ten">
                        <label className="label-heading" htmlFor="city">
                          City
                        </label>
                        <input
                          type="text"
                          className="form-control input-focus"
                          id="city"
                          name="city"
                          onChange={(e) => BusinessUnitDataCollect(e)}
                          placeholder="City"
                        />
                      </div>
                    </div>

                    <div className="form-group col-md-6">
                      <div className="pr-ten">
                        <label
                          className="label-heading"
                          htmlFor="dateRegistration"
                        >
                          Date of Registration*
                        </label>
                        <input
                          type="date"
                          className="form-control input-focus"
                          id="dateRegistration"
                          name="dateRegistration"
                          onChange={(e) => BusinessUnitDataCollect(e)}
                          placeholder="Date of Registration"
                        />
                      </div>
                    </div>
                    <div className="form-group col-md-6">
                      <div className="pl-ten">
                        <label className="label-heading" htmlFor="Address">
                          Address
                        </label>
                        <textarea
                          name="address"
                          onChange={(e) => BusinessUnitDataCollect(e)}
                          className="form-control input-focus"
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
                          onClick={(e) => addNewBusinessUnit(e)}
                          className="first-button form-prev-btn"
                        >
                          {buttonLoading ? "Loading..." : "Submit"}
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

export default AddBusinessUnitModel
