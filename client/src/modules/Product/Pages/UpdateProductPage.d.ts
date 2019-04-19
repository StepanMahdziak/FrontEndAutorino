import { IProduct } from './../Types/IProduct.d';
import {
  updateProductRequest,
  deleteProductRequest
} from "./../Store/productActions";
import { ICar } from "./../Types/ICar.d";

export interface IUpdateProductPage {
  product: IProduct<ICar>;
  updateProductRequest: typeof updateProductRequest;
  deleteProductRequest: typeof deleteProductRequest;
}
