import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import { Credits, Home, MDetail, NFPage, SMovies } from "./pages";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="search" element={<SMovies />} />
          <Route path="detail/:id">
            <Route index element={<MDetail />} />
            <Route path="cast" element={<Credits />} />
          </Route>
          <Route path="*" element={<NFPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
