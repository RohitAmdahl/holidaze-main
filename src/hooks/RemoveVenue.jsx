// import React, { useState, useEffect } from 'react';
// import { BASE_URL } from '../constants/api';

// const RemoveMyVenue = ({ venue }) => {
//   const [showModal, setShowModal] = useState(false);
//   const [deleteVenue, setDeleteVenue] = useState(null);
//   const { id } = venue;
//   console.log(id);

//   const deleteData = async () => {
//     try {
//       const accessToken = localStorage.getItem('accessToken');

//       const response = await fetch(`${BASE_URL}/venues/${id}`, {
//         method: 'DELETE',
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${accessToken}`,
//         },
//       });

//       setDeleteVenue(response.status); // Store the HTTP status code
//       console.log(response);
//       if (!response.ok) {
//         console.log(response.status);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   useEffect(() => {
//     if (id.length > 0) {
//       deleteData(id[0]);
//     }
//   }, [id]);
//   return (
//     <>
//       <button
//         className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
//         type="button"
//         onClick={() => {
//           setShowModal(true);
//         }}
//       >
//         Delete
//       </button>
//       {showModal ? (
//         <>
//           <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
//             <div className="relative w-auto my-6 mx-auto max-w-sm">
//               {/*content*/}
//               <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
//                 {/*body*/}
//                 <div className="relative p-6 flex-auto">
//                   <p className="my-4 text-blue text-lg leading-relaxed">
//                     Are you sure You want to delete? {deleteVenue}
//                   </p>
//                 </div>
//                 {/*footer*/}
//                 <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
//                   <button
//                     className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
//                     type="button"
//                     onClick={() => setShowModal(false)}
//                   >
//                     Close
//                   </button>
//                   <button
//                     className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
//                     type="button"
//                     onClick={() => setDeleteVenue(venue)}
//                     // deleteVenue(venue);
//                   >
//                     Save Changes
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
//         </>
//       ) : null}
//     </>
//   );
// };
// export default RemoveMyVenue;
