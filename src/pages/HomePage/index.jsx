import React, { useEffect, useState } from "react";
import MovieGrids from "../../components/MovieGrids";
import "./style.css";

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("movies.json")
      .then((response) => response.json())
      .then((data) => setMovies(data));
  }, []);
  return (
    <>
      <MovieGrids movies={movies} />
    </>
  );
};

export default HomePage;
