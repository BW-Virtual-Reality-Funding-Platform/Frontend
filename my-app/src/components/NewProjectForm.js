import React, { useState, useEffect } from "react";
import { InputGroup, FormControl, Form, Button } from "react-bootstrap";
import axios from "axios";
import * as yup from "yup";
import "./NewProjectForm.css";
import Image from "react-bootstrap/Image";
import Project from "./Project.jpg";

const formSchema = yup.object().shape({
  projectImg: yup.string(),
  projectTitle: yup.string().required("Project name is a required field."),
  projectDescription: yup.string(),
  goalAmount: yup.string(),
  amountReceived: yup.string(),
  fundingCompleted: yup.boolean(),
});

export default function NewProjectForm() {
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const [formState, setFormState] = useState({
    projectImage: "",
    projectTitle: "",
    projectDescription: "",
    goalAmount: "",
    amountReceived: "",
    fundingCompleted: "",
  });

  const [errors, setErrors] = useState({
    projectImage: "",
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
    axios
      .post("https://vr-lambdaschool.herokuapp.com/:userId/projects")
      .then((res) => {
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
      <Image className="project-img" src={Project}></Image>
      <h6>
        <span>
          Photo by{" "}
          <a href="https://unsplash.com/@markuswinkler?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
            Markus Winkler
          </a>{" "}
          on{" "}
          <a href="https://unsplash.com/s/photos/project?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
            Unsplash
          </a>
        </span>
      </h6>
      <Form className="project-form" onSubmit={formSubmit}>
        <h1>Create New Project</h1>
        <label>Enter Username</label>
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
  <InputGroup.Text id="basic-addon1">Image</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            placeholder="Paste Image URL"
            aria-label="Username"
            aria-describedby="basic-addon1"
            type="text"
            name="projectImage"
            value={formState.projectImage}
            onChange={inputChange}
          />
        </InputGroup>

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
            {/* <InputGroup.Text>.00</InputGroup.Text> */}
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
            {/* <InputGroup.Text>.00</InputGroup.Text> */}
          </InputGroup.Append>
        </InputGroup>

        <br></br>

        <Button variant="primary" type="submit" disabled={buttonDisabled}>
          Submit
        </Button>
      </Form>
    </div>
  );
}
