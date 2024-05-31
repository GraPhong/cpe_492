"use client"
import React, { useState, useEffect } from 'react';
import "./styles.css";

const SearchSuggestion = ({ setCourseNo, setCourseName }) => {
    const [query, setQuery] = useState('');
    const [courses, setCourses] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState(null);

    useEffect(() => {
        const fetchCourses = async () => {
            if (/^\d+$/.test(query)) {  // Check if query contains only numbers
                try {
                    const response = await fetch(`http://localhost:3000/api/courses?q=${query}`);
                    if (!response.ok) throw new Error('Network response was not ok');
                    const result = await response.json();
                    setCourses(result.courses);
                } catch (error) {
                    console.error('Error fetching courses:', error);
                }
            } else {
                setCourses([]);  // Clear courses if query is not a number
            }
        };

        if (query.length > 0) fetchCourses();
    }, [query]);

    const handleSearch = (event) => {
        setQuery(event.target.value);
        setSelectedCourse(null);
    };

    const handleSelectCourse = (course) => {
        setQuery(course.courseNo);
        setSelectedCourse(course);
        setCourses([]);
        setCourseNo(course.courseNo);
        setCourseName(course.courseName);
    };

    const clearSearch = () => {
        setQuery('');
        setCourses([]);
        setSelectedCourse(null);
        setCourseNo('');
        setCourseName('');
    };

    return (
        <div className="search-bar-container">
            <div className="input-container">
                <input
                    type="text"
                    value={query}
                    onChange={handleSearch}
                    placeholder="Search for a course..."
                    className="search-input"
                />
                {query.length > 0 && (
                    <button onClick={clearSearch} className="clear-button">
                        &times;
                    </button>
                )}
            </div>
            {query.length > 0 && courses.length > 0 && (
                <ul className="suggestions-list">
                    {courses.map(course => (
                        <li
                            key={course.courseNo}
                            className="suggestion-item"
                            onClick={() => handleSelectCourse(course)}
                        >
                            {course.courseNo}
                        </li>
                    ))}
                </ul>
            )}
            {selectedCourse && (
                <div className="selected-course">
                    <p><strong>Course:</strong> {selectedCourse.courseName}</p>
                </div>
            )}
        </div>
    );
};

export default SearchSuggestion;
