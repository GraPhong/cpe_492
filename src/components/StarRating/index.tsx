import React from "react";
import { HiStar } from "react-icons/hi";

const StarRating = ({ score }) => {
  const stars = Array(5).fill(0).map((_, index) => (
    <HiStar 
      key={index} 
      className={index < score ? "text-yellow-500" : "text-gray-300"} 
      size={24} 
    />
  ));
  return (
    <div className="flex">{stars}</div>
  )
};

export default StarRating;
