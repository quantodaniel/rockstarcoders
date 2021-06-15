import { useCallback } from "react";
import "./index.style.css";

const star = "/star.png";
const ratings = ["0-2", "2-4", "4-6", "6-8", "8-10"];

const Rating: React.FC<{ voteAverage: number }> = ({ voteAverage }) => {
  const getClassName = useCallback(
    (rating: string) => {
      const [min] = rating.split("-");
      return voteAverage >= Number(min) && voteAverage > 0 ? "active" : "";
    },
    [voteAverage]
  );

  return (
    <div className="d-flex rating-stars mb-1">
      <span className="small me-1">{voteAverage.toFixed(1)}</span>
      {ratings.map((rating) => (
        <img
          src={star}
          alt={rating}
          key={rating}
          className={getClassName(rating)}
        />
      ))}
    </div>
  );
};

export default Rating;
