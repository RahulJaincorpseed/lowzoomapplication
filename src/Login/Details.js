import React from "react"
import LoginHeader from "../components/LoginHeader.js"
import LoginFooter from "../components/LoginFooter.js"
import "./Details.scss"
import rocket from "../images/rocket.png"
import { compliencesStaticData } from "../data/CompliencesData.js"
import DetailsComp from "../components/DetailsComp.js"

const Details = () => {
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
                <DetailsComp
                  icon={<i className="fa-solid fa-ellipsis detail-icon"></i>}
                  data="compliance risk management"
                />
                <DetailsComp
                  icon={<i className="fa-regular fa-clock detail-icon"></i>}
                  data="compliance monatering framework"
                />
                <DetailsComp
                  icon={<i className="fa-solid fa-user-pen detail-icon"></i>}
                  data="outsourced and mamage task"
                />
                <DetailsComp
                  icon={<i className="fa-regular fa-calendar detail-icon"></i>}
                  data="automated alerts and Triggers"
                />
                <DetailsComp
                  icon={<i className="fa-solid fa-cloud detail-icon"></i>}
                  data="secured cloud documents"
                />
                <DetailsComp
                  icon={<i className="fa-solid fa-chart-line detail-icon"></i>}
                  data="comprehensive Dashboards & Reports"
                />
                <DetailsComp
                  icon={<i className="fa-solid fa-right-left detail-icon"></i>}
                  data="Third party API Integration"
                />
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
                <DetailsComp
                  icon={<i className="fa-solid fa-copy detail-icon"></i>}
                  data="Know your business approvels"
                />
                <DetailsComp
                  icon={<i className="fa-solid fa-ellipsis detail-icon"></i>}
                  data="compliance risk management"
                />
                <DetailsComp
                  icon={<i className="fa-regular fa-clock detail-icon"></i>}
                  data="compliance monatering framework"
                />
                <DetailsComp
                  icon={<i className="fa-solid fa-user-pen detail-icon"></i>}
                  data="outsourced and manage tasks"
                />
                <DetailsComp
                  icon={<i className="fa-regular fa-calendar detail-icon"></i>}
                  data="automated alerts and Triggers"
                />

                <DetailsComp
                  icon={<i className="fa-solid fa-cloud detail-icon"></i>}
                  data="secured cloud Document"
                />
                <DetailsComp
                  icon={<i className="fa-solid fa-chart-line detail-icon"></i>}
                  data="comprehensive Dashboards & Reports"
                />
                <DetailsComp
                  icon={<i className="fa-solid fa-right-left detail-icon"></i>}
                  data="Third Party API Integration"
                />
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
