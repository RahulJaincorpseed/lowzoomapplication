import React from "react"
import "./SideBarTab.scss"

const SideBarTab = () => {
  return (
    <div className="task-company">
      <div className="company-data">
        <div className="cp-between">
          <p className="cp-data">Haldiram Foods Private Limited</p>
          <p className="cp-lable mt-0">Gurugram | Haryana</p>
        </div>
        <div className="cp-between">
          <p className="cp-data">
            <span className="sub-heading">Activity:</span>Food Manufacturing
            Unit
          </p>
          <p className="cp-lable mt-0">
            <span className="sub-heading">Priority:</span>High
          </p>
        </div>
        <div className="cp-between">
          <p className="cp-data">
            <span className="sub-heading">Task Type:</span>Contract Labour
            Compliance
          </p>
        </div>
      </div>

      <div className="approve-state">
        <div className="row">
          <div className="col-md-12 d-flex">
            <p className="input-heading mr-1">Approval State</p>
            <input type="Search" className="search-input" />
          </div>
          <div className="col-md-12 mt-2 d-flex">
            <label className="input-heading" htmlFor="zone">
              Applicable zone
            </label>
            <select className="search-input" name="zone" id="zone">
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
          </div>
        </div>
      </div>

      {/* approved dates */}
      <div className="approve-dates">
        <div>
          <p className="dates">Start: 01/05/2022</p>
        </div>
        <div>
          <p className="dates">Due: 01/05/2022</p>
        </div>
        <div>
          <p className="dates">Completed: 01/05/2022</p>
        </div>
      </div>
      <div className="repo-assign">
        <div className="reporter repo">
          <p>Reporter</p>
          <p>
            <div className="circle-icon">AK</div>Abhishek Singh
          </p>
        </div>
        <div className="assignee repo">
          <p>assignee</p>
          <p>
            <div className="circle-icon">AK</div>Mohit singhal
          </p>
        </div>
      </div>
    </div>
  )
}

export default SideBarTab
