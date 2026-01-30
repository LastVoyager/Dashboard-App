"use client";

import React from "react";
import dynamic from "next/dynamic";

// solution like I made with Header component to avoid hydration issues
const DynamicDataGridWrapper = dynamic(
  () => import("@/components/DashBoard/DataGridComponent/DataGridWithData"),
  {
    ssr: false,
    loading: () => (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "calc(100vh - 124px)",
          backgroundColor: "#4b4545",
          width: "100%",
          color: "#ffffff",
        }}
      >
        Loading DataGrid...
      </div>
    ),
  },
);

export default function DynamicDataGrid() {
  return <DynamicDataGridWrapper />;
}
