import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../../components/molecules/Loading";
import ErrorFetching from "../../components/atoms/ErrorFetching";
import MoviePageContent from "../../components/molecules/MoviePageContent";
import axios from "axios";
import { API_URL } from "../../config/api";
import { PATHS } from "../../router/paths";

const MoviePage = ({ hasError }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const handleEdit = (id) => {
    navigate(PATHS.MOVIES.EDIT.replace(":id", id));
  };

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(`${API_URL}/movies/${id}`);
        setMovie(data || null);
      } catch (error) {
        console.error("Error fetching movie:", error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [id]);

  return (
    <div>
      {hasError ? (
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
