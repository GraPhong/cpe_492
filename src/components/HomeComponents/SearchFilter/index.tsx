import React from 'react';
import './searchFilter.css';

const SearchFilter = () => {
    return (
        <div className="filter-container">
          <div className="filter">
            <label>Quality:</label>
            <select>
              <option>All</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className="filter">
            <label>Genre:</label>
            <select>
              <option>All</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className="filter">
            <label>Rating:</label>
            <select>
              <option>All</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className="filter">
            <label>Year:</label>
            <select>
              <option>All</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className="filter">
            <label>Language:</label>
            <select>
              <option>All</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className="filter">
            <label>Order By:</label>
            <select>
              <option>Seeds</option>
              {/* Add more options as needed */}
            </select>
          </div>
        </div>
      );
    }

export default SearchFilter;
