import Dashboard from "./dashboard/page";
import SideMenu from "@/components/SideMenu";

function Home () {
  return (
    <div className="flex-column">
      <main className="flex w-full flex-col items-center justify-between">
        <SideMenu />
        <Dashboard />
      </main>
    </div>
  );
}

export default Home;
