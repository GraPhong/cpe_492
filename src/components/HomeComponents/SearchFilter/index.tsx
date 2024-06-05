import React, { useState } from 'react';

const SearchFilter = ({ onFilterChange, onSearchClick }) => {
  const [day, setDay] = useState('All');
  const [section, setSection] = useState('All');

  const handleDayChange = (e) => {
    setDay(e.target.value);
  };

  const handleSectionChange = (e) => {
    setSection(e.target.value);
  };

  const handleSearchClick = () => {
    onSearchClick(day, section);
  };

  return (
    <div className='flex'>
      <div className="filter-container flex p-4 rounded-lg">
        <div className="filter flex flex-col mr-4">
          <label className="mb-2">Day:</label>
          <select
            className="bg-transparent text-black border border-gray-400 rounded-md p-2"
            value={day}
            onChange={handleDayChange}
          >
            <option>All</option>
            <option>Monday</option>
            <option>Tuesday</option>
            <option>Wednesday</option>
            <option>Thursday</option>
            <option>Friday</option>
            <option>Saturday</option>
            <option>Sunday</option>
            <option>Monday-Thursday</option>
            <option>Tuesday-Friday</option>
          </select>
        </div>
        <div className="filter flex flex-col mr-4">
          <label className="mb-2">Section:</label>
          <select
            className="bg-transparent text-black border border-gray-400 rounded-md p-2"
            value={section}
            onChange={handleSectionChange}
          >
            <option>All</option>
            <option>701</option>
            <option>801</option>
          </select>
        </div>
      </div>
      <button
        className="ml-4 px-2 py-1 text-sm bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none search-button"
        onClick={handleSearchClick}
      >
        Search
      </button>
    </div>
  );
};

export default SearchFilter;
