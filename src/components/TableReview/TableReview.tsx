import React, { useEffect, useState } from 'react';
import SearchBox from './SearchBox/SearchBox';
import ReviewCard from './ReviewCard';
import './styles.css';

const TableReview = () => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const res = await fetch(`http://localhost:3000/api/reviews?q=${query}`);
    const result = await res.json();

    const sortedReviews = result.reviews.sort((a, b) => {
      if (b.like === a.like) {
        return a._id.localeCompare(b._id);
      }
      return b.like - a.like;
    });

    const topSixReviews = sortedReviews.slice(0, 6);
    setData(topSixReviews);
  };

  useEffect(() => {
    fetchData();
  }, [query]);

  const handleLike = async (id) => {
    try {
      const res = await fetch(`http://localhost:3000/api/reviews/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ like: data.find(review => review._id === id).like + 1 })
      });

      if (!res.ok) {
        throw new Error("Failed to update ");
      }

      // Update the local state to reflect the new like count
      setData(prevData => prevData.map(review => 
        review._id === id ? { ...review, like: review.like + 1 } : review
      ));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex h-screen">
      <div className='left-pane px-14'>
        <div>
          <div className='py-4 text-2xl font-kanit font-bold text-white'>Most Liked Reviews</div>
          <div>
            <ReviewCard reviews={data} onLike={handleLike} />
          </div>
        </div>
      </div>
      <div className="right-pane px-10">
        <div className='py-16'>
          <SearchBox setQuery={setQuery} />
        </div>
      </div>
    </div>
  );
};

export default TableReview;
