import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { deleteNotification } from '../../../actions';
import { NotificationStyle } from './notificationsStyle';

const Notification = ({ id, type, message }) => {
  const dispatch = useDispatch();
  let title = 'Notificación';
  let showMessage = '';

  if (type === 'success') {
    title = 'Transacción exitosa';
    showMessage = message || 'Ocurrio un error ejecutando la transacción';
  }

  if (type === 'error') {
    title = 'Error';
    showMessage = message || 'Ocurrio un error ejecutando la transacción';
  }

  if (message) {
    showMessage = message;
  }

  useEffect(() => {
    setTimeout(() => {
      dispatch(deleteNotification(id));
    }, 10000);
  }, []);

  const handleCloseNotificaton = () => {
    dispatch(deleteNotification(id));
  };

  return (
    <NotificationStyle type={type}>
      <div
        className='close-notification'
        role='button'
        tabIndex='0'
        onClick={() => handleCloseNotificaton()}
      >
        x
      </div>
      <div className='notification-title'>{title}</div>
      <div className='notification-message'>{showMessage}</div>
    </NotificationStyle>
  );
};

export default Notification;
