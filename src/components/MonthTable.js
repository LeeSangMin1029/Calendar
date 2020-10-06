import React from 'react';
import '../style/MonthTable.scss';

const dayString = ['일', '월', '화', '수', '목', '금', '토'];

const MonthTable = ({ table, month }) => {
  const {
    contents: { totalDayList },
  } = table;
  return (
    <div className='MonthTable'>
      <div className='info'>
        <div className='month'>{`${month}월`}</div>
        <div className='day-list'>
          {dayString.map((day, i) => (
            <div className='day' key={`${i + 1}day`}>
              {day}
            </div>
          ))}
        </div>
        <div className='date-list'>
          {totalDayList.map((date, i) => (
            <div className='date-num' key={`${i + 1}date`}>
              {date}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MonthTable;
