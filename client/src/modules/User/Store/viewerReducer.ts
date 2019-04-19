import { initialState } from "../../../rootStore/initialState";
import { Reducer } from "react";


import { AnyAction } from "redux";
import { createReducer } from "redux-starter-kit";
import {
  createUserRequest,
  createUserSuccess,
 
  updateUserRequest,
  updateUserSuccess,

  loginUserRequest,
  loginUserSuccess,

  logoutUserRequest,
  logoutUserSuccess,

  addProductToFavoritesRequest,
  addProductToFavoritesSuccess,

  removeProductFromFavoritesRequest,
  removeProductFromFavoritesSuccess,
  removeAllProductsFromFavoritesRequest,
  removeAllProductsFromFavoritesSuccess,

  viewerError,
  clearLoading
} from "./viewerActions";
import { UserStatus } from "../Types/enumerations/UserStatus";
import { IViewerState } from "../Types/viewerState";
import { IProduct } from "../../Product/Types/IProduct";
import { IProductEssence } from "../../Product/Types/IProductEssence";



export const viewerReducer: Reducer<IViewerState | undefined, AnyAction> = createReducer(
  initialState.viewer,
  {
    [viewerError.type]: (viewer: IViewerState, action: AnyAction) => {
      viewer.loading = false;
      viewer.errors.push(action.payload);
    },
    [createUserRequest.type]: (viewer: IViewerState, action: AnyAction) => {
      viewer.loading = true;
    },
    [createUserSuccess.type]: (viewer: IViewerState, action: AnyAction) => {
      // console.log(`reducer  starts  and  payload is:  ${action.payload}`)
      viewer.loading = false;
      viewer.isLogined = true;
      viewer.isAdmin = action.payload.status == "ADMIN" ? true: false
      viewer.data = action.payload;
    },

    [updateUserRequest.type]: (_viewer: IViewerState, _action: AnyAction) => {},
    [updateUserSuccess.type]: (viewer: IViewerState, action: AnyAction) => {
      console.log("reduser its good")
      viewer.data = action.payload;
    },

    [loginUserRequest.type]: (viewer: IViewerState, action: AnyAction) => {
      viewer.loading = true;
      // alert("stiopa vse  norm!")
    },
    [loginUserSuccess.type]: (viewer: IViewerState, action: AnyAction) => {
      viewer.loading = false;
      viewer.isLogined = true;
      viewer.data = action.payload;
      if (viewer.data !== null) {
        if (viewer.data.status == "ADMIN") {
          viewer.isAdmin = true;
        }
      }
    },
    [clearLoading.type]: (viewer: IViewerState, _action: AnyAction) => {viewer.loading = false},
    [logoutUserRequest.type]: (_viewer: IViewerState, _action: AnyAction) => {},
    [logoutUserSuccess.type]: (viewer: IViewerState, action: AnyAction) => {
      viewer.isAdmin = false;
      viewer.isLogined = false;
      viewer.errors =[];
      viewer.data = null;
    },
    [addProductToFavoritesRequest.type]: (
      _viewer: IViewerState,
      _action: AnyAction
    ) => {},
    [addProductToFavoritesSuccess.type]: (
      viewer: IViewerState,
      action: AnyAction
    ) => {
      if (viewer.data !== null) {
        viewer.data.favorites.push(action.payload);
      }
    },

    [removeProductFromFavoritesRequest.type]: (
      _viewer: IViewerState,
      _action: AnyAction
    ) => {},
    [removeProductFromFavoritesSuccess.type]: (
      viewer: IViewerState,
      action: AnyAction
    ) => {
      if (viewer.data !== null) {
        viewer.data.favorites = viewer.data.favorites.filter(
          (product : IProduct<IProductEssence>) => product.id !== action.payload.id
        );
      }
    },
    [removeAllProductsFromFavoritesRequest.type]: (
      _viewer: IViewerState,
      _action: AnyAction
    ) => {},
    [removeAllProductsFromFavoritesSuccess.type]: (
      viewer: IViewerState,
      _action: AnyAction
    ) => {
      if (viewer.data !== null) {
        viewer.data.favorites = [];
      }
    },
  }
);
