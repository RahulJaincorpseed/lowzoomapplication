import React from "react"
import { Skeleton } from "@mui/material"

const BoxScalaton = ({ height }) => {
  return (
    <>
      <div className="py-2">
        <Skeleton
          variant="rectangular"
          width="100%"
          height={height ? height : 130}
        />
      </div>
    </>
  )
}

export default BoxScalaton
