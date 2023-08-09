import React from "react"
import "./userInfo.scss"
import { cityData, companyData } from "../TestData.js/CityData"

const FormPartTwo = () => {
  const [companyNameErr, setCompanyNameErr] = useState(false); 
 

  const companyNameRef = useRef();

  const companyNameFun = () =>{
    if(companyNameRef.current.value.length === 0){
      setTimeout(()=>{
        setCompanyNameErr(true);
      },1000)
    }
    if(businessEmailRef.current.value.length >= 1){
      setCompanyNameErr(false);
    }
  }
 
  return (
    <div className="personal-info container">
      <h4 className="info-text">Ok, tell us Your business Activity</h4>
      <div className="first-form form-row">
        <div className="form-group col-md-6">
          <div className="pr-ten">
            <label className="label-heading" htmlFor="sel1">
              Select Type of company*
            </label>
            <select className="form-control input-focus" id="sel1">
              {companyData.map((company, index) => (
                <option key={index} value={company}>
                  {company}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="form-group col-md-6">
          <div className="pl-ten">
            <label className="label-heading" htmlFor="companyName">
              Company Name / CIN*
            </label>
            <input
              type="text"
              ref={businessEmailRef}
              onKeyUp={businessEmailFun}
              className="form-control input-focus"
              id="companyName"
              placeholder="Company Name"
              required
            />
                   {companyNameErr ? <p className="error-change">Email can't be Blank</p>: ""}
     
          </div>
        </div>
        <div className="form-group col-md-6">
          <div className="pr-ten">
            <label className="label-heading" htmlFor="sel2">
              City*
            </label>
            <select className="form-control input-focus" id="sel2">
              {cityData.map((city, index) => (
                <option key={index} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="form-group col-md-6">
          <div className="pl-ten">
            <label className="label-heading" htmlFor="sel3">
              State*
            </label>
            <select className="form-control input-focus" id="sel3">
              {cityData.map((city, index) => (
                <option key={index} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="form-group col-md-6">
          <div className="pr-ten">
            <label className="label-heading" htmlFor="turnOver">
              Company Turnover
            </label>
            <input
              type="text"
              className="form-control input-focus"
              id="turnOver"
              placeholder="Company Turnover"
            />
          </div>
        </div>
        <div className="form-group col-md-6">
          <div className="pl-ten">
            <label className="label-heading" htmlFor="sel4">
              Located At*
            </label>
            <select className="form-control input-focus" id="sel4">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </select>
          </div>
        </div>
        <div className="form-group col-md-6">
          <div className="pr-ten">
            <label className="label-heading" htmlFor="searchBusiness">
              Search htmlFor business Activity*
            </label>
            <input
              type="text"
              className="form-control input-focus"
              id="searchBusiness"
              placeholder="Search"
              required
            />
          </div>
        </div>
        <div className="form-group col-md-6">
          <div className="pl-ten">
            <label className="label-heading" htmlFor="pemp">
              Permanant Employees in the company*
            </label>
            <input
              type="email"
              className="form-control input-focus"
              id="pemp"
              placeholder="Permanent Employee"
              required
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group col-md-12  m-0 p-0 mb-3">
            <div className="pr-ten">
              <label className="label-heading" htmlFor="contractemp">
                Contract employees in the company *
              </label>
              <input
                type="email"
                className="form-control input-focus"
                id="contractemp"
                placeholder="Contract Employee"
                required
              />
            </div>
          </div>
          <div className="form-group col-md-12 m-0 p-0">
            <div className="pr-ten">
              <label className="label-heading" htmlFor="gstnumber">
                GST Number*
              </label>
              <input
                type="email"
                className="form-control input-focus"
                id="gstnumber"
                placeholder="GST Number"
                required
              />
            </div>
          </div>
        </div>
        <div className="form-group col-md-6 text-area-box">
          <div className="pl-ten d-flex flex-column">
            <label className="label-heading" htmlFor="opunit">
              Operating Unit address*
            </label>
            <textarea
              className="form-group input-focus text-a-size w-100"
              id="opunit"
              name="w3review"
              rows="4"
              cols="50"
              placeholder="Enter here..."
              required
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FormPartTwo
