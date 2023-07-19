import React from "react"
import "./TaskManagement.css"
import TaskTabs from "./TabsData/TaskTabs"

const TaskManagement = () => {
  return (
    <div className="task-model-box">
      <div
        className="modal fade"
        id="TaskManagementModel"
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
            <div className="add-team-body body-task">
              {/* START */}
              <div className="row">
                <div className="col-md-8">
                  <TaskTabs />
                </div>
                <div className="col-md-4">
                  <div>
                    <h1>Task Management</h1>
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

export default TaskManagement
