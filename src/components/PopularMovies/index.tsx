import { usePopularMovies } from "../../api";
import Card from "./Card";

const Popular = () => {
  const [movies, error] = usePopularMovies();

  if (error) {
    return <>error while fetching movies...</>;
  }

  return (
    <div className="container">
      <h3 className="border-bottom py-2 my-4">Popular movies</h3>
      <div className="row">
        {movies.map((movie) => (
          <Card movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
};

export default Popular;
