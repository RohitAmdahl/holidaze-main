import * as yup from 'yup';

export const signUpSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, 'name must be at least 3 characters')
    .required('name is required'),

  email: yup
    .string()
    .required('Email is required')
    .test(
      'email-format',
      'Invalid email format. Please use the format user@stud.noroff.no',
      'Invalid email address. Must use a @stud.noroff.no domain',
      (value) => {
        return /^[A-Z0-9._%+-]+@stud.noroff\.no$/i.test(value);
      }
    ),
  password: yup
    .string()
    .min(8, 'Must be at least 8 characters')
    .required('Password is required'),

  avatar: yup.string().url('Invalid URL'),
  host: yup.boolean(),
});
