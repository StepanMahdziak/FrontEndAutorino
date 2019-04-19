import { IUser } from "../Types/IUser";
import {
  updateUserStatusRequest,
  deleteUserRequest
} from "../Store/usersActions";
import { IUserResponse } from "../Store/usersEpics/getUsersEpic";

export interface IUserListProps {
  users: IUserResponse[];
  updateUserStatusRequest: typeof updateUserStatusRequest;
  deleteUserRequest: typeof deleteUserRequest;
  apiToken: string;
}
