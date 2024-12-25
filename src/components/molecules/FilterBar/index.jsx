import React, { useContext } from "react";
import "./style.css";
import { GENRE_OPTIONS, RATING_OPTIONS } from "../../../mock/selectItems";
import { useNavigate } from "react-router-dom";
import { PATHS } from "../../../router/paths";
import Button from "../../atoms/Button";
import { RoleContext } from "../../../context/UserRole";
import { ROLE } from "../../../router/role";

const FilterBar = ({ handleGenre, handleRating, genre, rating }) => {
  const { role } = useContext(RoleContext);
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
      {role === ROLE.ADMIN && (
        <Button
          textBtn="Create Movie"
          handleClick={() => navigate(PATHS.MOVIES.CREATE)}
        />
      )}
    </div>
  );
};

export default FilterBar;
