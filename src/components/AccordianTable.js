import React, { useState } from "react"
import "./AccordianTable.scss"
import AddNewTaskModel from "../common/Model/AddNewTaskModel"

const AccordianTable = () => {
  const [collpaseState, setCollapseState] = useState(false)
  return (
    <div>
      <div id="accordion" className="tab-data table-responsive">
        <div className="card">
          <div className="data-center" id="headingOne">
            <h5 className="mb-0">
              <button
                className="btn btn-link"
                data-toggle="collapse"
                data-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <i className="fa-solid fa-angle-down"></i>
              </button>
            </h5>
            <p className="font-boldd mt-0">ROC</p>
            <p className="font-boldd mt-0 min-des-box">Company Annual Compliences</p>
            <p className="font-boldd mt-0 min-des-box-new">Apply Now</p>
            <p  className="font-boldd mt-0 min-des-box-new">already Done</p>
            <p  className="font-boldd mt-0 min-des-box-new">Note Applicable</p>
          </div>

          <div
            id="collapseOne"
            className="collapse show"
            aria-labelledby="headingOne"
            data-parent="#accordion"
          >
            <div className="card-box">
              <div className="data-box">
                <div className="milestone">
                <p className="font-boldd">id</p>
                  <p className="font-boldd min-des">Task</p>
                  <p className="min-des font-boldd">Description</p>
                  <p className="font-boldd min-des-two">Compliance Frequency</p>
                  <p className="font-boldd min-des-two">Renewal Date (if applicable)</p>
                  <p className="font-boldd min-des-two">Criticality</p>
                  <p className="font-boldd min-des-two">ROC</p>
                  <p className="mt-0">LifeTime</p>
                  <p className="mt-0">LifeTime</p>
                  <p className="mt-0">LifeTime</p>
                  <p className="mt-0">ROC</p>
                  <p className="mt-0">LifeTime</p>
                  <p className="mt-0">LifeTime</p>
                  <p className="mt-0">LifeTime</p>
                </div>
                <div className="milestone">
                <p className="mt-0">1</p>
                  <p className="mt-0 min-des">
                    Register and other records to be maintained by the
                    contractor
                  </p>
                  <p className="min-des mt-0">
                    It shall be ensured that the contractors are having a valid
                    license and maintain the statutory register and other
                    records as prescribed under the Act.{" "}
                  </p>
                  <p className="min-des-two">LifeTime</p>
                  <p className="min-des-two">LifeTime</p>
                  <p className="min-des-two">Medium</p>
                  <p className="mt-0">ROC</p>
                  <p className="mt-0">LifeTime</p>
                  <p className="mt-0">LifeTime</p>
                  <p className="mt-0">LifeTime</p>
                  <p className="mt-0">ROC</p>
                  <p className="mt-0">LifeTime</p>
                  <p className="mt-0">LifeTime</p>
                  <p className="mt-0">LifeTime</p>
                </div>
                <div className="milestone">
                <p className="mt-0">2</p>
                  <p className="mt-0 min-des">
                    Register and other records to be maintained by the
                    contractor
                  </p>
                  <p className="min-des mt-0">
                    It shall be ensured that the contractors are having a valid
                    license and maintain the statutory register and other
                    records as prescribed under the Act.{" "}
                  </p>
                  <p className="min-des-two">LifeTime</p>
                  <p className="min-des-two">LifeTime</p>
                  <p className="min-des-two">Low</p>
                  <p className="mt-0">ROC</p>
                  <p className="mt-0">LifeTime</p>
                  <p className="mt-0">LifeTime</p>
                  <p className="mt-0">LifeTime</p>
                  <p className="mt-0">ROC</p>
                  <p className="mt-0">LifeTime</p>
                  <p className="mt-0">LifeTime</p>
                  <p className="mt-0">LifeTime</p>
                </div>

                <div className="milestone">
                <p className="mt-0">3</p>
                  <p className="mt-0 min-des">
                    Register and other records to be maintained by the
                    contractor
                  </p>
                  <p className="min-des mt-0">
                  It shall be ensured that the contractors pay wages within the time limit prescribed. In case the contractor fails to make payment of wages within the time period of make short payment then the principal employer shall be liable to make the payments of wages in full of the unpaid balance due 
                  </p>
                  <p className="min-des-two">LifeTime</p>
                  <p className="min-des-two">LifeTime</p>
                  <p className="min-des-two">High</p>
                  <p className="mt-0">ROC</p>
                  <p className="mt-0">LifeTime</p>
                  <p className="mt-0">LifeTime</p>
                  <p className="mt-0">LifeTime</p>
                  <p className="mt-0">ROC</p>
                  <p className="mt-0">LifeTime</p>
                  <p className="mt-0">LifeTime</p>
                  <p className="mt-0">LifeTime</p>
                </div>
              

              </div>

            

              <div className="add-milestone">
                <AddNewTaskModel />
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="data-center" id="headingTwo">
            <p>ROC</p>
            <p>Company Annual Compliences</p>
            <p>LifeTime</p>
            <h5 className="mb-0">
              <button
                className="btn btn-link collapsed"
                data-toggle="collapse"
                data-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                <i className="fa-solid fa-angle-down"></i>
              </button>
            </h5>
          </div>
          <div
            id="collapseTwo"
            className="collapse"
            aria-labelledby="headingTwo"
            data-parent="#accordion"
          >
            <div className="card-body">
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. 3 wolf moon officia aute, non
              cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
              laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
              on it squid single-origin coffee nulla assumenda shoreditch et.
              Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
              nesciunt sapiente ea proident. Ad vegan excepteur butcher vice
              lomo. Leggings occaecat craft beer farm-to-table, raw denim
              aesthetic synth nesciunt you probably haven't heard of them
              accusamus labore sustainable VHS.
            </div>
          </div>
        </div>
        <div className="card">
          <div className="data-center" id="headingThree">
            <p>ROC</p>
            <p>Company Annual Compliences</p>
            <p>LifeTime</p>
            <h5 className="mb-0">
              <button
                className="btn btn-link collapsed"
                data-toggle="collapse"
                data-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                <i className="fa-solid fa-angle-down"></i>
              </button>
            </h5>
          </div>
          <div
            id="collapseThree"
            className="collapse"
            aria-labelledby="headingThree"
            data-parent="#accordion"
          >
            <div className="card-body">
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. 3 wolf moon officia aute, non
              cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
              laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
              on it squid single-origin coffee nulla assumenda shoreditch et.
              Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
              nesciunt sapiente ea proident. Ad vegan excepteur butcher vice
              lomo. Leggings occaecat craft beer farm-to-table, raw denim
              aesthetic synth nesciunt you probably haven't heard of them
              accusamus labore sustainable VHS.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AccordianTable
