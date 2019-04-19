import {
  createProductRequest,
  deleteProductRequest,
  updateProductRequest
} from "../Store/productActions";
import { ICar } from "../Types/ICar";
import { IProductFormValues } from "../FormikValues/IProductFormValues";
import { FormikProps } from "formik";
export interface IProductFormProps {
  deleteProductRequest?: typeof deleteProductRequest;
  formikProps: FormikProps<any>;
}
