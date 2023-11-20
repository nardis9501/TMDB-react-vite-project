import { Link } from "react-router-dom";
import { Avatar, Button } from "@mui/material";
import { deepOrange } from "@mui/material/colors";

export default function MovieCard({ movies, apiUrl, imgError }) {
  const findReleaseYear = (release_date) => {
    return release_date.split("", 4);
  };
  return (
    <>
      {movies &&
        movies.map((movie) => {
          const text = movie.overview.split(" ", 21).join(" ");

          return (
            <section
              key={movie.id}
              className="md:flex max-w-xs mx-auto shadow-2xl shadow-bg-gray-50 bg-gray-50 hover:bg-blue-100 rounded-xl overflow-hidden md:max-w-2xl"
            >
              <div className="md:shrink-0">
                {imgError ? (
                  <p className="p-2">An error occurred while loading images</p>
                ) : (
                  <img
                    className="h-40 w-full object-cover md:h-full md:w-52"
                    src={`${apiUrl}${movie.poster_path}`}
                    alt={movie.title + " picture"}
                  />
                )}
              </div>
              <div className="p-4">
                <div className="flex items-center place-content-between uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                  <Avatar
                    sx={{ bgcolor: deepOrange[300], width: 56, height: 56 }}
                  >
                    {movie.vote_average.toFixed(1)}
                  </Avatar>
                  <span className="text-[#646cff] text-xl">
                    {findReleaseYear(movie.release_date)}
                  </span>
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
            </section>
          );
        })}
    </>
  );
}
