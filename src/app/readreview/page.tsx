"use client"
import ReviewCard from '@/components/ReadReviewComponents/ReviewCard/ReviewCard';
import SearchBarReview from '@/components/ReadReviewComponents/SearchBarReview/SearchBarReview';
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import ExampleReviewCard from '@/components/ReadReviewComponents/ExampleReviewCard/ExampleReviewCard';

export default function ReadReview() {
  const searchParams = useSearchParams();
  const [query, setQuery] = useState("");
  const [courseNo, setCourseNo] = useState(null);

  useEffect(() => {
    const initialCourseNo = searchParams.get('courseNo');
    if (initialCourseNo) {
      setCourseNo(initialCourseNo);
    }
  }, [searchParams]);

  const handleSearch = (courseNo) => {
    setCourseNo(courseNo);
  };

  return (
    <div className='bg-purple-600 min-h-screen flex flex-col items-center'>
      <div className='mt-8 max-w-5xl w-full p-4'>
        <div>
          <div className='font-bold text-2xl text-white py-2'>ค้นหาวิชา</div>
          <SearchBarReview query={query} setQuery={setQuery} onSearch={handleSearch} />
          <div className='py-4 text-white text-bold font-kanit text-2xl'>Most Liked Reivew</div>
          <div className='grid grid-cols-3 gap-4'>
            {!courseNo && <ExampleReviewCard />}
          </div>
          {courseNo && <ReviewCard courseNo={courseNo} />}
        </div>
      </div>
    </div>
  );
}