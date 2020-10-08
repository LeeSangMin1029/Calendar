import React from 'react';
import { useHistory } from 'react-router-dom';

const MenuItem = ({ item }) => {
  const { kor, eng, path } = item;
  const history = useHistory();

  const onClickToPath = (path) => {
    history.push({ pathname: path });
  };
  return (
    <span className='menu-item' onClick={() => onClickToPath(path)}>
      <div className='txt-center'>{kor}</div>
      <span>{eng}</span>
    </span>
  );
};

export default MenuItem;
