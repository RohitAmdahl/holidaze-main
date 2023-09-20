import React from 'react';
import CreateListing from '../Forms/CreateListing';
import SingleProfileBooking from '../../pages/userProfile/SingleProfileBooking';
import VenueCreatedByProfile from '../../hooks/api/VenueCreatedByProfile';

export const Tabs = () => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <div className="flex font-Montserrat flex-col lg:justify-center lg:items-center md:justify-center gap-2">
      <div className=" container max-w-4xl mx-auto ">
        <ul
          className="flex flex-wrap mb-0 list-none pt-3 pb-4 flex-row p-2"
          role="tablist"
        >
          <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
            <a
              className={
                'text-md font-bold uppercase px-5 py-3 block leading-normal ' +
                (openTab === 1
                  ? 'text-blue border-4 border-orange '
                  : 'text-black ')
              }
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(1);
              }}
              data-toggle="tab"
              href="#link1"
              role="tablist"
            >
              Create Venue
            </a>
          </li>
          <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
            <a
              className={
                'text-md font-bold uppercase px-5 py-3 block leading-normal ' +
                (openTab === 2
                  ? 'text-blue border-4 border-orange '
                  : 'text-black ')
              }
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(2);
              }}
              data-toggle="tab"
              href="#link2"
              role="tablist"
            >
              My venues
            </a>
          </li>
          <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
            <a
              className={
                'text-md font-bold uppercase px-5 py-3 block leading-normal ' +
                (openTab === 3
                  ? 'text-blue border-4 border-orange '
                  : 'text-black')
              }
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(3);
              }}
              data-toggle="tab"
              href="#link3"
              role="tablist"
            >
              My bookings
            </a>
          </li>
        </ul>
        <div className="relative  font-Montserrat flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
          <div className="px-4 py-5 flex-auto">
            <div className="tab-content tab-space">
              <div className={openTab === 1 ? 'block' : 'hidden'} id="link1">
                {/* first create venue component */}
                <div>
                  <CreateListing />
                </div>
              </div>
              <div className={openTab === 2 ? 'block' : 'hidden'} id="link2">
                {/* my venue component */}
                <VenueCreatedByProfile />
              </div>
              <div className={openTab === 3 ? 'block' : 'hidden'} id="link3">
                <SingleProfileBooking />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
