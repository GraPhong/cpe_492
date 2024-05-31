import React from 'react';

const  SearBarReview = () => {
  return (
    <div className="flex justify-center mt-8">
      <div className="flex items-center border rounded-full overflow-hidden">
        <input
          type="text"
          placeholder="Company or category"
          className="p-4 w-80 focus:outline-none"
        />
        <button className="bg-blue-500 text-white px-6 py-2 rounded-full">
          Search
        </button>
      </div>
    </div>
  );
};

export default SearBarReview;