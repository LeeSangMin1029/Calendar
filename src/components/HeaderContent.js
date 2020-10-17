import React from 'react';
import ToggleMenu from './ToggleMenu';
import Title from './styles/Title';

import styled from 'styled-components';

const Content = styled.div`
  top: 0;
  z-index: 5;
  width: 100%;
  position: sticky;
  background-color: white;
  border-bottom: 1px solid #cacfd2;
`;

const Info = styled.div`
  padding: 8px;
  display: flex;
  justify-content: space-between;
`;

const HeaderContent = () => {
  return (
    <Content>
      <Info>
        <Title>캘린더</Title>
        <ToggleMenu />
      </Info>
    </Content>
  );
};

export default HeaderContent;
