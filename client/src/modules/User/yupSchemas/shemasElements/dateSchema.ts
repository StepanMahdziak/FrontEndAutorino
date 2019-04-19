import {  number, object } from "yup";

const daySchema = number().min(1, "write correct day").max(31, "write correct day").required("Required")
const monthSchema =  number().min(1, "write correct month").max(12, "write correct month").required("Required")
const yearSchema =  number().min(1910, "not so fast  dracula").max(2019, "go back to the future").required("Required")
export const DateSchema = object().shape({
    day: daySchema,
    month: monthSchema,
    year: yearSchema
})