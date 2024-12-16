import React, { useEffect, useState } from "react";
import MovieGrids from "../../components/MovieGrids";
import { Route, Routes } from "react-router-dom";
import WatchlistPage from "../WatchlistPage";
import MainLayout from "../../components/MainLayout";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [watchlist, setWatchlist] = useState([]);

  const toggleWatchlist = (movieId) => {
    setWatchlist((prevState) =>
      prevState.includes(movieId)
        ? prevState.filter((id) => id !== movieId)
        : [...prevState, movieId]
    );
  };

  useEffect(() => {
    fetch("movies.json")
      .then((response) => response.json())
      .then((data) => setMovies(data));
  }, []);
  return (
    <>
      <MainLayout>
        <Routes>
          <Route
            index
            element={
              <MovieGrids
                movies={movies}
                watchlist={watchlist}
                handleToggleWatchlist={toggleWatchlist}
              />
            }
          />
          <Route
            path="/watchlist"
            element={
              <WatchlistPage
                movies={movies}
                watchlist={watchlist}
                handleToggleWatchlist={toggleWatchlist}
              />
            }
          />
        </Routes>
      </MainLayout>
    </>
  );
};

export default Movies;
