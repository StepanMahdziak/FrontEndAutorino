import { IProduct } from "./IProduct.d";
import { ICar } from "./ICar";

export interface IProductsState {
    data: IProduct<ICar>[];
    product: IProduct<ICar>?;
    errors: any[];
    loading: boolean;
    length: number;
  }
  