import { string } from "yup";

const PASSWORD_REGEXP: RegExp = /(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z])/;
export const  passwordSchema = string()
.min(8, "Too short!")
.max(60, "Too long!")
.matches(
  PASSWORD_REGEXP,
  "password should contain at least one capitalized letter, lowercase letter and number"
)
.required("This field is required!")
