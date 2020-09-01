import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { FiMenu, FiX, FiLogOut } from 'react-icons/fi';
import { changeMenu, logOut } from '../../../actions';
import HeaderStyle from './headerStyle';

const Header = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const menu = useSelector(({ menu }) => menu);

  const handleClickMenu = useCallback(() => {
    dispatch(changeMenu());
  }, []);

  const handleClickLogout = useCallback(() => {
    dispatch(logOut());
    history.push('/');
  }, []);

  return (
    <HeaderStyle>
      <div className='left'>
        {menu ? <FiX onClick={handleClickMenu} /> : <FiMenu onClick={handleClickMenu} />}
      </div>
      <div className='right'>
        <FiLogOut onClick={handleClickLogout} />
      </div>
    </HeaderStyle>
  );
};

export default Header;
