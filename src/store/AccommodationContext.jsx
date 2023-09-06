import React, { createContext } from 'react';

export const VenueContext = createContext();
const accessToken = localStorage.getItem('accessToken');
const initialState = {
  isAuthenticated: !!localStorage.getItem('accessToken'),
  username: localStorage.getItem('username') || null,
  error: null,
  isLoading: false,
};

function reducer(state, action) {
  switch (key) {
    case value:
      break;

    default:
      return state;
  }
}

const AccommodationProvider = ({ children }) => {
  return (
    <VenueContext.Provider value={state}> {children} </VenueContext.Provider>
  );
};

export default AccommodationContext;
