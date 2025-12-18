"use client";

import Dashboard from "./dashboard/page"; // import education purposes approach
import SideMenu from "@/components/sideMenu/SideMenu";
import Login from "./login/page";
import { useSession } from "next-auth/react";

function Home() {
  const { data: session } = useSession();

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      {session && (
        <>
          <SideMenu />
          <Dashboard />
        </>
      )}
      <Login />
    </div>
  );
}

export default Home;
