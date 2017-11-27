import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "mobx-react";

import App from "./App";
import CommonStore from "./stores/CommonStore";

const appState = new CommonStore();

ReactDOM.render(
  <Provider appState={appState}>
    <App />
  </Provider>,
  document.getElementById("root") as HTMLElement
);
