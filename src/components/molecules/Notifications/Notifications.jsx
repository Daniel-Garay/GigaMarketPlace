import React, { useEffect, useState } from 'react';
import Notification from './Notification';
import { NotificationsStyle } from './notificationsStyle';

const Notifications = ({ notifications }) => {
  const [notificationsShow, setNotificationsShow] = useState(notifications);

  useEffect(() => {
    setNotificationsShow(notifications);
  }, [notifications]);

  return (
    <NotificationsStyle>
      {notificationsShow.map((notification) => (
        <Notification
          key={notification.id}
          id={notification.id}
          type={notification.type}
          message={notification.message}
        />
      ))}
    </NotificationsStyle>
  );
};

export default Notifications;
