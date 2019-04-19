
import { map, catchError } from 'rxjs/operators';
// import { AnyAction } from 'redux';
// import { Observable, of } from 'rxjs';
// import { IAppState } from '../../../../rootStore/initialState.d';
// import { IViewerState } from '../../Types/viewerState';
// import { IUsersState } from '../../Types/usersState';
// import { IProductsState } from '../../../Product/Types/productsState';
// import { ofType } from 'redux-observable';
// import { updateUserStatusRequest, updateUserStatusSuccess, usersError } from '../usersActions';
// import { switchMap } from 'rxjs/operators';
// import { UserStatus } from '../../Types/enumerations/UserStatus';
// export const getUsersEpic = (action$: Observable<AnyAction>, state$: Observable<IAppState<IProductsState, IUsersState, IViewerState>>,  {httpGet}: any) => {
//   action$.pipe(ofType(updateUserStatusRequest), map(()=> state$.pipe(
//       switchMap( state =>
//         state.viewer.isAdmin &&
//           httpGet(`/users/`, { Authorization: `Bearer ${state.viewer.authorizationToken}` }).pipe(
//             map((response: {id: number, status: UserStatus}) =>
//               updateUserStatusSuccess(response)
//             ),
//             catchError(error => of(usersError({from: updateUserStatusRequest.type,
//               error: error.xhr.response})))
//           )
//       )
//     )
//   )
//   )
// }