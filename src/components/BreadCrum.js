import React from "react"
import "./BreadCrum.scss"
import useBreadcrumbs from "use-react-router-breadcrumbs"
import { Link } from "react-router-dom"

const BreadCrum = () => {
  const breadcrumbs = useBreadcrumbs()

  const url = breadcrumbs.map(({ match, breadcrumb }) => match.pathname)
  console.log("url is ", url)

  return (
    <div>
      <nav className="breadcrum">
        {breadcrumbs.map(({ match, breadcrumb }, index) => (
          <Link key={index} to={match.pathname}>
            {breadcrumb}{" "}
            <span>
              <i className="fa-solid fa-chevron-right mr-1"></i>
            </span>
          </Link>
        ))}
      </nav>
    </div>
  )
}

export default BreadCrum
