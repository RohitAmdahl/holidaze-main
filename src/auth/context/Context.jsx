import { createContext, useReducer } from 'react';
import { UserInformationLocalStorage } from '../../utils/Auth';
import { SingleProfile } from '../../pages/userProfile/SingleProfile';
import { reducer } from './reducerProfile';
import { REGISTER_USER } from '../../constants/api';
console.log(REGISTER_USER);
import { LOGIN_USER } from '../../constants/api';
import { BASE_URL } from '../../constants/api';
import { initialState } from './initialState';
import { getActionTypes } from './action';
import { toast } from 'react-toastify';
const actionTypes = getActionTypes();

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const registerUser = async (userData) => {
    try {
      const response = await fetch(`${REGISTER_USER}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      if (!response.ok) {
        throw new Error('Registration failed', response.status);
      }
      console.log(response);
      // console.log('response fail', error.message);
      const data = await response.json();
      dispatch({ type: actionTypes.USER_REGISTER, payload: data });
      console.log(data);
      toast.success('Registration successful'); // Show success toast
    } catch (error) {
      console.error('User Registration Error:', error.message);
      dispatch({ type: 'error', payload: error.message });
      toast.error('Registration failed. Please try again.', {
        className: 'toast-error', // You can add a custom class for the red toast
      });
    }
  };

  const logInUser = async (data) => {
    const accessToken = localStorage.getItem('accessToken');
    try {
      const response = await fetch(`${LOGIN_USER}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error('Login failed');
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

  const changeAvatar = async (values) => {
    const accessToken = localStorage.getItem('accessToken');
    const username = localStorage.getItem('userName');

    console.log(username);
    try {
      const sendData = {
        avatar: values.avatar,
      };
      console.log(sendData);

      const response = await fetch(`${BASE_URL}/profiles/${username}/media`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(sendData),
      });

      if (!response.ok) {
        console.log('Avatar profile', response);
        throw new Error('Avatar profile fetch failed');
      }
      const dataName = await response.json();
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

  const logoutUser = () => {
    window.localStorage.clear();
    dispatch({ type: actionTypes.USER_LOGOUT, isAuthenticated: false });
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

export default AuthProvider;
