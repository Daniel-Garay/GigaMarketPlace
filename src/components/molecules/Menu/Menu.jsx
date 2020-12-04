import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  MdDashboard,
  FaBoxOpen,
  FaUsers,
  MdShoppingCart,
  FaStore,
  FiArrowUpCircle,
  FaExclamation,
  MdKeyboardArrowRight,
  BiMenu,
} from 'react-icons/all';

import MenuStyle from './menuStyle';

const Menu = ({ expand, onclikToogleMenu }) => {
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
      <div className={`container ${!expand ? 'collapse' : ''}`}>
        <nav>
          {options.map(({ id, description, icon, path }) => (
            <NavLink
              key={id}
              className='item-menu '
              role='button'
              tabIndex='0'
              to={path}
              activeClassName='select-option'
            >
              <div className='icon-letf'>
                {icon}
                <span>{description}</span>
              </div>
              <div className='icon-rigth'>
                <MdKeyboardArrowRight />
              </div>
            </NavLink>
          ))}
        </nav>

        <div className='toggle-expand'>
          <BiMenu onClick={onclikToogleMenu} />
        </div>
      </div>
    </MenuStyle>
  );
};

export default Menu;
