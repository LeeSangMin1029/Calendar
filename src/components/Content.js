import React from 'react';
import { useLocation } from 'react-router-dom';
import DayView from './DayView';
import WeekView from './WeekView';
import MonthTable from './MonthTable';
import HeaderContent from './HeaderContent';

import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  height: auto;
  padding-top: 20px;
  padding-right: 40px;
  margin-left: 70px;
`;

const CalendarInfo = Object.freeze({
  maxItemCount: 42,
  yearInfo: { min: 1000, max: 2999 },
  today: new Date().getDate(),
});

const arrayTo2DArray = (list = [], divide = 0) => {
  const result = [];
  const input = [...list];
  while (input[0]) {
    result.push(input.splice(0, divide));
  }
  return result;
};

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
  const currGetDate = current.getDay();
  const start = prevLastDate - prev.getDay();
  const dateList = range(1, nextLastDate);
  const prevDateList = currGetDate ? range(start, prevLastDate) : [];
  const nextDateList = range(1, CalendarInfo.maxItemCount - dateList.length - prevDateList.length);
  const totalDateList = arrayTo2DArray(prevDateList.concat(dateList, nextDateList), 7);
  return {
    firstDay: currGetDate,
    lastDate: nextLastDate,
    dateList: dateList,
    prevDateList: prevDateList,
    nextDateList: nextDateList,
    totalDateList: totalDateList,
  };
};

const getMonthList = (year = 0) => {
  if (!year || CalendarInfo.yearInfo.min > year || CalendarInfo.yearInfo.max < year) return;
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

const Content = () => {
  const { pathname } = useLocation();
  return (
    <>
      <HeaderContent />
      <Container>
        <SelectView view={filterView(pathname)} />
      </Container>
    </>
  );
};

export default Content;
