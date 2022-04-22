import React from "react";
import { Route, Switch } from "react-router-dom";

import { AuthPage, useAuth } from "./modules/auth";
import { HomePage } from "./modules/home";

import PrivateRoute from "./PrivateRoute";

function App() {
  const { state: authState } = useAuth();
  return (
    <div className="App">
      <main id="main">
        <Switch>
          <PrivateRoute
            path="/"
            exact
            user={authState.user}
            component={(props) => <HomePage {...props} />}
          />
          <Route path="/auth" component={(props) => <AuthPage {...props} />} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
