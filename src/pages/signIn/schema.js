import * as yup from 'yup';

export const signInSchema = yup.object().shape({
  email: yup
    .string()
    .required('Required')
    .test(
      'Invalid email address. Must use a @stud.noroff.no domain',
      (value) => {
        return /^[A-Z0-9._%+-]+@stud.noroff\.no$/i.test(value);
      }
    ),
  password: yup
    .string()
    .min(6, 'Must be at least 6 characters')
    .required('Required'),
});
