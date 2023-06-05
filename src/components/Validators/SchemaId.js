import * as yup from "yup";

export const SchemaId = yup.object().shape({
    id: yup.number().integer('only integer values ​​are valid').min(1, 'only values greater than 0 are valid.').required("id is required"),
});