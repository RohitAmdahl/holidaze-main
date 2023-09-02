import * as yup from 'yup';

export const signUpSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, 'name must be at least 3 characters')
    .required('name is required'),
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

  avatar: yup.string().url('Invalid URL'),
  host: yup.boolean(),
});
