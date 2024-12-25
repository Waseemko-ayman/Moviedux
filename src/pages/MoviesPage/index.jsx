import React, { useContext, useState } from "react";
import "./style.css";
import MovieCard from "../../components/molecules/MovieCard";
import FilterBar from "../../components/molecules/FilterBar";
import Loading from "../../components/molecules/Loading";
import { useNavigate } from "react-router-dom";
import ErrorFetching from "../../components/atoms/ErrorFetching";
import MoviesGridDiv from "../../components/molecules/MoviesGridDiv";
import { MovieContext } from "../../context/MovieContext";
import { PATHS } from "../../router/paths";
import axios from "axios";
import { API_URL } from "../../config/api";
import Input from "../../components/atoms/Input";

const MoviesPage = () => {
  const { movies, setMovies, watchlist, toggleWatchlist, isLoading, hasError } =
    useContext(MovieContext);

  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [genre, setGenre] = useState("All Genres");
  const [rating, setRating] = useState("All");
  const [, setIsLoading] = useState(false);
  const [, setError] = useState(null);

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
    navigate(PATHS.MOVIES.VIEW.replace(":id", id));
  };

  const handleDelete = async (id) => {
    setIsLoading(true);
    try {
      await axios.delete(`${API_URL}/movies/${id}`);
      // To Reduce The Requests To Server
      setMovies(movies.filter((movie) => movie.id !== id));
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="movies__page">
      <Input
        inputType="text"
        placeholder="Search movies..."
        inputValue={searchTerm}
        handleChange={handleSearchChange}
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
                  toggleWatchlist={toggleWatchlist}
                  isWatchlisted={watchlist.includes(movie.id)}
                  handleClick={handleClick}
                  handleDelete={handleDelete}
                />
              ))}
            </MoviesGridDiv>
          )}
          {isLoading && <Loading />}
        </>
      )}
    </div>
  );
};

export default MoviesPage;
