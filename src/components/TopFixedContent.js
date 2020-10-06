import React, { useState } from 'react';
import ToggleMenu from './ToggleMenu';
import '../style/TopFixedContent.scss';
import expandArrow from '../assets/image/expand-arrow.png';

const TopFixedContent = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <header className='TopFixedContent'>
      <div className='Info'>
        <div className='HeaderTitle'>
          <span>캘린더</span>
        </div>
        <div
          className='ClickMenu'
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
