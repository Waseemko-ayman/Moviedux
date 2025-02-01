import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MovieForm from "../../components/molecules/MovieForm";
import { API_URL } from "../../config/api";
import * as T from "../../components/organism/Typography";
import { PATHS } from "../../router/paths";
import useAPI from "../../Hooks/useAPI";

const EditMoviePage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { getSingle, put, movie, isLoading } = useAPI(`${API_URL}/movies`);

  const handleEditMovie = async (body) => {
    put(id, body);
    navigate(PATHS.MOVIES.ROOT);
  };

  useEffect(() => {
    getSingle(id);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <div className="movie__edit">
      <T.H1>Edit {id} Movie</T.H1>
      <MovieForm
        movie={movie}
        onSubmit={handleEditMovie}
        isLoading={isLoading}
      />
    </div>
  );
};

export default EditMoviePage;
