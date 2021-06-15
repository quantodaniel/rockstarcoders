import { useQueryParams } from "../../utils";

const SearchInput = () => {
  const params = useQueryParams();

  const onChange = (query: string) => {
    params.set("q", query);
  };

  return (
    <input
      placeholder="Search for a movie..."
      className="form-control form-control-lg"
      value={params.get()}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default SearchInput;
