import { useBackdropImage } from "../../api";
import Rating from "../Rating";
import "./Card.style.css";

const Card: React.FC<IMovieDataProps> = ({ movie }) => {
  const backdropPath = useBackdropImage(movie.backdrop_path, "w300");

  return (
    <div className="col-4 mb-4">
      <div className="card bg-dark text-white transform-backdrop">
        <img
          src={backdropPath}
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
    </div>
  );
};
export default Card;
