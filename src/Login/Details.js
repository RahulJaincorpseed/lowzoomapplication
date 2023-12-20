import React from "react"
import LoginHeader from "../components/LoginHeader.js"
import LoginFooter from "../components/LoginFooter.js"
import "./Details.scss"
import rocket from "../images/rocket.png"
import { compliencesStaticData } from "../data/CompliencesData.js"
import DetailsComp from "../components/DetailsComp.js"
import { detailsData, secondDetailsData } from "../data/StaticData.js"

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

                {detailsData.map((data, index) => (
                  <div key={index}>
                    <DetailsComp
                      icon={<i className={data.icon}></i>}
                      data={data.name}
                    />
                  </div>
                ))}
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

                {secondDetailsData.map((data, index) => (
                  <div key={index}>
                    <DetailsComp
                      icon={<i className={data.icon}></i>}
                      data={data.name}
                    />
                  </div>
                ))}
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
