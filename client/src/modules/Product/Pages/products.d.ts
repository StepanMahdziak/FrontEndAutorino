import { createProductRequest, updateProductRequest, deleteProductRequest, getProductsRequest } from './../Store/productActions';
import { IProduct } from './../Types/IProduct.d';
import { ICar } from '../Types/ICar';

export interface IProductsProps {
  products: IProduct<ICar>[];
  loading: boolean;
  errors: any;
  isAdmin: boolean;
  apiToken:string;
  createProductRequest: typeof createProductRequest;
  updateProductRequest: typeof updateProductRequest;
  deleteProductRequest: typeof deleteProductRequest;
  getProductsRequest: typeof getProductsRequest
}
