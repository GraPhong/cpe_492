import React from 'react';
import './styles.css';

const times = [
  '8:00', '8:30', '9:00', '9:30', '10:00', '10:30', '11:00', '11:30',
  '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30',
  '16:00', '16:30', '17:00', '17:30', '18:00'
];

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

const Schedule = () => {
  return (
    <div className="schedule">
      <div className="grid">
        <div className="grid-header"></div>
        {days.map((day, index) => (
          <div key={index} className="grid-header day">{day}</div>
        ))}
        {times.map((time, index) => (
          <React.Fragment key={index}>
            <div className="grid-item time">{time}</div>
            {days.map((day, dayIndex) => (
              <div key={dayIndex} className="grid-item slot"></div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Schedule;
