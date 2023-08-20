import { Routes, Route } from "react-router-dom";
import MovieList from "./app/movieList";

const RoutesConfig = () => (
  <Routes>
    <Route path="/" element={<MovieList />} />
  </Routes>
);

export default RoutesConfig;
