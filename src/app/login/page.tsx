"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import { Button } from "@mui/material";

function Login() {
  const { data: session, status } = useSession();

  // Temporary solution for loading state
  if (status === "loading") {
    return (
      <div
        style={{
          minHeight: "100vh",
          backgroundColor: "rgba(33, 33, 33, 0.66)",
        }}
      />
    );
  }

  if (session) {
    return (
      <>
        <Button variant="contained" color="error" onClick={() => signOut()}>
          Sign out
        </Button>
      </>
    );
  }
  return (
    <>
      <h2>Please sign in</h2>
      <br />
      <Button variant="contained" color="success" onClick={() => signIn()}>
        Sign in
      </Button>
    </>
  );
}

export default Login;
