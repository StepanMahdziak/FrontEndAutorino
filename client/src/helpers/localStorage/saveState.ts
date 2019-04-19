import { IViewerState } from './../../modules/User/Types/viewerState.d';
import { IUsersState } from './../../modules/User/Types/usersState.d';
import { IAppState } from './../../rootStore/initialState.d';
import { IProductsState } from '../../modules/Product/Types/productsState';

export const saveState = (state: IAppState<IProductsState, IUsersState, IViewerState>) =>  {
try {
    const serializedState= JSON.stringify(state);
    window.localStorage.setItem("state", serializedState);

} catch (err) {
    // return undefined
}
}