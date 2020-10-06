import React from 'react';
import '../style/ToggleMenu.scss';

const ToggleMenu = () => {
  return (
    <div class='ToggleMenu'>
      <span class='MenuItem'>
        <div class='txt-center'>일</div>
        <span>D</span>
      </span>
      <span class='MenuItem'>
        <div class='txt-center'>주</div>
        <span>W</span>
      </span>
      <span class='MenuItem'>
        <div class='txt-center'>월</div>
        <span>M</span>
      </span>
      <span class='MenuItem'>
        <div class='txt-center'>연도</div>
        <span>Y</span>
      </span>
    </div>
  );
};

export default ToggleMenu;
