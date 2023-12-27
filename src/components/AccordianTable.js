import React, { useState } from "react"
import "./AccordianTable.scss"
import AddNewTaskModel from "../common/Model/AddNewTaskModel"
import { Link } from "react-router-dom"


const AccordianTable = () => {
  const [collpaseState, setCollapseState] = useState(false)
  return (
    <div>
      <div className="table-responsive">
        <table class="table">
          <thead>
            <tr className="border-one">
              <th>S. No.</th>
              <th>Name</th>
              <th>Description</th>
              <th>Applied</th>
              <th>Already Done</th>
              <th>Not Applicable</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-one">
              <td>1</td>
              <td><Link>John</Link></td>
              <td>Doe</td>
              <td>Applied</td>
              <td>Already Done</td>
              <td>Not Applicable</td>
            </tr>
            <tr className="border-one">
              <td>2</td>
              <td><Link>Mary</Link></td>
              <td>Moe</td>
              <td>Applied</td>
              <td>Already Done</td>
              <td>Not Applicable</td>
            </tr>
            <tr className="border-one">
              <td>3</td>
              <td><Link>July</Link></td>
              <td>Dooley</td>
              <td>Applied</td>
              <td>Already Done</td>
              <td>Not Applicable</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AccordianTable
