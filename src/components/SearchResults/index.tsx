import { useSearchMovies } from "../../api";
import { useQueryParams } from "../../utils";
import RatingFilter from "../RatingFilter";

import Card from "./Card";
import SearchResultsHeader from "./Header";

const Results = () => {
  const params = useQueryParams();
  const [movies, error, isLoading] = useSearchMovies(params.getDebounce());

  if (error) {
    return <>error while fetching movies...</>;
  }

  if (params.getDebounce() === "") {
    return null;
  }

  return (
    <div className="container">
      <h3 className="border-bottom pb-2 mb-4 d-flex justify-content-between align-items-center">
        <SearchResultsHeader
          isLoading={isLoading}
          isEmpty={movies.length === 0}
        />
        <RatingFilter />
      </h3>
      <div className="row">
        {movies.slice(0, 6).map((movie) => (
          <Card movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
};

export default Results;
