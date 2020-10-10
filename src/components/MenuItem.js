import React from 'react';

const MenuItem = ({ item, onUpdateMenu }) => {
  const { kor, eng, path } = item;
  return (
    <span
      className='menu-item'
      onClick={() => {
        if (window.location.pathname !== path) onUpdateMenu(kor, { pathname: path });
      }}
    >
      <div className='txt-center'>{kor}</div>
      <span>{eng}</span>
    </span>
  );
};

export default MenuItem;
