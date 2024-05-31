// Import necessary modules/components
import Link from "next/link";
import { HiOutlinePlusCircle } from "react-icons/hi";
import React, { useState, useEffect } from "react";
const getCourses = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/courses", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch courses");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading courses: ", error);
    return { courses: [], error: "Failed to load courses" };
  }
};

export default function CourseList() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedSection, setSelectedSection] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCourses();
        setCourses(data.courses);
        setLoading(false);
        setError(null);
      } catch (error) {
        setError("Failed to load courses");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSectionSelect = (section) => {
    setSelectedSection(section);
  };

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        courses.map((course) => (
          <div key={course._id}>
            <div className="p-4 border border-slate-300 my-3">
              <h2 className="font-bold text-2xl">{course.courseNo} {course.courseName}</h2>
              <div>
                <select onChange={(e) => handleSectionSelect(e.target.value)}>
                  <option value="">Select a section</option>
                  {course.sections.map((section) => (
                    <option key={section.id} value={section.day}>
                      {section.section}
                    </option>
                  ))}
                </select>
                {selectedSection && (
                  <div>
                    <p>Day: {selectedSection}</p>
                    {/* Render other details of the selected section as needed */}
                  </div>
                )}
              </div>
              <div className="flex gap-2">
                <Link href={`/add/${course._id}`}>
                  <HiOutlinePlusCircle size={28} />
                  ADD
                </Link>
              </div>
            </div>
          </div>
        ))
      )}
    </>
  );
}
