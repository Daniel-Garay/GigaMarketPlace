export const changeLoading = (payload) => ({
  type: 'CHANGE_LOADING',
  payload,
});

export const changeMenu = (payload) => ({
  type: 'CHANGE_MENU',
  payload,
});

export const logOut = (payload) => ({
  type: 'LOG_OUT',
  payload,
});

export const addNotification = (payload) => ({
  type: 'ADD_NOTIFICATION',
  payload,
});

export const deleteNotification = (payload) => ({
  type: 'DELETE_NOTIFICATION',
  payload,
});
