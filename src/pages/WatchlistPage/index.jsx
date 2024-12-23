import React, { useContext } from "react";
import "./style.css";
import * as T from "../../components/organism/Typography";
import MovieCard from "../../components/molecules/MovieCard";
import MoviesGridDiv from "../../components/molecules/MoviesGridDiv";
import Loading from "../../components/molecules/Loading";
import { useNavigate } from "react-router-dom";
import { MovieContext } from "../../context/MovieContext";
import { PATHS } from "../../router/paths";

const WatchlistPage = () => {
  const { movies, watchlist, toggleWatchlist, isLoading } =
    useContext(MovieContext);

  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(PATHS.MOVIES.VIEW.replace(":id", id));
  };

  return (
    <div>
      <T.H1 className="title">Your Watchlist</T.H1>
      {!isLoading && (
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
      )}
      {isLoading && <Loading />}
    </div>
  );
};

export default WatchlistPage;
