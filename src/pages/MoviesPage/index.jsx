import React, { lazy, Suspense, useContext, useState } from "react";
import FilterBar from "../../components/molecules/FilterBar";
import { useNavigate } from "react-router-dom";
import { MovieContext } from "../../context/MovieContext";
import { PATHS } from "../../router/paths";
import Input from "../../components/atoms/Input";
import ContentLoading from "../../components/molecules/ContentLoading";
import ErrorFetching from "../../components/atoms/ErrorFetching";

const MoviesGridDiv = lazy(() =>
  import("../../components/molecules/MoviesGridDiv")
);
const MovieCard = lazy(() => import("../../components/molecules/MovieCard"));

const MoviesPage = () => {
  const { movies, watchlist, toggleWatchlist, error, del } =
    useContext(MovieContext);

  const navigate = useNavigate();
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
    del(id);
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
      {error ? (
        <ErrorFetching errorText="Error fetching movies !" />
      ) : (
        <Suspense fallback={<ContentLoading size={50} LoadingText />}>
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
        </Suspense>
      )}
    </div>
  );
};

export default MoviesPage;
