import React, { useEffect, useState } from "react";
import StarRating from './StarRating';
import LikeButton from "@/components/ReviewComponents/ReviewCard/LikeButton[id]";

const ReviewCard = ({ courseNo }) => {
  const [reviews, setReviews] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const [sortMethod, setSortMethod] = useState("Most recent");

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const url = `http://localhost:3000/api/reviews?courseNo=${courseNo}`;
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error("Failed to fetch reviews");
        }
        const result = await res.json();
        setReviews(result.reviews);
        setNotFound(result.reviews.length === 0);
      } catch (error) {
        console.error("Error loading reviews: ", error);
      }
    };

    if (courseNo) {
      fetchReviews();
    }
  }, [courseNo]);

  const sortReviews = (reviews, method) => {
    switch (method) {
      case "Most recent":
        return reviews.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      case "Most Like":
        return reviews.sort((a, b) => b.like - a.like);
      case "Most Star":
        return reviews.sort((a, b) => b.score - a.score);
      default:
        return reviews;
    }
  };

  const sortedReviews = sortReviews([...reviews], sortMethod);

  return (
    <div>
      <div className="mt-3 py-2 flex">
        <div className="text-xl font-bold font-kanit text-white">Sort: </div>
        <select 
          className="ml-1 bg-transparent text-black bg-white border border-gray-400 rounded-md p-2"
          onChange={(e) => setSortMethod(e.target.value)}
          value={sortMethod}
        >
          <option>Most recent</option>
          <option>Most Like</option>
          <option>Most Star</option>
        </select>
      </div>
      {notFound ? (
        <div className="text-white text-xl justify-center">
          <div>Not Found</div>
          <img 
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEggA0S-OT1nVcHngaZ_-Ak3dFxxKyM4Js4c_o8te0gL2QjyhXsfkzHxhszMkGbB1rbUUSPSSHf-WxzSnYkL0mnYg9qlLfcfL02A9sqWUIasDJpAwmuDygQGmFbKylEPgpQyHLa5tb3lHw3F/s400/syuwa_tsuujinai.png" 
            alt="Not Found" 
            style={{ width: '30%', height: 'auto' }}
          />
        </div>
      ) : (
        sortedReviews.map((t) => (
          <div
            key={t._id}
            className="p-4 bg-white rounded-lg border border-slate-300 my-3 flex justify-between gap-5 items-start"
          >
            <div>
              <h2 className="font-bold text-2xl">{t.courseNo} {t.courseName}</h2>
              <StarRating score={t.score} /> 
              <div>{t.review}</div>
            </div>
            <div className="flex gap-2 items-center">
              <LikeButton like={t.like} />
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default ReviewCard;
