import React from "react";
import DataRibbon from "@/components/DashBoard/DataRibbon/DataRibbon";
import TransactionsPerDay from "@/components/DashBoard/TransactionPerDay/TransactionPerDay";
import TransactionBottomRow from "@/components/DashBoard/TransactionBottomRaw/TransactionBottomRow";
import { Box, Grid, Paper } from "@mui/material";
import scss from "./dashboard.module.scss";

const Dashboard = () => {
  return (
    <Box className={scss.dashboard}>
      <DataRibbon />
      <TransactionsPerDay />
      <TransactionBottomRow />
    </Box>
  );
};

export default Dashboard;
