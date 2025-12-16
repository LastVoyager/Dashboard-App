import React from 'react';
import {Box, Grid, Paper} from '@mui/material';
import scss from './dashboard.module.scss';

const Dashboard = () => {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, sm: 4 }}>
          <Paper className={scss.dataCard}>Card 1</Paper>
        </Grid>
        <Grid size={{ xs: 12, sm: 4 }}>
          <Paper className={scss.dataCard}>Card 2</Paper>
        </Grid>
        <Grid size={{ xs: 12, sm: 4 }}>
          <Paper className={scss.dataCard}>Card 3</Paper>
        </Grid>
        <Grid size={12} sx={{ marginTop: 2 }}>
          <Paper className={scss.dataCard}>Full Width Card</Paper>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Dashboard;