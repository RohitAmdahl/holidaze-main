import React, { useContext, useState } from 'react';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { AuthContext } from '../../auth/context/Context';
import { BsCamera } from 'react-icons/bs';
export const avatarSchema = yup.object().shape({
  avatar: yup.string().url('Invalid URL').required('url required'),
});

const initialValues = {
  avatar: '',
};

export default function Modal() {
  const { changeAvatar } = useContext(AuthContext);
  const [showModal, setShowModal] = useState(false);

  const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: avatarSchema,
    onSubmit: (values, action) => {
      const avatarPic = {
        avatar: values.avatar,
      };
      changeAvatar(avatarPic);
      console.log(changeAvatar(avatarPic));
      action.resetForm();
      setShowModal(false);
    },
  });

  return (
    <>
      <button
        className=" text-blue bg-orange font-Montserrat font-bold   focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-8 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 gap-2"
        type="button"
        onClick={() => setShowModal(true)}
      >
        {' '}
        <BsCamera size={20} />
        Upload
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-xl font-semibold">Upload Avatar</h3>
                  {/* <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-8 h-6 w-6 text-2xl block outline-none focus:outline-none"></span>
                  </button> */}
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto font-Montserrat ">
                  <form
                    onSubmit={handleSubmit}
                    className="max-w-xl container mx-auto py-6"
                  >
                    <div className="mb-4">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="avatar"
                      >
                        Avatar
                      </label>
                      <p className="text-red-500"> {errors.avatar} </p>
                      <input
                        className="shadow appearance-none border  rounded w-full py-2 px-10 text-gray-700 leading-tight focus:shadow-outline"
                        id="avatar"
                        name="avatar"
                        type="url"
                        placeholder="Img url"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.avatar}
                      />
                    </div>
                    <button
                      className=" text-blue bg-orange font-Montserrat font-bold   focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-8 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      type="submit"
                    >
                      {' '}
                      <BsCamera size={30} className="p-1" />
                      Save
                    </button>
                  </form>
                </div>
                {/*footer*/}
                <div className="flex items-center gap-6 justify-center p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className=" text-white bg-black font-Montserrat font-bold   focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-8 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-40 fixed inset-0 z-40 bg-gray-800"></div>
        </>
      ) : null}
    </>
  );
}
