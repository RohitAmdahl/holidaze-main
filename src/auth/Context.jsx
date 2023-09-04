import { createContext, useReducer, useState } from 'react';
import { useContext } from 'react';
import * as actionTypes from './action';
import React from 'react';

const initialState = {
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
        error: null,
      };
    case actionTypes.LOGIN:
      localStorage.setItem('accessToken', action.payload.accessToken);
      localStorage.setItem('profile', JSON.stringify(action.payload.profile));

      return {
        ...state,
        isAuthenticated: true,
        error: null,
        data: action.payload.profile,
      };

    case actionTypes.USER_LOGOUT: {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('profile');
      return {
        ...state,
        isAuthenticated: false,
        error: null,
        data: null,
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

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // const { isAuthenticated, loading, error } = state;
  // api calls
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
      window.location = '/';

      console.log('user registration', userLogin);
      dispatch({ type: actionTypes.LOGIN, payload: userLogin });
    } catch (error) {
      console.error('User Registration Error:', error.message);
      dispatch({ type: 'error', payload: error.message });
    }
  };

  return (
    <AuthContext.Provider value={{ state, registerUser, logInUser }}>
      {children}
    </AuthContext.Provider>
  );
};

// export const MyAuthContext = () => {
//   return useContext(AuthContext);
// };

export default AuthProvider;
