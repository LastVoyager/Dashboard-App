import React from "react";
import { Grid, Paper } from "@mui/material";
import DataChart from "../DataChart/DataChart";
import scss from "./TransactionBottomRow.module.scss";
import { doughnutChartData } from "@/components/mockData";

//maybe need to make separate component for each chart box
const TransactionBottomRow = () => {
  return (
    <Grid container spacing={2} className={scss.bottomRow}>
      <Grid>
        <Paper className={scss.dataCard}>
          <p>Transaction per user type</p>
          <DataChart type={"doughnut"} data={doughnutChartData} />
        </Paper>
      </Grid>
      <Grid>
        <Paper className={scss.dataCard}>
          <p>Transaction per user type</p>
          <DataChart type={"doughnut"} data={doughnutChartData} />
        </Paper>
      </Grid>
      <Grid>
        <Paper className={scss.dataCard}>
          <p>Transaction per user type</p>
          <DataChart type={"doughnut"} data={doughnutChartData} />
        </Paper>
      </Grid>
      <Grid>
        <Paper className={scss.dataCard}>
          <p>Transaction per user type</p>
          <DataChart type={"doughnut"} data={doughnutChartData} />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default TransactionBottomRow;
