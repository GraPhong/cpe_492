"use client";

import React, { useState, useEffect } from 'react';
import SearchBar from '@/components/HomeComponents/SearchBar';
import './home.css';
import SearchFilter from '@/components/HomeComponents/SearchFilter';
import CourseList from '@/components/HomeComponents/CourseList.tsx';

export default function Home() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({ day: 'All', section: 'All' });

  useEffect(() => {
    const savedData = JSON.parse(sessionStorage.getItem('searchData'));

    if (savedData) setData(savedData);
  }, []);

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

    sessionStorage.setItem('searchData', JSON.stringify(result.courses));
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
    <div className='bg-purple-600 min-h-screen flex flex-col items-center'>
      <div className='mt-8 max-w-5xl w-full p-4'>
        <div>
          <div className='font-bold text-2xl text-white py-2'>ค้นหาวิชา</div>
          <SearchBar query={query} setQuery={setQuery} onSearch={handleSearch} />
          <div className='mt-5'>
            {/* <SearchFilter onFilterChange={handleFilterChange} onSearchClick={handleSearchClick} /> */}
          </div>
          <CourseList courses={data}/>
        </div>
      </div>
    </div>
  );
}
