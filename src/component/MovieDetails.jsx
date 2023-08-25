import React, { useEffect, useState } from "react";
import tmdb from "../../public/tmdb.svg";
import { useParams } from "react-router-dom";
import MiddleDividers from "./MiddleDivider";
import { options } from "../keys/key";

export default function MovieDetails() {
  const [details, setDetails] = useState([]);
  const [fetchOk, setFetchOk] = useState(0); //fetch OK? tru=>1, false=>0
  const { movieId } = useParams(); //get dynamic segment od URL

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}`, options)
      .then((response) => response.json())
      .then((response) => {
        setDetails(response);
        setFetchOk(1);
      })
      .catch((err) => {
        console.error(err), alert(err.message);
      });
  }, [movieId]);

  return (
    <>
      {fetchOk ? (
        <main>
          <section className="content-center">
            <div className="flex flex-row-reverse">
              <img className="w-3/12" src={tmdb} alt="TMDB logo" />
            </div>
            <div className="flex place-content-between">
              <div className="">
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
        </main>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
}
