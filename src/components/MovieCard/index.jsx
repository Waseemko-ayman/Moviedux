import React from "react";
import "./style.css";

const MovieCard = ({
  isWatchlisted,
  movie,
  handleToggleWatchlist,
}) => {
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
      <img
        src={`assets/${movie.image}`}
        alt={movie.imageAlt}
        title={movie.imageTitle}
        onError={handleError}
      />
      <div className="movie__card__info">
        <h3 className="movie__card__title">{movie.title}</h3>
        <div>
          <span className="movie__card__genre">{movie.genre}</span>
          <span
            className={`movie__card__rating ${getRatingClass(movie.rating)}`}
          >
            {movie.rating}
          </span>
        </div>
        <label className="switch">
          <input
            type="checkbox"
            checked={isWatchlisted}
            onChange={() => handleToggleWatchlist(movie.id)}
          />
          <span className="slider">
            <span className="slider__label">
              {isWatchlisted ? "In Watchlist" : "Add to Watchlist"}
            </span>
          </span>
        </label>
      </div>
    </div>
  );
};

export default MovieCard;
