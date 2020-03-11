import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import { createBrowserHistory } from 'history';
import { RegisterContainer } from '../src/containers/RegisterContainer'

const history = createBrowserHistory();

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route path="/register" component={RegisterContainer} />
          {/*<Route path="/register" component={RegisterPage} />*/}
          <Redirect from="/" to="/login" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
