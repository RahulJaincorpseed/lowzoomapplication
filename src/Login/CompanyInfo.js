import React, { useEffect, useState } from "react"
import "./CompanyInfo.scss"
import ComDetails from "../components/ComDetails"
import TeamProfile from "../components/TeamProfile"
import EditCompanyInfoModel from "../common/Model/EditCompanyInfoModel"
import EditGstDetailsModel from "../common/Model/EditGstDetailsModel"
import EditBusinessUnitModel from "../common/Model/EditBusinessUnitModel"
import EditTeamModel from "../common/Model/EditTeamModel"
import { getQuery } from "../Api/getQuery"
import { Link, useLocation, useNavigate } from "react-router-dom"
import AddBusinessUnitModel from "../common/Model/AddBusinessUnitModel"

const CompanyInfo = () => {
  const [companyInfoData, setCompanyInfoData] = useState({})

  const navigate = useNavigate()
  const location = useLocation()

  const addPathData = location.pathname.split()
  const data = addPathData[0].split("/")
  console.log("data", data)
  const userPathId = Number(data[2])
  const companyPathId = Number(data[5])
  // console.log("user id is", userPathId);
  // console.log("company id is", companyPathId);

  useEffect(() => {
    getSingleCompanyData()
  }, [])

  const getSingleCompanyData = async () => {
    try {
      const companyData = await getQuery(
        `/companyServices/company/fetchCompany?id=${companyPathId}&userId=${userPathId}`
      )
      // console.log("company data", companyData.data);
      setCompanyInfoData(companyData.data)
    } catch (err) {
      console.log("err", err)
    }
  }

  console.log("company inf data", companyInfoData)

  return (
    <>
      <div className="container my-3">
        <div className="d-end">
          <Link to={`/${userPathId}/company/${companyPathId}`} className="form-next-btn first-button">Go to Dashboard</Link>
        </div>
        <div className="company-all">
          <div className="company-info">
            <div className="info-all">
              <div className="info-text">
                <i className="fa-solid fa-building"></i>
                <h4>company Info</h4>
              </div>
              <div className="info-edit">
                <EditCompanyInfoModel />
              </div>
            </div>
            <div className="all-details">
              <h4 className="brand-name">{companyInfoData?.companyName}</h4>
              <div className="row">
                <ComDetails
                  name={"Entity Type:"}
                  value={companyInfoData?.companyType}
                />
                <ComDetails
                  name={"Formation State:"}
                  value={companyInfoData?.companyState}
                />
                <ComDetails
                  name={"Registration ID (CIN):"}
                  value={"U74999UP2018PTC221873"}
                />
                <ComDetails
                  name={"Formation Date:"}
                  value={companyInfoData?.companyRegistrationDate}
                />
                <ComDetails name={"nUMBER OF gst:"} value={"2"} />
                <ComDetails
                  name={"Email Id:"}
                  value={companyInfoData?.businessActivityEmail}
                />
                <ComDetails
                  name={"registered address:"}
                  value={
                    "A-43, SECTOR-63 NOIDA NOIDA Gautam Buddha Nagar UP 201301 IN"
                  }
                />
              </div>
            </div>
          </div>
        </div>

        {/* gst Details */}
        <div className="company-all">
          <div className="company-info">
            <div className="info-all">
              <div className="info-text">
                <i className="fa-solid fa-building"></i>
                <h4>1) GST Details</h4>
              </div>
              <div className="info-edit">
                <EditGstDetailsModel />
              </div>
            </div>
            <div className="all-details">
              <div className="row">
                <ComDetails name={"GSTIN/IN:"} value={"09AAHCC4679J1ZC"} />
                <ComDetails
                  name={"Legal Name of business:"}
                  value={"Haldiram Foods Private Pr..."}
                />
                <ComDetails
                  name={"State Jurisdiction:"}
                  value={"Maharashtra"}
                />
                <ComDetails
                  name={"Date of Registration:"}
                  value={"1st May 2020"}
                />
                <ComDetails
                  name={"Constitution of Business:"}
                  value={"Private Limited Company"}
                />
                <ComDetails name={"Operational Units:"} value={"2"} />
                <ComDetails
                  name={"registered address:"}
                  value={
                    "A-43, SECTOR-63 NOIDA NOIDA Gautam Buddha Nagar UP 201301 IN"
                  }
                />
              </div>
            </div>
          </div>
        </div>
        {/* end gst details */}

        {/* business units */}
        <div className="all-between">
          <h2 className="team-heading">Business Unit</h2>
          <AddBusinessUnitModel />
        </div>

        <div className="company-all">
          <div className="company-info">
            <div className="info-all">
              <div></div>
              <div className="info-edit">
                <EditBusinessUnitModel />
              </div>
            </div>
            <div className="all-details">
              <div className="row">
                <ComDetails name={"GST Number:"} value={"09AAHCC4679J1ZC"} />
                <ComDetails name={"City"} value={"Mumbai"} />
                <ComDetails name={"Permanent Employees:"} value={"250"} />
                <ComDetails
                  name={"Business Activity:"}
                  value={"Food Manufacturing Unit"}
                />
                <ComDetails name={"Located At:"} value={"SEZ"} />
                <ComDetails name={"STATE"} value={"Maharashtra"} />
                <ComDetails
                  name={"registered address:"}
                  value={
                    "A-43, SECTOR-63 NOIDA NOIDA Gautam Buddha Nagar UP 201301 IN"
                  }
                />
              </div>
            </div>
          </div>
        </div>

        {/* second business unit */}
        <div className="company-all">
          <div className="company-info">
            <div className="info-all">
              <div></div>
              <div className="info-edit">
                <EditBusinessUnitModel />
              </div>
            </div>
            <div className="all-details">
              <div className="row">
                <ComDetails name={"GST Number:"} value={"09AAHCC4679J1ZC"} />
                <ComDetails name={"City"} value={"Mumbai"} />
                <ComDetails name={"Permanent Employees:"} value={"250"} />
                <ComDetails
                  name={"Business Activity:"}
                  value={"Food Manufacturing Unit"}
                />
                <ComDetails name={"Located at:"} value={"SEZ"} />
                <ComDetails name={"STATE"} value={"Maharashtra"} />
                <ComDetails
                  name={"Registered Address:"}
                  value={
                    "A-43, SECTOR-63 NOIDA NOIDA Gautam Buddha Nagar UP 201301 IN"
                  }
                />
              </div>
            </div>
          </div>
        </div>
        {/* end business units */}

        {/* team sec */}

        <h2 className="team-heading">Team</h2>

        <div className="company-all">
          <div className="company-info">
            <div className="info-all">
              <div></div>
              <div className="info-edit">
                <EditTeamModel />
              </div>
            </div>
            {/* team */}
            <div className="display-team">
              <div className="team-detais">
                <TeamProfile />
              </div>
              <div className="team-type">
                <h4>Inhouse Team</h4>
              </div>
            </div>
          </div>
        </div>

        {/* team sec */}
      </div>
    </>
  )
}

export default CompanyInfo
