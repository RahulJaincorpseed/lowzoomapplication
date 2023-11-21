import "./App.css"
import Details from "./Login/Details"
import SignUp from "./Login/SignUp"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import UserInfo from "./Login/UserInfo"
import DashBoard from "./ManageLicence/DashBoard/DashBoard"
import SetCompliance from "./ManageLicence/SetCompliance/SetCompliance"
import VendorTask from "./ManageLicence/VendorTask/VendorTask"
import Accounts from "./ManageLicence/Accounts/Accounts"
import ManageCompliance from "./ManageLicence/ManageComplience/ManageCompliance"
import MainCompany from "./ManageLicence/MainCompany"
import ManageCompany from "./ManageLicence/ManageCompany/ManageCompany"
import PageNotFound from "./components/PageNotFound"
import Login from "./Login/Login"
import Counter from "./test/Counter"
import AccountSetting from "./ManageLicence/Accounts/AccountSetting"
import AccountProfile from "./ManageLicence/Accounts/AccountProfile"
import Order from "./ManageLicence/VendorTask/Order/Order"
import OrderHistory from "./ManageLicence/VendorTask/OrderHistory"
import HomePage from "./Home/HomePage"
import FrontPage from "./Home/FrontPage"
import OtpPage from "./Home/OtpPage"
import SignUpOtp from "./Login/SignUpOtp"
import AddTeam from "./Login/AddTeam"
import AddPeopleModel from "./common/Model/AddPeopleModel"
import AddTeamModel from "./common/Model/AddTeamModel"
import EditTeamModel from "./common/Model/EditTeamModel"
import ForgetPassword from "./Login/ForgetPassword"
import ForgetWithInvitation from "./Login/ForgetWithInvitation"
import CompanyInfo from "./Login/CompanyInfo"
import AddTeamOutlet from "./Login/AddTeamOutlet"
import ButtonOne from "./components/Button/ButtonOne"

function App() {
  return (
    <BrowserRouter>
      <Routes>
      {/* <Route path="/button" element={<ButtonOne />} /> */}
        <Route path="/" element={<HomePage />}>
          <Route path="/" element={<FrontPage />} />
          <Route path="/otp" element={<OtpPage />} />
        </Route>
        <Route path="/companyInfo" element={<CompanyInfo />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signup/otp" element={<SignUpOtp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
        <Route path="/invitation/:email" element={<ForgetWithInvitation />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/user/:id/userinfo" element={<AddTeamOutlet />}>
          <Route path="" element={<UserInfo />} />
            <Route path="company/:companyId/addteam" element={<AddTeam />}>
              <Route path=":id/addPeople" element={<AddPeopleModel />} />
              <Route path=":id/editTeam" element={<EditTeamModel />} />    
            </Route>
            <Route path="company/:companyId/addteam/companyInfo" element={<CompanyInfo />} />
        </Route>

        <Route path="/details" element={<Details />} />

        <Route path=":userId/company/:companyid" element={<MainCompany />}>
          <Route path="" element={<DashBoard />} />
          <Route path="managecompany" element={<ManageCompany />} />
          <Route path="setcompliance" element={<SetCompliance />} />
          <Route path="managecompliance" element={<ManageCompliance />} />
          <Route path="vendor" element={<VendorTask />}>
            <Route path="" element={<Order />} />
            <Route path="orderhistory" element={<OrderHistory />} />
          </Route>
          <Route path="accounts" element={<Accounts />}>
            <Route path="setting" element={<AccountSetting />} />
            <Route path="" element={<AccountProfile />} />
          </Route>

          {/*
         
          <Route path="/accounts" element={<Accounts />}>
            <Route path="/accounts/setting" element={<AccountSetting />} />
            <Route path="/accounts" element={<AccountProfile />} />
          </Route> */}
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
