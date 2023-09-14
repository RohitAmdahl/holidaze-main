import React, { useEffect, useState } from 'react';

const usePostRequest = (url, deps = [], accessToken) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const postData = async () => {
      const accessToken = localStorage.getItem('accessToken');
      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`,
          },
        });
        if (!response.ok) {
          throw new Error('Error sending data');
        }
        const data = await response.json(url);
        console.log(data);
        setData(data);
      } catch (error) {
        console.log(error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    postData();
  }, [url, accessToken, ...deps]);
  return { data, loading, error };
};

export default PostVenueFetch;
