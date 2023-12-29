import React from "react"
import AddNewComplienceModel from "../../common/Model/AddNewComplienceModel"

const DisplayAllTask = () => {
  return (
    <div>
      <div>
        <h2 className="heading-primary">Compliances Task</h2>
        <div className="add-new-company mb-3">
          <AddNewComplienceModel />
        </div>
        <h2 className="heading-primary text-center">
          All Task 
        </h2>
        <div className="complience-table">
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr className="border-one">
                  <th scope="col">id</th>
                  <th scope="col">Task</th>
                  <th scope="col">Description</th>
                  <th scope="col">Compliance Frequency</th>
                  <th scope="col">Renewal Date (if applicable)</th>
                  <th scope="col">Criticality</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-one">
                  <th scope="row">1</th>
                  <td>
                    Register and other records to be maintained by the
                    contractor
                  </td>
                  <td>
                    It shall be ensured that the contractors provide canteen
                    facility rest rooms first aid facility and other facilities
                    as specified in the Act. In case if such amenities are not
                    provided by the contractor, the principal employer shall
                    provide the same within the time limit prescribed{" "}
                  </td>
                 
                  <td>
                    It shall be ensured that the contractors provide canteen
                    facility rest rooms first aid facility and other facilities
                    as specified in the Act. In case if such amenities are not
                    provided by the contractor, the principal employer shall
                    provide the same within the time limit prescribed{" "}
                  </td>
                  <td>@It shall be ensured that the contractors provide canteen facility rest rooms first aid facility and other facilities as specified in the Act. In case if such amenities are not provided by the contractor, the principal employer shall provide the same within the time limit prescribed </td>
                </tr>
                <tr className="border-one">
                  <th scope="row">1</th>
                  <td>
                    Register and other records to be maintained by the
                    contractor
                  </td>
                  <td>
                    It shall be ensured that the contractors provide canteen
                    facility rest rooms first aid facility and other facilities
                    as specified in the Act. In case if such amenities are not
                    provided by the contractor, the principal employer shall
                    provide the same within the time limit prescribed{" "}
                  </td>
                  <td>
                    It shall be ensured that the contractors provide canteen
                    facility rest rooms first aid facility and other facilities
                    as specified in the Act. In case if such amenities are not
                    provided by the contractor, the principal employer shall
                    provide the same within the time limit prescribed{" "}
                  </td>
                 
                  <td>@It shall be ensured that the contractors provide canteen facility rest rooms first aid facility and other facilities as specified in the Act. In case if such amenities are not provided by the contractor, the principal employer shall provide the same within the time limit prescribed </td>
                </tr>
             
                <tr className="border-one">
                  <th scope="row">3</th>
                  <td>
                    Register and other records to be maintained by the
                    contractor
                  </td>
                  <td>
                    It shall be ensured that the contractors provide canteen
                    facility rest rooms first aid facility and other facilities
                    as specified in the Act. In case if such amenities are not
                    provided by the contractor, the principal employer shall
                    provide the same within the time limit prescribed{" "}
                  </td>
                  <td>@It shall be ensured that the contractors provide canteen facility rest rooms first aid facility and other facilities as specified in the Act. In case if such amenities are not provided by the contractor, the principal employer shall provide the same within the time limit prescribed </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DisplayAllTask
