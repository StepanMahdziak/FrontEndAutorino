import { AnyAction } from "redux";
import { Observable, of } from "rxjs";
import { ofType } from "redux-observable";
import { getUsersRequest, getUsersSuccess, usersError } from "../usersActions";
import { IAppState } from "../../../../rootStore/initialState.d";
import { IViewerState } from "../../Types/viewerState";
import { IUsersState } from "../../Types/usersState";
import { IProductsState } from "../../../Product/Types/productsState";
import { map, switchMap, catchError, mergeMap } from "rxjs/operators";
import { IUser } from "../../Types";
export interface IUserResponse {
  id: number,
  firstName: string,
  lastName:string,
  birthDate: string,
  country: string,
  email: string,
  status: any,
  password: string
} 
import { ajax } from 'rxjs/ajax';


export const getUsersEpic = (action$: Observable<AnyAction>) => action$.pipe(
  ofType(getUsersRequest.type),
  mergeMap(action => 
        // console.log(action.payload.apiToken);
        // alert(action.payload.apiToken);
      ajax.getJSON("http://localhost:8000/public/users?page=0&size=10&direction=ASC&fieldName=firstName"
      , {
        // 'Authorization' : 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPdXJQcm9qZWN0IiwibG9naW4iOiJzdGlvcGFAZ21haWwuY29tIiwicm9sZSI6IkFETUlOIiwiaWF0IjoxNTU1MDY2MDQyLCJleHAiOjE1NTUxMDIwNDJ9.wiJVaxdf8BcbbMO0H0VNeWSQK7wzAOQv8IjtxrAu06s',
        "Content-Type": "application/json"
        }).pipe(
            map((response: any) => {
                console.log(response.data)  
                return getUsersSuccess(response.data)})
                , catchError(error => {console.log(error)
                    return of(usersError(error))} )
                    )
                
  )
);

