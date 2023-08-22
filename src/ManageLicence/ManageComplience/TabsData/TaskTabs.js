import React from "react"
import BasicDetails from "./BasicDetails"
import DocumentRequiredTab from "./DocumentRequiredTab"
import CompliencesTab from "./CompliencesTab"
import GuideTab from "./GuideTab"
import "./TaskTabs.scss"
import { Link } from "react-router-dom"

const TaskTabs = () => {
  return (
    <section className="container py-2 multiple-task-tab">
      <div className="row">
        <div className="col-md-12 pr-0">
          <ul id="tabs" className="nav nav-tabs tab-change-link">
            <li className="nav-item">
              <Link
                href=""
                data-target="#basicDetails"
                data-toggle="tab"
                className="nav-link small text-uppercase"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href=""
                data-target="#documentRequired"
                data-toggle="tab"
                className="nav-link small text-uppercase active"
              >
                Documnet Required
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href=""
                data-target="#compliencesTab"
                data-toggle="tab"
                className="nav-link small text-uppercase"
              >
                Compliances
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href=""
                data-target="#GuideTab"
                data-toggle="tab"
                className="nav-link small text-uppercase"
              >
                Guide
              </Link>
            </li>
          </ul>
          <div id="tabsContent" className="tab-content">
            <div id="basicDetails" className="tab-pane fade">
              <BasicDetails />
            </div>
            <div id="documentRequired" className="tab-pane fade active show">
              <DocumentRequiredTab />
            </div>
            <div id="compliencesTab" className="tab-pane fade">
              <CompliencesTab />
            </div>
            <div id="GuideTab" className="tab-pane fade">
              <GuideTab />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TaskTabs
