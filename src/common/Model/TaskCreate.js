import React from "react"
import TaskTabs from "../../ManageLicence/ManageComplience/TabsData/TaskTabs"
import RightSideIcons from "../RightSideIcons"
import SideBarTab from "../../ManageLicence/ManageComplience/SideBarTab"
import "./TaskCreate.scss"

const TaskCreate = () => {
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
          <div className="modal-content all-center overflow-task">
            <form>
              <div className="add-team-body body-task">
                {/* START */}
                <div className="row">
                  <div className="col-md-7">
                    <h2 className="heading-primary mb-2">Add New Task</h2>
                    <div>
                        <input type="text" className="form-control input-focus mb-2" placeholder="Enter Task" />
                        <textarea className="form-control input-focus mb-2 h-twenty" placeholder="Enter Task Descrioption"></textarea>
                        <input type="file" className="form-control input-focus mb-2" />
                    </div>
                    <div className="end-item">
                    <button className="first-button">Submit Task</button>
                    </div>
                  </div>
                  <div className="col-md-5">
                    <div className="sidebar-tab">
                      {/* <RightSideIcons /> */}
                    </div>
                    <SideBarTab />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TaskCreate
