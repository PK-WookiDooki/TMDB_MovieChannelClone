import { Outlet } from "react-router-dom";
import { Footer, NB } from "../components";

const MainLayout = () => {
  return (
    <div className="bg-slate-700 text-white flex flex-col min-h-screen tracking-wide">
      <NB />

      <main className=" w-full mx-auto flex flex-1 overflow-hidden pb-5">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;
