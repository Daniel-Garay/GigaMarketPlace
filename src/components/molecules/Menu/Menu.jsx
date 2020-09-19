import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  MdDashboard,
  FaBoxOpen,
  FaUsers,
  MdShoppingCart,
  FaStore,
  FiArrowUpCircle,
  FaExclamation,
  MdKeyboardArrowRight,
} from 'react-icons/all';
// import { changeMenu } from '../../../actions';
import MenuStyle from './menuStyle';

const Menu = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleClickOption = useCallback((option) => {
    history.push(option);
    // dispatch(changeMenu());
  }, []);

  const options = [
    { id: 0, description: 'Dashboard', path: '/dashboard', icon: <MdDashboard /> },
    { id: 1, description: 'Productos', path: '/products', icon: <FaBoxOpen /> },
    { id: 3, description: 'Usuarios', path: '/users', icon: <FaUsers /> },
    { id: 4, description: 'Órdenes', path: '/orders', icon: <MdShoppingCart /> },
    { id: 5, description: 'Marketplaces', path: '/marketplaces', icon: <FaStore /> },
    { id: 6, description: 'Publicaciones', path: '/publications', icon: <FiArrowUpCircle /> },
    { id: 10, description: 'Log', path: '/log', icon: <FaExclamation /> },
  ];

  return (
    <MenuStyle>
      <div className='container'>
        <nav>
          {options.map(({ option, id, description, icon }) => (
            <div
              key={id}
              className='item-menu '
              role='button'
              tabIndex='0'
              onClick={() => handleClickOption(option.path)}
            >
              <div className='icon-letf'>
                {icon}
                <span>{description}</span>
              </div>
              <div className='icon-rigth'>
                <MdKeyboardArrowRight />
              </div>
            </div>
          ))}
        </nav>
      </div>
    </MenuStyle>
  );
};

export default Menu;
