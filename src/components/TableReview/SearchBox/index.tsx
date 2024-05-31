import React, { useState } from 'react';
import InputSearch from '../InputSearch';
import Button from '@mui/material/Button'

const SearchBox = () => {

  return (
    <div className=' flex flex-col p-4 border text-white  bg-gray-800 border-slate-900 my-4'>
        <div className='py-6'>
            <div>
                อยากอ่านรีวิว
                <InputSearch/>
            </div>
            <div className='flex- py-6'>
                <div>อยากเขียนรีวิว</div>
                <Button variant="contained" href="./addReview">เขียนรีวิว</Button>
            </div>
        </div>
    </div>
  );
};

export default SearchBox;

