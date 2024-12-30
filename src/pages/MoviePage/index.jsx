import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../../components/molecules/Loading";
import ErrorFetching from "../../components/atoms/ErrorFetching";
import MoviePageContent from "../../components/molecules/MoviePageContent";
import { API_URL } from "../../config/api";
import { PATHS } from "../../router/paths";
import useAPI from "../../Hooks/useAPI";

const MoviePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getSingle, movie, isLoading, error } = useAPI(`${API_URL}/movies`);

  const handleEdit = (id) => {
    navigate(PATHS.MOVIES.EDIT.replace(":id", id));
  };

  useEffect(() => {
    getSingle(id);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <div>
      {error ? (
        <ErrorFetching errorText="Error fetching movie !" />
      ) : (
        <>
          {isLoading ? (
            <Loading />
          ) : (
            <MoviePageContent
              movie={movie}
              handleEdit={() => handleEdit(movie.id)}
            />
          )}
        </>
      )}
    </div>
  );
};

export default MoviePage;
