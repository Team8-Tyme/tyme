import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import Navigation from "./components/layout/Navigation";
import SignIn from "./components/auth/LoginPage";
import SignUp from "./components/auth/SignupPage";
import About from "./components/pages/AboutTyme";

const history = createBrowserHistory();
class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div className="App">
          <Switch>
            <Route path="/login" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/about" component={About} />
            <Route path="/" component={Navigation} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
