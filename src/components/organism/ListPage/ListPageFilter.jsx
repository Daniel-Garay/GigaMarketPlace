import React, { memo, useRef } from 'react';
import { FiSearch } from 'react-icons/fi';
import { debounce, noob } from '../../../utils/utils';

const ListPageFilter = ({ placeHolder, onChange }) => {
  const refDebounce = useRef();

  const handleChange = (ev) => {
    ev.persist();
    if (!refDebounce.current) {
      refDebounce.current = debounce(() => onChange(ev.target.value), 600);
    }
    refDebounce.current();
  };

  return (
    <div className='search'>
      <input type='text' placeholder={placeHolder} onChange={handleChange} />
      <FiSearch className='input-icon' />
    </div>
  );
};

ListPageFilter.defaultProps = { placeHolder: '', onChange: noob };

export default memo(ListPageFilter);
