import React, { useEffect, useState } from "react";
import { MovieContext } from "../../../context/MovieContext";
import { API_URL } from "../../../config/api";
import useAPI from "../../../Hooks/useAPI";

const MovieProvider = ({ children }) => {
  const [watchlist, setWatchlist] = useState([]);
  const { get, del, movies, isLoading, error } = useAPI(`${API_URL}/movies`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

  const toggleWatchlist = (movieId) => {
    setWatchlist((prevState) =>
      prevState.includes(movieId)
        ? prevState.filter((id) => id !== movieId)
        : [...prevState, movieId]
    );
  };

  useEffect(() => {
    get();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <MovieContext.Provider
      value={{
        movies,
        isLoading,
        watchlist,
        toggleWatchlist,
        error,
        del,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default MovieProvider;
