import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Login from './containers/login';
// import Home from './containers/home';
import Layout from './components/layout';


function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Layout} />
          <Route exact path="/login" component={Login} />
          <Route exact={true} path="*" render={() => <Redirect to="/" />} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
