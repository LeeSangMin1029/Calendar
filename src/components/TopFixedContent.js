import React from 'react';
import ToggleMenu from './ToggleMenu';

import '../style/TopFixedContent.scss';

const TopFixedContent = () => {
  return (
    <header className='TopFixedContent'>
      <div className='info'>
        <div className='header-title'>
          <span>캘린더</span>
        </div>
        <ToggleMenu />
      </div>
    </header>
  );
};

export default TopFixedContent;
