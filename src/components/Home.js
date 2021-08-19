import React from "react";
import { MovieList } from "./MovieList";

export const Home = ({ movies }) => {
  return (
    <div>
      <h1>this is home page</h1>
      <MovieList movies={movies} />
    </div>
  );
};