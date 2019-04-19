import React, { Component } from "react";
import { Formik, FormikProps } from "formik";
import { IProductFormValues } from "../FormikValues/IProductFormValues";
import { newProductsShema } from "../../User/yupSchemas/shemasElements/newProductsShema";
import ProductForm from "../Containers/ProductForm";
import { createProductRequest } from "../Store/productActions";
import { INewProductPage } from "./NewProductPage.d"
import { Form } from "formik";
import { Button } from "grommet";
import { GREEN } from "../../../styles/colors";
import { INITIAL_CREATE_PRODUCT_FORM_VALUES } from "../FormikValues/InitialCreateProductFormValues";
import { IAppState } from "../../../rootStore/initialState.d";
import { IProductsState } from "../Types/productsState";
import { IUsersState } from "../../User/Types/usersState";
import { IViewerState } from "../../User/Types/viewerState";
import { withRouter } from "react-router";
import { connect } from "react-redux";

class NewProductPage extends Component<INewProductPage> {
  render() {
    return (
      <div>
        <Formik
          initialValues={INITIAL_CREATE_PRODUCT_FORM_VALUES}
          validationSchema={newProductsShema}
          onSubmit={values => {
            this.props.createProductRequest({
              product: values,
              apiToken: this.props.apiToken
            });
          }}
          render={(props: FormikProps<IProductFormValues>) => (
            <Form>
              <Button
                type="submit"
                color={GREEN}
                label="submit"
                margin={{ left: "5%", top: "1%", bottom: "0px" }}
              />
              <ProductForm formikProps={props} />
            </Form>
          )}
        />
      </div>
    );
  }
}
const mapStateToProps = (
  state: IAppState<IProductsState, IUsersState, IViewerState>
) => ({
  apiToken: state.viewer.data ? state.viewer.data.apiToken : ""
});
const mapDispatchToProps = {
  createProductRequest
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(NewProductPage));
