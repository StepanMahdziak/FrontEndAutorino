import React, { Component } from "react";
import ProductList from "../Containers/ProductList";
import { Route, withRouter, Switch } from "react-router";
import { IProductListProps } from "../Containers/ProductList.d";
import { IAppState } from "../../../rootStore/initialState.d";
import { IProductsState } from "../Types/productsState";
import { IUsersState } from "../../User/Types/usersState";
import { IViewerState } from "../../User/Types/viewerState";
import { connect } from "react-redux";
import ProductPage from "../Pages/product";
import ProductForm from "../Containers/ProductForm";
import { INITIAL_CREATE_PRODUCT_FORM_VALUES } from "../FormikValues/InitialCreateProductFormValues";
import { IProductsProps } from "../Pages/products.d";
import NewProductForm from "../Pages/NewProductPage";
import ProductsPage from "../Pages/products";
import { MOCK_PRODUCTS } from "../../User/tests/mockProducts";
import UpdateProductForm from "../Pages/UpdateProductPage";
import { MOCK_PRODUCT } from "../../User/tests/mockProduct";
import NewProductPage from "../Pages/NewProductPage";
import { IProduct } from "../Types/IProduct";
import { ICar } from "../Types/ICar";
import { getItemInArrayById } from "../../../helpers/getItemInArrayById";
import UpdateProductPage from "../Pages/UpdateProductPage";
import {
  updateProductRequest,
  deleteProductRequest
} from "../Store/productActions";
export interface IProductsRouterProps {
  isAdmin: boolean;
  products: IProduct<ICar>[];
  deleteProductRequest: typeof deleteProductRequest;
  updateProductRequest: typeof updateProductRequest;
}

const ProductsRouter = ({ ...props }: IProductsRouterProps) => {
  return (
    <>
      <Switch>
        <Route exact path="/products" component={ProductsPage} />
        {props.isAdmin && (
          <Route path="/products/new-product" component={NewProductPage} />
        )}
        <Route
          path="/products/:id"
          render={routerProps => {
            const PRODUCT = getItemInArrayById(
              props.products,
              routerProps.match.params.id
            );
            return (
              <>
                {props.isAdmin ? (
                  <UpdateProductPage
                    product={PRODUCT}
                    updateProductRequest={props.updateProductRequest}
                    deleteProductRequest={props.deleteProductRequest}
                  />
                ) : (
                  <ProductPage product={PRODUCT} />
                )}
              </>
            );
          }}
        />
      </Switch>
    </>
  );
};

const mapStateToProps = (
  state: IAppState<IProductsState, IUsersState, IViewerState>
) => ({
  isAdmin: state.viewer.isAdmin,
  products: state.products.data
});
const mapDispatchToProps = {
  updateProductRequest,
  deleteProductRequest
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ProductsRouter)
);
