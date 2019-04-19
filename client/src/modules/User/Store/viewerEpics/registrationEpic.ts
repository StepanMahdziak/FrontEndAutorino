import { ajax } from "rxjs/ajax";
import { Observable, of } from "rxjs";
import { map, switchMap, catchError, mergeMap } from "rxjs/operators";
import { AnyAction } from "redux";
import { ofType } from "redux-observable";
import {
    createUserRequest,
    updateUserRequest,
    viewerError,
    updateUserSuccess,
    createUserSuccess
} from "../viewerActions";
import { parseJwt } from "../../../../helpers/tokenParser";


    export const createUserEpic = (action$: Observable<AnyAction>) => action$.pipe(


        ofType(createUserRequest.type),
        mergeMap(action => {
            const REQUEST = {
                firstName: action.payload.firstName,
                lastName: action.payload.lastName, 
                login: action.payload.email,
                country: action.payload.country,
                birthDate: action.payload.birthDate,
                password: action.payload.password
            }
            return ajax.post(`http://localhost:8000/public/registration/`, REQUEST ,{ 
                 'Accept': 'application/json',
                'Content-Type': 'application/json' 
            }).pipe(
                map((ajaxResponse) => {
                    console.log(ajaxResponse.response)
                    // console.log(parseJwt(response.toString()))
                     return createUserSuccess({ favorites: [], ...ajaxResponse.response
                     })
                }
                
                ), catchError((error) => of(viewerError(error)))
            )
        }
        )
    );
    