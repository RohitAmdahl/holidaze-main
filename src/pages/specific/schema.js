import * as Yup from 'yup';

export const BookingSchema = Yup.object().shape({
  dateFrom: Yup.string().required('Required'),
  dateTo: Yup.string().required('Required'),
  guests: Yup.string().min(1).required('Required'),
});

// const BookingSchema = Yup.object().shape({
//   dateFrom: Yup.date().required('Required'),
//   dateTo: Yup.date().required('Required'),
//   guests: Yup.number()
//     .min(1, 'Must be at least 1 guest')
//     .max(maxGuests, `Max number of guests is ${maxGuests}`)
//     .required('Required'),
// });
