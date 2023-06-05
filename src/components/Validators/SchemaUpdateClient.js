import * as yup from "yup";

export const SchemaUpdateClient = yup.object().shape({
    first_name: yup.string().optional(),
    last_name: yup.string().optional(),
    email: yup.string().optional().email("invalid email"),
    phone: yup.string().max(11).min(11).optional(),
});