"use client";

import React, { useState, useEffect } from "react";
import AddButton from './AddButton'; 
import './styles.css'; 

const CourseList = ({ courses }) => {
  const [selectedSections, setSelectedSections] = useState({});

  useEffect(() => {
    const initialSelectedSections = courses.reduce((acc, course) => {
      acc[course._id] = course.sections[0]?.section || '';
      return acc;
    }, {});
    setSelectedSections(initialSelectedSections);
  }, [courses]);

  const handleSectionChange = (courseId, newSection) => {
    setSelectedSections((prevSections) => ({
      ...prevSections,
      [courseId]: newSection,
    }));
  };

  return (
    <div>
      {courses.map((course) => {
        const selectedSection = course.sections.find(
          (section) => section.section === selectedSections[course._id]
        );

        return (
          <div key={course._id} className="course-card p-4 border rounded-md border-slate-400 my-4">
            <div className="flex justify-between">
              <div className="font-bold text-2xl font-kanit">
                {course.courseNo} {course.courseName}
              </div>
              <AddButton course={course} selectedSection={selectedSection} /> 
            </div>

            <div className="my-2 font-kanit">
              <label htmlFor={`section-select-${course._id}`} className="mr-2 font-semibold">
                Section:
              </label>
              <select
                id={`section-select-${course._id}`}
                value={selectedSections[course._id]}
                onChange={(e) =>
                  handleSectionChange(course._id, e.target.value)
                }
              >
                {course.sections.map((section) => (
                  <option key={section.section} value={section.section}>
                    {section.section}
                  </option>
                ))}
              </select>
            </div>

            {selectedSection && (
              <div className="flex font-kanit">
                <div className="flex flex-col">
                  <strong>Teacher: </strong>{selectedSection.teacher}
                </div>
                <div className="flex flex-col ml-10">
                  <strong>Day: </strong> {selectedSection.day}
                </div>
                <div className="flex flex-col ml-10">
                  <strong>Time: </strong> {selectedSection.time}
                </div>
                <div className="flex flex-col ml-10">
                  <strong>Room: </strong> {selectedSection.room}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default CourseList;