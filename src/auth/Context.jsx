import { createContext, useReducer } from 'react';
// import { useContext } from 'react';
import * as actionTypes from './action';
import React from 'react';

const initialState = {
  isAuthenticated: !!localStorage.getItem('accessToken'),
  username: localStorage.getItem('username') || null,
  error: null,
};

function reducer(state, action) {
  switch (action.type) {
    case actionTypes.USER_REGISTER:
      return {
        ...state,
        data: action.payload,
        error: null,
      };
    case actionTypes.LOGIN:
      // localStorage.setItem('accessToken', action.payload.accessToken);
      // localStorage.setItem('userName', JSON.stringify(action.payload.profile));
      // new
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
        // data: action.payload.profile,
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

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const registerUser = async (userData) => {
    try {
      //
      const response = await fetch(
        'https://nf-api.onrender.com/api/v1/holidaze/auth/register',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userData),
        }
      );
      if (!response.ok) {
        throw new Error('Registration failed');
      }

      console.log('user registration response', response);

      const data = await response.json();

      console.log('user registration', data);
      dispatch({ type: actionTypes.USER_REGISTER, payload: data });
    } catch (error) {
      console.error('User Registration Error:', error.message);
      dispatch({ type: 'error', payload: error.message });
    }
  };
  const logInUser = async (data) => {
    try {
      //
      const response = await fetch(
        'https://nf-api.onrender.com/api/v1/holidaze/auth/login',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        }
      );
      if (!response.ok) {
        throw new Error('Registration failed');
      }

      console.log('user registration response', response);

      const userLogin = await response.json();
      localStorage.setItem('userName', userLogin.name);
      localStorage.setItem('accessToken', userLogin.accessToken);
      localStorage.setItem('avatar', userLogin.avatar);
      localStorage.setItem('email', userLogin.email);
      localStorage.setItem('venueManager', userLogin.venueManager);

      console.log('user registration', userLogin);
      dispatch({ type: actionTypes.LOGIN, payload: userLogin });
    } catch (error) {
      console.error('User Registration Error:', error.message);
      dispatch({ type: 'error', payload: error.message });
    }
  };

  const logoutUser = () => {
    window.localStorage.clear();
    dispatch({ type: actionTypes.USER_LOGOUT });
  };
  return (
    <AuthContext.Provider
      value={{ state, registerUser, logInUser, logoutUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// export const MyAuthContext = () => {
//   return useContext(AuthContext);
// };

export default AuthProvider;
