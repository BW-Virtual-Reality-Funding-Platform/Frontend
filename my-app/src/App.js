import React from "react";
import "./App.css";
import SignUp from "./components/Signup";
import Navbar from "./components/Navbar";
import Browse2 from "./components/Browse2";
import Features from "./components/Features";
import MoreInfo from "./components/Moreinfo";
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import NewProjectForm from "./components/NewProjectForm";
import LoginForm from "./components/LoginForm";
import UpdateButton from "./components/UpdateButton";
import ManageUser from "./components/ManageUser"
import UpdateUser from "./components/UpdateUser"

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        {/* <NewProjectForm />
      <LoginForm/> */}
        <Router>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/features" component={Features}>
            <Features />
          </Route>
          <Route path="/:userID/browse2" component={Browse2}>
            <Browse2 />
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
          <Route path="/:userID/updateproject/:id" component={UpdateButton}>
          <UpdateButton/>
          </Route>
          <Route path="/manageuser" component={ManageUser}>
            <ManageUser/>
          </Route>
          <Route path="/updateuser" component={UpdateUser}>
            <UpdateUser/>
           </Route>
          </Switch>
         </Router>
    </div>
    </Router>
  );
}

export default App;
