"use client";

import Dashboard from "./dashboard/page"; // import education purposes approach
import Login from "./auth/page";
import { useSession } from "next-auth/react";

function Home() {
  const { data: session } = useSession();

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      {session && <Dashboard />}
      {!session && <Login />}
    </div>
  );
}

export default Home;
