import { Route } from "react-router";

import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import PopularMovies from "./components/PopularMovies";
import MovieDetail from "./components/MovieDetail";

function App() {
  return (
    <>
      <div className="text-white bg-dark">
        <Header />
        <SearchBar />
        <SearchResults />
      </div>
      <PopularMovies />
      <Route exact path="/movie/:id">
        <MovieDetail />
      </Route>
    </>
  );
}

export default App;
