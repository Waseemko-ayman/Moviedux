import Button from '../../atoms/Button';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '../../../router/paths';
import TitledImage from '../Image';
import { useAuthContext } from '../../../context/AuthContext';
import { ROLES } from '../../../router/role';
import { StyledMovieCard } from './style';

const MovieCard = ({
  isWatchlisted,
  movie,
  toggleWatchlist,
  handleClick,
  handleDelete,
}) => {
  const { role } = useAuthContext();
  const navigate = useNavigate();

  const handleEdit = (id) => {
    navigate(PATHS.MOVIES.EDIT.replace(':id', id));
  };

  const handleError = (e) => {
    e.target.src = 'assets/default.jpg';
  };

  const getRatingClass = (rating) => {
    if (rating >= 8) {
      return 'rating-good';
    } else if (rating >= 5 && rating < 8) {
      return 'rating-ok';
    } else {
      return 'rating-bad';
    }
  };

  return (
    <StyledMovieCard>
      <TitledImage
        src={`/assets/${movie?.imageSrc}`}
        alt={movie?.imageAlt}
        title={movie?.imageAlt}
        onError={handleError}
        onClick={() => handleClick(movie?.id)}
        loading="lazy"
      />
      <div className="movie__card__info">
        <div>
          <h3>{movie?.title}</h3>
          <div>
            <span>{movie?.genre}</span>
            <span className={getRatingClass(movie?.rating)}>
              {movie?.rating}
            </span>
          </div>
        </div>
        <label>
          <input
            type="checkbox"
            checked={isWatchlisted}
            onChange={() => toggleWatchlist(movie?.id)}
          />
          <span className="slider">
            <span>{isWatchlisted ? 'In Watchlist' : 'Add to Watchlist'}</span>
          </span>
        </label>
        {role === ROLES.ADMIN && (
          <div>
            <Button handleClick={() => handleEdit(movie.id)}>Edit</Button>
            <Button handleClick={() => handleDelete(movie.id)}>Delete</Button>
          </div>
        )}
      </div>
    </StyledMovieCard>
  );
};

export default MovieCard;
