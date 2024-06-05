import React, { useState, useEffect } from 'react';
import './SearchBarReview.css';

const SearchBarReview = ({ query, setQuery, onSearch }) => {
  const [suggestions, setSuggestions] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (query.length > 0) {
        const res = await fetch(`http://localhost:3000/api/courses?q=${query}`);
        const result = await res.json();
        setSuggestions(result.courses);
      } else {
        setSuggestions([]);
      }
    };

    fetchSuggestions();
  }, [query]);

  const handleSuggestionClick = (suggestion) => {
    setQuery(`${suggestion.courseNo} - ${suggestion.courseName}`);
    setSearchQuery(suggestion.courseNo);
    setSuggestions([]);
  };

  const clearSearch = () => {
    setQuery('');
    setSearchQuery('');
    setSuggestions([]);
  };

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  return (
    <div className="relative w-full flex flex-col items-center space-y-2 search-bar-container">
      <div className="flex items-center space-x-2 w-full relative input-container">
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setSearchQuery(e.target.value);
          }}
          placeholder="Search"
          className="w-full px-4 py-2 bg-white text-black rounded-md focus:outline-none search-input"
        />
        {query && (
          <button
            onClick={clearSearch}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 clear-button"
          >
            x
          </button>
        )}
        <button 
          onClick={handleSearch} 
          className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none search-button"
        >
          Search
        </button>
      </div>
      {suggestions.length > 0 && (
        <ul className="dropdown w-full bg-white border border-gray-300 rounded-md mt-1 absolute top-full left-0 z-10 suggestions-list">
          {suggestions.map((suggestion, index) => (
            <li 
              key={index} 
              onClick={() => handleSuggestionClick(suggestion)} 
              className="px-4 py-2 cursor-pointer hover:bg-gray-200 suggestion-item"
            >
              {suggestion.courseNo} - {suggestion.courseName}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBarReview;