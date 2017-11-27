import * as React from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";

import Users from "./components/Users";
import Dashboard from "./components/Dashboard";

class App extends React.PureComponent {
  render() {
    return (
      <Router>
        <div>
          <div>
            <Link to="/">Dashboard</Link> |
            <Link to="/users">User list</Link>
          </div>
          <div>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/users" component={Users} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
