import { createProductRequest } from "./../Store/productActions";
export interface INewProductPage {
  createProductRequest: typeof createProductRequest;
  apiToken: string;
}
