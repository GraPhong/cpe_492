import React, { useState, useEffect } from "react";
import StarRating from './StarRating';  
import LikeButton from "@/components/ReviewComponents/ReviewCard/LikeButton[id]";


const getReviews = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/reviews", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch reviews");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading reviews: ", error);
  }
};

export default function ExampleReviewCard() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      const data = await getReviews();
      if (data && data.reviews) {
        const sortedReviews = data.reviews.sort((a, b) => b.like - a.like).slice(0, 6);
        setReviews(sortedReviews);
      }
    };

    fetchReviews();
  }, []);

  return (
    <>
      {reviews.map((t) => (
        <div
          key={t._id}
          className="p-4 border bg-green-300 rounded-lg border-slate-300 my-3 flex justify-between gap-5 items-start"
        >
          <div>
            <h2 className="font-bold text-xl">{t.courseNo} {t.courseName}</h2>
            <StarRating score={t.score} /> 
            <div>{t.review}</div>
          </div>

          <div className="flex gap-2 items-center">
            <LikeButton like={t.like} />
          </div>
        </div>
      ))}
    </>
  );
}
