import React from 'react';
import '../style/ToggleMenu.scss';

const ToggleMenu = ({ isOpenMenu }) => {
  return (
    <>
      {isOpenMenu && (
        <div className='ToggleMenu'>
          <span className='menu-item'>
            <div className='txt-center'>일</div>
            <span>D</span>
          </span>
          <span className='menu-item'>
            <div className='txt-center'>주</div>
            <span>W</span>
          </span>
          <span className='menu-item'>
            <div className='txt-center'>월</div>
            <span>M</span>
          </span>
          <span className='menu-item'>
            <div className='txt-center'>연도</div>
            <span>Y</span>
          </span>
        </div>
      )}
    </>
  );
};

export default ToggleMenu;
