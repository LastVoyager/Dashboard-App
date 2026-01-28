"use client";

import Dashboard from "./dashboard/page";
import { useSession, signIn } from "next-auth/react";
import { Button, Typography, useTheme } from "@mui/material";

function Home() {
  const { data: session, status } = useSession();
  //const theme = useTheme();

  // Loading State
  if (status === "loading") {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "calc(100vh - 124px)",
          backgroundColor: "#666666", // Need to be latly fixed to match theme mode dynamically!!!!
          width: "100vw",
          marginLeft: "-24px",
          marginRight: "-24px",
        }}
      >
        <Typography variant="h6" style={{ color: "#ffffff" }}>
          Loading...
        </Typography>
      </div>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        marginLeft: "48px",
        padding: " 0px 60px",
      }}
    >
      {session ? (
        <>
          <Typography
            variant="h5"
            color="rgba(238, 152, 22, 0.67)"
            sx={{ textAlign: "center" }}
          >
            Thank you for logging in
          </Typography>
          <Dashboard />
        </>
      ) : (
        <Button variant="contained" color="success" onClick={() => signIn()}>
          Sign in
        </Button>
      )}
    </div>
  );
}

export default Home;
