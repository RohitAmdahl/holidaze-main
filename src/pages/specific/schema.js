import * as Yup from 'yup';

export const BookingSchema = Yup.object().shape({
  dateFrom: Yup.string().required('Required'),
  dateTo: Yup.string().required('Required'),
  guests: Yup.string().min(1).required('Required'),
});
