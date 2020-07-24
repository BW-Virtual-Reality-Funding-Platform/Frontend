import React, { useState, useEffect } from "react";
import * as ReactBootstrap from "react-bootstrap";
import { InputGroup, FormControl, Form, Button } from "react-bootstrap";
import axios from "axios";
import "./NewProjectForm.css";

export default function NewProjectForm() {
  const [formState, setFormState] = useState({
    projectTitle: "",
    projectDescription: "",
    goalAmount: "",
    amountReceived: "",
    fundingCompleted: "",
  });
  return (
    <div>
      <ReactBootstrap.Form>
        <Form className="project-form">
          <h1>Create New Project</h1>
          {/* <label>Enter Username</label>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </InputGroup> */}

          <label>Project Title</label>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Project Title"
              aria-label="Project Title"
              aria-describedby="basic-addon2"
              type="text"
              name="Project Title"
              value={formState.projectTitle}
            />
            <InputGroup.Append>
              <InputGroup.Text id="basic-addon2">PT</InputGroup.Text>
            </InputGroup.Append>
          </InputGroup>

          <label>Project Description</label>
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text>PD</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              as="textarea"
              aria-label="With textarea"
              type="text"
              name="Project Description"
              value={formState.projectDescription}
            />
          </InputGroup>

          <label>Goal Amount</label>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text>$</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              aria-label="Amount (to the nearest dollar)"
              type="text"
              name="Goal Amount"
              value={formState.goalAmount}
            />
            <InputGroup.Append>
              <InputGroup.Text>.00</InputGroup.Text>
            </InputGroup.Append>
          </InputGroup>

          <label>Amount Received</label>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text>$</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              aria-label="Amount (to the nearest dollar)"
              type="text"
              name="Amount Received"
              value={formState.amountReceived}
            />
            <InputGroup.Append>
              <InputGroup.Text>.00</InputGroup.Text>
            </InputGroup.Append>
          </InputGroup>

          <br></br>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </ReactBootstrap.Form>
    </div>
  );
}
