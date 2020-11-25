import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Login from './modules/login';
import Home from './modules/home';
import { getComics } from './services/comics';
import Loader from './components/loader';


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => checkStatusAPI(), [])

  async function checkStatusAPI() {
    try {
      await getComics();
      setLoading(false);
    } catch (e) {
      setLoading(false);
    }
  }
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact={true} path="*" render={() => <Redirect to="/" />} />
        </Switch>
      </Router>
      <Loader isLoading={loading} />
    </>
  );
}

export default App;
