const SearchResultsHeader: React.FC<ISearchResultsHeader> = ({
  isLoading,
  isEmpty,
}) => {
  if (isLoading) {
    return <>Loading...</>;
  }

  if (isEmpty) {
    return <>Nothing found...</>;
  }

  return <>Featured results</>;
};

export default SearchResultsHeader;
