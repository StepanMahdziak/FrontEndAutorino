import { string } from "yup";

export const countrySchema = string()
  .min(2, "Too short!")
  .max(20, "Too long!");
