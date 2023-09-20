import { BASE_URL } from '../constants/api';

export const deleteVenue = async (venueId) => {
  const accessToken = localStorage.getItem('accessToken');
  const deleteUrl = `${BASE_URL}/venues/${venueId}`;

  try {
    const response = await fetch(deleteUrl, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
