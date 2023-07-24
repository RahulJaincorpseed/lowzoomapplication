import React from "react"
import "./TaskManagement.css"
import TaskTabs from "./TabsData/TaskTabs"
import SideBarTab from "./SideBarTab"
import RightSideIcons from "../../common/RightSideIcons"

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
                <div className="col-md-7 pr-0">
                  <TaskTabs />
                </div>
                <div className="col-md-5 pl-0">
                  <div className="sidebar-tab">
                    <RightSideIcons />
                  </div>
                  <SideBarTab />
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
