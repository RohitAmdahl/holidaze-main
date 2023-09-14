import { createContext } from 'react';

import BookVenue from '../BookingFormFetch';

export const AccommodationContext = createContext();

const VenueDataProvider = ({ children }) => {
  return (
    <AccommodationContext.Provider
      value={{
        BookVenue,
      }}
    >
      {children}
    </AccommodationContext.Provider>
  );
};

export default VenueDataProvider;
