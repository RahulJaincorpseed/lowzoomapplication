import "./App.css"
import Details from "./Login/Details"
import SignUp from "./Login/SignUp"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import UserInfo from "./Login/UserInfo"
import EditModel from "./components/EditModel"
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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/details" element={<Details />} />
        <Route path="/userinfo" element={<UserInfo />} />
        <Route path="/" element={<MainCompany />}>
          <Route path="/" element={<DashBoard />} />
          <Route path="/managecompany" element={<ManageCompany />} />
          <Route path="/setcompliance" element={<SetCompliance />} />
          <Route path="/managecompliance" element={<ManageCompliance />} />
          <Route path="/vendor" element={<VendorTask />} />
          <Route path="/accounts" element={<Accounts />} >
            <Route path="/accounts/setting"  element={<div>setting</div>}/>
            <Route path="/accounts/profile"  element={<div>My Profile</div>}/>
        
          </Route>
        </Route>
        <Route path="/edit" element={<EditModel />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
