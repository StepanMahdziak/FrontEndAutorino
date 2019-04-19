import { createAction } from "redux-starter-kit";
import { IProduct } from "../Types/IProduct.d";
import { IProductEssence } from "../Types/IProductEssence";
import { IProductFormValues } from "../FormikValues/IProductFormValues";

export const createProductRequest = createAction<{product:IProductFormValues, apiToken: string}>(
  "CREATE_PPODUCT_REQUEST"
);
export const createProductSuccess = createAction<IProduct<IProductEssence>>(
  "CREATE_PPODUCT_SUCCESS"
);
export const createProductFailure = createAction<any>("CREATE_PPODUCT_FAILURE");
export const updateProductRequest = createAction<IProduct<IProductEssence>>(
  "UPDATE_PPODUCT_REQUEST"
);
export const updateProductSuccess = createAction<IProduct<IProductEssence>>(
  "UPDATE_PPODUCT_SUCCESS"
);
export const updateProductFailure = createAction<any>("UPDATE_PPODUCT_FAILURE");
export const deleteProductRequest = createAction<{ id: number }>(
  "DELETE_PPODUCT_REQUEST"
);
export const deleteProductSuccess = createAction<{ id: number }>(
  "DELETE_PPODUCT_SUCCESS"
);
export const deleteProductFailure = createAction<any>("DELETE_PPODUCT_FAILURE");
export const getProductRequest = createAction<{id : number}>(
  "GET_PRODUCT_REQUEST"
);
export const getProductSuccess = createAction<IProduct<IProductEssence>>(
  "GET_PRODUCT_SUCCESS"
);
export const getProductFailure = createAction<any>("GET_PRODUCT_FAILURE");
export const getProductsRequest = createAction<any | ProductFilterParams<IProductEssence>>(
  "GET_PRODUCTS_REQUEST"
);
export const getProductsSuccess = createAction<IProduct<IProductEssence>[]>(
  "GET_PRODUCTS_SUCCESS"
);
export const getProductsFailure = createAction<any>("GET_PRODUCTS_FAILURE");

type  ProductFilterParams<IProductEssence> = IProduct<IProductEssence>;