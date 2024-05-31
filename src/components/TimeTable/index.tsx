import React, { useState, useEffect } from 'react';
import "./styles.css";
import CheckBox from "../TableResultSearch/CheckBox";
import Schedule from "./Schedule";

const TimeTable = () => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`http://localhost:3000/api/courses?q=${query}`);
      const result = await res.json();
      setData(result.courses);
    };
    if (query.length === 0 || query.length > 0) fetchData();
  }, [query]);

  return (
    <div className="grid-container">
      <div className="course-list-container">
        <Schedule />
      </div>
      <div className="checkbox-container">
        <CheckBox />
        <CheckBox />
      </div>
    </div>
  );
};

export default TimeTable;
