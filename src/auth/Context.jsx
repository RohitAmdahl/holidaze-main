import { createContext, useReducer } from 'react';
import * as actionTypes from './action';
initialState = {
  singleProfile: null,
  isAuthenticated: false,
  error: null,
  data: null,
};

function reducer(state, action) {
  switch (action.type) {
    case actionTypes.USER_REGISTER:
      return {
        ...state,
        data: action.payload,
      };
    case actionTypes.LOGIN:
      localStorage.setItem('token', action.payload.token);
      localStorage.setItem('profile', JSON.stringify(action.payload.profile));
      return {
        ...state,
        isAuthenticated: true,
        data: action.payload.profile,
        error: null,
      };

    case actionTypes.USER_LOGOUT: {
      localStorage.removeItem('token');
      localStorage.removeItem('profile');
      return {
        ...state,
        isAuthenticated: false,
        data: null,
        error: null,
      };
    }
    case actionTypes.PROFILE: {
      return {
        ...state,
        isAuthenticated: true,
        data: action.payload.profile,
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

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // api calls

  return <AuthContext.Provider> {children} </AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
