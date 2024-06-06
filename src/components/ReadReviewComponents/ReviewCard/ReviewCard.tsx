import React, { useEffect, useState } from "react";
import StarRating from './StarRating';  
import LikeButton from "./LikeButton[id]";

const ReviewCard = ({ courseNo }) => {
  const [reviews, setReviews] = useState([]);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const fetchReviews = async () => {
      const url = `http://localhost:3000/api/reviews?courseNo=${courseNo}`;
      const res = await fetch(url);
      const result = await res.json();
      const filteredReviews = result.reviews.filter(review => review.courseNo === courseNo);
      setReviews(filteredReviews);
      setNotFound(filteredReviews.length === 0);
    };

    if (courseNo) {
      fetchReviews();
    }
  }, [courseNo]);

  return (
    <div>
      {notFound ? (
        <div className="text-white text-xl   justify-center">
          <div>Not Found</div>
          <img 
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEggA0S-OT1nVcHngaZ_-Ak3dFxxKyM4Js4c_o8te0gL2QjyhXsfkzHxhszMkGbB1rbUUSPSSHf-WxzSnYkL0mnYg9qlLfcfL02A9sqWUIasDJpAwmuDygQGmFbKylEPgpQyHLa5tb3lHw3F/s400/syuwa_tsuujinai.png" 
            alt="Not Found" 
            style={{ width: '30%', height: 'auto' }}
          />
        </div>

      ) : (
        reviews.map((t) => (
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
