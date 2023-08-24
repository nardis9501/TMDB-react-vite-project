import { useEffect, useState } from "react";
import "./App.css";
import MovieCard from "./component/MovieCard";
import { Button, Chip } from "@mui/material";

function App() {
  const [movies, setMovies] = useState([]);
  const [url, setUrl] = useState();
  const [fetchOk, setFetchOk] = useState(0);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState();

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
    fetch(`https://api.themoviedb.org/3/movie/popular?page=${page}`, options)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
        setTotalPage(data.total_pages);
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
  }, [page]);

  // const handlerDisabled = () => {};

  const nextHandlerClick = () => {
    if (page <= totalPage - 1) {
      setPage(page + 1);
    }
  };

  const previousHandlerClick = () => {
    if (page >= 2) {
      setPage(page - 1);
    }
  };

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
          <div className="flex place-content-center items-center h-14 fixed bottom-0 left-0 right-0 backdrop-blur  bg-slate-200/40">
            <Button onClick={previousHandlerClick} variant="contained">
              <p className="text-xl">-</p>
            </Button>
            <p className="px-5">
              page:
              <Chip label={page} />/
              <Chip label={totalPage} />
            </p>

            <Button onClick={nextHandlerClick} variant="contained">
              <p className="text-xl">+</p>
            </Button>
          </div>
        </section>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
}

export default App;
