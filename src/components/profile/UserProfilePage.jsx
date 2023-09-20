import React, { useContext } from 'react';
import Avatar from '../../components/profile/Avatar';
import { UserInformationLocalStorage } from '../../utils/Auth';
import { BiUserCheck } from 'react-icons/bi';
import { AiOutlineMail } from 'react-icons/ai';
import { FcManager } from 'react-icons/fc';
import { Tabs } from '../button/Tabs';

const UserProfilePage = () => {
  const userData = UserInformationLocalStorage();

  return (
    <>
      <div className="container mx-auto py-2 max-w-4xl">
        <h1 className="text-2xl px-2 font-bold">My Profile</h1>
      </div>
      <div className="p-4">
        <div className="container mx-auto max-w-sm md:max-w-xl  lg:max-w-2xl p-2  font-Montserrat border-2 border-gray-300 lg:p-3 md:p-2  ">
          <div className=" flex items-center justify-center flex-wrap gap-4 ">
            <div>
              <img
                className="w-24 h-24 rounded-full border-4 border-emerald-500"
                src={userData.avatar}
                alt={userData.avatar}
              />
            </div>

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
            {/* avatar change model button  */}
          </div>
          <div className="py-4 flex items-center justify-center">
            <Avatar />
          </div>
        </div>
      </div>
      <div className=" container max-w-4xl mx-auto mt-7 p-2 ">
        <Tabs />
      </div>
    </>
  );
};

export default UserProfilePage;
