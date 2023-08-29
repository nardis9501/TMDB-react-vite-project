import "./App.css";
import { Routes, Route } from "react-router-dom";
import MovieDetails from "./component/MovieDetails";
import HomePage from "./component/HomePage";

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<HomePage />} />
      <Route path={"movie-details/:movieId"} element={<MovieDetails />} />
      <Route
        path={"movie-details"}
        element={<h1 className="text-black">Ruta dinamica</h1>}
      />
    </Routes>
  );
}

export default App;
