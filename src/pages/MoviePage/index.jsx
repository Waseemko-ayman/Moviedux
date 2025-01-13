import React, { lazy, Suspense, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ErrorFetching from "../../components/atoms/ErrorFetching";
import { API_URL } from "../../config/api";
import { PATHS } from "../../router/paths";
import useAPI from "../../Hooks/useAPI";
import ContentLoading from "../../components/molecules/ContentLoading";
const MoviePageContent = lazy(() =>
  import("../../components/molecules/MoviePageContent")
);

const MoviePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getSingle, movie, error } = useAPI(`${API_URL}/movies`);

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
        <Suspense fallback={<ContentLoading />}>
          <MoviePageContent
            movie={movie}
            handleEdit={() => handleEdit(movie.id)}
          />
        </Suspense>
      )}
    </div>
  );
};

export default MoviePage;
