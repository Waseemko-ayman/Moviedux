import React from "react";
import "./style.css";
import { GENRE_OPTIONS, RATING_OPTIONS } from "../../mock/selectItems";

const FilterBar = ({ handleGenre, handleRating, genre, rating }) => {
  return (
    <div className="filter__bar">
      <div className="filter__slot">
        <label>Genre</label>
        <select
          className="filter__dropdown"
          value={genre}
          onChange={handleGenre}
        >
          {GENRE_OPTIONS.map((option) => (
            <option>{option}</option>
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
          {RATING_OPTIONS.map((option) => (
            <option>{option}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default FilterBar;
