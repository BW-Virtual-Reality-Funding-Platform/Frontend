import React from "react";
import "../App.css";
import * as ReactBootstrap from "react-bootstrap";
import { BrowserRouter as Router, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="App">
      <ReactBootstrap.Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <ReactBootstrap.Navbar.Brand href="/home">
          VR Funding Platform
        </ReactBootstrap.Navbar.Brand>
        <ReactBootstrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <ReactBootstrap.Navbar.Collapse id="responsive-navbar-nav">
          <ReactBootstrap.Nav className="mr-auto">
            <ReactBootstrap.Nav.Link href="/features">
              Features
            </ReactBootstrap.Nav.Link>
            <ReactBootstrap.Nav.Link href="/browse">
              Browse
            </ReactBootstrap.Nav.Link>
            <ReactBootstrap.NavDropdown
              title="More Info"
              id="collasible-nav-dropdown"
            >
              <ReactBootstrap.NavDropdown.Item href="#action/3.1">
                Create New Project
              </ReactBootstrap.NavDropdown.Item>
              <ReactBootstrap.NavDropdown.Item href="#action/3.2">
                Add Funds
              </ReactBootstrap.NavDropdown.Item>
              <ReactBootstrap.NavDropdown.Item href="#action/3.3">
                Manage Existing Project
              </ReactBootstrap.NavDropdown.Item>
              <ReactBootstrap.NavDropdown.Divider />
              <ReactBootstrap.NavDropdown.Item href="#action/3.4">
                Account Management
              </ReactBootstrap.NavDropdown.Item>
            </ReactBootstrap.NavDropdown>
          </ReactBootstrap.Nav>
          <ReactBootstrap.Nav>
            <ReactBootstrap.Nav.Link href="/signup">
              Sign up
            </ReactBootstrap.Nav.Link>
            <ReactBootstrap.Nav.Link eventKey={2} href="/login">
              Log-in
            </ReactBootstrap.Nav.Link>
          </ReactBootstrap.Nav>
        </ReactBootstrap.Navbar.Collapse>
      </ReactBootstrap.Navbar>
    </div>
  );
};

export default NavBar;


