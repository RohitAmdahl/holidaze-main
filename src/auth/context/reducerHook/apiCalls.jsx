// import { reducer } from '../reducerProfile';
// import { getActionTypes } from '../action';
// import { useReducedMotionConfig } from 'framer-motion';
// const actionTypes = getActionTypes();

export const registerUser = async (userData) => {
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
    return data;
  } catch (error) {
    console.error('User Registration Error:', error.message);
  }
};
export const logInUser = async (data) => {
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

    return userLogin;
  } catch (error) {
    console.error('login Error:', error.message);
  }
};

// console.log(singleProfile);

export const changeAvatar = async (values) => {
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

    return dataName;
  } catch (error) {
    console.error('User profile Error:', error.message);
  }
};
