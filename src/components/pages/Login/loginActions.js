import { changeLoading } from '../../../actions';
import { fetchData } from '../../../Hooks/hookFetch';
import { getInitials } from '../../../utils/utils';
import history from '../../../utils/history';
import config from '../../../utils/config';

export const setLoginData = (payload) => {
  return {
    type: 'SET_LOGIN_DATA',
    payload,
  };
};

export const loginRequest = ({ email, password }) => {
  console.log('loginRequest', { email, password });
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Authorization', `Basic ${btoa(`${email}:${password}`)}`);

  return (dispatch) => {
    dispatch(changeLoading());

    fetchData(`${config.urlApi}/api/auth/log-in`, 'POST', headers).then((data) => {
      const { isBoom, output } = data;
      if (isBoom) {
        dispatch(changeLoading());
        history.push({
          pathname: '/',
          state: { error: output.payload.message },
        });
      } else {
        const { user } = data;
        const initials = getInitials(user.name);
        // const menu = getMenu(user.modules);
        // const changePasswordDate = changePasswordByDate(user.lastUpdatePassword);
        window.localStorage.user = JSON.stringify({
          ...user,
        });

        setTimeout(() => {
          dispatch(setLoginData({}));
          history.push('/');
        }, (user.expires - 600) * 1000);

        console.log(`Logout in ${((user.expires - 600) * 1000) / 1000 / 60} minutes`);

        dispatch(setLoginData({ ...user, initials }));
        // dispatch(setMenu(menu));
        dispatch(changeLoading());
        history.push('/dashboard');
      }
    });
  };
};

export const signInRequest = (user) => {
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');

  return (dispatch) => {
    dispatch(changeLoading());

    fetchData(`${config.urlApi}/api/auth/sign-in`, 'POST', headers, user).then((data) => {
      const { isBoom, output } = data;
      if (isBoom) {
        dispatch(changeLoading());
        history.push({
          pathname: '/sign-in',
          state: { error: output.payload.message },
        });
      } else {
        dispatch(changeLoading());
        history.push('/');
      }
    });
  };
};
