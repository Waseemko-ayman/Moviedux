import "./style.css";
import { GENRE_OPTIONS, RATING_OPTIONS } from "../../../mock/selectItems";
import { useNavigate } from "react-router-dom";
import { PATHS } from "../../../router/paths";
import Button from "../../atoms/Button";
import { useAuthContext } from "../../../context/AuthContext";
import { ROLES } from "../../../router/role";

const FilterBar = ({ handleGenre, handleRating, genre, rating }) => {
  const { role } = useAuthContext();
  const navigate = useNavigate();
  return (
    <div className="filter__bar">
      <div className="filter__slot">
        <label>Genre</label>
        <select
          className="filter__dropdown"
          value={genre}
          onChange={handleGenre}
        >
          {GENRE_OPTIONS.map(({ id, type }) => (
            <option key={id}>{type}</option>
          ))}
        </select>
      </div>
      <div className="filter__slot">
        <label>Rating</label>
        <select
          className="filter__dropdown"
          value={rating}
          onChange={handleRating}
        >
          {RATING_OPTIONS.map(({ id, type }) => (
            <option key={id}>{type}</option>
          ))}
        </select>
      </div>
      {role === ROLES.ADMIN && (
        <Button handleClick={() => navigate(PATHS.MOVIES.CREATE)}>
          Create Movie
        </Button>
      )}
    </div>
  );
};

export default FilterBar;
