import { useEffect, useMemo, useState } from "react";
import { useQueryParams } from "../../utils";

import "./index.style.css";

const star = "/star.png";
const ratings = ["0-2", "2-4", "4-6", "6-8", "8-10"];

const Stars = () => {
  const params = useQueryParams();

  const [hoveredIndex, setHoveredIndex] = useState(0);

  const filteredIndex = useMemo(() => {
    return Number(params.getRating()) - 1;
  }, [params]);

  const onClick = (index: number) => {
    params.set("rating", index === filteredIndex ? "" : String(index + 1));
  };

  const onMouseOver = (index: number) => {
    setHoveredIndex(index);
  };

  const onMouseLeave = () => {
    setHoveredIndex(filteredIndex);
  };

  useEffect(() => {
    setHoveredIndex(filteredIndex);
  }, [filteredIndex]);

  return (
    <>
      {ratings.map((rating, ix) => (
        <img
          src={star}
          alt={rating}
          key={rating}
          className={hoveredIndex >= ix ? "active" : ""}
          onMouseOver={() => onMouseOver(ix)}
          onMouseLeave={() => onMouseLeave()}
          onClick={() => onClick(ix)}
        />
      ))}
    </>
  );
};

const RatingFilter = () => {
  return (
    <div className="d-flex align-items-center">
      <p className="fs-6 m-0 me-2">filter by rating</p>
      <div className="rating-filter">
        <Stars />
      </div>
    </div>
  );
};

export default RatingFilter;
