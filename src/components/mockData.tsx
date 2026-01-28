//DUMB DATA FOR CHARTS

import { months } from "../helper/Util";

//const labels = months({ count: 7 });

export const lineChartData = {
  labels: months({ count: 12 }),
  datasets: [
    {
      label: "Transactions",
      data: [65, 59, 80, 81, 56, 55, 40, 45, 60, 70, 75, 90],
      fill: false,
      borderColor: "#4bc0c0",
      tension: 0.1,
    },
  ],
};

export const doughnutChartData = {
  labels: ["Direct", "Referral", "Social"],
  datasets: [
    {
      label: "Traffic Sources",
      data: [300, 50, 100],
      backgroundColor: ["#ff6384", "#36a2eb", "#ffce56"],
      hoverOffSet: 4,
    },
  ],
};
