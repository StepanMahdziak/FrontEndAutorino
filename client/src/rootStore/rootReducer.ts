import { combineReducers } from "redux";
import { productsReducer } from "../modules/Product/Store/productsReducer";
import { usersReducer } from "../modules/User/Store/usersReducer";
import { viewerReducer } from "../modules/User/Store/viewerReducer";

const rootReducer = combineReducers({products : productsReducer ,users: usersReducer,viewer: viewerReducer});

export default rootReducer;