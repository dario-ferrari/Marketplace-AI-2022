import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Rating } from "@mui/material";

const columns = [
  {
    field: "imagen",
    headerName: "IMG",
    width: 80,
    sortable: false,
    renderCell: (params) => (
      <img
        src={params.value}
        height="30"
        width="30"
        style={{ marginLeft: "10px" }}
        alt="product"
      />
    ),
  },
  {
    field: "titulo",
    headerName: "Clase",
    sortable: false,
    flex: 1,
    minWidth: 200,
  },
  { field: "estado", headerName: "Estado", sortable: false, width: 130 },
  { field: "precio", headerName: "Costo", width: 130 },
  {
    field: "rating",
    headerName: "Calificación",
    width: 130,
    valueFormatter: ({ value }) => value.rate,
    renderCell: (params) => (
      <Rating
        size="small"
        readOnly
        defaultValue={params.value.rate}
        precision={0.5}
      />
    ),
    sortComparator: (a, b) => {
      if (a.rate > b.rate) return 1;
      if (a.rate < b.rate) return -1;
      if (a.rate === b.rate) return 0;
    },
  },
];


const DataTable = ({ products }) => {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={products}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        disableColumnMenu
        disableSelectionOnClick
      />
    </div>
  );
};

export default DataTable;
