import React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import './App.css';
import { RegisterContainer } from '../src/containers/RegisterContainer'
import { LoginContainer } from '../src/containers/LoginContainer'
import {DashboardPageContainer} from "./containers/DashboardPageContainer";
import Container from "@material-ui/core/Button";
import {NavigationContainer} from "./containers/NavigationContainer";
import {CreateProjectPageContainer} from "./containers/CreateProjectPageContainer";

function App() {
  return (
    <div className="App">
        <NavigationContainer/>
        <Container maxWidth="sm">
        <Switch>
          <Route exact path="/register" component={RegisterContainer} />
          <Route exact path="/login" component={LoginContainer} />
          <Route exact path="/dashboard" component={ DashboardPageContainer } />
          <Route exact path="/create-project" component={ CreateProjectPageContainer } />
          <Redirect from="/logout" to="/login" />
        </Switch>
        </Container>
    </div>
  );
}

export default App;
