"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import React from "react";
import StarRating from "@/components/StarRating";
import SearchBarReview from "@/components/AddReviewComponents/SearchBarReview/SearchBarReview";

export default function AddReview() {
  const [courseNo, setCourseNo] = useState("");
  const [courseName, setCourseName] = useState("");
  const [review, setReview] = useState("");
  const [score, setScore] = useState(0); 
  const [query, setQuery] = useState(""); 
  const like = 0;

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!courseNo || !courseName || !review || !score) {
      alert("All fields are required.");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/reviews", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ courseNo, courseName, review, score, like }),
      });

      if (res.ok) {
        alert("Review has been added.");
        router.push("/readreview");
      } else {
        throw new Error("Failed to create a review");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-purple-600 min-h-screen flex flex-col items-center">
      <div className="mt-8 max-w-5xl w-full p-4 px-25">
        <div className="py-5 ">
          <SearchBarReview 
            query={query} // Pass query state
            setQuery={setQuery} // Pass setQuery function
            setCourseNo={setCourseNo} 
            setCourseName={setCourseName} 
          />
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 py-5">
          <div className="font-bold text-white">อยากบอกอะไรให้คนอื่นได้รู้</div>
          <textarea
            onChange={(e) => setReview(e.target.value)}
            value={review}
            className="border rounded-lg px-8 py-2 h-40"
            placeholder="Review"
          ></textarea>
          <div className="flex text-white">
            คุณอยากให้คะแนนภาพรวมวิชานี้ 
            <StarRating setScore={setScore} />
          </div>
          <div className="flex text-white">
            คุณอยากให้คะแนนผู้สอน
            <StarRating setScore={setScore} />
          </div>
          <div className="flex text-white">
            คุณอยากให้คะแนนความสนุก
            <StarRating setScore={setScore} />
          </div>
          <button
            type="submit"
            className="bg-green-600 rounded-lg font-bold text-white py-3 px-6 w-fit mt-3"
          >
            Add Review
          </button>
        </form>
      </div>
    </div>
  );
}
