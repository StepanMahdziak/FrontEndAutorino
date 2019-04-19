import { combineEpics } from "redux-observable";
import { getUsersEpic } from "./usersEpics/getUsersEpic";
import { deleteUserEpic } from "./usersEpics/deleteUserEpic";



export const usersEpic = combineEpics(
    getUsersEpic,
    deleteUserEpic
  );