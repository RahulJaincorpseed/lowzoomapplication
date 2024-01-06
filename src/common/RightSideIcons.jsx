import React from "react"
import "./RightSideIcons.scss"
import { Link } from "react-router-dom"

const RightSideIcons = () => {
  return (
    <div className="right-side-icons">
      <div>
        <Link className="side-link">
          <i className="fa-solid fa-bullhorn"></i>
          <span className="ml-1">Give Feedback</span>
        </Link>
      </div>
      <div>
        <Link className="side-link">
          <i className="fa-solid fa-eye"></i>
          <span className="ml-1">1</span>
        </Link>
      </div>
      <div>
        <Link className="side-link">
          <i className="fa-solid fa-thumbs-up"></i>
        </Link>
      </div>
      <div>
        <Link className="side-link">
          <i className="fa-solid fa-share-nodes"></i>
        </Link>
      </div>
      <div>
        <Link className="side-link">
          <i className="fa-solid fa-ellipsis"></i>
        </Link>
      </div>
      <div>
        <Link className="side-link">
          <i className="fa-solid fa-xmark"></i>
        </Link>
      </div>
    </div>
  )
}

export default RightSideIcons
