import { getActionTypes } from './action';
const actionTypes = getActionTypes();
export function reducer(state, action) {
  switch (action.type) {
    case actionTypes.USER_REGISTER:
      return {
        ...state,
        data: action.payload,
        error: null,
      };
    case actionTypes.LOGIN:
      const userLogin = action.payload;
      localStorage.setItem('username', userLogin.profile);
      localStorage.setItem('accessToken', userLogin.accessToken);
      localStorage.setItem('avatar', userLogin.avatar);
      localStorage.setItem('email', userLogin.email);
      localStorage.setItem('venueManager', userLogin.venueManager);

      return {
        ...state,
        isAuthenticated: true,
        error: null,
        user: userLogin.profile,
        data: action.payload.profile,
      };

    case actionTypes.USER_LOGOUT: {
      localStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
        error: null,
        user: null,
      };
    }
    case actionTypes.PROFILE: {
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.profile,
      };
    }
    case actionTypes.AVATAR: {
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.profile,
        isLoading: true,
      };
    }
    case 'error': {
      return {
        ...state,
        error: action.payload,
      };
    }
    default:
      return state;
  }
}
