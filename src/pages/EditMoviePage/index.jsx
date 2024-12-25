import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MovieForm from "../../components/molecules/MovieForm";
import axios from "axios";
import { API_URL } from "../../config/api";
import * as T from "../../components/organism/Typography";
import { PATHS } from "../../router/paths";

const EditMoviePage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [, setError] = useState(null);

  const handleEditMovie = async (body) => {
    setIsLoading(true);
    try {
      const { data } = await axios.put(`${API_URL}/movies/${id}`, body);
      setMovie(data);
      setIsLoading(false);
      navigate(PATHS.MOVIES.ROOT);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const { data } = await axios.get(`${API_URL}/movies/${id}`);
        setMovie(data);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [id]);

  return (
    <div className="movie__edit">
      <T.H1>Edit {id} Movie</T.H1>
      <MovieForm
        movie={movie}
        handleSubmit={handleEditMovie}
        isLoading={isLoading}
      />
    </div>
  );
};

export default EditMoviePage;
