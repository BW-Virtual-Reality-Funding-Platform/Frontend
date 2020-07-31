import React, { useState, useEffect } from "react";
import { InputGroup, FormControl, Form, Button } from "react-bootstrap";
import {axiosWithAuth} from '../utils/axiosWithAuth';
import * as yup from "yup";
import "./NewProjectForm.css";
import Image from "react-bootstrap/Image";
import Project from "./Project.jpg";
import {useParams} from 'react-router-dom'
import { useHistory } from "react-router-dom";


const formSchema = yup.object().shape({
  img_url: yup.string(),
  title: yup.string().required("Project name is a required field."),
  description: yup.string(),
  goal_amount: yup.string(),
  amount_received: yup.string(),
  funding_completed: yup.boolean(),
});

export default function NewProjectForm(props) {
//   const [buttonDisabled, setButtonDisabled] = useState(true);

  const [formState, setFormState] = useState({
    user_id: props.userInfo.id,
    title: '',
    description: '',
    goal_amount: '',
    amount_received: '',
    img_url: '',
    funding_completed: false,
   
});

  const [errors, setErrors] = useState({
    
      user_id: props.userInfo.id,
      title: '',
      description: '',
      goal_amount: '',
      amount_received: '',
      img_url: '',
      funding_completed: false,
     
  });

  const [post, setPost] = useState([]);



  const history = useHistory()
  const {userId} = useParams()
  const {id} = useParams()

  const formSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
    
      .post(`https://vr-lambdaschool.herokuapp.com/${props.userInfo.id}/projects`, formState)
      .then((res) => {
        setPost(res.data);
        console.log(res.data)
        console.log("success", post);
        history.push("/:userId/browse2")

        setFormState({
    
      user_id: props.userInfo.id,
      title: '',
      description: '',
      goal_amount: '',
      amount_received: '',
      img_url: '',
      funding_completed: false,
     
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
            name="img_url"
            value={formState.img_url}
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
            name="title"
            value={formState.title}
            onChange={inputChange}
          />
          {errors.title.length > 0 ? (
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
            name="description"
            value={formState.description}
            onChange={inputChange}
          />
          {errors.description.length > 0 ? (
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
            name="goal_amount"
            value={formState.goal_amount}
            onChange={inputChange}
          />
          {errors.goal_amount.length > 0 ? (
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
            name="amount_received"
            value={formState.amount_received}
            onChange={inputChange}
          />
          {errors.amount_received.length > 0 ? (
            <p className="error">{errors.name}</p>
          ) : null}
          <InputGroup.Append>
            {/* <InputGroup.Text>.00</InputGroup.Text> */}
          </InputGroup.Append>
        </InputGroup>

        <br></br>

        <Button variant="primary" type="submit"  >
          Submit
        </Button>
      </Form>
    </div>
  );
}
