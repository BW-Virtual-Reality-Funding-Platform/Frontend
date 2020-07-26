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

function App() {
  return (
    <div className="App">
      <Navbar />
      <NewProjectForm />
      <LoginForm/>
      <Router>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/Features" component={Features}>
            <Features />
          </Route>
          <Route path="/Browse" component={Browse}>
            <Browse />
          </Route>
          <Route path="/MoreInfo" component={MoreInfo}>
            <MoreInfo />
          </Route>
          <Route path="/SignUp" component={SignUp}>
            <SignUp />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;