import { useEffect, useState } from 'react';

const usePostRequest = (url, deps = []) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const postData = async (bookData) => {
    const accessToken = localStorage.getItem('accessToken');
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(bookData),
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
      postData();
    }
  }, [url, ...deps]);

  return { data, loading, error, postData };
};

export default usePostRequest;

// import { useEffect, useState } from 'react';

// const usePostRequest = (url, deps = [], accessToken) => {
//   const [data, setData] = useState(null);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const postData = async (bookData) => {
//     const accessToken = localStorage.getItem('accessToken');
//     try {
//       const response = await fetch(url, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${accessToken}`,
//         },
//         body: JSON.stringify(bookData),
//       });
//       if (!response.ok) {
//         throw new Error('Error sending data');
//       }
//       const responseData = await response.json();
//       setData(responseData);
//     } catch (error) {
//       setError(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     postData();
//   }, [url, accessToken, ...deps]);

//   return { data, loading, error, postData };
// };

// export default usePostRequest;
