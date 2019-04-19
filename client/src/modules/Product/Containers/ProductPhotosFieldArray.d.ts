import { IProductFormValues } from "./../FormikValues/IProductFormValues.d";
import { FormikProps } from "formik";
import { ArrayHelpers } from "formik";
import { ICar } from "../Types/ICar";
import { IProduct } from "../Types/IProduct";
export interface IProductPhotosFieldArrayProps {
  arrayHelpers: ArrayHelpers;
  formikProps: FormikProps<IProduct<ICar> | IProductFormValues>;
}
