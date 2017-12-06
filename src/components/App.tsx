import * as React from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";

import Dashboard from "./AsyncDashboard";

class App extends React.PureComponent {
  render() {
    return (
      <Router>
        <div>
          <div>
            <Link to="/">Dashboard</Link> |
          </div>
          <div>
            <Route exact={true} path="/" component={Dashboard} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
