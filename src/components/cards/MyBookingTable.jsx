import React from 'react';
import { Carousel } from 'react-responsive-carousel';

const MyBookings = ({ booking }) => {
  const { id, dateFrom, dateTo, guests, venue } = booking;
  const { name, media } = venue;
  console.log(media);
  const startDate = new Date(dateFrom);
  const endDate = new Date(dateTo);
  const startDateString = startDate.toLocaleDateString();
  const endDateString = endDate.toLocaleDateString();

  return (
    <div className="lg:max-w-4xl md:max-w-xl container mx-auto table-auto max-w-sm ">
      <div className="lg:max-w-4xl md:max-w-xl container mx-auto max-w-sm">
        <div className="p-2 ">
          <div className="bg-gray-100 p-2 m-1">
            <Carousel showArrows={true} showThumbs={false}>
              {media.map((picture, index) => (
                <div key={index}>
                  <img
                    src={picture}
                    alt={`Picture ${index}`}
                    className="w-64 h-64 object-cover"
                  />
                </div>
              ))}
            </Carousel>
            <div class="px-6 pt-4 pb-2">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                {name}
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                {startDateString}
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                {endDateString}
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                {guests}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyBookings;
