"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import React from "react";
import StarRating from "@/components/StarRating";
import SearchSuggestion from "@/components/SearchSuggestion";

export default function AddReview() {
  const [courseNo, setCourseNo] = useState("");
  const [courseName, setCourseName] = useState("");
  const [review, setReview] = useState("");
  const [score, setScore] = useState(0); // Initialize score as a number
  const like = 0;

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!courseNo || !courseName || !review || !score) {
      alert("Data are required.");
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
        router.push("/review");
      } else {
        throw new Error("Failed to create a review");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='max-w-3xl mx-auto p-4'>
      <div className="py-5">
        <SearchSuggestion setCourseNo={setCourseNo} setCourseName={setCourseName}/>
      </div>
      
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 py-5">
        <div className="font-bold">อยากบอกอะไรให้คนอื่นได้รู้</div>
        <textarea
          onChange={(e) => setReview(e.target.value)}
          value={review}
          className="border border-slate-500 px-8 py-2 h-40"
          placeholder="Review"
        ></textarea>

        <div className="flex">
          คุณอยากให้คะแนนภาพรวมวิชานี้ 
          <StarRating setScore={setScore} />
        </div>
        <div className="flex">
          คุณอยากให้คะแนนผู้สอน
          <StarRating setScore={setScore} />
        </div>

        <div className="flex">
          คุณอยากให้คะแนนความสนุก
          <StarRating setScore={setScore} />
        </div>

        <button
          type="submit"
          className="bg-green-600 font-bold text-white py-3 px-6 w-fit mt-3"
        >
          Add Review
        </button>
      </form>
    </div>
  );
}
