import React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import './App.css';
import { RegisterContainer } from '../src/containers/RegisterContainer'
import { LoginContainer } from '../src/containers/LoginContainer'
import {DashboardPageContainer} from "./containers/DashboardPageContainer";
import Container from "@material-ui/core/Button";
import {NavigationContainer} from "./containers/NavigationContainer";
import {CreateProjectPageContainer} from "./containers/CreateProjectPageContainer";
import {CreateEpicPageContainer} from "./containers/CreateEpicPageContainer";
import {CreateUserStoryPageContainer} from "./containers/CreateUserStoryPageContainer";
import {CreateTaskPageContainer} from "./containers/CreateTaskPageContainer";
import {ProjectOverviewPageContainer} from "./containers/ProjectOverviewPageContainer";
import {connect} from "react-redux";
import {CreatesSprintPageContainer} from "./containers/CreateSprintPageContainer";
import {MyProfilePageContainer} from "./containers/MyProfilePageContainer";

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
          <ProtectedRoute exact path="/dashboard/project/:name" component={ ProjectOverviewPageContainer } />
          <ProtectedRoute exact path="/create-project" component={ CreateProjectPageContainer } />
          <ProtectedRoute exact path="/create-epic" component={ CreateEpicPageContainer } />
          <ProtectedRoute exact path="/create-user-story" component={ CreateUserStoryPageContainer } />
          <ProtectedRoute exact path="/create-task" component={ CreateTaskPageContainer } />
          <ProtectedRoute exact path="/create-sprint" component={ CreatesSprintPageContainer } />
            <ProtectedRoute exact path="/my-profile" component={MyProfilePageContainer} />
          <Redirect from="/" to="/login"/>
        </Switch>
        </Container>
    </div>
  );
}

export default App;
