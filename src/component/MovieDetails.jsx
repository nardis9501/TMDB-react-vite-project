import React, { useEffect, useState } from "react";
import tmdb from "../../public/tmdb.svg";
import { useParams } from "react-router-dom";
import MiddleDividers from "./MiddleDivider";
import { options } from "../keys/key";
import EarlyReturn from "./EarlyReturn";

export default function MovieDetails() {
  const [details, setDetails] = useState([]);
  const { movieId } = useParams(); //get dynamic segment od URL
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}`, options)
      .then((response) => {
        if (!response.ok)
          throw new Error(
            "An error occurred while loading the information of this movie from the API."
          );
        return response.json();
      })
      .then((response) => {
        setDetails(response);
      })
      .catch((err) => {
        setError(err);
        console.error(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [movieId]);

  return (
    <>
      <EarlyReturn isLoading={isLoading} error={error} data={details}>
        <section className="content-center">
          <div className="">
            <div className="flex place-content-between flex-wrap p-6">
              <h1 className="text-2xl md:text-3xl lg:text-5xl text-white/80 ">
                {details.title}
              </h1>
              <h2 className="text-white/60">
                Original title: {details.original_title}
              </h2>
              <div className="flex place-content-between">
                <time dateTime="" className="text-white/80">
                  {details.release_date}
                </time>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-2 mr-2 lg:mr-0  ">
            <img
              className="w-2/6 h-auto"
              src={`http://image.tmdb.org/t/p/w300/${details.poster_path}`}
              alt="Imagen"
            />
            <img
              className="w-4/6 h-auto"
              src={`http://image.tmdb.org/t/p/w500/${details.backdrop_path}`}
              alt="Imagen"
            />
          </div>
        </section>
        <section>
          <MiddleDividers
            details={details}
            genres={details.genres}
            homepage={details.homepage}
            companies={details.production_companies}
            companieLogo={details.logo_path}
          />
        </section>

        <section className="text-xl">Copyright</section>
      </EarlyReturn>
    </>
  );
}
