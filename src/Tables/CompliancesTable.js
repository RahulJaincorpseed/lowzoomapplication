import React from "react"
import { DataGrid, GridToolbar } from "@mui/x-data-grid"

const CompliancesTable = () => {
    const rows = [
        { id: 1, col1: 'Hello', col2: 'World' },
        { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
        { id: 3, col1: 'MUI', col2: 'is Amazing' },
      ];
      
      const columns = [
        { field: 'col1', headerName: 'Column 1', width: 150 },
        { field: 'col2', headerName: 'Column 2', width: 150 },
      ];
  return (
    <div>
      <DataGrid checkboxSelection rows={rows} columns={columns} slots={{ toolbar: GridToolbar }} 
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