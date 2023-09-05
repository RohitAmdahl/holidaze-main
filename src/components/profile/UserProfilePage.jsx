import React from 'react';
import Avatar from '../../components/profile/Avatar';
import { LoginDetails } from '../../utils/Auth';
import { BiSolidUserCheck } from 'react-icons/bi';
const UserProfilePage = () => {
  const userData = LoginDetails();

  console.log(userData);
  return (
    <>
      <div className="container mx-auto py-4 max-w-4xl">
        <h1 className="text-2xl px-2">My Profile</h1>
      </div>
      <div className="p-4">
        <div className="container mx-auto max-w-sm lg:max-w-2xl p-2  m-4 font-Montserrat border-2 border-gray-300 lg:p-6 md:p-5 md:max-w-lg ">
          <div className=" lg:p-5 lg:m-1 lg:max-w-2xl max-w-xl py-4 ">
            <div className="relative flex flex-wrap items-center gap-4">
              <img
                className="w-24 h-24 rounded-full border-4 border-emerald-500"
                src={userData.avatar}
                alt={userData.avatar}
              />
              <span className="top-0 left-12 absolute bg-emerald-500 w-4 h-4  border-2 border-white dark:border-emerald-500 rounded-full"></span>
              <div className="lg:p-6  flex flex-col">
                <p>Name:{userData.username}</p>
                <p>email {userData.email}</p>
                <p>
                  Venue Manager <span>{userData.manager ? 'YES' : 'NO'}</span>
                </p>
              </div>
            </div>
            <div className="py-8">
              <Avatar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfilePage;
