import initialState from '../utils/state/globalState';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_LOGIN_DATA':
      return {
        ...state,
        user: action.payload,
      };

    case 'LOG_OUT': {
      window.localStorage.clear();
      return {
        ...state,
        user: {},
      };
    }

    case 'CHANGE_LOADING':
      return {
        ...state,
        loading: !state.loading,
      };

    case 'CHANGE_MENU':
      return {
        ...state,
        menuExpand: !state.menuExpand,
      };

    case 'ADD_NOTIFICATION': {
      const notification = { id: state.notifications.length, ...action.payload };
      return {
        ...state,
        notifications: [...state.notifications, notification],
      };
    }

    case 'DELETE_NOTIFICATION': {
      const newNotifications = state.notifications.filter(
        (notification) => notification.id !== action.payload,
      );
      return {
        ...state,
        notifications: [...newNotifications],
      };
    }

    default:
      return state;
  }
};

export default reducer;
