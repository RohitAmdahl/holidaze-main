import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const useEditRequest = (url, deps = []) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const editData = async (newData) => {
    const accessToken = localStorage.getItem('accessToken');
    try {
      const response = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(newData),
      });
      console.log(response);
      if (!response.ok) {
        throw new Error('Error sending data', response.status);
      }

      const responseData = await response.json();
      console.log(responseData);
      setData(responseData);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (deps.length > 0) {
      editData();
    }
  }, [url, ...deps]);

  return { data, loading, error, editData };
};

export default useEditRequest;
