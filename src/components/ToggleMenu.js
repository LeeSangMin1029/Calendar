import React from 'react';
import '../style/ToggleMenu.scss';

const listItem = [
  { kor: '일', eng: 'D', id: 'itemD' },
  { kor: '주', eng: 'W', id: 'itemW' },
  { kor: '월', eng: 'M', id: 'itemM' },
  { kor: '연도', eng: 'Y', id: 'itemY' },
];

const getMenuItem = ({ kor, eng, id }) => (
  <span className='menu-item' key={id}>
    <div className='txt-center'>{kor}</div>
    <span>{eng}</span>
  </span>
);

const ToggleMenu = ({ isOpenMenu }) => {
  return (
    <>
      {isOpenMenu && (
        <div className='ToggleMenu'>
          {listItem.map((item) => getMenuItem(item))}
        </div>
      )}
    </>
  );
};

export default ToggleMenu;
