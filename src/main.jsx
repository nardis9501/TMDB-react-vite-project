import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./component/AppLayout.jsx";
import HomePage from "./component/HomePage.jsx";
import MovieDetails from "./component/MovieDetails.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <HashRouter>
    <AppLayout>
      <Routes>
        <Route path={"/"} element={<App />} />
        <Route index element={<HomePage />} />
        <Route path={"movie-details/:movieId"} element={<MovieDetails />} />

        <Route
          path={"movie-details"}
          element={<h1 className="text-black">Ruta dinamica</h1>}
        />
      </Routes>
    </AppLayout>
  </HashRouter>
  // <BrowserRouter>
  //   <AppLayout>
  //     <App />
  //   </AppLayout>
  // </BrowserRouter>
);
