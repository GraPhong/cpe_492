import React, { useState, useEffect } from "react";

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

export default function TopReviewCourse({ onCourseClick }) {
  const [topCourses, setTopCourses] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      const data = await getReviews();
      if (data && data.reviews) {
        const courseReviewCount = data.reviews.reduce((acc, review) => {
          if (acc[review.courseNo]) {
            acc[review.courseNo].count += 1;
          } else {
            acc[review.courseNo] = {
              count: 1,
              courseName: review.courseName,
            };
          }
          return acc;
        }, {});

        const sortedCourses = Object.entries(courseReviewCount)
          .sort((a, b) => b[1].count - a[1].count) 
          .slice(0, 6)
          .map(([courseNo, details]) => ({
            courseNo,
            courseName: details.courseName,
            count: details.count,
          }));

        setTopCourses(sortedCourses);
      }
    };

    fetchReviews();
  }, []);

  return (
    <>
      {topCourses.map((course, index) => (
        <div
          key={index}
          className="p-4 border bg-purple-200 rounded-lg border-slate-300 my-3 flex justify-between gap-5 items-start"
        >
          <div>
            <h2 
              className="font-bold text-xl cursor-pointer text-black hover:underline" 
              onClick={() => onCourseClick(course.courseNo)}
            >
              <div>{course.courseNo} - {course.courseName} </div>
              <div>({course.count} reviews)</div>
            </h2>
          </div>
        </div>
      ))}
    </>
  );
}
