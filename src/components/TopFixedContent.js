import React, { useState } from 'react';
import ToggleMenu from './ToggleMenu';
import '../style/TopFixedContent.scss';
import expandArrow from '../assets/image/expand-arrow.png';

const TopFixedContent = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <header className='TopFixedContent'>
      <div className='info'>
        <div className='header-title'>
          <span>캘린더</span>
        </div>
        <div
          className='click-menu'
          onClick={() => {
            setIsOpenMenu(!isOpenMenu);
          }}
        >
          <span className='txt'>연도</span>
          <img src={expandArrow} width='20' height='20' alt='expandArrow' />
        </div>
        <ToggleMenu isOpenMenu={isOpenMenu} />
      </div>
    </header>
  );
};

export default TopFixedContent;
