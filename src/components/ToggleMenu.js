import React from 'react';
import { withRouter } from 'react-router-dom';
import MenuItem from './MenuItem';
import '../style/ToggleMenu.scss';

const listItemInfo = [
  { kor: '일', eng: 'D', id: 'itemD', path: '/day' },
  { kor: '주', eng: 'W', id: 'itemW', path: '/week' },
  { kor: '월', eng: 'M', id: 'itemM', path: '/month' },
  { kor: '연도', eng: 'Y', id: 'itemY', path: '/year' },
];

const ToggleMenu = ({ isOpenMenu }) => {
  return (
    <>
      {isOpenMenu && (
        <div className='ToggleMenu'>
          {listItemInfo.map((item) => (
            <MenuItem item={item} key={item.id} />
          ))}
        </div>
      )}
    </>
  );
};

export default withRouter(ToggleMenu);
