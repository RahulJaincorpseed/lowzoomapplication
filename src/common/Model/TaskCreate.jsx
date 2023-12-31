import React, { useState } from "react"
import TaskTabs from "../../ManageLicence/ManageComplience/TabsData/TaskTabs"
import RightSideIcons from "../RightSideIcons"
import SideBarTab from "../../ManageLicence/ManageComplience/SideBarTab"
import "./TaskCreate.scss"
import { priority } from "../../Api/FakeApi"
import ModelInput from "../Inputs/ModelInput"
import ModelDropDownInput from "../Inputs/ModelDropDownInput"
import { useCustomRoute } from "../../Hooks/GetCustomRoute"
import { postQuery } from "../../Api/PostQuery"
import { useParams } from "react-router-dom"

const TaskCreate = () => {
  const [addNewtask, setAddNewTask] = useState({
    taskName: "",
    description: "",
    timelineValue: 0,
    timelineType: "",
    status: "",
    approvalState: "",
    applicableZone: "",
    criticality: "",
    startDate: "",
    dueDate: "",
    completedDate: "",
    reporterUserId: 0,
    assigneeUserId: 0,
    createdAt: "",
    updatedAt: "",
    enable: true,
  })

  const { companyId, complienceId, businessUnitId } = useParams()

  // console.log("task param", params);

  const setTaskDataFun = (e) => {
    setAddNewTask((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  console.log("Add new task data", addNewtask)

  const getAllUserUrl = `/companyServices/company/team/members/getAllTeamMembersWithIdAndTeamName?companyId=1`
  const allUserDep = []

  const { productData: allUser, loading: userLoading } = useCustomRoute(
    getAllUserUrl,
    allUserDep
  )

  const createNewTask = (e) => {
    e.preventDefault()
    const createTaskFun = async () => {
      try {
        const addNewTask = await postQuery(
          `/compliance/task/saveYourTask?complianceId=${complienceId}&company_Id=${companyId}&businessUnit_ID=${businessUnitId}`,
          addNewtask
        )
        console.log("task added ", addNewTask)
        window.location.reload()
      } catch (err) {
        console.log(err)
      }
    }
    createTaskFun()
  }
  console.log("user data import", allUser)

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
                      name="taskName"
                      onChange={(e) => setTaskDataFun(e)}
                    />
                    <ModelDropDownInput
                      label="Priority*"
                      data={priority}
                      name="priority"
                      onChange={(e) => setTaskDataFun(e)}
                    />

                    <ModelDropDownInput
                      label="Criticality*"
                      data={priority}
                      name="Criticality"
                      left="true"
                      onChange={(e) => setTaskDataFun(e)}
                    />

                    <ModelDropDownInput
                      label="Assignee*"
                      data={priority}
                      name="assigneeUserId"
                      onChange={(e) => setTaskDataFun(e)}
                    />

                    <ModelInput
                      type="date"
                      label="Select Start date*"
                      placeholder="Enter Title"
                      name="startDate"
                      onChange={(e) => setTaskDataFun(e)}
                    />

                    <ModelInput
                      type="date"
                      label="Select End date*"
                      placeholder="Enter Title"
                      name="dueDate"
                      left="true"
                      onChange={(e) => setTaskDataFun(e)}
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
                          onChange={(e) => setTaskDataFun(e)}
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
                          onClick={(e) => createNewTask(e)}
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
