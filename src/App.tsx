import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import PopularMovies from "./components/PopularMovies";

function App() {
  return (
    <>
      <div className="text-white bg-dark">
        <Header />
        <SearchBar />
        <SearchResults />
      </div>
      <PopularMovies />
    </>
  );
}

export default App;
