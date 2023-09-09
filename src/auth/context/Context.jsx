import { createContext, useReducer } from 'react';
import { UserInformationLocalStorage } from '../../utils/Auth';
import { SingleProfile } from '../../pages/userProfile/SingleProfile';
import { reducer } from './reducerProfile';
import { registerUser, logInUser, changeAvatar } from './reducerHook/apiCalls';
import React from 'react';
import { getActionTypes } from './action';
const actionTypes = getActionTypes();

const accessToken = localStorage.getItem('accessToken');

const initialState = {
  isAuthenticated: !!localStorage.getItem('accessToken'),
  username: localStorage.getItem('username') || null,
  ...UserInformationLocalStorage(),
  error: null,
  isLoading: false,
};

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
      console.log(response);

      const data = await response.json();
      dispatch({ type: actionTypes.USER_REGISTER, payload: data });
    } catch (error) {
      console.error('User Registration Error:', error.message);
      dispatch({ type: 'error', payload: error.message });
    }
  };

  const logInUser = async (data) => {
    // const accessToken = localStorage.getItem('accessToken');
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
        throw new Error('Login failed');
      } else {
      }
      console.log(response);

      const userLogin = await response.json();
      localStorage.setItem('userName', userLogin.name);
      localStorage.setItem('accessToken', userLogin.accessToken);
      localStorage.setItem('avatar', userLogin.avatar);
      localStorage.setItem('email', userLogin.email);
      localStorage.setItem('venueManager', userLogin.venueManager);

      dispatch({
        type: actionTypes.LOGIN,
        payload: userLogin,
        isAuthenticated: true,
      });
    } catch (error) {
      console.error('login Error:', error.message);
      dispatch({ type: 'error', payload: error.message });
    }
  };

  const logoutUser = () => {
    window.localStorage.clear();
    dispatch({ type: actionTypes.USER_LOGOUT, isAuthenticated: false });
  };

  const changeAvatar = async (values) => {
    const accessToken = localStorage.getItem('accessToken');
    const username = localStorage.getItem('userName');

    console.log(username);
    try {
      const sendData = {
        avatar: values.avatar,
      };
      console.log(sendData);

      const response = await fetch(
        `https://nf-api.onrender.com/api/v1/holidaze/profiles/${username}/media`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify(sendData),
        }
      );

      if (!response.ok) {
        console.log('Avatar profile', response);
        throw new Error('Avatar profile fetch failed');
      }
      const dataName = await response.json();

      console.log('user single profile', dataName);

      localStorage.setItem('avatar', dataName.avatar);
      const updatedUser = { ...state.user, avatar: dataName.avatar };
      dispatch({
        type: actionTypes.AVATAR,
        payload: { profile: updatedUser },
      });
    } catch (error) {
      console.error('User profile Error:', error.message);
      dispatch({ type: 'error', payload: error.message });
    }
  };

  return (
    <AuthContext.Provider
      value={{
        state,
        registerUser,
        logInUser,
        logoutUser,
        SingleProfile,
        changeAvatar,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// export const MyAuthContext = () => {
//   return useContext(AuthContext);
// };

export default AuthProvider;
