import React from "react";
import RemoveButton from "./RemoveBtn";

const calculateHeightClass = (time) => {
  const [start, end] = time.split('-');
  const [startHour, startMinute] = [parseInt(start.slice(0, 2)), parseInt(start.slice(2, 4))];
  const [endHour, endMinute] = [parseInt(end.slice(0, 2)), parseInt(end.slice(2, 4))];

  const startInMinutes = startHour * 60 + startMinute;
  const endInMinutes = endHour * 60 + endMinute;
  const durationInMinutes = endInMinutes - startInMinutes;

  if (durationInMinutes <= 90) {
    return 'h-[9vh]';
  } else if (durationInMinutes <= 180) {
    return 'h-[18vh]';
  }

  return 'h-[9vh]'; 
};

const CourseBox = ({ id, courseNo, courseName, section, time, room, backgroundColor, onRemoveCourse, marginTop }) => {
  const heightClass = calculateHeightClass(time);

  return (
    <div
      className={`relative w-full ${heightClass} p-2 border border-black rounded-lg flex flex-col justify-between gap-5 ${backgroundColor}`}
      style={{ marginTop: `${marginTop}vh` }}
    >
      <div className="absolute top-2 right-2">
        <RemoveButton id={id} onRemoveCourse={onRemoveCourse} />
      </div>
      <div className="flex flex-col">
        <div className="text-xs">{courseNo}| {room}</div>
        <div className="text-xs overflow-hidden overflow-ellipsis whitespace-nowrap w-24">
          {courseName.length > 11 ? `${courseName.slice(0, 11)}...` : courseName}
        </div>
        <div className="text-xs">Sec:{section} | {time} </div>
      </div>
    </div>
  );
};

export default CourseBox;
