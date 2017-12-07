const Loadable = require("react-loadable");
import Loading from "../../common/Loading";

export default Loadable({
  loader: () => import("./App"),
  loading: Loading
});
