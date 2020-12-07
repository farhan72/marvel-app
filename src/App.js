import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./containers/login";
import Layout from "./components/layout";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/" component={Layout} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
