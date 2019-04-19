import React, { Component } from "react";
import ProductList from "../Containers/ProductList";
import { Route, withRouter, Switch } from "react-router";
import { IProductListProps } from "../Containers/ProductList.d";
import { IAppState } from "../../../rootStore/initialState.d";
import { IProductsState } from "../Types/productsState";
import { IUsersState } from "../../User/Types/usersState";
import { IViewerState } from "../../User/Types/viewerState";
import { connect } from "react-redux";
import ProductPage from "./product";
import ProductForm from "../Containers/ProductForm";
import { INITIAL_CREATE_PRODUCT_FORM_VALUES } from "../FormikValues/InitialCreateProductFormValues";
import { IProductsProps } from "./products.d";
import NewProductForm from "./NewProductPage";
import {
  createProductRequest,
  updateProductRequest,
  deleteProductRequest,
  getProductsRequest
} from "../Store/productActions";
import { MOCK_PRODUCTS } from "../../User/tests/mockProducts";
import UpdateProductForm from "./UpdateProductPage";
import { MOCK_PRODUCT } from "../../User/tests/mockProduct";

class ProductsPage extends Component<IProductsProps> {
  componentDidMount() {
    this.props.getProductsRequest();
  }
  render() {
    return (
      <>
        {/* <Switch> */}
          {/* <Route
            exact
            path="/products"
            render={() => ( */}
              <ProductList
                products={this.props.products}
                getProductsRequest={this.props.getProductsRequest}
              />
            {/* )} */}
          {/* /> */}
          {/* <Route
            path="/products/new-product"
            render={() => {
              return (
                <NewProductForm
                  initialValues={INITIAL_CREATE_PRODUCT_FORM_VALUES}
                  createProductRequest={this.props.createProductRequest}
                  apiToken={this.props.apiToken}
                />
              );
            }}
          />
          {this.props.isAdmin ? (
            <Route
              path="/products/:id"
              render={routerProps => {
                const PRODUCTS_ARRAY = this.props.products.filter(
                  product => product.id == routerProps.match.params.id
                );
                const PRODUCT = PRODUCTS_ARRAY[0];
                return (
                  <UpdateProductForm
                    initialValues={PRODUCT}
                    updateProductRequest={this.props.updateProductRequest}
                    deleteProductRequest={this.props.deleteProductRequest}
                  />
                );
              }}
            />
          ) : (
            <Route
              path="/products/:id"
              render={routerProps => {
                const PRODUCTS_ARRAY = this.props.products.filter(
                  product => product.id == routerProps.match.params.id
                );
                const PRODUCT = PRODUCTS_ARRAY[0];
                return <ProductPage product={PRODUCT} />;
              }}
            />
          )}
        </Switch> */}
      </>
    );
  }
}
const mapStateToProps = (
  state: IAppState<IProductsState, IUsersState, IViewerState>
) => ({
  products: state.products.data,
  loading: state.products.loading,
  errors: state.products.errors,
  isAdmin: state.viewer.isAdmin,
  token: state.viewer.data ? state.viewer.data.apiToken : "mockToken"
});
const mapDispatchToProps = {
  createProductRequest,
  updateProductRequest,
  deleteProductRequest,
  getProductsRequest
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ProductsPage)
);
