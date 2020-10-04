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
          {dayString.map((day) => (
            <div className='day'>{day}</div>
          ))}
        </div>
        <div className='date-list'>
          {totalDayList.map((date) => (
            <div className='date-num'>{date}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MonthTable;
