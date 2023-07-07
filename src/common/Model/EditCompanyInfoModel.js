import React, { useState } from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import "./Model.css"
import { GstData, cityData, companyData } from "../../TestData.js/CityData"

const EditCompanyInfoModel = () => {
  const [startDate, setStartDate] = useState(new Date())

  return (
    <>
      <div className="team-model">
        <button
          type="button"
          className="add-team-modal"
          data-toggle="modal"
          data-target="#EditCompanyInfoModel"
        >
          <i className="fa-solid fa-pen-to-square mr-1"></i>
          Edit
        </button>
        {/* MODAL */}
        <div
          className="modal fade"
          id="EditCompanyInfoModel"
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
                    Edit Company Information
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
                          Entity Type:
                        </label>
                        <select
                          className="form-control input-focus"
                          id="editEntity"
                        >
                          {companyData.map((company, index) => (
                            <option key={index} value={company}>
                              {company}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="form-group col-md-6">
                      <div className="pl-ten">
                        <label className="label-heading mb-0">
                          Formation State:
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
                        <label className="label-heading mb-0">
                          Registration ID (CIN):
                        </label>
                        <select
                          className="form-control input-focus"
                          id="EditRegistrationId"
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
                        <label className="label-heading mb-0">Date:</label>
                        <div>
                          <DatePicker
                            className="form-control input-focus w-100"
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-group col-md-6">
                      <div className="pr-ten">
                        <label
                          className="label-heading mb-0"
                          htmlFor="EditNumberOFGst"
                        >
                          Number of GST:
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
                          Email Id:
                        </label>
                        <input
                          type="email"
                          className="form-control input-focus"
                          id="EditEmail"
                          placeholder="Edit Email ID"
                        />
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

export default EditCompanyInfoModel
