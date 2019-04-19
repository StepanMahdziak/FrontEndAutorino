import { combineEpics } from "redux-observable";
import { createProductEpic } from "./Epics/createProductEpic";
import { updateProductEpic } from "./Epics/updateProductEpic";
import { deleteProductEpic } from "./Epics/deleteProductEpic";
import { getProductsEpic } from "./Epics/getProductsEpic";




export const productsEpic = combineEpics(
      createProductEpic, //updateProductEpic, deleteProductEpic, 
      getProductsEpic
    //   , getProductsEpic 
  );