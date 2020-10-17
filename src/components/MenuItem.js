import React from 'react';
import styled from 'styled-components';

const Item = styled.div`
  display: flex;
  padding: 0 10px;
  width: 112px;
  height: 40px;
  line-height: 40px;
  cursor: pointer;
  &:hover {
    background-color: #e5e7e9;
  }
  &:active {
    background-color: #d7dbdd;
  }
  .txt-center {
    flex-grow: 1;
    display: flex;
  }
`;

const MenuItem = ({ item, onUpdateMenu }) => {
  const { kor, eng, path } = item;
  return (
    <Item
      onClick={() => {
        if (window.location.pathname !== path) onUpdateMenu(kor, { pathname: path });
      }}
    >
      <div className='txt-center'>{kor}</div>
      <span>{eng}</span>
    </Item>
  );
};

export default MenuItem;
