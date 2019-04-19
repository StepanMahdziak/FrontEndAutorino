import { string } from "yup";

export const nameSchema = string()
  .min(2, "Too short!")
  .max(20, "Too long!")
  .required("Required");
