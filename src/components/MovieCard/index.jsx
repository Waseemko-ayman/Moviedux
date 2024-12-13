import React from "react";
import "./style.css";

const MovieCard = ({
  imageSrc,
  imageAlt,
  imageTitle,
  title,
  genre,
  rating,
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
        src={`assets/${imageSrc}`}
        alt={imageAlt}
        title={imageTitle}
        onError={handleError}
      />
      <div className="movie__card__info">
        <h3 className="movie__card__title">{title}</h3>
        <p className="movie__card__genre">{genre}</p>
        <p className={`movie__card__rating ${getRatingClass(rating)}`}>
          {rating}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
