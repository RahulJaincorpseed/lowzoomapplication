import React, { useEffect } from "react"
import "./ManageCompany.scss"
import BreadCrum from "../../components/BreadCrum"
import { Link, useParams } from "react-router-dom"
import BoxScalaton from "../../common/Scalaton/BoxScalaton"
import BlankPage from "../../components/BlankPage"
import { useDispatch, useSelector } from "react-redux"
import { getListOfCompany } from "../../toolkit/Slices/CompanySlice"

const ManageCompany = () => {
  const { userId } = useParams()
  const dispatch = useDispatch()

  const getAllCompanyData = useSelector((state) => state.company.listOfCompany)
  const comLoading = useSelector((state) => state.company.companyLoading)

  useEffect(() => {
    dispatch(getListOfCompany(userId))
  }, [])

  return (
    <>
      <BreadCrum />
      <div className="manage-compnies">
        <h2 className="heading-primary">Manage Companies</h2>
        {/* <AddNewCompanyModel />   */}
        <div className="add-border">
          <Link className="add-com-btn" to={`/user/${userId}/userinfo`}>
            <i className="fa-solid mr-2 color-blue fa-plus"></i>Add new Company
          </Link>
        </div>
        {/* search company btn */}
        <div className="search-company mt-3 input-focus">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search company by name"
            aria-label="Search"
          />
        </div>

        {/* <BoxScalaton /> */}

        {/* company-details  */}

        {comLoading ? (
          <div>
            <BoxScalaton />
          </div>
        ) : getAllCompanyData.length === 0 ? (
          <BlankPage data={"Please Add New Company"} />
        ) : (
          getAllCompanyData?.map((company, index) => (
            <div className="company-details" key={index}>
              <div className="details-head">
                <p>
                  {company?.companyName
                    ? company?.companyName
                    : "Company Name NA"}
                </p>
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
                          <h5
                            className="modal-title"
                            id="exampleModalLongTitle"
                          >
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
              {/* hbkdbskbkds */}
              <div className="details-body">
                <div className="company-data mb-2 row">
                  <div className="col-lg-6">
                    <h3 className="item-heading">
                      {company?.companyType
                        ? company?.companyType
                        : "company Type NA"}
                    </h3>
                  </div>
                  <div className="only-center col-lg-6">
                    <h3 className="heading-info">Registration ID (CIN):</h3>
                    <p className="item-heading-new">
                      {company?.companyRegistrationNumber
                        ? company?.companyRegistrationNumber
                        : "NA"}
                    </p>
                  </div>
                </div>

                <div className="company-data mb-2 row">
                  <div className="only-center col-lg-6">
                    <h3 className="heading-info">Formation State:</h3>
                    <p className="item-heading-new">
                      {company?.companyState ? company?.companyState : "NA"}
                    </p>
                  </div>
                  <div className="only-center col-lg-6">
                    <h3 className="heading-info">Formation Date:</h3>
                    <p className="item-heading-new">
                      {new Date(
                        company?.createdAt?.toString()
                      ).toLocaleDateString()}
                    </p>
                  </div>
                </div>

                <div className="company-data mb-2 row">
                  <div className="only-center col-lg-6">
                    <h3 className="heading-info">Operational Units:</h3>
                    <p className="state-heading">
                      {/* {company?.businessUnits.length} Units */}
                      <Link to={`${company?.companyId}/businessUnit`}>
                        {" "}
                        {company?.contractEmployee}
                      </Link>
                    </p>
                  </div>
                  <div className="only-center col-lg-6">
                    <h3 className="heading-info">
                      Number of states operating:
                    </h3>
                    <p className="state-heading">2 States</p>
                  </div>
                </div>
                <div className="company-data mb-2 row">
                  <div className="only-center col-lg-6">
                    <h3 className="heading-info">Total Members:</h3>
                    <p className="state-heading">
                      {/* {company?.businessUnits.length} Units */}
                      <Link to={`${company?.companyId}/allpeople`}>
                        {" "}
                        {company?.contractEmployee}
                      </Link>
                    </p>
                  </div>
                </div>
                {/* <div className="company-data mb-2 row">
                <div className="only-center col-lg-4">
                  <h3 className="heading-info">GST Registration:</h3>
                  <p className="state-heading">2 States</p>
                </div>
              </div> */}
              </div>
            </div>
          ))
        )}

        {/* add company  */}
        <div className="add-new-company second-new">
          <Link to={`/user/${userId}/userinfo`} className="add-button">
            <i className="fa-solid fa-plus"></i>Add New Company
          </Link>
        </div>
      </div>
    </>
  )
}

export default ManageCompany
