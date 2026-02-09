"use client";

import React, { useState } from "react";
import { useSession } from "next-auth/react";
import {
  Avatar,
  Typography,
  Box,
  Grid,
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
} from "@mui/material";
import Paper from "@mui/material/Paper";

function Profile() {
  const { data: session } = useSession();
  //default values for form`s inputs fields based on session data
  const names = session?.user?.name ? session.user.name.split(" ") : [];
  const firstName = names[0];
  const lastName = names.length > 1 ? names[names.length - 1] : "";
  const email = session?.user?.email;

  const [formData, setFormData] = useState({
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: "",
    confirmPassword: "",
    receiveEmail: false,
  });

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submitted form:", formData);
  };

  return (
    <>
      <Box sx={{ maxWidth: 800, margin: "0 auto" }}>
        <h1 style={{ fontSize: "2rem" }}>Profile</h1>
        <Box sx={{ mb: 2 }}>
          <Typography>Welcome to your profile page!</Typography>
          <Typography>
            User name: {session?.user?.name || "Not provided"}{" "}
          </Typography>
          <Typography>
            User email: {session?.user?.email || "Not provided"}
          </Typography>
        </Box>
        <Paper sx={{ padding: "2rem 2rem", marginBottom: "2rem" }}>
          <Grid container justifyContent="center">
            <Grid size={{ xs: 12, sm: 6, md: 6 }}>
              <Box display="flex" flexDirection="column" alignItems="center">
                <Avatar
                  sx={{ width: 100, height: 100, marginBottom: "1rem" }}
                  src={session?.user?.image || undefined}
                />
              </Box>
              <form
                onSubmit={handleSubmit}
                style={{ maxWidth: 600, margin: "0 auto" }}
              >
                <Grid container spacing={2}>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      required
                      fullWidth
                      label="First Name"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleFormChange}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      required
                      fullWidth
                      label="Last Name"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleFormChange}
                    />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <TextField
                      required
                      fullWidth
                      label="Email"
                      name="email"
                      autoComplete="off"
                      value={formData.email}
                      onChange={handleFormChange}
                    />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <TextField
                      required
                      fullWidth
                      type="password"
                      label="Password"
                      name="password"
                      autoComplete="new-password"
                      value={formData.password}
                      onChange={handleFormChange}
                    />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <TextField
                      required
                      fullWidth
                      type="password"
                      label="Confirm Password"
                      name="confirmPassword"
                      autoComplete="new-password"
                      value={formData.confirmPassword}
                      onChange={handleFormChange}
                    />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={formData.receiveEmail}
                          name="receiveEmail"
                          color="primary"
                          onChange={handleFormChange}
                        />
                      }
                      label="Receive promotional emails"
                    />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <Button type="submit" variant="contained" color="primary">
                      Save Changes
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </>
  );
}

export default Profile;
