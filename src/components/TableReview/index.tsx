import React, { useEffect, useState } from 'react';
import SearchBox from './SearchBox';
import ReviewCard from './ReviewCard';
import './styles.css';

const TableReview = () => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`http://localhost:3000/api/reviews?q=${query}`);
      const result = await res.json();

      // Sort the reviews by likes in descending order, then by _id if likes are equal
      const sortedReviews = result.reviews.sort((a, b) => {
        if (b.like === a.like) {
          return a._id.localeCompare(b._id);
        }
        return b.like - a.like;
      });

      // Get the top 6 reviews
      const topSixReviews = sortedReviews.slice(0, 6);

      setData(topSixReviews);
    };

    if (query.length === 0 || query.length > 0) fetchData();
  }, [query]);

  return (
    <div className="flex h-screen">
      <div className='left-pane px-10'>
        <div>
          <div>Most Liked Reviews</div>
          <div>
            <ReviewCard reviews={data} />
          </div>
        </div>
      </div>
      <div className="right-pane bg-lime-500 px-10">
        <SearchBox setQuery={setQuery} />
      </div>
    </div>
  );
};

export default TableReview;
