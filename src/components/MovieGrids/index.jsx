import React, { useEffect, useState } from "react";
import "./style.css";
import MovieCard from "../MovieCard";

const MovieGrids = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("movies.json")
      .then((response) => response.json())
      .then((data) => setMovies(data));
  }, []);

  return (
    <div className="movies__grid">
      {movies.map(({ id, title, image, genre, rating }) => (
        <MovieCard
          key={id}
          imageSrc={image}
          imageAlt={title}
          imageTitle={title}
          title={title}
          genre={genre}
          rating={rating}
        />
      ))}
    </div>
  );
};

export default MovieGrids;
