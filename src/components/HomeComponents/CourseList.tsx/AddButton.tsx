import React, { useContext } from 'react';
import { UserContext } from '@/context/UserContext';

const colors = [
  "bg-slate-200",
  "bg-red-200",
  "bg-yellow-200",
  "bg-green-200",
  "bg-sky-200",
  "bg-violet-200",
  "bg-orange-200",
];

const AddButton = ({ course, selectedSection }) => {
  const { profile } = useContext(UserContext);

  const handleAddCourse = async () => {
    let colorIndex = parseInt(localStorage.getItem('colorIndex')) || 0;
    const courseColor = colors[colorIndex];

    const courseData = {
      courseNo: course.courseNo,
      courseName: course.courseName,
      section: selectedSection.section,
      day: selectedSection.day,
      time: selectedSection.time,
      room: selectedSection.room,
      teacher: selectedSection.teacher,
      color: courseColor,
    };

    if (profile) {
      try {
        const response = await fetch('/api/tables', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(courseData),
        });

        if (!response.ok) {
          throw new Error('Failed to add course');
        }

        const result = await response.json();
        alert('Course added successfully!');
      } catch (error) {
        console.error('Error adding course:', error);
        alert('Failed to add course');
      }
    } else {
      const storedCourses = JSON.parse(localStorage.getItem('courses')) || [];
      storedCourses.push(courseData);
      localStorage.setItem('courses', JSON.stringify(storedCourses));
      alert('Course added successfully!!!');
    }

    colorIndex = (colorIndex + 1) % colors.length;
    localStorage.setItem('colorIndex', colorIndex);
  };

  return (
    <button onClick={handleAddCourse} className="bg-blue-500 text-white p-2 rounded">
      Add
    </button>
  );
};

export default AddButton;
