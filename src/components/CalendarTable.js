import React from 'react';
import { useLocation } from 'react-router-dom';
import DayView from './DayView';
import WeekView from './WeekView';
import MonthTable from './MonthTable';

import '../style/CalendarTable.scss';

const CalendarInfo = Object.freeze({
  maxItemCount: 42,
  yearInfo: { min: 1000, max: 2999 },
  today: new Date().getDate(),
});

const range = (start = 0, end = 0) =>
  start || end ? [...Array(end - start + 1).keys()].map((v) => start + v) : [];

const getLastDayOfMonth = (year = 0, month = 0) =>
  year || month ? new Date(year, month, 0).getDate() : undefined;

const createDate = (year = 0, month = 0) => {
  if (!year || !month) return;
  const indexMonth = month - 1;
  const current = new Date(year, indexMonth, 1);
  const prev = new Date(year, indexMonth, 0);
  const prevLastDate = getLastDayOfMonth(year, indexMonth - 1);
  const nextLastDate = getLastDayOfMonth(year, month);
  const currGetDay = current.getDay();
  const start = prevLastDate - prev.getDay();
  const dayList = range(1, nextLastDate);
  const prevDayList = currGetDay ? range(start, prevLastDate) : [];
  const nextDayList = range(
    1,
    CalendarInfo.maxItemCount - dayList.length - prevDayList.length
  );
  return {
    firstDay: currGetDay,
    lastDate: nextLastDate,
    dayList: dayList,
    prevDayList: prevDayList,
    nextDayList: nextDayList,
    totalDayList: prevDayList.concat(dayList, nextDayList),
  };
};

const getMonthList = (year = 0) => {
  if (
    !year ||
    CalendarInfo.yearInfo.min > year ||
    CalendarInfo.yearInfo.max < year
  )
    return;
  const monthList = range(1, 12).map((month, i) => {
    return {
      id: `Month${i + 1}`,
      contents: createDate(year, month),
    };
  });
  return monthList;
};

const SelectView = ({ view }) => {
  switch (view) {
    case 'day':
      return <DayView />;
    case 'week':
      return <WeekView />;
    case 'month':
      return <div></div>;
    case 'year':
    default:
      return getMonthList(2020).map((table, month) => (
        <MonthTable table={table} key={table.id} month={month + 1} />
      ));
  }
};

const filterView = (pathname = '/') => pathname.slice(1);

const CalendarTable = () => {
  const { pathname } = useLocation();
  return (
    <div className='CalendarTable'>
      <SelectView view={filterView(pathname)} />
    </div>
  );
};

export default CalendarTable;
