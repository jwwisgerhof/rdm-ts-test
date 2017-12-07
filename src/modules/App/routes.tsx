import Route from "../../interfaces/Route";

// Pages
import Dashboard from "./pages/Dashboard";

const appRoutes: Route[] = [
  {
    component: Dashboard,
    path: "/",
    exact: true
  }
];

export default appRoutes;
