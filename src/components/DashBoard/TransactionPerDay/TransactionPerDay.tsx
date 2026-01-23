"use client";

import React from "react";
import { Card, Paper, Typography, Grid } from "@mui/material";
import scss from "./TransactionPerDay.module.scss";
import { useTheme } from "@mui/system";

export type TransactionCardType = {
  title: string;
  value: string;
  changeValue: string;
};

export type TransactionPerDayProps = {
  data?: TransactionCardType;
};

const TransactionPerDay = (props: TransactionPerDayProps) => {
  const { data } = props;
  const theme = useTheme();

  return (
    <Grid container gap={2} className={scss.wrapper}>
      <Paper className={scss.transaction}>
        <div className={scss.chart}>
          <Typography>Transaction per day</Typography>
          {/* ChartComponent's place  */}
        </div>
        <div className={scss.cardWrapper}>
          <Card className={scss.card} variant={"outlined"}>
            <div className={scss.cardTitle}>
              <Typography>Total products</Typography>
            </div>
            <div className={scss.cardValue}>
              <Typography>14.88</Typography>
              <Typography color={theme.palette.success.main} fontSize={4}>
                88%
              </Typography>
            </div>
          </Card>
          <Card className={scss.card} variant={"outlined"}>
            <div className={scss.cardTitle}>
              <Typography>Buy-to-detail</Typography>
            </div>
            <div className={scss.cardValue}>
              <Typography>1.44</Typography>
              <Typography color={theme.palette.success.main} fontSize={4}>
                44%
              </Typography>
            </div>
          </Card>
          <Card className={scss.card} variant={"outlined"}>
            <div className={scss.cardTitle}>
              <Typography>Refands</Typography>
            </div>
            <div className={scss.cardValue}>
              <Typography>88</Typography>
              <Typography color={theme.palette.success.main} fontSize={4}>
                14%
              </Typography>
            </div>
          </Card>
        </div>
      </Paper>
    </Grid>
  );
};

export default TransactionPerDay;
