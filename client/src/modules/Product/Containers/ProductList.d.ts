import { IProduct } from "../Types/IProduct.d";
import { IProductEssence } from "../Types/IProductEssence";
export interface IProductListProps {
  products: IProduct<IProductEssence>[];
  getProductsRequest: typeof getProductsRequest;

}
export interface IProductState {

}
