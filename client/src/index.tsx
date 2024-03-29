import React from "react";
import ReactDOM from "react-dom";
import { Provider as ReduxProvider } from "react-redux";
import App from "./App";
import "./index.css";
import { configureAppStore } from "./rootStore";
import * as serviceWorker from "./serviceWorker";

import { BrowserRouter as Router } from "react-router-dom";
import { Store } from "redux";
import { saveState } from "./helpers/localStorage/saveState";
import { throttle } from "lodash";

 export const store: Store = configureAppStore();

store.subscribe(
  throttle(() => {
    saveState(store.getState());
  }, 1000)
);

ReactDOM.render(
  <Router>
    <ReduxProvider store={store}>
      <App />
    </ReduxProvider>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
