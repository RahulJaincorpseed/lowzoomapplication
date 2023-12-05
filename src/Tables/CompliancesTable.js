import React from "react"
import { DataGrid, GridToolbar } from "@mui/x-data-grid"

const CompliancesTable = ({rows, columns, getRowId}) => {
   
  return (
    <div>
      <DataGrid checkboxSelection rows={rows}  getRowId={getRowId} columns={columns} slots={{ toolbar: GridToolbar }} 
       slotProps={{
        toolbar: {
          showQuickFilter: true,
        },
      }}
      />
    </div>
  )
}

export default CompliancesTable
