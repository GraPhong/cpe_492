import { useState, useEffect } from "react";
import CheckBox from "./CheckBox";
import "./TableResultSearch.css";

import CourseList from "../CourseList.tsx";
import SearchSuggestion1 from "./SearchSuggestion1";

const TableResultSearch = () => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const [searchTriggered, setSearchTriggered] = useState(false);
  const [noResults, setNoResults] = useState(false);
  const [courseNo, setCourseNo] = useState("");
  const [courseName, setCourseName] = useState("");

  const handleSearch = () => {
    setSearchTriggered(true);
    setNoResults(false); // Reset no results state
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`/api/courses?q=${query}`);
      const result = await res.json();
      if (result.courses.length === 0) {
        setNoResults(true);
      } else {
        setData(result.courses);
        setNoResults(false);
      }
    };
    if (searchTriggered) {
      fetchData();
      setSearchTriggered(false); // Reset search trigger
    }
  }, [searchTriggered]);

  return (
    <div>
      <div className="py-5 font-bold text-2xl">ค้นหาวิชา</div>
      <SearchSuggestion1 setCourseNo={setCourseNo} setCourseName={setCourseName}/>
      <CheckBox />
      <div>
        <CourseList courses={data} />
      </div>
    </div>
  );
};

export default TableResultSearch;
