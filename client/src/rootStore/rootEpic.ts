import { combineEpics } from "redux-observable";
import { productsEpic } from "../modules/Product/Store/productsEpic";
import { usersEpic } from "../modules/User/Store/usersEpic";
import { viewerEpic } from "../modules/User/Store/viewerEpic";

export const rootEpic = combineEpics(
    productsEpic,
    usersEpic,
    viewerEpic
  );