import React from 'react';
import UserProfilePage from '../../components/profile/UserProfilePage';
import SingleProfileByNameBookings from './SingleProfileBooking';
import VenueCreatedByProfile from './VenueCreatedByProfile';
const Profile = () => {
  return (
    <>
      <UserProfilePage />
      <SingleProfileByNameBookings />
      <VenueCreatedByProfile />
    </>
  );
};

export default Profile;
