import React from 'react';
import '../style/TopFixedContent.scss';
import expandArrow from '../assets/image/expand-arrow.png';

const TopFixedContent = () => {
  return (
    <header className='TopFixedContent'>
      <div className='Info'>
        <div className='HeaderTitle'>
          <span>캘린더</span>
        </div>
        <div className='ClickMenu'>
          <span className='txt'>연도</span>
          <img src={expandArrow} width='20' height='20' alt='expandArrow' />
        </div>
      </div>
    </header>
  );
};

export default TopFixedContent;
