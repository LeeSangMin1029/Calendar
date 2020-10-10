import React, { useRef, useState, useEffect, useCallback } from 'react';
import { withRouter, useHistory } from 'react-router-dom';
import useOutSideClick from './useOutsideClick';
import MenuItem from './MenuItem';

import expandArrow from '../assets/image/expand-arrow.png';
import '../style/ToggleMenu.scss';

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
      <div className='click-menu' onClick={onToggleMenu} ref={ref}>
        <span className='txt'>{name}</span>
        <img src={expandArrow} width='20' height='20' alt='expandArrow' />
      </div>
      {isOpen && (
        <div className='ToggleMenu'>
          {menuItemList.map((item) => (
            <MenuItem item={item} key={item.id} onUpdateMenu={onUpdateMenu} />
          ))}
        </div>
      )}
    </>
  );
};

export default withRouter(ToggleMenu);
