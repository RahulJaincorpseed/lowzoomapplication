import React from "react"
import BreadCrum from "../../components/BreadCrum"
import "./SetComplience.scss"

const SetCompliance = () => {
  return (
    <div>
      <BreadCrum />
      <div className="set-compliance">
        <h2 className="heading-primary">Approve Applicable Compliances</h2>
        <div className="mt-5">
          <div className="row">
            <div className="col-md-4">
              <div>
                <select className="form-control input-focus" id="sel7">
                  <option>Choose company</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </select>
              </div>
            </div>
            <div className="col-md-4">
              <div>
                <select className="form-control input-focus" id="sel6">
                  <option>Choose by State</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </select>
              </div>
            </div>
            <div className="col-md-4">
              <div>
                <select className="form-control input-focus" id="sel5">
                  <option>Choose by operational unit</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </select>
              </div>
            </div>

            {/* second line  */}
            <div className="col-md-5 mt-4">
              <div className="p-relative">
                <input
                  className="form-control input-focus"
                  type="text"
                  placeholder="Search by license name"
                />
                <i className="fa-solid fa-magnifying-glass search-icon-btn"></i>
              </div>
            </div>
            <div className="col-md-5 mt-4">
              <div className="p-relative">
                <input
                  className="form-control input-focus"
                  type="text"
                  placeholder="Sort by department / Autho.. "
                />
                <i className="fa-solid fa-magnifying-glass search-icon-btn"></i>
              </div>
            </div>
            <div className="col-md-2 mt-4">
              <div className="all-task">
                <div className="form-check mr-1">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label
                    className="form-check-label check-text"
                    htmlFor="exampleCheck1"
                  >
                    All Tasks
                  </label>
                </div>
                <i className="fa-solid fa-sliders"></i>
              </div>
            </div>

            <div className="add-new-complience col-md-12 mt-4">
              <div className="add-new-company">
                <button
                  type="button"
                  className="add-button"
                  data-toggle="modal"
                  data-target="#manageAddNewCompany"
                >
                  <i className="fa-solid fa-plus"></i> Add New Complience
                </button>

                <div
                  className="modal fade"
                  id="manageAddNewCompany"
                  tabIndex="-1"
                  role="dialog"
                  aria-labelledby="Addcomplience"
                  aria-hidden="true"
                >
                  <div
                    className="modal-dialog modal-dialog-centered"
                    role="document"
                  >
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="Addcomplience">
                          Add company first model
                        </h5>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">...</div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-dismiss="modal"
                        >
                          Close
                        </button>
                        <button type="button" className="btn btn-primary">
                          Save changes
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
    </div>
  )
}

export default SetCompliance
