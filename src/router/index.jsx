import React, { useEffect, useState } from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import WatchlistPage from "../pages/WatchlistPage";
import MovieGrids from "../components/molecules/MovieGrids";
import { PATHS } from "./paths";
import MoviePage from "../pages/MoviePage";
import * as T from "../components/organism/Typography";

const Router = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [watchlist, setWatchlist] = useState([]);
  const [hasError, setHasError] = useState(false);

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
      .then((data) => setMovies(data), setIsLoading(false))
      .catch((error) => {
        console.error("Error fetching movies:", error);
        setHasError(true);
        setIsLoading(false);
      });
  }, []);
  return (
    <Routes>
      <Route path={PATHS.MOVIES} element={<Outlet />}>
        <Route
          index
          element={
            <MovieGrids
              movies={movies}
              watchlist={watchlist}
              handleToggleWatchlist={toggleWatchlist}
              isLoading={isLoading}
              hasError={hasError}
            />
          }
        />
        <Route path=":id" element={<MoviePage hasError={hasError} />} />
      </Route>

      <Route path={PATHS.WATCHLIST} element={<Outlet />}>
        <Route
          index
          element={
            <WatchlistPage
              movies={movies}
              watchlist={watchlist}
              handleToggleWatchlist={toggleWatchlist}
              isLoading={isLoading}
            />
          }
        />
        <Route path=":id" element={<MoviePage hasError={hasError} />} />
      </Route>
      <Route path={PATHS.ERRORS.NOT_FOUND} element={<T.H1>No Page</T.H1>} />
      <Route
        path="*"
        element={<Navigate to={`${PATHS.ERRORS.NOT_FOUND}`} replace={true} />}
      />
    </Routes>
  );
};

export default Router;
