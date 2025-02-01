import React, { lazy, Suspense, useContext } from "react";
import "./style.css";
import * as T from "../../components/organism/Typography";
import { useNavigate } from "react-router-dom";
import { MovieContext } from "../../context/MovieContext";
import { PATHS } from "../../router/paths";
import ContentLoading from "../../components/molecules/ContentLoading";
const MoviesGridDiv = lazy(() =>
  import("../../components/molecules/MoviesGridDiv")
);
const MovieCard = lazy(() => import("../../components/molecules/MovieCard"));

const WatchlistPage = () => {
  const { movies, watchlist, toggleWatchlist } = useContext(MovieContext);

  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(PATHS.MOVIES.VIEW.replace(":id", id));
  };

  return (
    <div>
      <T.H1 className="title">Your Watchlist</T.H1>
      <Suspense fallback={<ContentLoading size={50} LoadingText />}>
        <MoviesGridDiv>
          {watchlist.map((id) => {
            const movie = movies.find((movie) => movie.id === id);
            return (
              <MovieCard
                key={id}
                movie={movie}
                toggleWatchlist={toggleWatchlist}
                isWatchlisted={true}
                handleClick={handleClick}
              />
            );
          })}
        </MoviesGridDiv>
      </Suspense>
    </div>
  );
};

export default WatchlistPage;
