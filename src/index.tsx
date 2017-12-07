import * as React from "react";
import * as ReactDOM from "react-dom";

import Root from "./Root";

ReactDOM.render(<Root />, document.getElementById("root") as HTMLElement);

if (module.hot) {
  module.hot.accept("./Root", () => {
    const NextApp = require("./Root").default;
    ReactDOM.render(<NextApp />, document.getElementById(
      "root"
    ) as HTMLElement);
  });
}
