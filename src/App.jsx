import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { data } from "autoprefixer";
import MovieCard from "./component/MovieCard";

function App() {
  const [movies, setMovies] = useState([]);
  const [url, setUrl] = useState();
  const [fetchOk, setFetchOk] = useState(0);
  // API's Autentication
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NTBmZDgwODBlNmZiYjczMmNmMjZhYmM1YzY1ZmZmYyIsInN1YiI6IjY0ZTNjYWExYzYxM2NlMDEyY2MyZGZiNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4n4C-p_jUrqoCkgkqVoOC5Rb6TevKaPGVJvpV6oSCn0",
    },
  };

  useEffect(() => {
    // get popular movie list
    fetch("https://api.themoviedb.org/3/movie/popular", options)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
      })
      .catch((err) => console.error(err));

    //  to build an image URL:
    // get a base_url, a file_size and a file_path
    // file_path is from popular movie list
    fetch("https://api.themoviedb.org/3/configuration", options)
      .then((response) => response.json())
      .then((response) => {
        const { images } = response;
        const { base_url } = images;
        const { backdrop_sizes } = images;
        const url = `${base_url}${backdrop_sizes[0]}`;

        setUrl(url);
        setFetchOk(1);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      {fetchOk ? (
        <section>
          <h2 className="text-white/70 text-2xl">Welcome to </h2>
          <h1 className="mb-3 text-white/95">The Movie Database</h1>
          <div className="grid gap-3">
            <h3 className="text-white/70 font-bold text-2xl">Popular movies</h3>
            <div className="grid lg:grid-cols-2 gap-5 sm:gap-3 lg:gap-7 place-content-center">
              <MovieCard movies={movies} apiUrl={url} />
            </div>
          </div>
        </section>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
}

export default App;
