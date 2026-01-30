"use client";

import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useDemoData } from "@mui/x-data-grid-generator";

const DataGridWithData = () => {
  const { data, loading } = useDemoData({
    dataSet: "Commodity",
    rowLength: 500,
    maxColumns: 15,
  });

  return (
    <div style={{ padding: "1rem 2rem 1rem 4rem" }}>
      <h1>Data</h1>
      <p>Here is an example of a data grid displaying commodity data.</p>
      <div style={{ height: 600, width: "100%", marginTop: "1rem" }}>
        <DataGrid loading={loading} {...data} />
      </div>
    </div>
  );
};

export default DataGridWithData;
