import React from "react";
import { HiOutlineThumbUp } from "react-icons/hi";


const LikeButton = ({ like }) => {
  return (
    <div>
      <button className="flex items-center">
        <HiOutlineThumbUp size={24} />
        <div>{like}</div>
      </button>
    </div>
  );
};

export default LikeButton;
