import React from "react"
import LoginHeader from "../components/LoginHeader.js"
import LoginFooter from "../components/LoginFooter.js"
import "./Details.scss"
import rocket from "../images/rocket.png"
import { compliencesStaticData } from "../data/CompliencesData.js"

const Details = () => {
 console.log("compliencesStaticData", compliencesStaticData);

  return (
    <div>
      <LoginHeader />
      <div className="manage-business container">
        <div className="mb-2">
          <div className="row">
            <div className="col-lg-6">
              <div className="manage-box mb-2">
                <div className="existance-text">
                  <i className="fa-regular fa-building font-big-icon"></i>
                  <p>Manage compliance for your existing company</p>
                </div>
                <p>
                  This AI platform is built to serve business with 100%
                  efficiency to manage compliance and teams
                </p>
                <div className="teams-points">
                  <i className="fa-solid fa-ellipsis detail-icon"></i>
                  <p>compliance risk management</p>
                </div>
                <div className="teams-points">
                  <i className="fa-regular fa-clock detail-icon"></i>
                  <p>compliance monatering framework</p>
                </div>
                <div className="teams-points">
                  <i className="fa-solid fa-user-pen detail-icon"></i>
                  <p>outsourced and mamage task</p>
                </div>
                <div className="teams-points">
                  <i className="fa-regular fa-calendar detail-icon"></i>
                  <p>automated alerts and Triggers</p>
                </div>
                <div className="teams-points">
                  <i className="fa-solid fa-cloud detail-icon"></i>
                  <p>secured cloud documents</p>
                </div>
                <div className="teams-points">
                  <i className="fa-solid fa-chart-line detail-icon"></i>
                  <p>comprehensive Dashboards & Reports</p>
                </div>
                <div className="teams-points">
                  <i className="fa-solid fa-right-left detail-icon"></i>
                  <p>Third party API Integration</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="manage-box">
                <div className="existance-text">
                  <img src={rocket} alt="rocket" />
                  <p>Starting new business? Know your business approvals</p>
                </div>
                <p>
                  AI tool to identify business approvals and reduces the
                  complexity to start businesses in India
                </p>
                <div className="teams-points">
                  <i className="fa-solid fa-copy detail-icon"></i>
                  <p>Know your business approvels</p>
                </div>
                <div className="teams-points">
                  <i className="fa-solid fa-ellipsis detail-icon"></i>
                  <p>compliance risk management</p>
                </div>
                <div className="teams-points">
                  <i className="fa-regular fa-clock detail-icon"></i>
                  <p>compliance monatering framework</p>
                </div>
                <div className="teams-points">
                  <i className="fa-solid fa-user-pen detail-icon"></i>
                  <p>outsourced and manage tasks</p>
                </div>
                <div className="teams-points">
                  <i className="fa-regular fa-calendar detail-icon"></i>
                  <p>automated alerts and Triggers</p>
                </div>
                <div className="teams-points">
                  <i className="fa-solid fa-cloud detail-icon"></i>
                  <p>secured cloud Document</p>
                </div>
                <div className="teams-points">
                  <i className="fa-solid fa-chart-line detail-icon"></i>
                  <p>comprehensive Dashboards & Reports</p>
                </div>
                <div className="teams-points">
                  <i className="fa-solid fa-right-left detail-icon"></i>
                  <p>Third Party API Integration</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <LoginFooter />
    </div>
  )
}

export default Details
