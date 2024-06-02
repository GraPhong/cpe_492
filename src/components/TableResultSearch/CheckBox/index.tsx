import React, { useState } from 'react';

const Checkbox = () => {

  return (
    <div className='flex flex-row p-4 border border-slate-300 my-4'>
    <div>วันที่เรียน</div>
      <label>
        <input
          type="checkbox"
        />
        Monday
      </label>

      <label>
        <input
          type="checkbox"
        />
        Tuesday
      </label>

      <label>
        <input
          type="checkbox"
        />       
        Wednesday
      </label>
      <label>
        <input
          type="checkbox"
        />     
        Thursday
      </label>
      <label>
        <input
          type="checkbox"
        />
        Friday
      </label>
    </div>
  );
};

export default Checkbox;