"use client"

import SearchBar from '@/components/HomeComponents/SearchBar';
import React, { useEffect, useState } from 'react';
import './home.css';
import SearchFilter from '@/components/HomeComponents/SearchFilter';
import CourseList from '@/components/HomeComponents/CourseList.tsx';


export default function Home() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`http://localhost:3000/api/courses?q=${query}`);
      const result = await res.json();
      setData(result.courses);
    };
    if (query.length === 0 || query.length > 0) fetchData();
  },[query]); 

  return (
    <div className="container">
      <div className="top-section">
        <div className='mt-8 max-w-5xl mx-auto'>
          <div className='font-bold text-2xl text-white py-2'>ค้นหาวิชา</div>
          <SearchBar/>
          <SearchFilter/>
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
