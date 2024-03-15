import React from "react";
import BreadCrum from "../../components/BreadCrum";
import AddBusinessUnitModel from "../../common/Model/AddBusinessUnitModel";
import { useCustomRoute } from "../../Hooks/GetCustomRoute";
import { Link, useParams } from "react-router-dom";
import BoxScalaton from "../../common/Scalaton/BoxScalaton";
import BlankPage from "../../components/BlankPage";

const BusinessUnitData = () => {

    const {companyid} = useParams();

  
    const businessUnitUrl = `/companyServices/business-unit/getAllBusinessUnits?companyId=${companyid}`
    const businessUnitDep = [];
    const {productData: allBusinessUnit, loading: businessLoading} = useCustomRoute(businessUnitUrl, businessUnitDep)


  return (
    <>
     <BreadCrum />
     <div className="manage-compnies">
        <h2 className="heading-primary">Manage Business Unit</h2>
            <AddBusinessUnitModel />
            {businessLoading ? (
          <div>
            <BoxScalaton />
          </div>
        ) : allBusinessUnit.length === 0 ? (
          <BlankPage data={"Please Add New business Unit"} />
        ) : (
            allBusinessUnit?.map((bUnit, index) => (
            <div className="company-details" key={index}>
              <div className="details-head">
                <p>
                  {bUnit?.companyName
                    ? bUnit?.companyName
                    : "Business Unit Name NA"}
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
                            Edit Business Unit
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
                    <h3 className="item-heading">
                      {bUnit?.companyType
                        ? bUnit?.companyType
                        : "business Unit Type NA"}
                    </h3>
                  </div>
                  <div className="only-center col-lg-6">
                    <h3 className="heading-info">Registration ID (CIN):</h3>
                    <p className="item-heading-new">
                      {bUnit?.companyRegistrationNumber
                        ? bUnit?.companyRegistrationNumber
                        : "NA"}
                    </p>
                  </div>
                </div>

                <div className="company-data mb-2 row">
                  <div className="only-center col-lg-6">
                    <h3 className="heading-info">Formation State:</h3>
                    <p className="item-heading-new">
                      {bUnit?.states ? bUnit?.states : "NA"}
                    </p>
                  </div>
                  <div className="only-center col-lg-6">
                    <h3 className="heading-info">Formation Date:</h3>
                    <p className="item-heading-new">
                      {new Date(
                        bUnit.createdAt?.toString()
                      ).toLocaleDateString()}
                    </p>
                  </div>
                </div>

                <div className="company-data mb-2 row">
                  <div className="only-center col-lg-6">
                    <h3 className="heading-info">Operational Units:</h3>
                    <p className="state-heading">
                     <Link to={`${bUnit?.companyId}/businessUnit`}> {bUnit?.contractEmployee}</Link>
                    </p>
                  </div>
                  <div className="only-center col-lg-6">
                    <h3 className="heading-info">
                      Number of states operating:
                    </h3>
                    <p className="state-heading">2 States</p>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}

        </div>
    </>
  )
};

export default BusinessUnitData;
