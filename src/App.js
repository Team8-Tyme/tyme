import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navigation'
import Dashboard from './components/dashboard/Dashboard'
import SignIn from './components/auth/LoginPage'
import SignUp from './components/auth/SignupPage'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar/>
            <Switch>
              <Route exact path='/'component={Dashboard} />
              <Route path='/login' component={SignIn} />
              <Route path='/signup' component={SignUp} />
            </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;