"use client";

import React, { useState } from 'react';
import SearchBar from '@/components/HomeComponents/SearchBar';
import './home.css';
import SearchFilter from '@/components/HomeComponents/SearchFilter';
import CourseList from '@/components/HomeComponents/CourseList.tsx';

export default function Home() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({ day: 'All', section: 'All' });

  const fetchData = async (searchQuery, dayFilter, sectionFilter) => {
    let url = `http://localhost:3000/api/courses?q=${searchQuery}`;
    
    if (dayFilter !== 'All') {
      url += `&day=${dayFilter}`;
    }
    
    if (sectionFilter !== 'All') {
      url += `&section=${sectionFilter}`;
    }
    
    const res = await fetch(url);
    const result = await res.json();
    setData(result.courses);
  };

  const handleSearch = (courseNo) => {
    fetchData(courseNo, filters.day, filters.section);
  };

  const handleFilterChange = (day, section) => {
    setFilters({ day, section });
  };

  const handleSearchClick = (day, section) => {
    setFilters({ day, section });
    fetchData(query, day, section);
  };

  return (
    <div className="container">
      <div className="top-section">
        <div className='mt-8 max-w-5xl mx-auto relative'>
          <div className='font-bold text-2xl text-white py-2'>ค้นหาวิชา</div>
          <SearchBar query={query} setQuery={setQuery} onSearch={handleSearch} />
          <div className='py-2'>
            <SearchFilter onFilterChange={handleFilterChange} onSearchClick={handleSearchClick} />
          </div>
        </div>
      </div>
      <div className="bottom-section">
        <div className='mt-8 max-w-5xl mx-auto'>
          <CourseList courses={data}/>
        </div>
      </div>
    </div>
  );
}
