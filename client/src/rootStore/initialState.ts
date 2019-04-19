import { MOCK_PRODUCT } from './../modules/User/tests/mockProduct';
import { IViewerState } from './../modules/User/Types/viewerState.d';
import { IAppState } from "./initialState.d";
import { IUsersState } from "../modules/User/Types/usersState";
import { IProductsState } from "../modules/Product/Types/productsState";


export const initialState: IAppState<IProductsState, IUsersState, IViewerState> = {
  products: {
    data: [MOCK_PRODUCT, {...MOCK_PRODUCT, id: 2}],
    product: null,
    errors: [],
    length: 0,
    loading: false
  },
  users: {
    data: [],
    errors: [],
    length: 0,
    loading: false
  },
  viewer: 
  {
    data: null,
    errors: [],
    isAdmin: false,
    isLogined: false,
    loading: false,
    authorizationToken: null
  }
};
