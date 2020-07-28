import React from 'react';
import './App.css';
import * as ReactBootstrap from 'react-bootstrap';
import SignUp from './components/Signup';
import Navbar from './components/Navbar';
import Browse from './components/Browse';
import Features from './components/Features';
import MoreInfo from './components/Moreinfo';
import LoginForm from './components/LoginForm';
import PrivateRoute from './utils/PrivateRoute';
import UpdateButton from './components/UpdateButton';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="App">

        <Navbar />
       


        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/features" component = {Features}>
            <Features />
          </Route>
          <Route path="/browse" component = {Browse}>
            <Browse />
          </Route>
          <Route path="/moreinfo" component = {MoreInfo}>
            <MoreInfo />
          </Route>
          <Route path="/signup" component = {SignUp}>
            <SignUp />
          </Route>
        </Switch>
    
    </div>
    </Router>
  );
}

export default App;