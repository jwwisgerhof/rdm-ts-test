import * as React from "react";
import Hidden from "material-ui/Hidden";

export default () => {
  return (
    <div>
      THE DASHBOARD!
      <Hidden only={["xs", "sm"]}>
        <span>LARGE SCREEN</span>
      </Hidden>
      <Hidden only={["md", "lg", "xl"]}>
        <span>SMALL SCREEN</span>
      </Hidden>
    </div>
  );
};
