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
    <div className='rounded-md  p-4'> 
  <div className="flex flex-row items-start gap-5"> 
    <div className="flex flex-col items-center ml-3">
      <div className="text-xl font-bold font-kanit text-white">Day:</div>
      <select 
        className="bg-transparent text-black bg-white border border-gray-400 rounded-md p-1">
        <option>All</option>
        <option>MTh</option>
        <option>We</option>
        <option>TuF</option>
        <option>Su</option>
        <option>Sa</option>
      </select>
    </div>

    <div className="flex flex-col items-center">
      <div className="text-xl font-bold font-kanit text-white">Sec:</div>
      <select 
        className="bg-transparent text-black bg-white border border-gray-400 rounded-md p-1">
        <option>All</option>
        <option>701</option>
        <option>801</option>
      </select>
    </div>

    <div className="flex items-center">
      <button className="mt-3 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none search-button">
        Search
      </button>
    </div>
  </div>
</div>

  );
};

export default SearchFilter;
