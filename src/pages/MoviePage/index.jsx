import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../components/molecules/Loading";
import ErrorFetching from "../../components/atoms/ErrorFetching";
import MoviePageContent from "../../components/molecules/MoviePageContent";
import axios from "axios";

const MoviePage = ({ hasError }) => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const res = await axios.get("movies.json");
        const selectedMovie = res.data.find((movie) => movie.id === +id);
        setMovie(selectedMovie || null);
      } catch (error) {
        console.error("Error fetching movie:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovie();
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
