//  const regex pattern("[^\\s]+(.*?)\\.(jpg|jpeg|png|gif|JPG|JPEG|PNG|GIF)$");
import * as Yup from 'yup';
export const venueSchema = Yup.object().shape({
  name: Yup.string()
    .min(6, 'Must be 6 characters or more!')
    .max(100, 'Cannot be longer than 100 characters')
    .required('please enter your title'),
  description: Yup.string()
    .min(3, 'Must be 3 characters or more!')
    .max(1000, 'Cannot be longer than 1000 characters')
    .required('please write your description'),
  media: Yup.array().of(
    Yup.string().url('Invalid URL').required('Required')
    // .matches(
    //   /^(([a-zA-Z]:)|(\\{2}\w+)\$?)(\\(\w[\w].*))+(.jpg|.jpeg|.png|.gif)$/,
    //   'Invalid image URL'
    // )
  ),
  price: Yup.number()
    .min(0, 'Must be + characters or more!')
    .required('Required'),
  maxGuests: Yup.number()
    .min(0, 'Must be + characters or more!')
    .required('Required'),
  meta: Yup.object().shape({
    wifi: Yup.boolean().required('Required'),
    parking: Yup.boolean().required('Required'),
    breakfast: Yup.boolean().required('Required'),
    pets: Yup.boolean().required('Required'),
  }),
  location: Yup.object().shape({
    address: Yup.string()
      .min(2, 'Must be 2 characters or more!')
      .max(40, 'Cannot be longer than 40 characters')
      .required('Required'),
    city: Yup.string()
      .min(2, 'Must be 2 characters or more!')
      .max(40, 'Cannot be longer than 40 characters')
      .required('Required'),
    zip: Yup.string()
      .min(2, 'Must be 2 characters or more!')
      .max(40, 'Cannot be longer than 40 characters')
      .required('Required'),
    country: Yup.string()
      .min(2, 'Must be 2 characters or more!')
      .max(40, 'Cannot be longer than 40 characters')
      .required('Required'),
    continent: Yup.string()
      .min(2, 'Must be 2 characters or more!')
      .max(40, 'Cannot be longer than 40 characters')
      .required('Required'),
  }),
});
