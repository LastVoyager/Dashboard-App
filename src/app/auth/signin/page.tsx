"use client";

import React from "react";
import { useSession, signIn } from "next-auth/react";
import { Box, Button } from "@mui/material";

const SignIn = () => {
  const { data: session } = useSession();

  React.useEffect(() => {
    if (session) {
      window.location.href = "/";
    }
  }, [session]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1 style={{ marginBottom: "20px" }}>Please log in</h1>
      <Button variant="contained" color="success" onClick={() => signIn()}>
        Sign in
      </Button>
    </Box>
  );
};

export default SignIn;
