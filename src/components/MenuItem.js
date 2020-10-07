import React, { useCallback } from 'react';

const MenuItem = ({ item, history }) => {
  const { kor, eng, path } = item;
  const onClickToPath = useCallback((history, path) => {
    history.push(path);
  }, []);

  return (
    <span className='menu-item' onClick={() => onClickToPath(history, path)}>
      <div className='txt-center'>{kor}</div>
      <span>{eng}</span>
    </span>
  );
};

export default MenuItem;
