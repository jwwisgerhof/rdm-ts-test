import * as React from "react";
import * as ReactDOM from "react-dom";

import Root from "./components/Root";

ReactDOM.render(<Root />, document.getElementById("root") as HTMLElement);

if (module.hot) {
  module.hot.accept("./components/Root", () => {
    const NextApp = require("./components/Root").default;
    ReactDOM.render(<NextApp />, document.getElementById(
      "root"
    ) as HTMLElement);
  });
}
