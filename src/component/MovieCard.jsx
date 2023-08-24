import { useEffect, useState } from "react";
import MovieDetails from "./MovieDetails";
import { Link, Route, Routes } from "react-router-dom";
import { Avatar, Button } from "@mui/material";
import { deepOrange } from "@mui/material/colors";

export default function MoviesList({ movies, apiUrl, id, movieDetails }) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NTBmZDgwODBlNmZiYjczMmNmMjZhYmM1YzY1ZmZmYyIsInN1YiI6IjY0ZTNjYWExYzYxM2NlMDEyY2MyZGZiNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4n4C-p_jUrqoCkgkqVoOC5Rb6TevKaPGVJvpV6oSCn0",
    },
  };
  return (
    <>
      {movies &&
        movies.slice(0, 20).map((movie) => {
          const text = movie.overview.split(" ", 21).join(" ");

          return (
            <section
              key={movie.id}
              className="md:flex max-w-xs mx-auto shadow-2xl shadow-bg-gray-50 bg-gray-50 hover:bg-blue-100 rounded-xl overflow-hidden md:max-w-2xl"
            >
              {/* <div className="md:flex"> */}
              <div className="md:shrink-0">
                <img
                  className="h-40 w-full object-cover md:h-full md:w-52"
                  src={`${apiUrl}${movie.poster_path}`}
                  alt={movie.title}
                />
              </div>
              <div className="p-4">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                  <Avatar
                    sx={{ bgcolor: deepOrange[300], width: 56, height: 56 }}
                  >
                    {movie.vote_average}
                  </Avatar>
                </div>
                <Link
                  to={`movie-details/${movie.id}`}
                  className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
                >
                  {movie.title}
                </Link>

                <p className="h-32 mt-2 ms:pb-0 md:pb-56 text-slate-500">
                  {text + "..."}
                </p>

                <Button variant="outlined" href={`movie-details/${movie.id}`}>
                  More
                </Button>
              </div>
              {/* </div> */}
            </section>
          );
        })}
    </>
  );
}
