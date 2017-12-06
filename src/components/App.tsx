import * as React from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { inject, observer } from "mobx-react";

import { CommonStoreInterface } from "../stores/CommonStore";
import Loading from "./Loading";

// Pages
import Dashboard from "./AsyncDashboard";

@inject("commonStore")
@observer
class App extends React.Component<{ commonStore?: CommonStoreInterface }> {
  render() {
    if (this.props.commonStore.loading) {
      return <Loading />;
    } else {
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
}

export default App;
