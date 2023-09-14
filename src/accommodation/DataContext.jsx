import { createContext } from 'react';
import BookVenue from './BookVenue';
import RemoveVenue from './RemoveVenue';
import EditVenue from './EditVenue';
import CreateVenueListing from './CreateVenueListing';
export const AccommodationContext = createContext();

const VenueDataProvider = ({ children }) => {
  return (
    <AccommodationContext.Provider
      value={{ BookVenue, RemoveVenue, EditVenue, CreateVenueListing }}
    >
      {children}
    </AccommodationContext.Provider>
  );
};

export default VenueDataProvider;
