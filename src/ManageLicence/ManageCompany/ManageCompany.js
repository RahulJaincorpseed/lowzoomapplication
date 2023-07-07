import React from "react"
import "./ManageCompany.scss"
import BreadCrum from "../../components/BreadCrum"
import AddNewCompanyModel from "../../common/Model/AddNewCompanyModel"

const ManageCompany = () => {
  return (
    <>
      <BreadCrum />
      <div className="manage-compnies">
        <h2 className="heading-primary">Manage Companies</h2>

        <AddNewCompanyModel />

        {/* search company btn */}
        <div className="search-company mt-3 input-focus">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search company by name"
            aria-label="Search"
          />
        </div>

        {/* company-details  */}
        <div className="company-details">
          <div className="details-head">
            <p>GPAY Private LTD</p>
            <div className="edit-del-btn">
              <span className="delete">Delete</span>
              <span className="edit"></span>
              <button
                type="button"
                className="edit"
                data-toggle="modal"
                data-target="#editModel"
              >
                <i className="fa-regular fa-pen-to-square mr-1"></i>Edit
              </button>

              <div
                className="modal fade"
                id="editModel"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="exampleModalCenterTitle"
                aria-hidden="true"
              >
                <div
                  className="modal-dialog modal-dialog-centered"
                  role="document"
                >
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLongTitle">
                        Edit company model
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
          <div className="details-body">
            <div className="company-data mb-2 row">
              <div className="col-lg-6">
                <h3 className="item-heading">Private Limited Company</h3>
              </div>
              <div className="only-center col-lg-6">
                <h3 className="heading-info">Registration ID (CIN):</h3>
                <p className="item-heading-new">U74999UP2018PTC221873</p>
              </div>
            </div>

            <div className="company-data mb-2 row">
              <div className="only-center col-lg-6">
                <h3 className="heading-info">Formation State:</h3>
                <p className="item-heading-new">Haryana</p>
              </div>
              <div className="only-center col-lg-6">
                <h3 className="heading-info">Formation Date:</h3>
                <p className="item-heading-new">Oct. 01, 2021</p>
              </div>
            </div>

            <div className="company-data mb-2 row">
              <div className="only-center col-lg-6">
                <h3 className="heading-info">Operational Units:</h3>
                <p className="state-heading">5 Units</p>
              </div>
              <div className="only-center col-lg-6">
                <h3 className="heading-info">Number of states operating:</h3>
                <p className="state-heading">2 States</p>
              </div>
            </div>

            <div className="company-data mb-2 row">
              <div className="only-center col-lg-4">
                <h3 className="heading-info">GST Registration:</h3>
                <p className="state-heading">2 States</p>
              </div>
            </div>
          </div>
        </div>

        {/* add company  */}
        <div className="add-new-company second-new">
          <button
            type="button"
            className="add-button"
            data-toggle="modal"
            data-target="#manage2AddNewCompany"
          >
            <i className="fa-solid fa-plus"></i> Add New Company
          </button>

          <div
            className="modal fade"
            id="manage2AddNewCompany"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLongTitle">
                    Modal title
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
    </>
  )
}

export default ManageCompany
