import { IId } from "./../Types/IId.d";
import { createAction } from "redux-starter-kit";
import { IUser } from "../Types";
import { UserStatus } from "../Types/enumerations/UserStatus";
import { IUserResponse } from "./usersEpics/getUsersEpic";

export const getUsersRequest = createAction<{apiToken: string}>("GET_USERS_REQUEST");
export const getUsersSuccess = createAction<IUserResponse[]>(
  "GET_USERS_SUCCESS"
);

export const deleteUserRequest = createAction<{ id: number; apiToken: string }>(
  "DELETE_USER_REQUEST"
);
export const deleteUserSuccess = createAction<IId>("DELETE_USER_SUCCESS");

export const updateUserStatusRequest = createAction<{
  id: number;
  status: string;
}>("UPDATE_USER_STATUS_REQUEST");
export const updateUserStatusSuccess = createAction<{
  id: number;
  status: string;
}>("UPDATE_USER_STATUS_SUCCESS");

export const usersError = createAction<any>("USERS_Error");
