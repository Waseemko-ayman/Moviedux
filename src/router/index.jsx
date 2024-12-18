import React, { useEffect, useState } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import WatchlistPage from "../pages/WatchlistPage";
import MovieGrids from "../components/MovieGrids";
import MainLayout from "../components/MainLayout";
import { PATHS } from "./paths";
import MoviePage from "../pages/MoviePage";

const Router = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
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
      .then((data) => setMovies(data), setIsLoading(false));
  }, []);
  return (
    <>
      <MainLayout>
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
                />
              }
            />
            <Route path=":id" element={<MoviePage />} />
          </Route>

          <Route
            path={PATHS.WATCHLIST}
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

export default Router;
