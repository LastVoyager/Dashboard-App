import React from "react";
import { Grid } from "@mui/material";
import DataCard from "../DataCard/DataCard";
import scss from "./DataRibbon.module.scss";

const DataRibbon = () => {
  return (
    <Grid
      container
      gap={2}
      className={scss.dataRibbon}
      justifyContent={"space-around"}
    >
      <Grid>
        <DataCard
          title={"Total Sales"}
          value={"462"}
          description={"Total sales made today"}
        />
      </Grid>
      <Grid>
        <DataCard
          title={"Total Sales"}
          value={"462"}
          description={"Total sales made today"}
        />
      </Grid>
      <Grid>
        <DataCard
          title={"Total Sales"}
          value={"462"}
          description={"Total sales made today"}
        />
      </Grid>
      <Grid>
        <DataCard
          title={"Total Sales"}
          value={"462"}
          description={"Total sales made today"}
        />
      </Grid>
    </Grid>
  );
};

export default DataRibbon;
