import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { changeMenu } from '../../../actions';
import MenuStyle from './menuStyle';

const Menu = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleClickOption = useCallback((option) => {
    history.push(option);
    dispatch(changeMenu());
  }, []);

  const options = [
    { id: 0, description: 'Dashboard', path: '/dashboard' },
    { id: 1, description: 'Productos', path: '/products' },
    { id: 3, description: 'Usuarios', path: '/users' },
    { id: 4, description: 'Órdenes', path: '/orders' },
    { id: 5, description: 'Marketplaces', path: '/marketplaces' },
    { id: 6, description: 'Publicaciones', path: '/publications' },
    { id: 10, description: 'Log', path: '/log' },
  ];

  return (
    <MenuStyle>
      <div className='container'>
        <nav>
          {options.map((option) => (
            <div
              key={option.id}
              role='button'
              tabIndex='0'
              onClick={() => handleClickOption(option.path)}
            >
              {option.description}
            </div>
          ))}
        </nav>
      </div>
    </MenuStyle>
  );
};

export default Menu;
