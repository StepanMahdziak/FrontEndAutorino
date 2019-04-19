import { combineEpics } from "redux-observable";
import { createUserEpic } from "./viewerEpics/registrationEpic";
import { updateUserEpic } from "./viewerEpics/updateViewerEpic";
import { loginUserEpic } from "./viewerEpics/loginEpic";



export const viewerEpic = combineEpics(
    createUserEpic,
    updateUserEpic,
    loginUserEpic
  );