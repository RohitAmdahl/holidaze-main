import { AiOutlineEdit } from 'react-icons/ai';
import { ClimbingBoxLoader } from 'react-spinners';
import { useFormik } from 'formik';
import { venueSchema } from './validationSchema';
import { useState } from 'react';
import { BASE_URL } from '../../constants/api';
import useEditRequest from '../../hooks/EditVenue';
import { ToastContainer, toast } from 'react-toastify';
import LocationInputs from './LocationInputs';
import VenueService from './VenueService';
import TitlePriceInputs from './TitlePriceInputs';
import { useEffect } from 'react';

const DataEditForm = ({ venue }) => {
  const { id } = venue;
  const editUrl = `${BASE_URL}/venues/${id}`;
  const [showModal, setShowModal] = useState(false);
  const [mediaArray, setMediaArray] = useState(venue?.media || []);
  const {
    data: DataEditFormResponse,
    loading,
    error,
    editData,
  } = useEditRequest(editUrl);

  const formik = useFormik({
    initialValues: {
      // Set initial the  values
      name: venue?.name || '',
      price: venue?.price || 1,
      media: mediaArray,
      description: venue?.description || '',
      maxGuests: venue?.maxGuests || 1,
      meta: {
        wifi: venue?.meta?.wifi || false,
        parking: venue?.meta?.parking || false,
        breakfast: venue?.meta?.breakfast || false,
        pets: venue?.meta?.pets || false,
      },
      location: {
        address: venue?.location.address || '',
        city: venue?.location.city || '',
        zip: venue?.location.zip || '',
        country: venue?.location.country || '',
        continent: venue?.location.continent || '',
      },
      // ...
    },
    validationSchema: venueSchema,
    onSubmit: async (values) => {
      const editFormData = {
        name: values.name,
        description: values.description,
        media: mediaArray.filter(Boolean),
        price: values.price,
        maxGuests: values.maxGuests,
        meta: {
          wifi: values.meta.wifi,
          parking: values.meta.parking,
          breakfast: values.meta.breakfast,
          pets: values.meta.pets,
        },
        location: {
          address: values.location.address,
          city: values.location.city,
          zip: values.location.zip,
          country: values.location.country,
          continent: values.location.continent,
        },
      };
      console.log(editFormData);
      try {
        editData(editFormData);
        toast.success('successful edit  ', 'success', {
          position: 'bottom-center',
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
        // setTimeout(() => {
        //   window.location.reload();
        // }, 5000);
        console.log('successful edit, Check in Venue tab ');
      } catch (error) {
        console.log('Error during editing venue:', error);
      }
    },
  });
  const pushMedia = () => {
    setMediaArray([...mediaArray, '']);
  };

  const handleMediaChange = (e, index) => {
    const updatedMediaUrls = [...mediaArray];
    updatedMediaUrls[index] = e.target.value;
    setMediaArray(updatedMediaUrls);
  };

  const removeMedia = (index) => {
    const updatedMediaUrls = [...mediaArray];
    updatedMediaUrls.splice(index, 1);
    setMediaArray(updatedMediaUrls);
  };

  useEffect(() => {
    if (DataEditFormResponse) {
      setTimeout(() => {
        setShowModal(false);
        window.location.reload();
      }, 5000);
    }
  }, [DataEditFormResponse]);

  return (
    <>
      <button onClick={() => setShowModal(true)}>
        <AiOutlineEdit size={20} />
      </button>
      {showModal ? (
        <>
          <div className="justify-center  flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-6xl">
              {/*content*/}
              <div className=" rounded-lg shadow-lg relative flex flex-col w-full bg-white ">
                <div className="relative p-6 flex-auto">
                  {/* form */}
                  <div className="flex items-start justify-between py-2 mb-2  border-b border-solid border-slate-200 rounded-t">
                    <h1 className="text-xl font-semibold">Edit venue</h1>
                  </div>
                  <form onSubmit={formik.handleSubmit} className=" relative ">
                    {/* title and price input */}
                    <TitlePriceInputs formik={formik} />
                    <div>
                      <div>
                        <div className="py-3 flex flex-col justify-center flex-wrap">
                          <label
                            htmlFor="media"
                            className="block uppercase tracking-wide text-xs font-bold mb-2"
                          >
                            Upload Pictures
                          </label>

                          {mediaArray.map((media, index) => (
                            <div key={index}>
                              <input
                                type="url"
                                name={`media-${index}`}
                                className="px-3 py-2 bg-white border-b-2 border-slate-300 focus:outline-none focus:border-blue focus:ring-orange block w-full rounded-md sm:text-sm focus:ring-1"
                                placeholder="Image URL"
                                value={media}
                                onChange={(e) => handleMediaChange(e, index)}
                              />
                              {media && (
                                <img
                                  src={media}
                                  alt={`Uploaded Image ${index}`}
                                  className=" flex gap-1 w-28 h-30 rounded object-cover"
                                />
                              )}
                              {index > 0 && (
                                <button
                                  className="text-blue my-3 bg-orange font-Montserrat font-bold focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-8 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                  onClick={() => removeMedia(index)}
                                >
                                  Remove
                                </button>
                              )}
                            </div>
                          ))}
                          <div className="flex gap-3 my-4">
                            <button
                              type="button"
                              onClick={pushMedia}
                              className="text-blue bg-orange font-Montserrat font-bold focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-8 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                              Add Media
                            </button>
                          </div>
                        </div>
                      </div>

                      {formik.touched.media && formik.errors.media ? (
                        <div className="text-red-500">
                          <p>{formik.errors.media}</p>
                        </div>
                      ) : null}
                    </div>
                    <div>
                      <label
                        htmlFor="description"
                        className="block uppercase tracking-wide text-xs font-bold mb-2"
                      >
                        Description
                      </label>
                      <textarea
                        id="description"
                        name="description"
                        rows="4"
                        placeholder="Write your thoughts here..."
                        className="px-3 py-2 bg-white border-b-2 border-slate-300 focus:outline-none focus:border-blue focus:ring-orange block w-full rounded-md sm:text-sm focus:ring-1"
                        {...formik.getFieldProps('description')}
                      />
                      {formik.touched.description &&
                      formik.errors.description ? (
                        <div className="text-red-500">
                          <p>{formik.errors.description}</p>
                        </div>
                      ) : null}
                    </div>
                    {/* location */}
                    <LocationInputs formik={formik} />
                    {/* service */}
                    <VenueService formik={formik} />
                    <div className="flex justify-center items-center py-6">
                      <button
                        type="submit"
                        className="text-blue bg-orange font-Montserrat font-bold focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-8 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        Submit
                      </button>
                      <button
                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        Close
                      </button>
                    </div>
                  </form>
                  {/* form */}
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-60 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}

      <div>
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <div>
          {loading && (
            <div>
              {' '}
              <ClimbingBoxLoader size={15} color="#6E7A55" /> Posting in
              progress...
            </div>
          )}
          {error && <p className="text-red-500">Error: {error}</p>}
        </div>
      </div>
    </>
  );
};

export default DataEditForm;
