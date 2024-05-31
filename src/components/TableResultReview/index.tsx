import { useState, useEffect } from "react";
import ReviewCard from "./ReviewCard";
import PostReviewBar from "./PostReviewBar";
import SearchInput from "./SearchInput";
import "./styles.css";

const TableResultReview = () => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`http://localhost:3000/api/reviews?q=${query}`);
      const result = await res.json();
      setData(result.reviews);
    };
    if (query.length === 0 || query.length > 0) fetchData();
  }, [query]);

  return (
    <div className="app">
      <PostReviewBar/>
      <SearchInput query={query} setQuery={setQuery} />
      <ReviewCard reviews={data} />
    </div>
  );
}

export default TableResultReview;
