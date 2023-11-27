import React from "react"

const DetailsComp = ({icon, data}) => {
  return (
    <div className="teams-points">
      {icon}
      <p>{data}</p>
    </div>
  )
}

export default DetailsComp
