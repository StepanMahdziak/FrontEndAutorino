import { IUser } from './IUser.d';
export interface IViewerState {
        data : IUser?,
        isLogined: boolean,
        errors: any[],
        loading: boolean,
        isAdmin: boolean;
        authorizationToken: string?;
  }