import React from "react"
import { Skeleton } from "@mui/material"

const TableScalaton = () => {
  return (
    <>
      <div className="py-2">
        <Skeleton variant="rectangular" width="100%" height={130} />
        <Skeleton variant="rectangular" width={180} height={30} />
        <Skeleton variant="rectangular" width={180} height={30} />
      </div>
    </>
  )
}

export default TableScalaton
