import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './modules/Login';
import Home from './modules/Home';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/home" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
