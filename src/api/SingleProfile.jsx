import * as actionTypes from '../auth/context/action';
import { BASE_URL } from '../constants/api';
export const SingleProfile = async (name) => {
  const username = localStorage.getItem('userName');
  console.log(username);
  try {
    const accessToken = localStorage.getItem('accessToken');
    const response = await fetch(
      `${BASE_URL}/profiles/${username}?_bookings=true&_venues=true`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    if (!response.ok) {
      throw new Error('single profile fetch failed');
    } else {
      console.log('response single profile', response);
    }
    const singleData = await response.json();
    console.log('user single profile', singleData);
    dispatch({ type: actionTypes.PROFILE, payload: singleData });
  } catch (error) {
    console.error('User profile Error:', error.message);
    dispatch({ type: 'error', payload: error.message });
  }
};
