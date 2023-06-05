import * as yup from "yup";

export const SchemaRegister = yup.object().shape({

    first_name: yup.string().required("name is required"),
    last_name: yup.string().optional(),
    email: yup.string().required("email is required").email("invalid email"),
    phone: yup.string().optional(),
    password: yup.string()
        .required("password is required")
        .matches(/(?=.*?[A-Z])/, "at least one capital letter is required")
        .matches(/(?=.*?[0-9])/, "at least one number is required")
        .matches(
        /(?=.*?[#?!@$%.^&*-])/,
        "at least one special character is required"
        )
        .min(8, "password must be at least 8 characters long"),
    confirm_password: yup.string()
    .oneOf([yup.ref("password"), null], "password don't matchs")
    .required("confirm password")
});
