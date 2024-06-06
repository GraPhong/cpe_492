import React from "react";

const CourseBox = () => {
  return (
    <div className="w-full h-[10vh] p-2 border border-black bg-white rounded-lg flex justify-between gap-5 items-start">
      <div className="flex flex-col">
        <div className="text-xs">CourseNo: x</div>
        <div className="text-xs">CourseName: y</div>
        <div className="text-xs">Sec: z</div>
      </div>
    </div>
  );
};

export default CourseBox;
