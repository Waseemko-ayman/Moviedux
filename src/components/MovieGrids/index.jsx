import React, { useEffect, useState } from "react";
import "./style.css";
import MovieCard from "../MovieCard";
import FilterBar from "../FilterBar";

const MovieGrids = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const [genre, setGenre] = useState("All Genres");
  const [rating, setRating] = useState("All");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleGenreChange = (e) => {
    setGenre(e.target.value);
  };

  const handleRatingChange = (e) => {
    setRating(e.target.value);
  };

  const matchesGenre = (movie, genre) => {
    return (
      genre === "All Genres" || movie.genre.toLowerCase() === genre.toLowerCase()
    );
  };

  const matchesRating = (movie, rating) => {
    switch (rating) {
      case "All":
        return true;
      case "Good":
        return movie.rating >= 8;
      case "Ok":
        return movie.rating >= 5 && movie.rating < 8;
      case "Bad":
        return movie.rating < 5;
      default:
        return false;
    }
  };

  const matchesSearchTerm = (movie, searchTerm) => {
    return movie.title.toLowerCase().includes(searchTerm.toLowerCase());
  };

  const filteredMovies = movies.filter(
    (movie) =>
      matchesGenre(movie, genre) &&
      matchesRating(movie, rating) &&
      matchesSearchTerm(movie, searchTerm)
  );

  useEffect(() => {
    fetch("movies.json")
      .then((response) => response.json())
      .then((data) => setMovies(data));
  }, []);

  return (
    <>
      <input
        type="text"
        className="search__input"
        placeholder="Search movies..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <FilterBar
        genre={genre}
        handleGenre={handleGenreChange}
        rating={rating}
        handleRating={handleRatingChange}
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
