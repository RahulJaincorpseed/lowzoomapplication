import React from "react";
import "./UserComp.scss"
import logo from "../../images/rocket.png"

const UsersComp = () => {
  return (
    <div className="user-profile">
        <div className="profile-picture">
        <div className="user-logo">
            <img src={logo} />
        </div>
        <div>
            <span>tushar singh</span>
        </div>
        </div>
        <div>
            <p className="account-heading">Phone</p>
            <p className="account-data">(978) 456-5208</p>
        </div>
        <div>
            <p className="account-heading">Client ID</p>
            <p className="account-data">32535242</p>
        </div>
        <div>
            <p className="account-heading">Email</p>
            <p className="account-data">T.S@gmail.com</p>
        </div>  
    </div>
  )
};

export default UsersComp;
