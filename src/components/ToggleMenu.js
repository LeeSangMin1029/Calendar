import React, { useRef, useState, useEffect, useCallback } from 'react';
import { withRouter, useHistory } from 'react-router-dom';
import useOutSideClick from './useOutsideClick';
import MenuItem from './MenuItem';

import expandArrow from '../assets/image/expand-arrow.png';
import { Text } from './styles/utils/Default';
import styled from 'styled-components';

const MenuButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 4px;
  border: 1px solid #d7dbdd;
  border-radius: 4px;
  user-select: none;
  cursor: pointer;
  &:hover {
    background-color: #e5e7e9;
  }
  &:active {
    background-color: #d7dbdd;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0;
  top: 52px;
  left: 1770px;
  position: absolute;
  z-index: 10;
  background-color: white;
  box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12),
    0 5px 5px -3px rgba(0, 0, 0, 0.2);
`;

const menuItemList = [
  { kor: '일', eng: 'D', id: 'itemD', path: '/day' },
  { kor: '주', eng: 'W', id: 'itemW', path: '/week' },
  { kor: '월', eng: 'M', id: 'itemM', path: '/month' },
  { kor: '연도', eng: 'Y', id: 'itemY', path: '/year' },
];

const createMenuName = (path = '/') => {
  const matchedItem = menuItemList.find((item) => item.path === path || item.path === '/year');
  return matchedItem.kor;
};

const ToggleMenu = () => {
  const history = useHistory();
  const [name, setName] = useState(createMenuName(window.location.pathname));
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();

  const onCloseMenu = useCallback(() => {
    if (isOpen) setIsOpen(false);
  }, [isOpen]);

  const onToggleMenu = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const onUpdateMenu = (name, target) => {
    setName(name);
    onCloseMenu();
    history.push(target);
  };

  useOutSideClick(ref, () => {
    onCloseMenu();
  });

  useEffect(() => {
    return history.listen((location) => {
      setName(createMenuName(location.pathname));
      onCloseMenu();
    });
  }, [history, onCloseMenu]);

  return (
    <>
      <MenuButton onClick={onToggleMenu} ref={ref}>
        <Text>{name}</Text>
        <img src={expandArrow} width='20' height='20' alt='expandArrow' />
      </MenuButton>
      {isOpen && (
        <Content>
          {menuItemList.map((item) => (
            <MenuItem item={item} key={item.id} onUpdateMenu={onUpdateMenu} />
          ))}
        </Content>
      )}
    </>
  );
};

export default withRouter(ToggleMenu);
