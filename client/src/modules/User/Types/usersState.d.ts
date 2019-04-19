import { IUserResponse } from "../Store/usersEpics/getUsersEpic";

export interface IUsersState {
    data: IUserResponse[];
    errors: any[];
    loading: boolean;
    length: number;
  }