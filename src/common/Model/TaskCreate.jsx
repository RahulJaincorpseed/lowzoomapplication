import React, { useRef, useState } from "react"
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

  const [createLoading, setCreateLoading] = useState(false);

  const { userId,  companyid, complienceId, businessUnitId, ...rest } = useParams()

  const taskRef = useRef();
  const [taskErr, setTaskErr] = useState(false);
  
  const setTaskDataFun = (e) => {
    setAddNewTask((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  console.log("Add new task data", addNewtask)

  const getAllUserUrl = `/companyServices/company/team/members/getAllTeamMembersWithIdAndTeamName?companyId=${companyid}`
  const allUserDep = []

  const { productData: allUser, loading: userLoading } = useCustomRoute(
    getAllUserUrl,
    allUserDep
  )

  const createNewTask = (e) => {
    e.preventDefault()

    if(createLoading === true){
      return;
    }

    if(taskRef.current.value === ""){
      setTaskErr(true)
      return
    } 

    const createTaskFun = async () => {
      setCreateLoading(true)
      try {
        const addNewTask = await postQuery(
          `/compliance/task/saveYourTask?complianceId=${complienceId}&company_Id=${companyid}&businessUnit_ID=${businessUnitId}1&task_Created_By=${userId}`,
          addNewtask
        )
        console.log("task added ", addNewTask)
        window.location.reload()
        setCreateLoading(false)
      } catch (err) {
        console.log(err)
        setCreateLoading(false)
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
                      ref={taskRef}
                      onChange={(e) => setTaskDataFun(e)}
                      err = {taskErr}
                      errData = "Task Name Can't be Blank"
                      
                    />
                    <ModelDropDownInput
                      label="Status*"
                      data={priority}
                      name="status"
                      onChange={(e) => setTaskDataFun(e)}
                    />

                    <ModelDropDownInput
                      label="Criticality*"
                      data={priority}
                      name="criticality"
                      left="true"
                      onChange={(e) => setTaskDataFun(e)}
                    />

                    {/* <ModelDropDownInput
                      label="Assignee*"
                      data={priority}
                      name="assigneeUserId"
                      onChange={(e) => setTaskDataFun(e)}
                    /> */}
                    <div className="form-group col-md-6">
                      <div className="pl-ten">
                        <label className="label-heading" htmlFor="accessTypes">
                          Assignee*
                        </label>
                        <select
                          className="form-control input-focus"
                          name="assignee"
                          id="assignee"
                          onChange={(e) => setTaskDataFun(e)}
                        >
                          <option>Please Select</option>
                          {allUser.map((pri, index) => (
                            <option key={index} value={pri.id}>
                              {pri?.memberName}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

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
                      name="completedDate"
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
                         {createLoading ? "Loading..." : "Submit"} 
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
