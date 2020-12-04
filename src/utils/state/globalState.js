import { getInitials } from '../utils';

const getUserLocal = () => {
  const userLocal = window.localStorage.getItem('user');
  if (!userLocal) return {};

  const user = JSON.parse(userLocal);

  return {
    ...user,
    initials: getInitials(user.name),
  };
};

const initialState = {
  user: getUserLocal(),
  loading: false,
  menuExpand: true,
  notifications: [],
};

export default initialState;
