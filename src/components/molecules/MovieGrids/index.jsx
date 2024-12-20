import React, { useState } from "react";
import "./style.css";
import MovieCard from "../MovieCard";
import FilterBar from "../FilterBar";
import Loading from "../Loading";
import { Navigate } from "react-router-dom";
import ErrorFetching from "../../atoms/ErrorFetching";
import MoviesGridDiv from "../MoviesGridDiv";

const MovieGrids = ({
  movies,
  watchlist,
  handleToggleWatchlist,
  isLoading,
  hasError,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movieId, setMovieId] = useState(null);

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
      genre === "All Genres" ||
      movie.genre.toLowerCase() === genre.toLowerCase()
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

  const handleClick = (id) => {
    setMovieId(id);
  };

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
      {hasError ? (
        <ErrorFetching errorText="Error fetching movies !" />
      ) : (
        <>
          {!isLoading && (
            <MoviesGridDiv>
              {filteredMovies.map((movie) => (
                <MovieCard
                  key={movie.id}
                  movie={movie}
                  handleToggleWatchlist={handleToggleWatchlist}
                  isWatchlisted={watchlist.includes(movie.id)}
                  handleClick={handleClick}
                />
              ))}
            </MoviesGridDiv>
          )}
          {isLoading && <Loading />}
          {movieId && <Navigate to={`${movieId}`} />}
        </>
      )}
    </>
  );
};

export default MovieGrids;
