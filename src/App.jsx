import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import { Credits, Home, MDetail } from "./pages";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="detail/:id">
            <Route index element={<MDetail />} />
            <Route path="cast" element={<Credits />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
