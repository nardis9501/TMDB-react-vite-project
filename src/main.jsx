import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MovieDetails from "./component/MovieDetails.jsx";
import AppLayout from "./component/AppLayout.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AppLayout>
      <Routes>
        <Route path={"/"} element={<App />} />
        <Route path={"movie-details/:movieId"} element={<MovieDetails />} />
        <Route
          path={"movie-details"}
          element={<h1 className="text-black">Ruta dinamica</h1>}
        />
      </Routes>
    </AppLayout>
  </BrowserRouter>
);
