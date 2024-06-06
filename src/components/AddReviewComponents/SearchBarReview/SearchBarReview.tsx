import React, { useState, useEffect } from 'react';
import './SearchBarReview.css';

const SearchBarReview = ({ query, setQuery, setCourseNo, setCourseName }) => {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (query.length > 0) {
        try {
          const res = await fetch(`http://localhost:3000/api/courses?q=${query}`);
          const result = await res.json();
          setSuggestions(result.courses);
        } catch (error) {
          console.error('Error fetching suggestions:', error);
        }
      } else {
        setSuggestions([]);
      }
    };

    fetchSuggestions();
  }, [query]);

  const handleSuggestionClick = (suggestion) => {
    setQuery(`${suggestion.courseNo} - ${suggestion.courseName}`);
    setCourseNo(suggestion.courseNo);
    setCourseName(suggestion.courseName);
    setSuggestions([]);
  };

  const clearSearch = () => {
    setQuery('');
    setSuggestions([]);
    setCourseNo('');
    setCourseName('');
  };

  return (
    <div className="relative w-full flex flex-col items-center space-y-2 search-bar-container">
      <div className="flex items-center space-x-2 w-full relative input-container">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
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
