import React from 'react';
import MonthTable from './MonthTable';
import '../style/CalendarTable.scss';

const CalendarTable = ({ tableList }) => {
  return (
    <div className='CalendarTable'>
      {tableList.map((table, month) => (
        <MonthTable table={table} key={table.id} month={month + 1} />
      ))}
    </div>
  );
};

export default CalendarTable;
