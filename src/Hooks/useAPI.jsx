import axios from "axios";
import { useCallback, useState } from "react";

const useAPI = (url, config) => {
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState("");

  const get = useCallback(
    async (getConfig) => {
      setIsLoading(true);
      try {
        const res = await axios.get(url, { ...config, ...getConfig });
        setMovies(res?.data);
      } catch (error) {
        console.error("Error fetching movies:", error);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    },
    [url, config]
  );

  const getSingle = useCallback(
    async (id, getConfig) => {
      setIsLoading(true);
      try {
        const res = await axios.get(`${url}/${id}`, {
          ...config,
          ...getConfig,
        });
        setMovie(res?.data);
      } catch (error) {
        console.error("Error fetching movie:", error);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    },
    [url, config]
  );

  const post = useCallback(
    async (body) => {
      setIsLoading(true);
      try {
        const res = await axios.post(url, body, config);
        setMovies((prevState) => [...prevState, res.data]);
        setMessage("Success!");
      } catch (error) {
        console.error("Error adding movie:", error);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    },
    [url, config]
  );

  const put = useCallback(
    async (id, body) => {
      setIsLoading(true);
      try {
        const res = await axios.put(`${url}/${id}`, body, config);
        setMovies((prevState) =>
          prevState.map((item) => (item.id === body.id ? res?.data : item))
        );
      } catch (error) {
        console.error("Error editing movie:", error);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    },
    [url, config]
  );

  const del = useCallback(
    async (id) => {
      setIsLoading(true);
      try {
        await axios.delete(`${url}/${id}`, config);
        setMovies((prevState) => prevState.filter((item) => item.id !== id));
      } catch (error) {
        console.error("Error deleting movie:", error);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    },
    [url, config]
  );

  return {
    movies,
    movie,
    isLoading,
    error,
    message,
    get,
    getSingle,
    post,
    put,
    del,
  };
};

export default useAPI;
