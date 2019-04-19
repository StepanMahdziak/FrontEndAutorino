import { Reducer } from "react";

import { AnyAction } from "redux";
import { createReducer } from "redux-starter-kit";
import { initialState } from "../../../rootStore/initialState";
import {
  deleteUserRequest,
  deleteUserSuccess,
  getUsersRequest,
  getUsersSuccess,
  updateUserStatusRequest,
  updateUserStatusSuccess,
  usersError
} from "./usersActions";
import { IUsersState } from "../Types/usersState";

export const usersReducer: Reducer<IUsersState | undefined , AnyAction> = createReducer(
  initialState.users,
  {
    [usersError.type]: (users: IUsersState, action: AnyAction) => {
      users.errors.push(action.payload);
    },
    [updateUserStatusRequest.type]: (
      _users: IUsersState,
      _action: AnyAction
    ) => {},
    [updateUserStatusSuccess.type]: (users: IUsersState, action: AnyAction) => {
      users.data.forEach(user => {
        if (user.id == action.payload.id) {
          user.status = action.payload.status;
        }
      });
    },
    [deleteUserRequest.type]: (_users: IUsersState, _action: AnyAction) => {},
    [deleteUserSuccess.type]: (users: IUsersState, action: AnyAction) => {

      users.data = users.data.filter(
        user => user.id !== action.payload.id
      );
    },

    [getUsersRequest.type]: (users: IUsersState, _action: AnyAction) => {
      users.loading = true;
    },
    [getUsersSuccess.type]: (users: IUsersState, action: AnyAction) => {
      users.loading = false;
      users.data = action.payload;
      users.length = users.data.length;
    }
  }
);
