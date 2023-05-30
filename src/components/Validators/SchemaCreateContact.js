import * as yup from "yup";

export const SchemaCreateContact = yup.object().shape({

    first_name: yup.string().required("name is required"),
    last_name: yup.string().optional(),
    email: yup.string().required("email is required").email("invalid email"),
    phone: yup.string().optional(),
});