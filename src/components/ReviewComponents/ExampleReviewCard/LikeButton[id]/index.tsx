import React, { useState } from "react";
import { HiOutlineThumbUp } from "react-icons/hi";

const LikeButton = ({ like, reviewId }) => {
  const [likes, setLikes] = useState(like);

  const handleLikeClick = async () => {
    try {
      const res = await fetch(`http://localhost:3000/api/reviews/${reviewId}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ like: likes + 1 })
      });

      if (!res.ok) {
        throw new Error("Failed to update ");
      }

      setLikes(likes + 1);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <button className="flex items-center" onClick={handleLikeClick}>
        <HiOutlineThumbUp size={24} />
        <div>{likes}</div>
      </button>
    </div>
  );
};

export default LikeButton;
