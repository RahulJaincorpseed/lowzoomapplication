import "./App.css"
import Details from "./Login/Details"
import SignUp from "./Login/SignUp"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
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
import ForgetPassword from "./Login/ForgetPassword"
import ForgetWithInvitation from "./Login/ForgetWithInvitation"
import CompanyInfo from "./Login/CompanyInfo"
import AddTeamOutlet from "./Login/AddTeamOutlet"
import CustomizedCompliances from "./ManageLicence/SetCompliance/CustomizedCompliances"
import SelectCompanyPage from "./ManageLicence/SelectCompanyPage"
import DisplayAllTask from "./ManageLicence/SetCompliance/DisplayAllTask"
import BusinessUnitData from "./ManageLicence/ManageCompany/BusinessUnitData"
import AllCompanyPeople from "./ManageLicence/ManageCompany/AllCompanyPeople"
import { useSelector } from "react-redux"

function App() {

  const loginUser = useSelector((state) => state.auth.isAuth)

  return (
    <BrowserRouter>
      <Routes>
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
        <Route path="/user/:userid/userinfo" element={loginUser ? <AddTeamOutlet /> : <Navigate to="/login" />}>
          <Route path="" element={<UserInfo />} />
            <Route path="company/:companyid/addteam" element={<AddTeam />}>
            </Route>
            <Route path="company/:companyid/addteam/companyInfo" element={<CompanyInfo />} />
        </Route>

        <Route path="/details" element={<Details />} />
        <Route path="/:userId/company"  element={<SelectCompanyPage />} />
        <Route path=":userId/company" element={loginUser ? <MainCompany />: <Navigate to="/login" />}>
          <Route path="dashboard" element={<DashBoard />} />
          <Route path="managecompany" element={<ManageCompany />} />
          <Route path="managecompany/:companyid/businessunit" element={<BusinessUnitData />} />
          <Route path="managecompany/:companyid/allpeople" element={<AllCompanyPeople />} />
          <Route path="setcompliance" element={<SetCompliance />} />
          <Route path="setcompliance/:companyid/businessUnit/:businessUnitId" element={<CustomizedCompliances />} />
          <Route path="setcompliance/:companyid/businessUnit/:businessUnitId/complience/:complienceId" element={<DisplayAllTask />} />
        
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
