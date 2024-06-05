"use client"
import ReviewCard from '@/components/ReadReviewComponents/ReviewCard/ReviewCard';
import SearchBarReview from '@/components/ReadReviewComponents/SearchBarReview/SearchBarReview';
import React, { useState } from 'react';

export default function TestReview() {
  const [query, setQuery] = useState("");
  const [courseNo, setCourseNo] = useState(null);

  const handleSearch = (courseNo) => {
    setCourseNo(courseNo);
  };

  return (
    <div className='bg-purple-600 min-h-screen flex flex-col items-center'>
      <div className='mt-8 max-w-5xl w-full p-4'>
        <div>
          <div className='font-bold text-2xl text-white py-2'>ค้นหารีวิว</div>
          <SearchBarReview query={query} setQuery={setQuery} onSearch={handleSearch} />
        </div>
      </div>
    </div>
  );
}
