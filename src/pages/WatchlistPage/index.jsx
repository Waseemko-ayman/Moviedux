import React from "react";
import "./style.css";
import * as T from "../../components/Typography";
import MovieCard from "../../components/MovieCard";

const WatchlistPage = ({ movies, watchlist, handleToggleWatchlist }) => {
  return (
    <div>
      <T.H1 className="title">Your Watchlist</T.H1>
      <div className="watch__list">
        {watchlist.map((id) => {
          const movie = movies.find((movie) => movie.id === id);
          return (
            <MovieCard
              key={id}
              movie={movie}
              handleToggleWatchlist={handleToggleWatchlist}
              isWatchlisted={true}
            />
          );
        })}
      </div>
    </div>
  );
};

export default WatchlistPage;
