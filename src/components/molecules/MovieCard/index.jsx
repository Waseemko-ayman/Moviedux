import React, { useContext } from "react";
import "./style.css";
import Button from "../../atoms/Button";
import { useNavigate } from "react-router-dom";
import { PATHS } from "../../../router/paths";
import TitledImage from "../Image";
import { RoleContext } from "../../../context/UserRole";
import { ROLE } from "../../../router/role";

const MovieCard = ({
  isWatchlisted,
  movie,
  toggleWatchlist,
  handleClick,
  handleDelete,
}) => {
  const { role } = useContext(RoleContext);
  const navigate = useNavigate();

  const handleEdit = (id) => {
    navigate(PATHS.MOVIES.EDIT.replace(":id", id));
  };

  const handleError = (e) => {
    e.target.src = "assets/default.jpg";
  };

  const getRatingClass = (rating) => {
    if (rating >= 8) {
      return "rating-good";
    } else if (rating >= 5 && rating < 8) {
      return "rating-ok";
    } else {
      return "rating-bad";
    }
  };

  return (
    <div className="movie__card">
      <TitledImage
        src={`assets/${movie?.imageSrc}`}
        alt={movie?.imageAlt}
        title={movie?.imageAlt}
        onError={handleError}
        onClick={() => handleClick(movie?.id)}
        loading="lazy"
      />
      <div className="movie__card__info">
        <div className="header">
          <h3 className="movie__card__title">{movie?.title}</h3>
          <div>
            <span className="movie__card__genre">{movie?.genre}</span>
            <span
              className={`movie__card__rating ${getRatingClass(movie?.rating)}`}
            >
              {movie?.rating}
            </span>
          </div>
        </div>
        <label className="switch">
          <input
            type="checkbox"
            checked={isWatchlisted}
            onChange={() => toggleWatchlist(movie?.id)}
          />
          <span className="slider">
            <span className="slider__label">
              {isWatchlisted ? "In Watchlist" : "Add to Watchlist"}
            </span>
          </span>
        </label>
        {role === ROLE.ADMIN && (
          <div className="movie__settings">
            <Button textBtn="Edit" handleClick={() => handleEdit(movie.id)} />
            <Button
              textBtn="Delete"
              handleClick={() => handleDelete(movie.id)}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieCard;
