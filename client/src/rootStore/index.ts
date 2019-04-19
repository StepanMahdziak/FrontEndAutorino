import { createEpicMiddleware } from "redux-observable";
import { Store } from "redux";
import { configureStore } from "redux-starter-kit";
import { initialState } from "./initialState";
import rootReducer from "./rootReducer";
import { rootEpic } from "./rootEpic";
import { ajax } from "rxjs/ajax";
import { loadState } from "../helpers/localStorage/loadState";

const epicMiddleware = createEpicMiddleware({
  dependencies: { getJson: ajax.getJSON, httpPost: ajax.post }
});
const persistedState = loadState();
export const configureAppStore = (): Store => {
  const store = configureStore({
    reducer: rootReducer,
    middleware: [epicMiddleware],
    devTools: true,
    preloadedState: persistedState || initialState
    //  {
    //   products: initialState.products,
    //   users: initialState.users,
    //   viewer: initialState.viewer
    // }
  });
  epicMiddleware.run(rootEpic);
  return store;
};
