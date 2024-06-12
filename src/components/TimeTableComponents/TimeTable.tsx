import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '@/context/UserContext';
import Day from './Day';

const TimeTable = () => {
  const { profile } = useContext(UserContext);
  const [courses, setCourses] = useState([]);

  const fetchCourses = async () => {
    if (profile) {
      try {
        const response = await fetch('/api/tables');
        if (response.ok) {
          const data = await response.json();
          setCourses(data.tables);
        } else {
          console.error('Failed to fetch courses');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    } else {
      const storedCourses = JSON.parse(localStorage.getItem('courses')) || [];
      setCourses(storedCourses);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, [profile]);

  const handleRemoveCourse = (id) => {
    if (profile) {
      setCourses(courses.filter(course => course._id !== id));
    } else {
      const updatedCourses = courses.filter(course => course._id !== id);
      localStorage.setItem('courses', JSON.stringify(updatedCourses));
      setCourses(updatedCourses);
    }
  };

  const days = [
    { name: 'Monday', shortName: 'MTh', headerColor: 'bg-yellow-400' },
    { name: 'Tuesday', shortName: 'TuF', headerColor: 'bg-pink-400' },
    { name: 'Wednesday', shortName: 'We', headerColor: 'bg-green-400' },
    { name: 'Thursday', shortName: 'MTh', headerColor: 'bg-orange-400' },
    { name: 'Friday', shortName: 'TuF', headerColor: 'bg-purple-400' },
    { name: 'Saturday', shortName: 'Sa', headerColor: 'bg-blue-400' },
    { name: 'Sunday', shortName: 'Su', headerColor: 'bg-red-400' },
  ];

  return (
    <div className="py-10 grid grid-cols-7 gap-x-3">
      {days.map((day, index) => (
        <Day key={index} day={day} courses={courses} onRemoveCourse={handleRemoveCourse} />
      ))}
    </div>
  );
};

export default TimeTable;
