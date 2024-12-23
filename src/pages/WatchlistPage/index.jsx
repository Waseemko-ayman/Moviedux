import React, { useContext, useState } from "react";
import "./style.css";
import * as T from "../../components/organism/Typography";
import MovieCard from "../../components/molecules/MovieCard";
import MoviesGridDiv from "../../components/molecules/MoviesGridDiv";
import Loading from "../../components/molecules/Loading";
import { Navigate } from "react-router-dom";
import { MovieContext } from "../../context/MovieContext";

const WatchlistPage = () => {
  const { movies, watchlist, toggleWatchlist, isLoading } =
    useContext(MovieContext);

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
                toggleWatchlist={toggleWatchlist}
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
