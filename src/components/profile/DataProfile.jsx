import React, { useContext } from 'react';
import { AuthContext } from '../../auth/context/Context';
// import { Tabs } from '../button/Tabs';
// import VenueCreatedByProfile from '../../pages/userProfile/VenueCreatedByProfile';
// import SingleProfileByNameBookings from './SingleProfileBooking';
// import VenueCreatedByProfile from './VenueCreatedByProfile';
const DataProfile = () => {
  const { state } = useContext(AuthContext);

  return (
    <>
      {/* {!state.isAuthenticated ? (
        <>
          <div className="text-2xl">i m logged out </div>
        </>
      ) : (
        <>
          <div className=" container max-w-4xl mx-auto font-semibold font-Montserrat ">
            Venues Posted by Me:-
            <div className="lg:grid lg:grid-cols-3 lg:gap-3 flex flex-wrap">
              <Tabs />
            </div>
          </div>
        </>
      )} */}
    </>
  );
};

export default DataProfile;
