import React from 'react';
// import { useDispatch } from 'react-redux';
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
  HiArrowCircleLeft,
} from 'react-icons/all';
// import { changeMenu } from '../../../actions';

import MenuStyle from './menuStyle';

const Menu = () => {
  // const dispatch = useDispatch();

  // const handleClickOption = useCallback((option) => {
  //   history.push(option);
  //   // dispatch(changeMenu());
  // }, []);

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
        {/* <div className='actionExpand'>
          <HiArrowCircleLeft />
        </div> */}
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
      </div>
    </MenuStyle>
  );
};

export default Menu;
