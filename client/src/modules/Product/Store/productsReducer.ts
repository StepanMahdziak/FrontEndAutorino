import { createReducer } from "redux-starter-kit";
import { Reducer, AnyAction } from "redux";
import {
  createProductRequest,
  createProductSuccess,
  createProductFailure,
  updateProductRequest,
  updateProductSuccess,
  updateProductFailure,
  deleteProductRequest,
  deleteProductSuccess,
  deleteProductFailure,
  getProductsRequest,
  getProductsSuccess,
  getProductsFailure,
  getProductRequest,
  getProductSuccess,
  getProductFailure
} from "./productActions";

import { initialState } from "../../../rootStore/initialState";
import { IProductsState } from "../Types/productsState";

export const productsReducer: Reducer<IProductsState| undefined, AnyAction> = createReducer(
  initialState.products,
  {
    [createProductRequest.type]: (_products: IProductsState, _action: AnyAction) => {alert("reducerzhivoi")},
    [createProductSuccess.type]: (products: IProductsState, action: AnyAction) => {
      products.data !== null && products.data.push(action.payload);
    },
    [createProductFailure.type]: (products: IProductsState, action: AnyAction) => {
      products.errors.push(action.payload);
    },
    [updateProductRequest.type]: (_products: IProductsState, _action: AnyAction) => {},
    [updateProductSuccess.type]: (products: IProductsState, action: AnyAction) => {
      if (products.data !== null) {
        products.data = products.data.filter(
          el => el.id != action.payload.id
        );
      }
      products.data !== null && products.data.push(action.payload);
    },
    [updateProductFailure.type]: (products: IProductsState, action: AnyAction) => {
      products.errors.push(action.payload);
    },
    [deleteProductRequest.type]: (_products: IProductsState, _action: AnyAction) => {},
    [deleteProductSuccess.type]: (products: IProductsState, action: AnyAction) => {
      if (products.data !== null) {
        products.data = products.data.filter(
          product => product.id !== action.payload.id
        );
      }
    },
    [deleteProductFailure.type]: (products: IProductsState, action: AnyAction) => {
      products.errors.push(action.payload);
    },
    [getProductRequest.type]: (_products: IProductsState, _action: AnyAction) => {},
    [getProductSuccess.type]: (products: IProductsState, action: AnyAction) => {
      products.product = action.payload;
    },
    [getProductFailure.type]: (products: IProductsState, action: AnyAction) => {
      products.errors.push(action.payload);
    },
    [getProductsRequest.type]: (products: IProductsState, _action: AnyAction) => {
      products.loading = true;
    },
    [getProductsSuccess.type]: (products: IProductsState, action: AnyAction) => {
      products.data = action.payload;
    },
    [getProductsFailure.type]: (products: IProductsState, action: AnyAction) => {
      products.errors.push(action.payload);
    }
  }
);
