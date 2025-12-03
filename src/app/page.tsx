import Dashboard from "./dashboard/page";
import SideMenu from "@/components/SideMenu";
import Login from "./login/page";

function Home () {
  return (
    <div className="flex min-h-auto items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full flex-col items-center justify-between">
        <SideMenu />
        <Dashboard />
        <Login />
      </main>
    </div>
  );
}

export default Home;
