import { createContext, useReducer } from 'react';
import * as actionTypes from './action';
initialState = {
  singleProfile: null,
  error: null,
  loading: false,
  data: null,
};

function reducer(state, action) {
  switch (action.type) {
    case actionTypes.USER_REGISTER:
    case actionTypes.LOGIN:
    case actionTypes.PROFILE: {
      return {
        ...state,
        loading: true,
      };
    }
    case actionTypes.USER_LOGOUT: {
      return null;
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
