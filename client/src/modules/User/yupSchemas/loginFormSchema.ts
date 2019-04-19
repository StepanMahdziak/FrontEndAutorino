import { object, string } from "yup";
import { passwordSchema } from "./shemasElements/passwordSchema";
import { emailSchema } from "./shemasElements/emailSchema";


export const LOGIN_FORM_SCHEMA = object().shape({
  email: emailSchema,
  password: passwordSchema
});
