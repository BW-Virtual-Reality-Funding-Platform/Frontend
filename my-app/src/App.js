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
          <Route path="/features" component={Features}/>
          
          <PrivateRoute path="/browse" component={Browse}/>
          
          <Route path="/moreInfo" component={MoreInfo}/>
       
          <Route path="/signUp" component={SignUp}/>

          <Route path="/login" component={LoginForm}/>

          <Route path="/update" component={UpdateButton}/>
        </Switch>
    
    </div>
    </Router>
  );
}

export default App;