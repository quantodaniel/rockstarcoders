import { Link } from "react-router-dom";
import * as H from "history";

import { useBackdropImage } from "../../api";
import Rating from "../Rating";
import "./Card.style.css";

const Card: React.FC<IMovieDataProps> = ({ movie }) => {
  const backdropImage = useBackdropImage(movie.backdrop_path, "w300");

  const navigate = (location: H.Location<unknown>) => {
    return { ...location, pathname: `/movie/${movie.id}`, state: movie };
  };

  return (
    <Link className="col-4 mb-4" to={navigate}>
      <div className="card bg-dark text-white transform-backdrop">
        <img
          src={backdropImage}
          className="card-img"
          alt={movie.original_title}
        />
        <div className="card-img-overlay d-flex">
          <div className="align-self-end bg-dark p-2">
            <Rating voteAverage={movie.vote_average} />
            <div className="card-title m-0 rounded">{movie.original_title}</div>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default Card;
