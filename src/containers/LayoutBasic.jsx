import React from 'react';
import { useSelector } from 'react-redux';
import packageInfo from '../../package-lock.json';
import GlobalStyle from '../styles/globalStyles';
import { Loading, Spinner } from '../styles/molecules/loading';
import LayoutStyle from './layoutBasicStyle';

const Layout = ({ children }) => {
  const loading = useSelector(({ loading }) => loading);

  return (
    <LayoutStyle>
      <GlobalStyle />
      <div className='app'>{children}</div>
      {loading && (
        <Loading>
          <Spinner />
        </Loading>
      )}

      <span className='version'>{`v${packageInfo.version}`}</span>
    </LayoutStyle>
  );
};

export default Layout;
