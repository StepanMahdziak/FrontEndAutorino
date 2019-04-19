import { ILoginFormValues } from "./../formikValues/ILoginFormValues.d";
import { IRegistrationFormValues } from "../formikValues/IUserFormValues";
import { createAction } from "redux-starter-kit";
import { IUser } from "../Types";
import { UserStatus } from "../Types/enumerations/UserStatus";
import { IId } from "../Types/IId";
import { ICar } from "../../Product/Types/ICar";
import { IProduct } from "../../Product/Types/IProduct";

export const viewerError = createAction<any>("VIEWER_ACTION");

export const createUserRequest = createAction<IRegistrationFormValues>(
  "CREATE_USER_REQUEST"
);
export const createUserSuccess = createAction<IUser>("CREATE_USER_SUCCESS");
export const clearLoading = createAction<any>("CLEAR_LOADING")
export const updateUserRequest = createAction<IUser>("UPDATE_USER_REQUEST");
export const updateUserSuccess = createAction<IUser>("UPDATE_USER_SUCCESS");
export const loginUserRequest = createAction<ILoginFormValues>(
  "LOGIN_USER_REQUEST"
);

export const loginUserSuccess = createAction<IUser>("LOGIN_USER_SUCCESS");

export const logoutUserRequest = createAction<any>("LOGOUT_USER_REQUEST");
export const logoutUserSuccess = createAction<any>("LOGOUT_USER_SUCCESS");

export const addProductToFavoritesRequest = createAction<IProduct<ICar>>(
  "ADD_PRODUCTS_TO_FAVORITES_REQUEST"
);
export const addProductToFavoritesSuccess = createAction<IProduct<ICar>>(
  "ADD_PRODUCTS_TO_FAVORITES_SUCCESS"
);

export const removeProductFromFavoritesRequest = createAction<IId>(
  "REMOVE_PRODUCT_FROM_FAVORITES_REQUEST"
);
export const removeProductFromFavoritesSuccess = createAction<IId>(
  "REMOVE_PRODUCT_FROM_FAVORITES_SUCCESS"
);

export const removeAllProductsFromFavoritesRequest = createAction<any>(
  "REMOVE_ALL_PRODUCTS_FROM_FAVORITES_REQUEST"
);
export const removeAllProductsFromFavoritesSuccess = createAction<any>(
  "REMOVE_ALL_PRODUCTS_FROM_FAVORITES_SUCCESS"
);
