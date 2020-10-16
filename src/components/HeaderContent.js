import React from 'react';
import ToggleMenu from './ToggleMenu';

import '../style/HeaderContent.scss';

const HeaderContent = () => {
  return (
    <div className='HeaderContent'>
      <div className='info'>
        <div className='header-title'>
          <span>캘린더</span>
        </div>
        <ToggleMenu />
      </div>
    </div>
  );
};

export default HeaderContent;
