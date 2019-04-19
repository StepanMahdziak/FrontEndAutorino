import { ofType } from "redux-observable";
import { ajax } from "rxjs/ajax";
import { Observable, of } from "rxjs";
import { map, switchMap, catchError, mergeMap } from "rxjs/operators";
import { AnyAction } from "redux";
import { IAppState } from "../../../../rootStore/initialState.d";
import { IViewerState } from "../../Types/viewerState";
import { IUsersState } from "../../Types/usersState";
import { IProductsState } from "../../../Product/Types/productsState";
import { IUser } from "../../Types";
import {
    createUserRequest,
    updateUserRequest,
    viewerError,
    updateUserSuccess
} from "../viewerActions";

export const updateUserEpic = (action$: Observable<AnyAction>) =>
    action$.pipe(
        ofType(updateUserRequest.type),
        mergeMap(action => {
            const REQUEST = {
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                login: action.payload.email,
                country: action.payload.country,
                birthDate: action.payload.birthDate,
                password: action.payload.password
            };
            return ajax
                .put(
                    `http://localhost:8000/public/profile/information/${
                    action.payload.id
                    }`
                    // ,
                    // REQUEST,
                    // {
                        // 'Accept': 'application/json',
                        // 'Content-Type': 'application/json'
                        // Authorization: `Bearer ${
                        //     action.payload.apiToken
                        // }`
                    // }
                )
                .pipe(
                    map((response: any) =>

                        // console.log(ajaxResponse.response),
                        updateUserSuccess({ favorites: [], ...response })
                    ),
                    catchError(error => of(viewerError(error)))
                );
        })
    );
