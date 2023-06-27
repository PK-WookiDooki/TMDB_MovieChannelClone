import { Outlet } from "react-router-dom";
import { NB } from "../components";

const MainLayout = () => {
  return (
    <section className="bg-slate-700 text-white flex flex-col min-h-screen tracking-wide">
      <NB />

      <main className="flex flex-1 overflow-hidden pb-5">
        <Outlet />
      </main>

      {/* footer */}
    </section>
  );
};

export default MainLayout;
