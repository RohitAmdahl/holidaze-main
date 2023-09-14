import { createContext } from 'react';
import CreateVenueListing from '../CreateVenueListing';
import UpdateVenue from '../UpdateVenue';
import DeleteVenue from '../DeleteVenue';
import BookingFormFetch from '../BookingFetch';

export const VenueContext = createContext();

const VenueDataProvider = ({ children }) => {
  return (
    <VenueContext.Provider
      value={{
        CreateVenueListing,
        UpdateVenue,
        DeleteVenue,
        BookingFormFetch,
      }}
    >
      {children}
    </VenueContext.Provider>
  );
};

export default VenueDataProvider;
