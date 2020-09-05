export const noob = () => {};

export const getToken = () => {
  const userLocal = window.localStorage.getItem('user');
  if (!userLocal) return '';
  const user = JSON.parse(userLocal);
  return user.token;
};

export const getInitials = (fullName) => {
  const names = fullName.split(' ');
  let initials = names[0].charAt(0);
  initials += names[1] ? names[1].charAt(0) : '';
  return initials;
};

export const debounce = (func, delay) => {
  let timeout;
  return function (...args) {
    const context = this;
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      timeout = null;
      func.apply(context, args);
    }, delay);
  };
};

export const getDefaultHeader = () => ({
  Accept: 'application/json',
  'Content-Type': 'application/json',
  Authorization: `Bearer ${getToken()}`,
});
