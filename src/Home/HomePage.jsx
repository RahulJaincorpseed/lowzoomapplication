import React, { Suspense } from "react"
import { Outlet } from "react-router-dom"
import BoxScalaton from "../common/Scalaton/BoxScalaton"

const HomeNavbar = React.lazy(() => import("../common/HomeNavbar"))
const HomeFooter = React.lazy(() => import("../common/HomeFooter"))

const HomePage = () => {
  return (
    <div>
      <Suspense fallback={<BoxScalaton />}>
        <HomeNavbar />
      </Suspense>
      <Outlet />
      <Suspense fallback={<BoxScalaton height={300} />}>
        <HomeFooter />
      </Suspense>
    </div>
  )
}

export default HomePage
