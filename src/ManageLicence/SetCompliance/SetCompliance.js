import React, { useEffect, useState } from "react"
import BreadCrum from "../../components/BreadCrum"
import "./SetComplience.scss"
import CompliancesTable from "../../Tables/CompliancesTable"
import AddNewComplienceModel from "../../common/Model/AddNewComplienceModel"
import { useLocation } from "react-router-dom"
import { getQuery } from "../../Api/getQuery"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { customLocation } from "../../Hooks/LocationHook"
toast.configure()

const SetCompliance = () => {

  const [allComplienses, setAllCompliences] = useState([]);

  const location = useLocation();
  const companyPathId = customLocation(3, location);

  console.log(companyPathId);

  useEffect(()=>{
    // allCompliancesData()
  }, [])


  useEffect(()=>{
    // getAllComplienceFun();
  })

  
  const columns = [
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'approvalState', headerName: 'State', width: 150 },
    { field: 'applicableZone', headerName: 'City', width: 150 },
    { field: 'startDate', headerName: 'Start Date', width: 150 },
    { field: 'completedDate', headerName: 'completed Date', width: 150 },
    { field: 'description', headerName: 'Description', width: 150 },
   ];

// applicableZone: "cdcsdcdscd"
// approvalState: "csdcd"
// completedDate: "2023-11-13"
// createdAt: "2023-11-10T10:36:55.214+00:00"
// description: "dcscds  v dsv dsvds"
// dueDate: null
// duration: ""
// enable: true
// id: 41
// name: "csdc"
// priority: 1
// startDate: "2023-11-11"
// updatedAt: "2023-11-10T10:36:55.214+00:00"
// workStatus:0
  
  const columns2 = [
    { field: 'col1', headerName: 'Column 1', width: 150 },
    { field: 'col2', headerName: 'Column 2', width: 150 },
  ];

  // const getAllComplienceFun = async () =>{
  //   try{
  //   const getComplienceData = await getQuery(`/companyServices/company/getAllCompanyUnitTeamData`);
  //   console.log('get data', getComplienceData.data);
  //   console.log('get data', getComplienceData.data.companies);
  //   const complienceResponse = getComplienceData.data.companies;

  //   const getAllCompliancesRes = await getQuery(`/compliance/company/getAllComplianceByUserId`);

  //   console.log("data is ", getAllCompliancesRes.data);
  //   console.log("data is ", getAllCompliancesRes.data);
  //   const 

  //   console.log("keys are", Object.keys(getAllCompliancesRes.data));
    

  //   // for(let i=0; i<complienceResponse.length; i++){
  //   //   if(complienceResponse.id === getAllCompliancesRes[i])
  //   // }   

  //   }catch(err){
  //     console.log("Error", err)
  //   }
  // }




  const allCompliancesData = async () =>{
    try{
    const allCompliencesResponse = await getQuery(`/compliance/company/showAllCompliance?companyId=${companyPathId}`);
    console.log("all compliences ", allCompliencesResponse); 
    setAllCompliences(allCompliencesResponse.data)
    }catch(err){
      console.log("err", err)
      if(err.response.status === 500){
        toast.error("Something Went Wrong")
      }
    }
  }


  console.warn("ALL COMPLIENSES");
  console.log(allComplienses)

  return (
    <div>
      <BreadCrum />
      <div className="set-compliance">
        <h2 className="heading-primary">Approve Applicable Compliances</h2>
        <div className="mt-5">
          <div className="row">
            <div className="col-lg-4">
              <div>
                <select className="form-control input-focus" id="sel7">
                  <option>Choose company</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </select>
              </div>
            </div>
            <div className="col-lg-4">
              <div>
                <select className="form-control input-focus" id="sel6">
                  <option>Choose by State</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </select>
              </div>
            </div>
            <div className="col-lg-4">
              <div>
                <select className="form-control input-focus" id="sel5">
                  <option>Choose by operational unit</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </select>
              </div>
            </div>

            {/* second line  */}
            <div className="col-lg-5 mt-4">
              <div className="p-relative">
                <input
                  className="form-control input-focus"
                  type="text"
                  placeholder="Search by license name"
                />
                <i className="fa-solid fa-magnifying-glass search-icon-btn"></i>
              </div>
            </div>
            <div className="col-lg-5 mt-4">
              <div className="p-relative">
                <input
                  className="form-control input-focus"
                  type="text"
                  placeholder="Sort by department / Autho.. "
                />
                <i className="fa-solid fa-magnifying-glass search-icon-btn"></i>
              </div>
            </div>
            <div className="col-lg-2 mt-4">
              <div className="all-task">
                <div className="form-check mr-1">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label
                    className="form-check-label check-text"
                    htmlFor="exampleCheck1"
                  >
                    All Tasks
                  </label>
                </div>
                <i className="fa-solid fa-sliders"></i>
              </div>
            </div>

            <div className="add-new-complience col-lg-12 mt-4">
              <div className="add-new-company">
                <AddNewComplienceModel />
              </div>
              {/* <div className="add-new-company">
                <button
                  type="button"
                  className="add-button"
                  data-toggle="modal"
                  data-target="#manageAddNewCompany"
                >
                  <i className="fa-solid fa-plus"></i> Add New Complience
                </button>

                <div
                  className="modal fade"
                  id="manageAddNewCompany"
                  tabIndex="-1"
                  role="dialog"
                  aria-labelledby="Addcomplience"
                  aria-hidden="true"
                >
                  <div
                    className="modal-dialog modal-dialog-centered"
                    role="document"
                  >
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="Addcomplience">
                          Add company first model
                        </h5>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">...</div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-dismiss="modal"
                        >
                          Close
                        </button>
                        <button type="button" className="btn btn-primary">
                          Save changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>

            <div className="my-4 w-100">
              <CompliancesTable rows={allComplienses} columns={columns} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SetCompliance
