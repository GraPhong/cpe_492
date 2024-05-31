import { useState, useEffect } from "react";
import CourseList from "@/components/CourseList.tsx";
import CheckBox from "./CheckBox";
import "./TableResultSearch.css";
import SearchInput from "./SearchInput";

const TableResultSearch = () => {
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
      <SearchInput query={query} setQuery={setQuery} />
      <div className="course-list-container">
        <CourseList courses={data} />
      </div>
      <div className="checkbox-container">
        <CheckBox />
      </div>
    </div>
  );
};

export default TableResultSearch;
