import * as React from "react";
import { Provider } from "mobx-react";

import CommonStore from "../stores/CommonStore";
import App from "./App";

const commonStore = new CommonStore();

export default () => {
  return (
    <Provider commonStore={commonStore}>
      <App />
    </Provider>
  );
};
