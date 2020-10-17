import React from 'react';

import styled from 'styled-components';
import { TA_CENTER } from './styles/utils/Global';

const Content = styled.div`
  width: 240px;
  padding: 0px 12px 14px 16px;
`;

const Container = styled.div`
  height: 265px;
  flex-basis: 25%;
  min-width: 280px;
`;

const Title = styled.div`
  ${TA_CENTER};
`;

const Table = styled.div`
  display: table;
  width: 100%;
  ${TA_CENTER};
`;

const Row = styled.div`
  display: table-row;
`;

const RowGroup = styled.div`
  display: table-row-group;
`;

const Cell = styled.div`
  display: table-cell;
`;

const DayInfo = { dayList: ['일', '월', '화', '수', '목', '금', '토'], uid: 'DayString' };

const ListCell = (list, appendKey) => (
  <Row key={appendKey}>
    {list.map((item, i) => (
      <Cell key={`${appendKey}${i + 1}`}>{item}</Cell>
    ))}
  </Row>
);

const MonthTable = ({ table, month }) => {
  const {
    contents: { totalDateList },
  } = table;
  return (
    <Container>
      <Content>
        <Title>{`${month}월`}</Title>
        <Table>
          {ListCell(DayInfo.dayList, DayInfo.uid)}
          <RowGroup>
            {totalDateList.map((dateList, i) => ListCell(dateList, `${i + 1}week`))}
          </RowGroup>
        </Table>
      </Content>
    </Container>
  );
};

export default MonthTable;
