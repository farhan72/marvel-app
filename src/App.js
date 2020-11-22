import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './modules/login';
import Home from './modules/home';
import { getComics } from './services/comics';
import RouteGuard from './route-guard';


function App() {
  const [isAuthenticated, userHasAuthenticated] = useState(false);

  useEffect(() => checkStatusAPI(), [])

  async function checkStatusAPI() {
    try {
      await getComics();
      userHasAuthenticated(true);
    } catch (e) {
      userHasAuthenticated(false);
    }
  }
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <RouteGuard path="/home" component={Home} isAuthenticated={isAuthenticated} />
      </Switch>
    </Router>
  );
}

export default App;
