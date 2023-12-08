import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import MovieCard from "./MovieCard";
import { options } from "../keys/key";
import EarlyReturn from "./EarlyReturn";

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [url, setUrl] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    // get popular movie list
    setIsLoading(true);
    fetch(
      `https://api.themoviedb.org/3/movie/popular?page=${currentPage}`,
      options
    )
      .then((response) => {
        if (!response.ok)
          throw new Error(
            "An error occurred while loading movies from the API"
          );
        return response.json();
      })
      .then((data) => {
        setMovies((prevMovies) => prevMovies.concat(data.results));
        setTotalPage(data.total_pages);
      })
      .catch((err) => {
        setError(err);
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });

    //  to build an image URL:
    // get a base_url, a file_size and a file_path
    // file_path is from popular movie list
    fetch("https://api.themoviedb.org/3/configuration", options)
      .then((response) => {
        if (!response.ok)
          throw new Error(
            "An error occurred while loading images from the API"
          );
        return response.json();
      })
      .then((response) => {
        const { images } = response;
        const { base_url } = images;
        const { backdrop_sizes } = images;
        const url = `${base_url}${backdrop_sizes[0]}`;

        setUrl(url);
      })
      .catch((err) => {
        setImgError(err);
        console.error(err);
      });
  }, [currentPage]);

  // const handlerDisabled = () => {};

  const nextHandlerClick = () => {
    if (currentPage <= totalPage - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <>
      <section className="my-4">
        <h2 className="text-white/70 text-2xl">Welcome to </h2>

        <h3 className="text-white/70 font-bold text-2xl">Popular movies</h3>
      </section>
      <section>
        <div className="gap-3 place-content-center">
          <div className="grid lg:grid-cols-2 gap-5 sm:gap-3 lg:gap-7 place-content-center">
            <MovieCard movies={movies} apiUrl={url} imgError={imgError} />
          </div>

          <div className="mt-4 mb-2">
            <EarlyReturn isLoading={isLoading} error={error} data={movies}>
              <Button
                className="w-2/3"
                onClick={nextHandlerClick}
                variant="contained"
                disabled={currentPage === totalPage}
              >
                <p className="text-xl">Upload more results</p>
              </Button>
            </EarlyReturn>
          </div>
        </div>
      </section>
    </>
  );
}
