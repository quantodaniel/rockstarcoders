import { usePosterImage } from "../../api";
import Rating from "../Rating";
import "./Card.style.css";

const Card: React.FC<IMovieDataProps> = ({ movie }) => {
  const posterPath = usePosterImage(movie.poster_path, "w92");

  if (posterPath === null) {
    return null;
  }

  return (
    <div className="col-2 mb-4">
      <div className="card bg-dark text-white transform-backdrop p-0">
        <img src={posterPath} className="card-img" alt={movie.original_title} />
        <div className="card-img-overlay d-flex">
          <div className="align-self-end bg-white text-dark p-2">
            <Rating voteAverage={movie.vote_average} />
            <div className="card-title m-0 rounded">{movie.original_title}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
