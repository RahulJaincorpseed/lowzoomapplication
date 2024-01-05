import React, { useId } from "react"
import AddNewComplienceModel from "../../common/Model/AddNewComplienceModel"
import TaskCreate from "../../common/Model/TaskCreate"
import { useCustomRoute } from "../../Hooks/GetCustomRoute"
import { useParams } from "react-router-dom"

const DisplayAllTask = () => {
  const {complienceId } = useParams()

  console.log("is id here ====", complienceId);

  const getAllTask = `/compliance/task/getAllComplianceTask?complianceId=${complienceId}`
  const TaskDep = []

  const { productData: allTaskData, loading: taskLoading } = useCustomRoute(
    getAllTask,
    TaskDep
  )

  console.log("all r=task data", allTaskData)

  return (
    <div>
      <div>
        <h2 className="heading-primary">Compliances Task</h2>
        <div className="add-new-company mb-3">
          <TaskCreate />
        </div>
        <h2 className="heading-primary text-center">All Task</h2>
        <div className="complience-table">
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr className="border-one">
                  <th scope="col">id</th>
                  <th scope="col w-180">Task</th>
                  <th scope="col w-180">Description</th>
                  <th scope="col w-180">Completed Date</th>
                  <th scope="col">Status</th>
                  <th scope="col">Criticality</th>
                </tr>
              </thead>
              <tbody>
                {taskLoading ? (
                  <h2>Loading...</h2>
                ) : (
                  allTaskData &&
                  allTaskData.map((task, index) => (
                    <tr className="border-one" key={index}>
                      <th scope="row">{task?.id}</th>
                      <td className="w-180">{task?.taskName}</td>
                      <td className="w-180">
                        {task?.description.split(0, 80)}
                      </td>
                      <td className="w-180">{task?.completedDate}</td>
                      <td>{task?.status}</td>
                    </tr>
                  ))
                )}
                <tr className="border-one">
                  <th scope="row">1</th>
                  <td>
                    Register and other records to be maintained by the
                    contractor
                  </td>
                  <td>
                    It shall be ensured that the contractors provide canteen
                  </td>
                  <td>
                    It shall be ensured that the contractors provide canteen
                  </td>

                  <td>
                    @It shall be ensured that the contractors provide canteen
                  </td>
                </tr>

                <tr className="border-one">
                  <th scope="row">3</th>
                  <td>
                    Register and other records to be maintained by the
                    contractor
                  </td>
                  <td>
                    It shall be ensured that the contractors provide canteen
                  </td>
                  <td>
                    @It shall be ensured that the contractors provide cantee
                  </td>
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
