import React, { useCallback, memo } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../../atoms/Button/Button';

const ListPageHeader = memo(({ title, pathNew }) => {
  const history = useHistory();

  const handleClickButton = useCallback(() => {
    history.push(pathNew);
  }, [pathNew]);

  return (
    <div className='header'>
      <h3>{title}</h3>
      <div style={{ visibility: pathNew ? 'visible' : 'hidden' }}>
        <Button typeStyle='primary' text='Crear' handleClick={handleClickButton} />
      </div>
    </div>
  );
});

export default ListPageHeader;
