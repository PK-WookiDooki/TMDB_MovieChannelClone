import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import {
  MCredits,
  Home,
  MDetail,
  Movies,
  NFPage,
  SMovies,
  Series,
  SDetail,
  SCredits,
} from "./pages";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />

          {/* search route */}
          <Route path="search" element={<SMovies />} />

          {/* tv routes */}
          <Route path="tv">
            <Route index element={<Series />} />
            <Route path="detail/:id">
              <Route index element={<SDetail />} />
              <Route path="cast" element={<SCredits />} />
            </Route>
          </Route>

          {/* movies routes */}
          <Route path="movies">
            <Route index element={<Movies />} />
            <Route path="detail/:id">
              <Route index element={<MDetail />} />
              <Route path="cast" element={<MCredits />} />
            </Route>
          </Route>
          <Route path="*" element={<NFPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
