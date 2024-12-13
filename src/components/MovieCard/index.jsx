import React from "react";
import "./style.css";

const MovieCard = ({ imageSrc, imageAlt, imageTitle, title, genre, rating }) => {
  return (
    <div className="movie__card">
      <img src={`assets/${imageSrc}`} alt={imageAlt} title={imageTitle} />
      <div className="movie__card__info">
        <h3 className="movie__card__title">{title}</h3>
        <p className="movie__card__genre">{genre}</p>
        <p className="movie__card__rating">{rating}</p>
      </div>
    </div>
  );
};

export default MovieCard;
