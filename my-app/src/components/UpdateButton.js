
import React, {useState} from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';
import "../App.css";
import {useParams, useHistory} from 'react-router-dom'

const projectSettings = {
    user_id: 1,
    title: '',
    description: '',
    goal_amount: '',
    amount_received: '',
    img_url: '',
    funding_completed: false,
   
}

const UpdateButton = (props) => {
    const [updateProject, setUpdateProject] = useState(projectSettings);

    const {id} = useParams()
    const {userID} = useParams()
    const history = useHistory()
    
  
      const handleSubmit = (event) => {
        event.preventDefault();
        axiosWithAuth()
            .put(`https://vr-lambdaschool.herokuapp.com/${props.userInfo.id}/projects/${id}`, updateProject)
            .then(res => {
                setUpdateProject(res.data);
                history.push("/:userId/browse2")
                console.log(res.data);
            })
            .catch(err => {
                console.log(err.message);
            });
    }
  
  
    const handleChange = (event) => {
        setUpdateProject
        ({ ...updateProject,
         [event.target.name]: event.target.value });
      };

      

        return (
            
            <form onSubmit={handleSubmit} className="formUpdate">
              <ul>
              <li>
                  <label htmlFor="Name">Title:</label>
                  <input className="title-input"
                    id="title"
                    type="text"
                    name="title"
                    placeholder="Please Enter a New Project Title"
                    value={updateProject.title}
                    onChange={handleChange}
                  />
                  </li>
                  </ul>
                  <ul>
                  <li>
                    <label htmlFor="Name">Description:</label>
                  <input className="description-input"
                    id="description"
                    type="text"
                    name="description"
                    placeholder="Please Enter a New Project Description:"
                    value={updateProject.description}
                    onChange={handleChange}
                  />
                  </li>
                  </ul>
                  <ul>
                  <li>
                    <label htmlFor="Name">Goal Amount:</label>
                  <input className="goal-input"
                    id="goal_amount"
                    type="text"
                    name="goal_amount"
                    placeholder="Please Enter The New Goal Amount:"
                    value={updateProject.goal_amount}
                    onChange={handleChange}
                  />
                  </li>
                  </ul>
                  <ul>
                  <li>
                    <label htmlFor="Name">Amount Received:</label>
                  <input className="amount-input"
                    id="amount_received"
                    type="text"
                    name="amount_received"
                    placeholder="Please Enter the New Amount Received:"
                    value={updateProject.amount_received}
                    onChange={handleChange}
                  />
                  </li>
                  </ul>          
                  <ul>
                  <li>
                    <label htmlFor="Name">Image:</label>
                  <input className="amount-input"
                    id="img_url"
                    type="text"
                    name="img_url"
                    placeholder="Please Enter the IMG:"
                    value={updateProject.img_url}
                    onChange={handleChange}
                  />
                  </li>
                  </ul>       





                  <button className='submit-button'
                  type="submit">Update!</button>
         
         </form> 
        
            
          );
}
  
        export default UpdateButton
      
   


