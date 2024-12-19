import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../components/molecules/Loading";
import ErrorFetching from "../../components/atoms/ErrorFetching";
import MoviePageContent from "../../components/molecules/MoviePageContent";

const MoviePage = ({ hasError }) => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("movies.json")
      .then((response) => response.json())
      .then((data) => {
        const selectedMovie = data.find((movie) => movie.id === +id);
        setMovie(selectedMovie || null);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching movie:", error);
        setIsLoading(false);
      });
  }, [id]);
  return (
    <div>
      {hasError ? (
        <ErrorFetching errorText="Error fetching movie !" />
      ) : (
        <>{isLoading ? <Loading /> : <MoviePageContent movie={movie} />}</>
      )}
    </div>
  );
};

export default MoviePage;
