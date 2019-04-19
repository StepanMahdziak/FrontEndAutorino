import { IUser } from "../modules/User/Types/IUser";
import { IProduct } from "../modules/Product/Types/IProduct.d";
import { IViewerState } from "../modules/User/Types/viewerState.d";
import { IProductsState } from "../modules/Product/Types/productsState.d";
import { IUsersState } from "../modules/User/Types/usersState.d";

export interface IAppState<IProductsState, IUsersState, IViewerState> {
  
  products: IProductsState;
  users: IUsersState;
  viewer: IViewerState;
}
