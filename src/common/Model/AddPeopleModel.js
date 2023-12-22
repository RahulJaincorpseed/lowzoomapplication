import React, { useEffect, useState } from "react"
import "./Model.css"
import axios from "axios"
import { Link, useLocation, useNavigate, useParams } from "react-router-dom"
import { customLocation } from "../../Hooks/LocationHook"
import { useCustomRoute } from "../../Hooks/GetCustomRoute"

const AddPeopleModel = ({teamId}) => {
  const [AddPeopleData, setAddPeopleData] = useState({
    memberName: "",
    memberMail: "",
    memberMobile: "",
    typeOfResource: "",
    accessTypeName: "jsid",
    teamResponse: null,
    userResponse: null,
    role: "user",
    enable: true
  })

  const location = useLocation();

  const {userid, companyId} = useParams();


  console.log("userId", userid, "companyId", companyId);
  console.log(AddPeopleData);

  const accessUrl = `/companyServices/company/getAllAccessTypes`
  const accessDepandencies = [];
  const { productData:accessData } = useCustomRoute(accessUrl, accessDepandencies)

  console.log("acces type data");
  
  // console.log(dataId);

  const companyPathId = customLocation(2, location)
  const teamPathId = customLocation(7, location)

  
 const navigate = useNavigate()

  const setPeopleData = (e) => {
    setAddPeopleData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  console.log("Add People", AddPeopleData, "team", teamPathId)

  const addTeamMember = (e) => {
    e.preventDefault()

    const addMemberApi = async () => {
      try {
        const memberdata = await axios.post(
          `/companyServices/company/team/members/addTeamMember?companyId=${companyId}&createdById=${userid}`,
          {
            ...AddPeopleData,
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Content-Type": "application/json",
            },
          }
        )
        console.log("data added", memberdata)
        navigate(`/user/${userid}/userinfo/company/${companyId}/addteam`)
        window.location.reload();

      } catch (err) {
        console.log(err)
        console.log("add team member");
      }
    }
    addMemberApi();
  }

  const handleChange = () => {
    // navigate(`/company/${companyPathId}/addteam`)
    // window.location.reload()
  }

  const resourcesData = ["Internal", "External"];

  return (
    <>
      <div className="team-model">
        <Link
          type="button"
          className="add-team-modal edit-people color-blue"
          data-toggle="modal"
          data-target="#AddPeopleModel"
          to={``}
        >
          <i className="fa-solid fa-plus mr-1"></i>
          Add People
        </Link>
        {/* MODAL */}
        <div
          className="modal fade"
          id="AddPeopleModel"
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
                  <h4 className="info-text model-heading">Add People</h4>
                  <div className="cross-icon" onClick={handleChange}>
                    <i
                      data-dismiss="modal"
                      className="fa-sharp fa-solid fa-circle-xmark"
                    ></i>
                  </div>
                  <div className="first-form form-row">
                    <div className="form-group col-md-6">
                      <div className="pr-ten">
                        <label
                          className="label-heading mb-0"
                          htmlFor="fullName"
                        >
                          Full Name *
                        </label>
                        <input
                          type="text"
                          className="form-control input-focus"
                          id="fullName"
                          placeholder="Full Name"
                          name="memberName"
                          onChange={(e) => setPeopleData(e)}
                        />
                      </div>
                    </div>

                    <div className="form-group col-md-6">
                      <div className="pl-ten">
                        <label className="label-heading mb-0" htmlFor="email">
                          Email ID *
                        </label>
                        <input
                          type="text"
                          className="form-control input-focus"
                          id="email"
                          placeholder="Email ID"
                          name="memberMail"
                          onChange={(e) => setPeopleData(e)}
                        />
                      </div>
                    </div>
                    <div className="form-group col-md-6">
                      <div className="pr-ten">
                        <label
                          className="label-heading mb-0"
                          htmlFor="mobileNumber"
                        >
                          Mobile Number*
                        </label>
                        <input
                          type="text"
                          className="form-control input-focus"
                          id="mobileNumber"
                          placeholder="Mobile Number"
                          name="memberMobile"
                          onChange={(e) => setPeopleData(e)}
                        />
                      </div>
                    </div>
                    <div className="form-group col-md-6">
                      <div className="pl-ten">
                        <label
                          className="label-heading mb-0"
                          htmlFor="resources"
                        >
                          Types of Resources*
                        </label>
                        <select
                          className="form-control input-focus"
                          id="sel1ew"
                          name="typeOfResource"
                          onChange={(e) => setPeopleData(e)}
                        >
                          <option>Select Resource Type</option>
                          {resourcesData.map((company, index) => (
                            <option key={index} value={company}>
                              {company}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="form-group col-md-6">
                      <div className="pr-ten">
                        <label
                          className="label-heading mb-0"
                          htmlFor="resources"
                        >
                          Access Type*
                        </label>
                        <select
                          className="form-control input-focus"
                          id="sel1ew"
                          name="accessTypeName"
                          onChange={(e) => setPeopleData(e)}
                        >
                          <option>Select Access Type</option>
                          {accessData.map((access, index) => (
                            <option key={index} value={access.accessTypeName}>
                              {access?.accessTypeName}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="all-between-items">
                      <div className="all-center">
                        <i className="fa-solid fa-gear"></i>
                        <h2>Advanced Setting</h2>
                      </div>
                      <div>
                        <button
                          onClick={(e) => addTeamMember(e)}
                          className="first-button form-prev-btn"
                        >
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

export default AddPeopleModel
