import { IProductFormValues } from './../FormikValues/IProductFormValues.d';
import { FormikProps } from 'formik';
import { ICar } from '../Types/ICar';
export  interface IProductFormProps {
    formikProps: FormikProps<IProduct<ICar>|IProductFormValues>
}