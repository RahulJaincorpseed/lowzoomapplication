import React from "react"
import "./Model.css"
import { GstData, cityData } from "../../TestData.js/CityData"

const EditBusinessUnitModel = () => {
  return (
    <>
      <div className="team-model">
        <button
          type="button"
          className="add-team-modal"
          data-toggle="modal"
          data-target="#EditBusinessUnitModel"
        >
          <i className="fa-solid fa-pen-to-square mr-1"></i>
          Edit
        </button>
        {/* MODAL */}
        <div
          className="modal fade"
          id="EditBusinessUnitModel"
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
                  <h4 className="info-text model-heading">
                    Edit Business Unit
                  </h4>
                  <div className="cross-icon">
                    <i
                      data-dismiss="modal"
                      className="fa-sharp fa-solid fa-circle-xmark"
                    ></i>
                  </div>
                  <div className="first-form form-row">
                    <div className="form-group col-md-6">
                      <div className="pr-ten">
                        <label className="label-heading mb-0">
                          GST number:
                        </label>
                        <select
                          className="form-control input-focus"
                          id="editEntity"
                        >
                          {GstData.map((gst, index) => (
                            <option key={index} value={gst}>
                              {gst}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="form-group col-md-6">
                      <div className="pl-ten">
                        <label className="label-heading mb-0">City:</label>
                        <select
                          className="form-control input-focus"
                          id="EditFormationState"
                        >
                          {cityData.map((city, index) => (
                            <option key={index} value={city}>
                              {city}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="form-group col-md-6">
                      <div className="pr-ten">
                        <label className="label-heading mb-0">
                          Permanent employees:
                        </label>
                        <input
                          type="text"
                          className="form-control input-focus"
                          id="employee"
                          placeholder="Permanent employees"
                        />
                      </div>
                    </div>
                    <div className="form-group col-md-6">
                      <div className="pl-ten">
                        <label className="label-heading mb-0">
                          business activity:
                        </label>
                        <input
                          type="text"
                          className="form-control input-focus"
                          id="employee"
                          placeholder="Permanent employees"
                        />
                      </div>
                    </div>
                    <div className="form-group col-md-6">
                      <div className="pr-ten">
                        <label
                          className="label-heading mb-0"
                          htmlFor="EditNumberOFGst"
                        >
                          Located At:
                        </label>
                        <input
                          type="text"
                          className="form-control input-focus"
                          id="EditNumberOFGst"
                          placeholder="Number of GST"
                        />
                      </div>
                    </div>
                    <div className="form-group col-md-6">
                      <div className="pl-ten">
                        <label
                          className="label-heading mb-0"
                          htmlFor="EditEmail"
                        >
                          State:
                        </label>
                        <select
                          className="form-control input-focus"
                          id="EditFormationState"
                        >
                          {cityData.map((city, index) => (
                            <option key={index} value={city}>
                              {city}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="form-group col-md-6">
                      <div className="pr-ten">
                        <label className="label-heading mb-0" htmlFor="address">
                          registered address:
                        </label>
                        <input
                          type="text"
                          className="form-control input-focus"
                          id="address"
                          placeholder="Address"
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
    </>
  )
}

export default EditBusinessUnitModel
