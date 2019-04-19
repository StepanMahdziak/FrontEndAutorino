import { DateSchema } from "./shemasElements/dateSchema";
import { object, string } from "yup";
import { nameSchema } from "./shemasElements/nameSchema";
import { emailSchema } from "./shemasElements/emailSchema";
import { passwordSchema } from "./shemasElements/passwordSchema";
import { countrySchema } from "./shemasElements/countrySchema";

export const USER_FORM_SCHEMA = object().shape({
  firstName: nameSchema,
  lastName: nameSchema,
  email: emailSchema,
  password: passwordSchema,
  country: countrySchema,
  birthDate: nameSchema
});
