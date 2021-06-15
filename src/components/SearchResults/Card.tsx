import { Link } from "react-router-dom";
import * as H from "history";

import { usePosterImage } from "../../api";
import Rating from "../Rating";
import "./Card.style.css";

const Card: React.FC<IMovieDataProps> = ({ movie }) => {
  const posterImage = usePosterImage(movie.poster_path, "w92");

  const navigate = (location: H.Location<unknown>) => {
    return { ...location, pathname: `/movie/${movie.id}`, state: movie };
  };

  if (posterImage === null) {
    return null;
  }

  return (
    <Link className="col-2 mb-4" to={navigate}>
      <div className="card bg-dark text-white transform-backdrop p-0">
        <img
          src={posterImage}
          className="card-img"
          alt={movie.original_title}
        />
        <div className="card-img-overlay d-flex">
          <div className="align-self-end bg-white text-dark p-2">
            <Rating voteAverage={movie.vote_average} />
            <div className="card-title m-0 rounded">{movie.original_title}</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
