import React from "react"
import TaskTabs from "../../ManageLicence/ManageComplience/TabsData/TaskTabs"
import RightSideIcons from "../RightSideIcons"
import SideBarTab from "../../ManageLicence/ManageComplience/SideBarTab"
import "./TaskCreate.scss"
import { priority } from "../../Api/FakeApi"
import ModelInput from "../Inputs/ModelInput"
import ModelDropDownInput from "../Inputs/ModelDropDownInput"
import { useCustomRoute } from "../../Hooks/GetCustomRoute"

const TaskCreate = () => {

  const getAllUserUrl = `/companyServices/company/team/members/getAllTeamMembersWithIdAndTeamName?companyId=1`
  const allUserDep = []

  const { productData: allUser, loading: userLoading } = useCustomRoute(
    getAllUserUrl,
    allUserDep
  )

  console.log("user data import", allUser);


  return (
    <div className="task-model-box">
      <button
        type="button"
        className="add-button"
        data-toggle="modal"
        data-target="#TaskCreateModel"
      >
        <i className="fa-solid fa-plus"></i> Task Create
      </button>
      <div
        className="modal fade"
        id="TaskCreateModel"
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
                <h4 className="info-text">Add New Task</h4>
                <form>
                  <div className="first-form form-row">
                    <ModelInput
                      type="text"
                      label="Title*"
                      placeholder="Enter Title"
                      name="title"
                      //  onChange={(e) => complienceDateSetter(e)}
                    />
                    <ModelDropDownInput
                      label="Priority*"
                      data={priority}
                      name="priority"
                      // onChange={(e) => complienceDateSetter(e)}
                    />

                    <ModelDropDownInput
                      label="Criticality*"
                      data={priority}
                      name="Criticality"
                      left="true"
                      // onChange={(e) => complienceDateSetter(e)}
                    />

                    <ModelDropDownInput
                      label="Assignee*"
                      data={priority}
                      name="assignee"
                      // onChange={(e) => complienceDateSetter(e)}
                    />

                    <ModelInput
                      type="date"
                      label="Select Start date*"
                      placeholder="Enter Title"
                      name="startDate"
                      //  onChange={(e) => complienceDateSetter(e)}
                    />

                    <ModelInput
                      type="date"
                      label="Select End date*"
                      placeholder="Enter Title"
                      name="endDate"
                      left="true"
                      //  onChange={(e) => complienceDateSetter(e)}
                    />

                 
                    <div className="form-group col-md-12">
                      <div>
                        <label className="label-heading" htmlFor="endDate">
                          Description*
                        </label>
                        <textarea
                          placeholder="Enter Description..."
                          className="form-control h-twenty input-focus"
                          name="description"
                          // onChange={(e) => complienceDateSetter(e)}
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
                          // onClick={(e) => addNewComplienceFun(e)}
                          className="first-button form-prev-btn"
                        >
                          Submit
                        </button>
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
  )
}

export default TaskCreate
