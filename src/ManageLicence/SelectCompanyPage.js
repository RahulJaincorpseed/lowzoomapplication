import React from "react";
import "./SelectCompanyPage.scss"

const SelectCompanyPage = () => {
  return (
    <div className="container">
    <div className="select-company-box">
        <h2 className="heading-new">Select Your Company</h2>
        <p className="label-heading">Please Select Which Company You want to Enter</p>

    <div className="all-company">
        <div className="table-responsive">
    <table class="table">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">Company Name</th>
      <th scope="col">Business Unit</th>
      <th scope="col">Access Type</th>
      <th scope="col">Action</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Company 1</td>
      <td>Business Unit 1</td>
      <td>User</td>
      
      <td><button className="enter-btn">Enter</button></td>
      
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Company 2</td>
      <td>Business Unit 2</td>
      <td>Admin</td>
      <td><button className="enter-btn">Enter</button></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Company 3</td>
      <td>Business Unit 3</td>
      <td>Manager</td>
      <td><button className="enter-btn">Enter</button></td>
    </tr>
  </tbody>
</table>
</div>
    </div>


    </div>
    </div>
  )
};

export default SelectCompanyPage;
