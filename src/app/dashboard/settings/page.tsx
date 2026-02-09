"use client";
import { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  FormControl,
  FormGroup,
  FormControlLabel,
  Switch,
  Button,
} from "@mui/material";

const Settings = () => {
  const [showRevenue, setShowRevenue] = useState(true);
  const [showProfit, setShowProfit] = useState(true);
  const [showOrders, setShowOrders] = useState(true);
  const [showCustomers, setShowCustomers] = useState(true);

  const handleShowRevenueChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setShowRevenue(event.target.checked);
  };
  const handleShowProfitChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setShowProfit(event.target.checked);
  };
  const handleShowOrdersChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setShowOrders(event.target.checked);
  };

  const handleShowCustomersChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setShowCustomers(event.target.checked);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Some logic here.
  };
  return (
    <>
      <h1>Settings</h1>
      <Box>
        <Typography variant="h6">This is the settings page.</Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12 }}>
              <FormControl component="fieldset">
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={showRevenue}
                        onChange={handleShowRevenueChange}
                      />
                    }
                    label="Revenue"
                  />
                  <FormControlLabel
                    control={
                      <Switch
                        checked={showProfit}
                        onChange={handleShowProfitChange}
                      />
                    }
                    label="Profit"
                  />
                  <FormControlLabel
                    control={
                      <Switch
                        checked={showOrders}
                        onChange={handleShowOrdersChange}
                      />
                    }
                    label="Orders"
                  />
                  <FormControlLabel
                    control={
                      <Switch
                        checked={showCustomers}
                        onChange={handleShowCustomersChange}
                      />
                    }
                    label="Customers"
                  />
                </FormGroup>
              </FormControl>
            </Grid>
            <Grid size={{ xs: 12 }}>
              <Button type="submit" variant="contained" color="primary">
                Save
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </>
  );
};

export default Settings;
