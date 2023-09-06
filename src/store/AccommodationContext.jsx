import React, { createContext, useReducer } from 'react';
import reducer from './reducer';

export const VenueContext = createContext();
const accessToken = localStorage.getItem('accessToken');
const initialState = {
  isAuthenticated: !!localStorage.getItem('accessToken'),
  username: localStorage.getItem('username') || null,
  error: null,
  isLoading: false,
};

const AccommodationProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <VenueContext.Provider value={state}> {children} </VenueContext.Provider>
  );
};

export default AccommodationProvider;
