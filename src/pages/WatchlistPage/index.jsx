import React from "react";
import "./style.css";
import * as T from "../../components/Typography";
import MovieCard from "../../components/MovieCard";
import MoviesGridDiv from "../../components/MoviesGridDiv";

const WatchlistPage = ({ movies, watchlist, handleToggleWatchlist }) => {
  return (
    <div>
      <T.H1 className="title">Your Watchlist</T.H1>
      <MoviesGridDiv>
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
      </MoviesGridDiv>
    </div>
  );
};

export default WatchlistPage;
