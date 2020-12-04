import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../components/molecules/Header/Header';
import Footer from '../components/molecules/Footer/Footer';
import Menu from '../components/molecules/Menu/Menu';
import Notifications from '../components/molecules/Notifications/Notifications';
import GlobalStyle from '../styles/globalStyles';
import { Loading, Spinner } from '../styles/molecules/loading';
import ContentApp from '../styles/pages/app';
import { changeMenu } from '../actions';

const Layout = (props) => {
  const { children } = props;
  const loading = useSelector(({ loading }) => loading);
  const menuExpand = useSelector(({ menuExpand }) => menuExpand);
  const notifications = useSelector(({ notifications }) => notifications);

  const dispatch = useDispatch();

  const handleClicktoogleMenu = () => {
    dispatch(changeMenu());
  };
  return (
    <>
      <GlobalStyle />
      <ContentApp expand={menuExpand}>
        <div className='header'>
          <Header />
        </div>
        <div className='menu'>
          <Menu expand={menuExpand} onclikToogleMenu={handleClicktoogleMenu} />
        </div>
        <div className='content'>{children}</div>
        <div className='footer'>
          <Footer />
        </div>
        {notifications.length > 0 && <Notifications notifications={notifications} />}
        {loading && (
          <Loading>
            <Spinner />
          </Loading>
        )}
      </ContentApp>
    </>
  );
};

export default Layout;
