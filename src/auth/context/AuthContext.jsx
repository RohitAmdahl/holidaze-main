import { useReducer, createContext } from 'react';
import { initialState, reducer } from './AuthRedducer';
import { REGISTER_USER } from '../../constants/api';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // define the function
  const registerUser = async (data) => {
    try {
      const res = await fetch(REGISTER_USER, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      console.log(res);
      if (res.ok) {
        const user = await res.json();
        dispatch({ type: 'REGISTER_USER_SUCCESS', payload: userData });
        console.log(user);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <AuthContext.Provider value={registerUser}>{children}</AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
