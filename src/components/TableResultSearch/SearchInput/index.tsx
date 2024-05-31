import { FC } from "react";

interface SearchInputProps {
  query: string;
  setQuery: (query: string) => void;
}

const SearchInput: FC<SearchInputProps> = ({ query, setQuery }) => {
  return (
    <input
      className="search"
      placeholder="Search..."
      value={query}
      onChange={(e) => setQuery(e.target.value.toLowerCase())}
    />
  );
};

export default SearchInput;