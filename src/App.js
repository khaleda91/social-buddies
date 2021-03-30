import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import About from './components/About/About';
import NoMatch from './components/NoMatch/NoMatch';
import FriendDetail from './components/FriendDetail/FriendDetail';


function App() {
  return (
    <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/topics">Topics</Link>
        </li>
      </ul>

      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/friend/:friendId">
         <FriendDetail></FriendDetail>
        </Route>
        <Route path="/about">
          <About></About>
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
        <NoMatch></NoMatch>
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
