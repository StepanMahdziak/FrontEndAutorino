import { string } from "yup";

export const emailSchema = string().email("not valid email")
.min(5, "Too short!")
.max(60, "Too long!")
.required("Required!")