import React, { useState } from 'react';
import Button from '@mui/material/Button'
import SearchBar from './SearchBarReview/SearchBar';

const SearchBox = () => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);

  const fetchData = async (searchQuery) => {
    let url = `http://localhost:3000/api/courses?q=${searchQuery}`;   
    const res = await fetch(url);
    const result = await res.json();
    setData(result.courses);
  };

  const handleSearch = (courseNo) => {
    fetchData(courseNo);
  };
  return (
    <div className=' flex flex-col p-4 border-rounde bg-gray-800 border-slate-900 my-4'>
        <div className='py-6'>
            <div className='text-white '>
                อยากอ่านรีวิว
                <div className='text-black'>
                  <SearchBar query={query} setQuery={setQuery} onSearch={handleSearch} />
                </div>
            </div>
            <div className='flex- py-10'>
                <div className='text-white '>อยากเขียนรีวิว</div>
                <Button variant="contained" href="./addReview">เขียนรีวิว</Button>
            </div>
        </div>
    </div>
  );
};

export default SearchBox;

