import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Counter from './pages/Counter';
import Signup from './pages/Signup';


function App() {
  return (
    <Router>
      <Switch>
      <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/counter">
          <Counter />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
