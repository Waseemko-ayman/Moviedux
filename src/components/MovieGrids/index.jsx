import React, { useEffect, useState } from "react";
import "./style.css";
import MovieCard from "../MovieCard";

const MovieGrids = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("movies.json")
      .then((response) => response.json())
      .then((data) => setMovies(data));
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    // console.log(searchTerm);
  };

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <input
        type="text"
        className="search__input"
        placeholder="Search movies..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <div className="movies__grid">
        {filteredMovies.map(({ id, title, image, genre, rating }) => (
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
    </>
  );
};

export default MovieGrids;
