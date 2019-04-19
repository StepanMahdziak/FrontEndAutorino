import { AnyAction } from "redux";
import { Observable, of } from "rxjs";
import { ofType } from "redux-observable";
import {
  getUsersRequest,
  getUsersSuccess,
  usersError,
  deleteUserRequest,
  deleteUserSuccess
} from "../usersActions";
import { mergeMap, map, catchError } from "rxjs/operators";
import { ajax } from "rxjs/ajax";

export const deleteUserEpic = (action$: Observable<AnyAction>) =>
  action$.pipe(
    ofType(deleteUserRequest.type),
    mergeMap(action => {
      return ajax
        .delete(`http://localhost:8000/public/users/${action.payload.id}`)
        .pipe(
          map(response => null),
          catchError(error => of(deleteUserSuccess(action.payload)))
        );
    })
  );
