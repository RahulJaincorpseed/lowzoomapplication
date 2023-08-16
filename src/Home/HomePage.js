import React from "react";
import { Navbar } from "rsuite";
import HomeNavbar from "../common/HomeNavbar";
import HomeFooter from "../common/HomeFooter";
import { Outlet } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="container">
        <HomeNavbar />
        <Outlet />
        <HomeFooter />
    </div>
  )
};

export default HomePage;
