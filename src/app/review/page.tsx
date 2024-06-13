"use client"
import SearchBarReview from '@/components/ReadReviewComponents/SearchBarReview/SearchBarReview';
import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import ExampleReviewCard from '@/components/ReadReviewComponents/ExampleReviewCard/ExampleReviewCard';
import TopReviewCourse from '@/components/ReadReviewComponents/TopReviewCourse';

export default function Review() {
  const searchParams = useSearchParams();
  const router = useRouter();
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
    router.push(`/readreview?courseNo=${courseNo}`);
  };

  return (
    <div className='bg-purple-600 min-h-screen flex flex-col items-center'>
      <div className='mt-8 max-w-5xl w-full p-4'>
        <div>
          <div className='font-bold text-2xl text-white py-2'>ค้นหารีวิว</div>
          <SearchBarReview query={query} setQuery={setQuery} onSearch={handleSearch} />
          <>
            <div className='py-4 text-white text-bold font-kanit text-2xl'>Top 6 Most Liked Reivew</div>
            <div className='grid grid-cols-3 gap-4'>
              <ExampleReviewCard onCourseClick={handleSearch} />
            </div>
            <div className='py-4 text-white text-bold font-kanit text-2xl'>The 6 Most Reviewed Course</div>
            <div className='grid grid-cols-3 gap-4'>
              <TopReviewCourse onCourseClick={handleSearch} />
            </div>
          </>
        </div>
      </div>
    </div>
  );
}
