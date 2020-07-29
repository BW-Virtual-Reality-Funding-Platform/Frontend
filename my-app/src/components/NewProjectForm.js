import React, { useState, useEffect } from "react";
import { InputGroup, FormControl, Form, Button } from "react-bootstrap";
import axios from "axios";
import * as yup from "yup";
import "./NewProjectForm.css";

const formSchema = yup.object().shape({
  projectTitle: yup.string().required("Name is a required field."),
  projectDescription: yup.string(),
  goalAmount: yup.string(),
  amountReceived: yup.string(),
  fundingCompleted: yup.string(),
});

export default function NewProjectForm() {
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const [formState, setFormState] = useState({
    projectTitle: "",
    projectDescription: "",
    goalAmount: "",
    amountReceived: "",
    fundingCompleted: "",
  });

  const [errors, setErrors] = useState({
    projectTitle: "",
    projectDescription: "",
    goalAmount: "",
    amountReceived: "",
    fundingCompleted: "",
  });

  const [post, setPost] = useState([]);

  useEffect(() => {
    formSchema.isValid(formState).then((valid) => {
      setButtonDisabled(!valid);
    });
  }, [formState]);

  const formSubmit = (e) => {
    e.preventDefault();
    axios.post().then((res) => {
      setPost(res.data);
      console.log("success", post);
      setFormState({
        projectTitle: "",
        projectDescription: "",
        goalAmount: "",
        amountReceived: "",
        fundingCompleted: "",
      });
    });
  };

  const validateChange = (e) => {
    yup
      .reach(formSchema, e.target.name)
      .validate(e.target.value)
      .then((valid) => {
        setErrors({
          ...errors,
          [e.target.name]: "",
        });
      })
      .catch((err) => {
        setErrors({
          ...errors,
          [e.target.name]: err.errors[0],
        });
      });
  };

  const inputChange = (e) => {
    e.persist();
    const newFormData = {
      ...formState,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    };

    validateChange(e);
    setFormState(newFormData);
  };

  return (
    <div>
      <Form className="project-form" onSubmit={formSubmit}>
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
            name="projectTitle"
            value={formState.projectTitle}
            onChange={inputChange}
          />
          {errors.projectTitle.length > 0 ? (
            <p className="error">{errors.name}</p>
          ) : null}
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
            name="projectDescription"
            value={formState.projectDescription}
            onChange={inputChange}
          />
          {errors.projectDescription.length > 0 ? (
            <p className="error">{errors.name}</p>
          ) : null}
        </InputGroup>

        <label>Goal Amount</label>
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text>$</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            aria-label="Amount (to the nearest dollar)"
            type="text"
            name="goalAmount"
            value={formState.goalAmount}
            onChange={inputChange}
          />
          {errors.goalAmount.length > 0 ? (
            <p className="error">{errors.name}</p>
          ) : null}
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
            name="amountReceived"
            value={formState.amountReceived}
            onChange={inputChange}
          />
          {errors.amountReceived.length > 0 ? (
            <p className="error">{errors.name}</p>
          ) : null}
          <InputGroup.Append>
            <InputGroup.Text>.00</InputGroup.Text>
          </InputGroup.Append>
        </InputGroup>

        <br></br>
        <pre>{JSON.stringify(post, null, 2)}</pre>
        <Button variant="primary" type="submit" disabled={buttonDisabled}>
          Submit
        </Button>
      </Form>
    </div>
  );
}