import { ajax } from "rxjs/ajax";
import { Observable, of } from "rxjs";
import { map, switchMap, catchError, mergeMap } from "rxjs/operators";
import { AnyAction } from "redux";
import { ofType } from "redux-observable";

import { parseJwt } from "../../../../helpers/tokenParser";
import { createProductRequest, createProductFailure } from "../productActions";
;

export const createProductEpic = (action$: Observable<AnyAction>) =>
    action$.pipe(
        ofType(createProductRequest.type),
        mergeMap(action => {
            console.log(action.payload);
            return ajax
                .post(`http://localhost:8000/bodyType`, action.payload.product.productEssence.bodyType, {
                  Authorization: `Bearer ${
                    action.payload.apiToken
                }`,
                    'Accept': 'application/json',
                'Content-Type': 'application/json'
                })
                .pipe(
                    map((ajaxBodyTypeResponse) => {
                        console.log(ajaxBodyTypeResponse.response);
                        const BodyTypeResponse = ajaxBodyTypeResponse.response

                        // return  loginUserSuccess({
                        //     favorites: [],
                        //     ...ajaxResponse.response
                        // });
                    }),
                    catchError(error => {
                        console.log("error");
                        return of(createProductFailure(error));
                    })
                );
        })
    );
