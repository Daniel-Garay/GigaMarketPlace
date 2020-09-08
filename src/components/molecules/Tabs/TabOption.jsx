import React from 'react';

function TabOption({ text, isActive, onClick }) {
  const classActive = isActive ? 'active' : '';

  return (
    <div className={`tab ${classActive}`} onClick={onClick}>
      {text}
    </div>
  );
}

export default TabOption;
