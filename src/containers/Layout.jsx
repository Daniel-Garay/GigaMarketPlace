import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../components/molecules/Header/Header';
import Footer from '../components/molecules/Footer/Footer';
import Menu from '../components/molecules/Menu/Menu';
import Notifications from '../components/molecules/Notifications/Notifications';
import GlobalStyle from '../styles/globalStyles';
import { Loading, Spinner } from '../styles/molecules/loading';
import { ContentApp } from '../styles/pages/app';

const Layout = (props) => {
  const { children } = props;
  const loading = useSelector(({ loading }) => loading);
  const menu = useSelector(({ menu }) => menu);
  const notifications = useSelector(({ notifications }) => notifications);

  return (
    <>
      <GlobalStyle />
      <div className='app'>
        <Header />
        <ContentApp>{children}</ContentApp>
        <Footer />
        {menu && <Menu />}
      </div>
      {notifications.length > 0 && <Notifications notifications={notifications} />}
      {loading && (
        <Loading>
          <Spinner />
        </Loading>
      )}
    </>
  );
};

export default Layout;
