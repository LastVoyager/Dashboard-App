import React from "react";
import DataRibbon from "@/components/DashBoard/DataRibbon/DataRibbon";
import { Box, Grid, Paper } from "@mui/material";
import scss from "./dashboard.module.scss";

const Dashboard = () => {
  return (
    <Box>
      <DataRibbon />
      {/*TransactionsPerDay*/}
      {/*TransactionsPerDay Doughnut Charts Bottom Row*/}
    </Box>
  );
};

export default Dashboard;
