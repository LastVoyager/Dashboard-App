import { ChartConfiguration } from "chart.js";

export const LightOptions: ChartConfiguration["options"] = {
  scales: {
    y: {
      beginAtZero: true,
      grid: {
        color: "rgba(0,0,0,0.1)",
      },
    },
    x: {
      grid: {
        color: "rgba(0,0,0,0.1)",
      },
    },
  },
};

export const DarkOptions: ChartConfiguration["options"] = {
  scales: {
    y: {
      beginAtZero: true,
      grid: {
        color: "rgba(0,0,0,0.1)",
      },
      ticks: {
        color: "white",
      },
    },
    x: {
      grid: {
        color: "rgba(0,0,0,0.1)",
      },
      ticks: {
        color: "white",
      },
    },
  },
  plugins: {
    legend: {
      labels: {
        color: "white",
      },
    },
  },
};
