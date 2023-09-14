import { createContext } from 'react';
import CreateVenueListing from '../CreateVenueListing';
import UpdateVenue from '../UpdateVenue';
import DeleteVenue from '../DeleteVenue';
import BookingFormFetch from '../BookingFetch';

export const AccommodationContext = createContext();

const VenueDataProvider = ({ children }) => {
  return (
    <AccommodationContext.Provider
      value={{
        CreateVenueListing,
        UpdateVenue,
        DeleteVenue,
        BookingFormFetch,
      }}
    >
      {children}
    </AccommodationContext.Provider>
  );
};

export default VenueDataProvider;
