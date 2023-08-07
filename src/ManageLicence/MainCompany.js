import React, { useEffect } from "react"
import ManageSideBar from "../components/ManageSideBar"
import "./MainCompany.scss"
import { Link, Outlet, useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"

const MainCompany = () => {
  const navigate = useNavigate();

  const currentUserToken = useSelector((state) => state.authReducer.token)
  
    useEffect(()=>{
      const token = localStorage.getItem("access Token");
      console.log(token);
      if(!token || token !== currentUserToken){
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
