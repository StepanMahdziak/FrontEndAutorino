import { ajax } from "rxjs/ajax";
import { Observable, of } from "rxjs";
import { map, switchMap, catchError, mergeMap } from "rxjs/operators";
import { AnyAction } from "redux";
import { ofType } from "redux-observable";
import {
    viewerError,
    loginUserRequest,
    loginUserSuccess
} from "../viewerActions";
import { parseJwt } from "../../../../helpers/tokenParser";

export const loginUserEpic = (action$: Observable<AnyAction>) =>
    action$.pipe(
        ofType(loginUserRequest.type),
        mergeMap(action => {
            const REQUEST = {
                login: action.payload.email,
                password: action.payload.password
            };
            // console.log(action.payload);
            return ajax
                .post(`http://localhost:8000/public/login`, REQUEST, {
                    // Accept: "application/json",
                    "Content-Type": "application/json"
                })
                .pipe(
                    map((ajaxResponse: any) => {
                        // console.log(ajaxResponse.response);
                        return loginUserSuccess({
                            favorites: [],
                            apiToken: ajaxResponse.response.password,
                            ...ajaxResponse.response
                        });
                    }),
                    catchError(error => {
                        console.log("error");
                        return of(viewerError(error));
                    })
                );
        })
    );
