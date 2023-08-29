import { useEffect, useState } from "react";
import "./App.css";
import MovieCard from "./component/MovieCard";
import { Button, Chip } from "@mui/material";
import { options } from "./keys/key";

function App() {
  const [movies, setMovies] = useState([]);
  const [url, setUrl] = useState();
  const [isLoading, setIsLoading] = useState();
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState();
  const [imgIsLoading, setImgIsLoading] = useState();

  // API's Autentication
  // Login https://developers.themoviedb.org/ get an options key and save in ./src/keys/key.jsx. It's look like this (copy it and replace the access token value):
  // export const options = {
  //   method: "GET",
  //   headers: {
  //     accept: "application/json",
  //     Authorization: "Bearer {API read access token}", //example => Authorization: "Bearer eyJhbGciOp_jUrqoCkgkqVoOC5Rb6TevKaPGVJvpV6oSCn0",
  //   },
  // };

  useEffect(() => {
    // get popular movie list
    setIsLoading(true);
    fetch(`https://api.themoviedb.org/3/movie/popular?page=${page}`, options)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
        setTotalPage(data.total_pages);
        setIsLoading(false);
      })
      .catch((err) => (console.error(err), alert(err.message)));

    //  to build an image URL:
    // get a base_url, a file_size and a file_path
    // file_path is from popular movie list
    setImgIsLoading(true);
    fetch("https://api.themoviedb.org/3/configuration", options)
      .then((response) => response.json())
      .then((response) => {
        const { images } = response;
        const { base_url } = images;
        const { backdrop_sizes } = images;
        const url = `${base_url}${backdrop_sizes[0]}`;

        setUrl(url);
        setImgIsLoading(false);
      })
      .catch((err) => {
        console.error(err), alert(err.message);
      });
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
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <section>
          <h2 className="text-white/70 text-2xl">Welcome to </h2>
          <h1 className="mb-3 text-white/95">The Movie Database</h1>
          <div className="grid gap-3">
            <h3 className="text-white/70 font-bold text-2xl">Popular movies</h3>
            <div className="grid lg:grid-cols-2 gap-5 sm:gap-3 lg:gap-7 place-content-center">
              <MovieCard
                movies={movies}
                apiUrl={url}
                imgIsLoading={imgIsLoading}
              />
            </div>
          </div>
          <div className="flex place-content-center items-center h-14 fixed bottom-0 left-0 right-0 backdrop-blur  bg-slate-200/40">
            <Button
              onClick={previousHandlerClick}
              variant="contained"
              disabled={page === 1}
            >
              <p className="text-xl">-</p>
            </Button>
            <div className="px-5">
              page:
              <Chip label={page} />/
              <Chip label={totalPage} />
            </div>

            <Button
              onClick={nextHandlerClick}
              variant="contained"
              disabled={page === totalPage}
            >
              <p className="text-xl">+</p>
            </Button>
          </div>
        </section>
      )}
    </>
  );
}

export default App;
