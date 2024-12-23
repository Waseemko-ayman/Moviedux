import axios from "axios";
import React, { useEffect, useState } from "react";
import { MovieContext } from "../../../context/MovieContext";
import { API_URL } from "../../../config/api";

const MovieProvider = ({ children }) => {
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
    const fetchMovies = async () => {
      try {
        const res = await axios.get(`${API_URL}/movies`);
        setMovies(res.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching movies:", error);
        setHasError(true);
        setIsLoading(false);
      }
    };
    fetchMovies();
  }, []);

  return (
    <MovieContext.Provider
      value={{ movies, isLoading, watchlist, toggleWatchlist, hasError }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default MovieProvider;
