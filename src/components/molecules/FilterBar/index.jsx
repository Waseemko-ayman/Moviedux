import { GENRE_OPTIONS, RATING_OPTIONS } from '../../../mock/selectItems';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '../../../router/paths';
import Button from '../../atoms/Button';
import { useAuthContext } from '../../../context/AuthContext';
import { ROLES } from '../../../router/role';
import { StyledFilterBar } from './style';

const FilterBar = ({ handleGenre, handleRating, genre, rating }) => {
  const { role } = useAuthContext();
  const navigate = useNavigate();
  return (
    <StyledFilterBar>
      <div>
        <label>Genre</label>
        <select value={genre} onChange={handleGenre}>
          {GENRE_OPTIONS.map(({ id, type }) => (
            <option key={id}>{type}</option>
          ))}
        </select>
      </div>
      <div>
        <label>Rating</label>
        <select value={rating} onChange={handleRating}>
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
    </StyledFilterBar>
  );
};

export default FilterBar;
