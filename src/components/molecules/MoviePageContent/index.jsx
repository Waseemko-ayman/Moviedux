import * as T from "../../organism/Typography";
import "./style.css";
import LinkItem from "../../atoms/LinkItem";
import { PATHS } from "../../../router/paths";
import Button from "../../atoms/Button";
import TitledImage from "../Image";
import { useAuthContext } from "../../../context/AuthContext";
import { ROLES } from "../../../router/role";

const MoviePageContent = ({ movie, handleEdit }) => {
  const { role } = useAuthContext();

  return (
    <div className="movie__page">
      <div
        className="movie__header"
        style={{ backgroundImage: `url(/assets/${movie?.imageSrc})` }}
      >
        <div className="overlay">
          <T.H1 className="movie__title">{movie?.title}</T.H1>
          <p className="movie__tagline">{movie?.tagline}</p>
        </div>
      </div>
      <div className="movie__content">
        <div className="movie__details">
          <div className="movie__info">
            <T.H2>About the Movie</T.H2>
            <p>{movie?.description}</p>
            <div className="movie__rating">
              <span>Rating: {movie?.rating}</span>
              <span>Genre: {movie?.genre}</span>
              <span>Year: {movie?.year}</span>
            </div>
            <div className="buttons">
              <LinkItem
                linkPath={PATHS.MOVIES.ROOT}
                children="Back to Movies"
              />
              {role === ROLES.ADMIN && (
                <Button handleClick={handleEdit}>Edit Movie</Button>
              )}
            </div>
          </div>
          <div className="movie__poster__wrapper">
            <TitledImage
              src={`/assets/${movie?.imageSrc}`}
              alt={movie?.imageAlt}
              title={movie?.imageAlt}
              className="movie__poster"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviePageContent;
