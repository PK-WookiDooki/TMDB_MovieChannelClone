import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import {
    Home,
    Movies,
    NFPage,
    SMovies,
    Series,
    Detail,
    Credits,
    About,
} from "./pages";
import {SGuard} from "./components/index.js";

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Home />} />

                    {/* search route */}
                    <Route path="search" element={<SGuard>
                        <SMovies />
                    </SGuard>} />

                    {/* tv routes */}
                    <Route path="tv">
                        <Route index element={<Series />} />
                        <Route path=":id">
                            <Route index element={<Detail type={"tv"} />} />
                            <Route
                                path="cast"
                                element={<Credits type={"tv"} />}
                            />
                        </Route>
                    </Route>

                    {/* movies routes */}
                    <Route path="movies">
                        <Route index element={<Movies />} />
                        <Route path=":id">
                            <Route index element={<Detail type={"movie"} />} />
                            <Route
                                path="cast"
                                element={<Credits type={"movie"} />}
                            />
                        </Route>
                    </Route>
                    <Route path="about" element={<About />} />
                    <Route path="*" element={<NFPage />} />
                </Route>
            </Routes>
        </>
    );
};

export default App;
