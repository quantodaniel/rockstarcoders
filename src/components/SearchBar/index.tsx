import SearchInput from "./input";

const SearchBar = () => {
  return (
    <div className="container">
      <div className="py-5">
        <div className="text-center mb-5">
          <h1>Your favorites movies</h1>
          <h4 className="text-muted">Just search and enjoy!</h4>
        </div>
        <div className="row">
          <div className="col-6 mx-auto">
            <SearchInput />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
