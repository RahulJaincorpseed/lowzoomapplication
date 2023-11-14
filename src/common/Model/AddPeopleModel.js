import React, { useEffect, useState } from "react"
import "./Model.css"
import axios from "axios"
import { Link, useLocation, useNavigate } from "react-router-dom"

const AddPeopleModel = ({teamId}) => {
  const [AddPeopleData, setAddPeopleData] = useState({
    memberName: "",
    memberMail: "",
    memberMobile: "",
    typeOfResource: "",
    accessType: "jsid",
    teamResponse: null,
    userResponse: null,
    role: "user",
    enable: true
  })

  const location = useLocation();

  

  const addPathData = location.pathname.split()
  const data = addPathData[0].split("/")
  const companyPathId = Number(data[2]);
  const teamPathId =  Number(data[7]);
  
 const navigate = useNavigate()

  const setPeopleData = (e) => {
    setAddPeopleData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  console.log("Add People", AddPeopleData, "team", teamPathId)

  const addTeamMember = (e) => {
    e.preventDefault()

    const addMemberApi = async () => {
      // console.log("team id is before create", teamId);
      try {
        const memberdata = await axios.post(
          `/companyServices/company/team/members/addTeamMember?teamId=${teamPathId}`,
          {
            ...AddPeopleData,
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Content-Type": "application/json",
            },
          }
        )
        console.log("data added", memberdata)
       
        // navigate(`/company/${companyPathId}/addteam`)
        // window.location.reload();

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
          className="add-team-modal edit-people"
          data-toggle="modal"
          data-target="#AddPeopleModel"
          to={`${teamId}/addPeople`}
        >
          <i className="fa-solid fa-circle-plus mr-1"></i>
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
                          {resourcesData.map((company, index) => (
                            <option key={index} value={company}>
                              {company}
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
