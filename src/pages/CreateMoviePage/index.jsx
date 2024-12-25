import React, { useState } from "react";
import * as T from "../../components/organism/Typography";
import MovieForm from "../../components/molecules/MovieForm";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../../config/api";
import { PATHS } from "../../router/paths";

const CreateMoviePage = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [, setError] = useState(null);

  const handleCreatePost = async (body) => {
    setIsLoading(false);
    try {
      await axios.post(`${API_URL}/movies`, body);
      setIsLoading(false);
      navigate(PATHS.MOVIES.ROOT);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <T.H1>Create Movie</T.H1>
      <MovieForm handleSubmit={handleCreatePost} isLoading={isLoading} />
    </div>
  );
};

export default CreateMoviePage;
