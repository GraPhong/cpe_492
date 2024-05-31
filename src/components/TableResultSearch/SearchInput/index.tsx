import { FC } from "react";

interface SearchInputProps {
  query: string;
  setQuery: (query: string) => void;
}

const SearchInput: FC<SearchInputProps> = ({ query, setQuery }) => {
  return (
    <div className="flex">
      
      <input
      className="search"
      placeholder="Search..."
      value={query}
      onChange={(e) => setQuery(e.target.value.toLowerCase())}
      />
      <button className=" bg-indigo-600 text-white px-6 text-lg font-semibold py-4 rounded-r-md">Go</button>
    </div>
  );
};

export default SearchInput;