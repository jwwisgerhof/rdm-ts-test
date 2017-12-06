const Loadable = require("react-loadable");
import Loading from "./Loading";

export default Loadable({
  loader: () => import("./Dashboard"),
  loading: Loading
});
