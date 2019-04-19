import { object } from "yup";
import { passwordSchema } from "./shemasElements/passwordSchema";

export const PasswordFormSchema =  object().shape({
    newPassword: passwordSchema,
    oldPassword: passwordSchema,
    newPasswordRepeat: passwordSchema,
})