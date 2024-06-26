import React from "react";
import { HiOutlineThumbUp } from "react-icons/hi";

const LikeButton = ({ like, reviewId, onLike }) => {
  const handleLikeClick = async () => {
    await onLike(reviewId);
  };

  return (
    <div>
      <button className="flex items-center" onClick={handleLikeClick}>
        <HiOutlineThumbUp size={24} />
        <div>{like}</div>
      </button>
    </div>
  );
};

export default LikeButton;
