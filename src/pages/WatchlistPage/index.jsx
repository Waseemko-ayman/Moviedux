import React, { useState } from "react";
import "./style.css";
import * as T from "../../components/organism/Typography";
import MovieCard from "../../components/molecules/MovieCard";
import MoviesGridDiv from "../../components/molecules/MoviesGridDiv";
import Loading from "../../components/molecules/Loading";
import { Navigate } from "react-router-dom";

const WatchlistPage = ({
  movies,
  watchlist,
  handleToggleWatchlist,
  isLoading,
}) => {
  const [movieId, setMovieId] = useState(null);

  const handleClick = (id) => {
    setMovieId(id);
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
                handleToggleWatchlist={handleToggleWatchlist}
                isWatchlisted={true}
                handleClick={handleClick}
              />
            );
          })}
        </MoviesGridDiv>
      )}
      {isLoading && <Loading />}
      {movieId && <Navigate to={`/${movieId}`} />}
    </div>
  );
};

export default WatchlistPage;
