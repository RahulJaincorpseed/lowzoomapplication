import React from "react"
import "./VendorTask.scss"
import BreadCrum from "../../components/BreadCrum"
import TopNavbar from "../../components/TopNavbar"
import { Outlet } from "react-router-dom"

const VendorTask = () => {
  return (
    <div>
      <div>
        <TopNavbar
          item1={"Your orders"}
          item2={"Order History Receipts"}
          link1={"/vendor"}
          link2={"/vendor/orderhistory"}
        />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default VendorTask
