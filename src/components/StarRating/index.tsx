import React, { useState } from 'react';

const StarRating = ({ setScore }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (index) => {
    setRating(index);
    setScore(index); // Update the parent component's score
  };

  return (
    <div className="flex space-x-1 ml-2">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={index <= (hover || rating) ? "text-yellow-500" : "text-gray-400"}
            onClick={() => handleClick(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l2.083 6.415a1 1 0 00.95.69h6.462c.969 0 1.371 1.24.588 1.81l-5.236 3.808a1 1 0 00-.364 1.118l2.083 6.415c.3.921-.755 1.688-1.538 1.118l-5.236-3.808a1 1 0 00-1.175 0l-5.236 3.808c-.783.57-1.838-.197-1.538-1.118l2.083-6.415a1 1 0 00-.364-1.118L2.019 11.842c-.783-.57-.381-1.81.588-1.81h6.462a1 1 0 00.95-.69l2.083-6.415z"
              />
            </svg>
          </button>
        );
      })}
    </div>
  );
};

export default StarRating;
