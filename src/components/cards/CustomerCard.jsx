import React from 'react';
import { format } from 'date-fns';
const CustomerCard = ({ bookings }) => {
  return (
    <div>
      <div className="Text-lg text-blue font-semibold">
        Please Contact Us For any Query: +47 452 256
      </div>
      <div className=" overflow-x-auto ">
        <table className=" container mx-auto border-collapse border border-gray-300 mt-4">
          <thead>
            <tr>
              <th className="px-4 py-2 bg-gray-300">Date From</th>
              <th className="px-4 py-2 bg-gray-300">Date To</th>
              <th className="px-4 py-2 bg-gray-300">Guests</th>
              <th className="px-4 py-2 bg-gray-300">ID</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((customer) => (
              <tr key={customer.id}>
                <td className="px-4 py-2 text-center">
                  {format(new Date(customer.dateFrom), 'MM/dd/yyyy')}
                </td>
                <td className="px-4 py-2 text-center">
                  {format(new Date(customer.dateTo), 'MM/dd/yyyy')}
                </td>
                <td className="px-4 py-2 text-center">{customer.guests}</td>
                <td className="px-4 py-2 text-center">{customer.id}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomerCard;
