import React from 'react';

const SearchBar = () => {
  return (
    <div className="flex items-center space-x-2">
      <input
        type="text"
        placeholder="Search"
        className="w-full px-4 py-2 bg-gray-200 text-black rounded-md focus:outline-none"
      />
      <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
