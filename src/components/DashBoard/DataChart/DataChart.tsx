"use client";

import React, { useState, useEffect } from "react";
import { Chart, registerables } from "chart.js";
import { DarkOptions } from "./Themes";
import { months } from "../../../helper/Util";
import { ChartConfiguration } from "chart.js";

const DataChart = (props: ChartConfiguration) => {
  const { data, options } = props;
  const chartRef = React.useRef<HTMLCanvasElement>(null);

  const labels = months({ count: 7 });
  useEffect(() => {
    if (chartRef.current) {
      const chart = new Chart(chartRef.current, {
        ...props,
        options: {
          ...options,
          ...DarkOptions,
        },
      });
      return () => {
        chart.destroy();
      };
    }
  }, [data]);
  return <canvas ref={chartRef} />;
};

Chart.register(...registerables);

export default DataChart;
