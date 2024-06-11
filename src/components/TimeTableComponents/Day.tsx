import React from "react";
import CourseBox from "./CourseBox";

const calculateTimeDifference = (endTime, startTime) => {
  const [endHour, endMinute] = [parseInt(endTime.slice(0, 2)), parseInt(endTime.slice(2, 4))];
  const [startHour, startMinute] = [parseInt(startTime.slice(0, 2)), parseInt(startTime.slice(2, 4))];

  const endInMinutes = endHour * 60 + endMinute;
  const startInMinutes = startHour * 60 + startMinute;

  return startInMinutes - endInMinutes;
};

const calculateMarginTop = (timeGapInMinutes) => {
  return Math.floor(timeGapInMinutes / 30) * 3; // 3vh for every 30 minutes
};

const Day = ({ day, courses, onRemoveCourse }) => {
  const getCoursesForDay = (shortName) => {
    return courses
      .filter(course => course.day === shortName)
      .sort((a, b) => {
        const [aStartTime] = a.time.split("-");
        const [bStartTime] = b.time.split("-");
        return parseInt(aStartTime) - parseInt(bStartTime);
      });
  };

  const coursesForDay = getCoursesForDay(day.shortName);

  return (
    <div className="flex flex-col items-center justify-center space-y-0">
      <div className={`h-[10vh] w-[25vh] rounded-lg border-2 flex items-center justify-center ${day.headerColor}`}>
        <div className="text-slate-700 text-2xl font-kanit font-bold">{day.name}</div>
      </div>
      <div className="h-[100vh] w-[25vh] border-l-2 border-black flex flex-col items-center p-1 space-y-0">
        {coursesForDay.map((course, index) => {
          let marginTop = 0;

          if (index === 0) {
            const [courseStartTime] = course.time.split('-');
            const timeGapInMinutes = calculateTimeDifference("0800", courseStartTime);
            marginTop = calculateMarginTop(timeGapInMinutes);
          } else {
            const previousCourse = coursesForDay[index - 1];
            const previousEndTime = previousCourse.time.split('-')[1];
            const currentStartTime = course.time.split('-')[0];

            const timeGapInMinutes = calculateTimeDifference(previousEndTime, currentStartTime);
            marginTop = calculateMarginTop(timeGapInMinutes);
          }

          return (
            <CourseBox
              key={course._id}
              id={course._id}
              courseNo={course.courseNo}
              courseName={course.courseName}
              section={course.section}
              time={course.time}
              room={course.room}
              backgroundColor={course.color}
              onRemoveCourse={onRemoveCourse}
              marginTop={marginTop}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Day;
