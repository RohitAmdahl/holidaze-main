//  const regex pattern("[^\\s]+(.*?)\\.(jpg|jpeg|png|gif|JPG|JPEG|PNG|GIF)$");
import * as Yup from 'yup';
export const VenueSchema = Yup.object().shape({
  Title: Yup.string()
    .min(6, 'Must be 6 character or more !')
    .max(100, 'Cannot be longer than 100 chars')
    .required('Required'),
  price: Yup.number().required('Required'),
  media: Yup.string()
    .url('Invalid URL')
    .matches(
      /^(([a-zA-Z]:)|(\\{2}\w+)\$?)(\\(\w[\w].*))+(.jpg|.jpeg|.png|.gif)$/,
      'Invalid image URL'
    ),
  description: Yup.string()
    .min(3, 'Must be 3 character or more !')
    .max(1000, 'Cannot be longer than 1000 chars')
    .required('Required'),
  address: Yup.string()
    .min(2, 'Must be 2 character or more !')
    .max(40, 'Cannot be longer than 50 chars')
    .required('Required'),
  country: Yup.string()
    .min(2, 'Must be 2 character or more !')
    .max(40, 'Cannot be longer than 50 chars')
    .required('Required'),
  city: Yup.string()
    .min(2, 'Must be 2 character or more !')
    .max(40, 'Cannot be longer than 50 chars')
    .required('Required'),
  zip: Yup.string()
    .min(2, 'Must be 2 character or more !')
    .max(40, 'Cannot be longer than 50 chars')
    .required('Required'),
  continent: Yup.string()
    .min(2, 'Must be 2 character or more !')
    .max(40, 'Cannot be longer than 50 chars')
    .required('Required'),
  maxGuests: Yup.number().required('Required'),
});
