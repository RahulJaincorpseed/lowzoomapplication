import React from "react"
import "./PageNotFound.scss"
import { Link } from "react-router-dom"

const PageNotFound = () => {
  return (
    <div className="page-not-found">
      <div className="page-data">
        <h2 className="four">404</h2>
        <p>Page Not Found</p>
        <Link
          to="/login"
          className="first-button mt-2 d-flex justify-content-center"
        >
          Home
        </Link>
      </div>
    </div>
  )
}

export default PageNotFound
