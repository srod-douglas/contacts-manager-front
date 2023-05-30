import * as yup from "yup";

export const SchemaId = yup.object().shape({
    id: yup.number().required("id is required"),
});