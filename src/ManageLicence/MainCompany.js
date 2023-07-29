import React, { useEffect } from "react"
import ManageSideBar from "../components/ManageSideBar"
import "./MainCompany.scss"
import { Outlet, useNavigate } from "react-router-dom"

const MainCompany = () => {
  const navigate = useNavigate();

    useEffect(()=>{
      const token = localStorage.getItem("access Token");
      console.log(token);
      if(!token){
        navigate('/login')
      }
    })

  return (
    <>
      <div className="manage-license">
        <>
          <ManageSideBar />
        </>
        <div className="right-sidebar">
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default MainCompany
