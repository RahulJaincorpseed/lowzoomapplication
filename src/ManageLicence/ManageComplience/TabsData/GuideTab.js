import React, { useState } from "react"
import "./GuideTab.scss"
import AddGuideModel from "../../../common/Model/AddGuideModel"
import { useSearch } from "rsuite/esm/Picker"

const GuideTab = () => {
  const [loadMore, setLoadMore] = useState(5)

  const tableData = [
    {
      Milestone: "Documentation",
      Juridiction: "Central",
      "Created date": "25-02-2022",
    },
    {
      Milestone: "Documentation",
      Juridiction: "Central",
      "Created date": "25-02-2022",
    },
    {
      Milestone: "Documentation",
      Juridiction: "Central",
      "Created date": "25-02-2022",
    },
    {
      Milestone: "Documentation",
      Juridiction: "Central",
      "Created date": "25-02-2022",
    },
    {
      Milestone: "Documentation",
      Juridiction: "Central",
      "Created date": "25-02-2022",
    },
    {
      Milestone: "Documentation",
      Juridiction: "Central",
      "Created date": "25-02-2022",
    },
    {
      Milestone: "Documentation",
      Juridiction: "Central",
      "Created date": "25-02-2022",
    },
    {
      Milestone: "Documentation",
      Juridiction: "Central",
      "Created date": "25-02-2022",
    },
    {
      Milestone: "Documentation",
      Juridiction: "Central",
      "Created date": "25-02-2022",
    },
    {
      Milestone: "Documentation",
      Juridiction: "Central",
      "Created date": "25-02-2022",
    },
  ]

  const LoadData = () =>{
    setLoadMore((prev) => prev + 5)
  }

  return (
    <div className="guide-tab">
      <h2 className="desc-head">Guide Description</h2>
      <p className="guide-para">
        Basic LMS or step guide for respective milestone will be created. zit
        will help to improve user adaptation in respect to understad the process
        for services.
      </p>
      <AddGuideModel />
      <div className="guide-table-box">
        <h2 className="desc-head">Added Step Guide</h2>
        <input
          className="step-search"
          type="search"
          placeholder="Search Step guide by name or juridiction"
        />

        {/*guide table  */}
        <div className="table-responsive table-fix-height scrollbar-sider">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Milestone</th>
                <th scope="col">Juridiction</th>
                <th scope="col">Created date</th>
                <th scope="col">u</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {tableData.slice(0, loadMore).map((data, index) => (
                <tr key={index}>
                  <td>{data.Milestone}</td>
                  <td>{data.Juridiction}</td>
                  <td>{data["Created date"]}</td>
                  <td><div className="user-circle">AK</div></td>
                  <td><i class="fa-solid pen-cl fa-pen"></i><i class="fa-solid bin-cl ml-2 fa-trash"></i></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <button onClick={LoadData} className="load-more-txt">Load More</button>
      </div>
    </div>
  )
}

export default GuideTab
