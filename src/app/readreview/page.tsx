"use client"
import ReviewCard from '@/components/ReadReviewComponents/ReviewCard/ReviewCard';
import SearchBarReview from '@/components/ReadReviewComponents/SearchBarReview/SearchBarReview';
import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function ReadReview() {
  const router = useRouter();
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
    router.push(`/readreview?courseNo=${courseNo}`);
  };

  return (
    <div className='bg-purple-600 min-h-screen flex flex-col items-center'>
      <div className='mt-8 max-w-5xl w-full p-4'>
        <div>
          <div className='font-bold text-2xl text-white py-2'>ค้นหารีวิว</div>
          <SearchBarReview query={query} setQuery={setQuery} onSearch={handleSearch} />
          {courseNo && <ReviewCard courseNo={courseNo} />}
        </div>
      </div>
    </div>
  );
}
