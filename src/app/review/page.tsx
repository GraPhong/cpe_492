"use client"
import SearchBarReview from '@/components/ReadReviewComponents/SearchBarReview/SearchBarReview';
import TableReview from '@/components/TableReview/TableReview';
import React, { useState } from 'react'


export default function Review() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({ day: 'All', section: 'All' });

  const fetchData = async (searchQuery) => {
    let url = `http://localhost:3000/api/courses?q=${searchQuery}`;
       
    const res = await fetch(url);
    const result = await res.json();
    setData(result.courses);
  };

  const handleSearch = (courseNo) => {
    fetchData(courseNo);
  };

  return (
    <div className="flex  min-h-screen bg-purple-600">           
      <div className='mt-8 max-w-5xl mx-auto relative'>
        <div className='font-bold text-2xl text-white py-2 text-white'>ค้นหาวิชา</div>
        <TableReview/>
      </div>
    </div>
  );
};