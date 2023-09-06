import React, { useContext } from 'react';
import Avatar from '../../components/profile/Avatar';
import { LoginDetails } from '../../utils/Auth';
import { BiUserCheck } from 'react-icons/bi';
import { AiOutlineMail } from 'react-icons/ai';
import { FcManager } from 'react-icons/fc';
import { AuthContext } from '../../auth/Context';
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
            <div className=" flex flex-wrap items-center gap-4">
              <img
                className="w-24 h-24 rounded-full border-4 border-emerald-500"
                src={userData.avatar}
                alt={userData.avatar}
              />

              <div className="lg:p-6  flex flex-col">
                <p className="flex gap-3 border-b-2 pb-2">
                  <BiUserCheck size={25} /> {userData.username}
                </p>
                <p className="flex gap-3 border-b-2 pb-2">
                  <AiOutlineMail size={20} /> {userData.email}
                </p>
                <p className="flex gap-3 border-b-2 pb-2">
                  <FcManager size={20} />
                  Venue Manager
                  <span>: {userData.manager ? 'YES' : 'NO'}</span>
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
