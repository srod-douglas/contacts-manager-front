import * as yup from 'yup';

export const SchemaLogin = yup.object().shape({
  email: yup.string().required("email is required").email("invalid email"),
  password: yup.string()
    .required("password is required")
});