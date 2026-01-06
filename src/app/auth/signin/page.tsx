"use client";

import React from "react";
import Login from "../page";
import { useSession } from "next-auth/react";
import { Box } from "@mui/material";

const SignIn = () => {
  const { data: session, status } = useSession();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1 style={{ marginBottom: "20px" }}>
        {session ? `Thank you for logging in` : "Please log in"}
      </h1>
      <Login />
    </Box>
  );
};

export default SignIn;
