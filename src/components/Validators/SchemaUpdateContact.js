import * as yup from "yup";

export const SchemaUpdateContact = yup.object().shape({
    id: yup.number('id is required').required('id is required'),
    last_name: yup.string().optional(),
    email: yup.string().optional().email("invalid email"),
    phone: yup.string().optional(),
});