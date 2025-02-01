import * as T from "../../components/organism/Typography";
import MovieForm from "../../components/molecules/MovieForm";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../../config/api";
import { PATHS } from "../../router/paths";
import useAPI from "../../Hooks/useAPI";

const CreateMoviePage = () => {
  const navigate = useNavigate();
  const { post, isLoading } = useAPI(`${API_URL}/movies`);

  const handleCreatePost = async (body) => {
    post(body);
    navigate(PATHS.MOVIES.ROOT);
  };

  return (
    <div>
      <T.H1>Create Movie</T.H1>
      <MovieForm onSubmit={handleCreatePost} isLoading={isLoading} />
    </div>
  );
};

export default CreateMoviePage;
