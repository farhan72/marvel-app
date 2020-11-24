import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Login from './modules/login';
import Home from './modules/home';
import { getComics } from './services/comics';
import RouteGuard from './route-guard';
import Loader from './components/loader';


function App() {
  const [isAuthenticated, userHasAuthenticated] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => checkStatusAPI(), [])

  async function checkStatusAPI() {
    try {
      await getComics();
      userHasAuthenticated(true);
      setLoading(false);
    } catch (e) {
      userHasAuthenticated(false);
      setLoading(false);
    }
  }
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <RouteGuard path="/home" component={Home} isAuthenticated={isAuthenticated} />
          <Route exact={true} path="*" render={() => <Redirect to="/home" />} />
        </Switch>
      </Router>
      <Loader isLoading={loading} />
    </>
  );
}

export default App;
