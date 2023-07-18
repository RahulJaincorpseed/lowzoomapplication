import React from "react"
import "./AccountProfile.scss"
import UsersComp from "./UsersComp"

const AccountProfile = () => {
  return (
    <div className="account-profile">
      <div className="client-list list">
        <p>client</p>
        <UsersComp />
      </div>
      <div className="users-list list">
        <p>users</p>
        <UsersComp />
      </div>
    </div>
  )
}

export default AccountProfile
