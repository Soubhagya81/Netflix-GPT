import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movieList }) => {

  return (
    <div>
      <h1 className="text-lg font-semibold">{title}</h1>
      <div className="flex flex-row space-x-4 p-4 overflow-x-auto">
       
          {movieList &&
            movieList.map((movie) =>  (
              <MovieCard key={movie.id} poster_path={movie.poster_path} />
            ))}
      
      </div>
    </div>
  );
};

export default MovieList;
