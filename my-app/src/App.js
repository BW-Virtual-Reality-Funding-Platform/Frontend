import React from "react";
import "./App.css";
import * as ReactBootstrap from "react-bootstrap";
import SignUp from "./components/Signup";
import Navbar from "./components/Navbar";
import Browse from "./components/Browse";
import Features from "./components/Features";
import MoreInfo from "./components/Moreinfo";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NewProjectForm from "./components/NewProjectForm";
import LoginForm from "./components/LoginForm";
import UpdateButton from "./components/UpdateButton"

function App() {
  return (
    <div className="App">
      {/* <Navbar />
      <NewProjectForm />
      <LoginForm/> */}
      <Router>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/features" component={Features}>
            <Features />
          </Route>
          <Route path="/browse" component={Browse}>
            <Browse />
          </Route>
          <Route path="/moreinfo" component={MoreInfo}>
            <MoreInfo />
          </Route>
          <Route path="/signup" component={SignUp}>
            <SignUp />
          </Route>
          <Route path="/login" component={LoginForm}>
            <LoginForm/>
          </Route>
          <Route path="/update" component={UpdateButton}>
          <UpdateButton/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;