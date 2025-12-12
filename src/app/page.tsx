'use client'

import Dashboard from "./dashboard/page"; // import education purposes approach
import SideMenu from "@/components/SideMenu";
import Login from "./login/page";
import { useSession } from "next-auth/react";

function Home () {
  const { data: session } = useSession();
  
  return (
    <div className="flex w-full flex-col items-center justify-between">
      {session && (
        <>
          <Dashboard /> 
          <SideMenu />
        </>)}
      <Login />
    </div>
  );
}

export default Home;