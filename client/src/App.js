import React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import './App.css';
import { RegisterContainer } from '../src/containers/RegisterContainer'
import { LoginContainer } from '../src/containers/LoginContainer'
import {DashboardPageContainer} from "./containers/DashboardPageContainer";
import Container from "@material-ui/core/Button";
import {NavigationContainer} from "./containers/NavigationContainer";
import {CreateProjectPageContainer} from "./containers/CreateProjectPageContainer";
import {connect} from "react-redux";

const mapStateToProps = state => ({
  isLoggedIn: state.users.loggedUser
});
const ProtectedRoute = connect(mapStateToProps, null)(({ isLoggedIn, ...props }) => (
  isLoggedIn
    ? <Route { ...props } />
    : <Redirect to="/login" />
));
const AuthRoute = connect(mapStateToProps, null)(({ isLoggedIn, ...props }) => (
  isLoggedIn
    ? <Redirect to="/dashboard" />
    : <Route { ...props } />
));

function App() {
  return (
    <div className="App">
        <NavigationContainer/>
        <Container maxWidth="sm">
        <Switch>
          <AuthRoute exact path="/register" component={RegisterContainer} />
          <AuthRoute exact path="/login" component={LoginContainer} />
          <ProtectedRoute exact path="/dashboard" component={ DashboardPageContainer } />
          <ProtectedRoute exact path="/create-project" component={ CreateProjectPageContainer } />
        </Switch>
        </Container>
    </div>
  );
}

export default App;
