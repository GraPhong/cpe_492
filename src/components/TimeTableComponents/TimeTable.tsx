import React from 'react';
import CourseBox from './CourseBox';

const days = [
  { name: 'Monday', width: '20vh', backgroundColor: 'bg-yellow-400' },
  { name: 'Tuesday', width: '20vh', backgroundColor: 'bg-pink-400' },
  { name: 'Wednesday', width: '20vh', backgroundColor: 'bg-green-400' },
  { name: 'Thursday', width: '20vh', backgroundColor: 'bg-orange-400' },
  { name: 'Friday', width: '20vh', backgroundColor: 'bg-sky-400' },
  { name: 'Saturday', width: '20vh', backgroundColor: 'bg-purple-400' },
  { name: 'Sunday', width: '20vh', backgroundColor: 'bg-red-400' },
];

const TimeTable = () => {
  return (
    <div className="py-10 grid grid-cols-7 gap-x-3">
      {days.map((day, index) => (
        <div key={index} className="flex flex-col items-center justify-center space-y-0">
          <div
            className={`h-[10vh] w-[25vh] rounded-lg border-2 flex items-center justify-center ${day.backgroundColor}`}
          >
            <div className="text-slate-700 text-2xl font-kanit font-bold">{day.name}</div>
          </div>
          <div className='h-[80vh] w-[25vh]  border-l-2  border-black flex flex-col items-center p-1 space-y-0'> 
            <CourseBox />
            <CourseBox />  
            <CourseBox />
            <CourseBox />        
          </div>
        </div>
      ))}
    </div>
  );
};

export default TimeTable;
