import React, { FunctionComponent } from "react";
import { Formik, FormikProps } from "formik";
import { newProductsShema } from "../../User/yupSchemas/shemasElements/newProductsShema";
import ProductForm from "../Containers/ProductForm";
import {
  updateProductRequest,
  deleteProductRequest
} from "../Store/productActions";
import { ICar } from "../Types/ICar";
import { IProduct } from "../Types/IProduct";
import { getItemInArrayById } from "../../../helpers/getItemInArrayById";
import { IAppState } from "../../../rootStore/initialState.d";
import { IProductsState } from "../Types/productsState";
import { IUsersState } from "../../User/Types/usersState";
import { IViewerState } from "../../User/Types/viewerState";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { IUpdateProductPage } from "./UpdateProductPage.d"

const UpdateProductPage: FunctionComponent<IUpdateProductPage> = ({product, updateProductRequest,deleteProductRequest}: IUpdateProductPage) => {
  return (
    <div>
      <Formik
        initialValues={product}
        validationSchema={newProductsShema}
        onSubmit={() => null}
        render={(props: FormikProps<IProduct<ICar>>) => (
          <ProductForm formikProps={props} />
        )}
      />
    </div>
  );
};

export default UpdateProductPage
// const mapStateToProps = (
//   state: IAppState<IProductsState, IUsersState, IViewerState>
// ) => ({
//   products: state.products.data
// });

