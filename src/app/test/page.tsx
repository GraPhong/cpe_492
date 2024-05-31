"use client"
import React, { useState, useEffect } from 'react';

const SearchBar = () => {
    const [query, setQuery] = useState('');
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await fetch(`http://localhost:3000/api/courses?q=${query}`);
                if (!response.ok) throw new Error('Network response was not ok');
                const result = await response.json();
                setCourses(result.courses);
            } catch (error) {
                console.error('Error fetching courses:', error);
            }
        };

        if (query.length > 0) fetchCourses();
    }, [query]);

    const handleSearch = (event) => {
        setQuery(event.target.value);
    };

    return (
        <div className="search-bar-container">
            <input
                type="text"
                value={query}
                onChange={handleSearch}
                placeholder="Search for a course..."
                className="search-input"
            />
            {query.length > 0 && courses.length > 0 && (
                <ul className="suggestions-list">
                    {courses.map(course => (
                        <li key={course.courseNo} className="suggestion-item">
                            {course.courseNo}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SearchBar;
